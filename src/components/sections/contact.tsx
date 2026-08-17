"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./reveal";

type FormState = {
  name: string;
  email: string;
  company: string;
  url: string;
  message: string;
  interest: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  company: "",
  url: "",
  message: "",
  interest: "",
};

const INTEREST_OPTIONS = [
  "Kostenloser SEO- & KI-Sichtbarkeitscheck",
  "SEO-Analyse",
  "GEO-/KI-Sichtbarkeitsanalyse",
  "SEO- & GEO-Optimierung",
  "Laufende Begleitung",
  "Punktuelle Beratung",
  "Noch nicht sicher",
];

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const update = (key: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) errs.name = "Bitte gib deinen Namen an.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Bitte gib eine gültige E-Mail-Adresse an.";
    if (!form.message.trim() || form.message.length < 10)
      errs.message = "Magst du kurz etwas ausführlicher schreiben (mind. 10 Zeichen)?";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    try {
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Reveal className="section contact-section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Kontakt</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            Lass uns schauen, wo du stehst.
          </h1>
        </div>
        <div className="contact-grid">
          <div>
            <p style={{ fontSize: "var(--fs-m)", marginBottom: 32 }}>
              Du bist dir nicht sicher, was dein Unternehmen bei SEO oder
              KI-Sichtbarkeit gerade braucht? Schreib mir kurz, worum es geht.
              Ich schaue mir deine Anfrage persönlich an und melde mich mit
              einem sinnvollen nächsten Schritt.
            </p>
            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 24 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  fontSize: 15,
                }}
              >
                <div>
                  <strong>E-Mail</strong> ·{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    style={{ textDecoration: "underline" }}
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <strong>Antwort</strong> · in der Regel innerhalb von 24
                  Std., Mo–Fr
                </div>
                <div>
                  <strong>Zusammenarbeit</strong> · deutschlandweit · remote
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            {status === "sent" ? (
              <div className="success-state">
                <div className="check">✓</div>
                <h3>Danke{form.name.split(" ")[0] ? `, ${form.name.split(" ")[0]}` : ""}.</h3>
                <p style={{ marginTop: 12, color: "var(--muted)" }}>
                  Ich schaue mir deine Anfrage persönlich an und melde mich in
                  der Regel innerhalb von 24 Stunden, Mo–Fr.
                </p>
                <button
                  className="btn btn-ghost"
                  style={{ marginTop: 24 }}
                  onClick={() => {
                    setStatus("idle");
                    setForm(INITIAL_STATE);
                  }}
                >
                  Neue Nachricht
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                {status === "error" && (
                  <p className="field-error" style={{ marginBottom: 18 }}>
                    Das hat leider nicht funktioniert. Versuch es bitte noch
                    einmal oder schreib mir direkt an{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      style={{ textDecoration: "underline" }}
                    >
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                )}
                <div className="field">
                  <div className="row">
                    <div>
                      <label htmlFor="name">Name *</label>
                      <input
                        id="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Vorname Nachname"
                        required
                        aria-required="true"
                        autoComplete="name"
                        aria-invalid={errors.name ? "true" : undefined}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <div className="field-error" id="name-error">
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email">E-Mail *</label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="dein@shop.de"
                        required
                        aria-required="true"
                        autoComplete="email"
                        aria-invalid={errors.email ? "true" : undefined}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <div className="field-error" id="email-error">
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="row">
                    <div>
                      <label htmlFor="company">Unternehmen</label>
                      <input
                        id="company"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        placeholder="Mein Shop GmbH"
                        autoComplete="organization"
                      />
                    </div>
                    <div>
                      <label htmlFor="url">Website / Shop-URL</label>
                      <input
                        id="url"
                        type="url"
                        value={form.url}
                        onChange={(e) => update("url", e.target.value)}
                        placeholder="https://"
                        autoComplete="url"
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="interest">Wobei kann ich dich unterstützen?</label>
                  <select
                    id="interest"
                    value={form.interest}
                    onChange={(e) => update("interest", e.target.value)}
                  >
                    <option value="" disabled>
                      Bitte auswählen
                    </option>
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Erzähl mir kurz, worum es geht. *</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Was möchtest du verbessern? Gibt es ein konkretes Problem oder eine Entwicklung, die dir aufgefallen ist?"
                    required
                    aria-required="true"
                    aria-invalid={errors.message ? "true" : undefined}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  ></textarea>
                  {errors.message && (
                    <div className="field-error" id="message-error">
                      {errors.message}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Anfrage senden →
                </button>
                <p className="check-trust" style={{ textAlign: "center", marginTop: 14 }}>
                  unverbindlich · persönlich gelesen · keine automatische
                  Terminbuchung
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    marginTop: 10,
                    textAlign: "center",
                  }}
                >
                  Mit dem Senden stimmst du der Datenverarbeitung gemäß{" "}
                  <Link href="/datenschutz" style={{ textDecoration: "underline" }}>
                    Datenschutzerklärung
                  </Link>{" "}
                  zu.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
