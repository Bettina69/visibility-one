"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { INTEREST_OPTIONS } from "@/lib/contact-options";
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

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);

  const update = (key: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

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
            <form onSubmit={(e) => e.preventDefault()} noValidate>
              <div className="field">
                <div className="row">
                  <div>
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Vorname Nachname"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">E-Mail *</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="dein@shop.de"
                      autoComplete="email"
                    />
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
                ></textarea>
              </div>
              <div className="method-benefit" style={{ marginTop: 4, marginBottom: 20 }}>
                <p>
                  Das Kontaktformular wird gerade technisch umgestellt. Du
                  erreichst mich direkt unter{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    style={{ textDecoration: "underline" }}
                  >
                    {siteConfig.email}
                  </a>
                  .
                </p>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                disabled
                aria-disabled="true"
              >
                Formular aktuell nicht verfügbar
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
          </div>
        </div>
      </div>
    </Reveal>
  );
}
