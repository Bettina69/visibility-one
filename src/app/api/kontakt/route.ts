import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { INTEREST_OPTIONS } from "@/lib/contact-options";
import { isRateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 20_000;
const MAX_NAME = 200;
const MAX_EMAIL = 320;
const MAX_COMPANY = 200;
const MAX_URL = 500;
const MIN_MESSAGE = 10;
const MAX_MESSAGE = 5000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE = /^https?:\/\/.+/i;

const TO_EMAIL = process.env.RESEND_TO_EMAIL || "info@visibility-one.de";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Visibility One <kontakt@visibility-one.de>";

function oneLine(value: string, max: number) {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

function clientKey(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  const contentLength = Number(req.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "payload_too_large" }, { status: 413 });
  }

  const key = clientKey(req);
  if (isRateLimited(key)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v : "");

  // Honeypot: a real visitor never sees or fills this field. If it has a
  // value, silently pretend success without sending anything.
  if (str(data.hpWebsite).trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = str(data.name).trim();
  const email = str(data.email).trim();
  const company = str(data.company).trim();
  const url = str(data.url).trim();
  const interest = str(data.interest).trim();
  const message = str(data.message).trim();

  if (!name || name.length > MAX_NAME) {
    return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
  }
  if (!email || email.length > MAX_EMAIL || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }
  if (company.length > MAX_COMPANY) {
    return NextResponse.json({ ok: false, error: "invalid_company" }, { status: 400 });
  }
  if (url && (url.length > MAX_URL || !URL_RE.test(url))) {
    return NextResponse.json({ ok: false, error: "invalid_url" }, { status: 400 });
  }
  if (interest && !(INTEREST_OPTIONS as readonly string[]).includes(interest)) {
    return NextResponse.json({ ok: false, error: "invalid_interest" }, { status: 400 });
  }
  if (!message || message.length < MIN_MESSAGE || message.length > MAX_MESSAGE) {
    return NextResponse.json({ ok: false, error: "invalid_message" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const safeName = oneLine(name, MAX_NAME);

  const text = [
    "Neue Anfrage über Visibility One",
    "",
    "Name:",
    name,
    "",
    "E-Mail:",
    email,
    "",
    "Unternehmen:",
    company || "nicht angegeben",
    "",
    "Website / Shop:",
    url || "nicht angegeben",
    "",
    "Interesse:",
    interest || "nicht angegeben",
    "",
    "Nachricht:",
    message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Neue Anfrage über visibility-one.de – ${safeName}`,
      text,
    });

    if (error) {
      console.error("Resend send failed:", error.name, error.message);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send threw:", err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
