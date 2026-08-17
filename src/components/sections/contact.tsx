"use client";

import { useState } from "react";
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
  interest: "Quick-Check",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) errs.name = "Bitte Namen angeben";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Bitte gültige E-Mail";
    if (!form.message.trim() || form.message.length < 10)
      errs.message = "Kurze Nachricht (min. 10 Zeichen)";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
    }
  };

  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Kontakt</span>
          <h2>
            Reden wir <em>15 Minuten?</em>
          </h2>
        </div>
        <div className="contact-grid">
          <div>
            <p style={{ fontSize: 18, marginBottom: 32 }}>
              Schreib mir, wo du gerade stehst. Ich melde mich innerhalb von 24 Stunden
              mit einem konkreten nächsten Schritt.
            </p>
            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 15 }}>
                <div>
                  <strong>E-Mail</strong> · {siteConfig.email}
                </div>
                <div>
                  <strong>Antwort</strong> · innerhalb 24 Std., Mo–Fr
                </div>
                <div>
                  <strong>Standort</strong> · Deutschland · Remote
                </div>
              </div>
            </div>
            <div className="bafa-strip" style={{ marginTop: 32 }}>
              <span className="badge">BAFA</span>
              <span style={{ fontSize: 13 }}>Förderfähig – ich kläre das für dich.</span>
            </div>
          </div>
          <div className="contact-form">
            {sent ? (
              <div className="success-state">
                <div className="check">✓</div>
                <h3>Danke, {form.name.split(" ")[0]}.</h3>
                <p style={{ marginTop: 12, color: "var(--muted)" }}>
                  Ich melde mich innerhalb von 24 Stunden bei dir – meist viel schneller.
                </p>
                <button
                  className="btn btn-ghost"
                  style={{ marginTop: 24 }}
                  onClick={() => {
                    setSent(false);
                    setForm(INITIAL_STATE);
                  }}
                >
                  Neue Nachricht
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
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
                      <label htmlFor="url">Shop-URL</label>
                      <input
                        id="url"
                        value={form.url}
                        onChange={(e) => update("url", e.target.value)}
                        placeholder="https://"
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="interest">Was interessiert dich?</label>
                  <select
                    id="interest"
                    value={form.interest}
                    onChange={(e) => update("interest", e.target.value)}
                  >
                    <option>Quick-Check</option>
                    <option>GEO-Strategie-Workshop</option>
                    <option>GEO-Begleitung</option>
                    <option>Erstmal nur reden</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Worum geht&apos;s? *</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Was passiert gerade mit deinem Traffic? Was hast du schon versucht?"
                    required
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
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    marginTop: 14,
                    textAlign: "center",
                  }}
                >
                  Mit dem Senden stimmst du der Datenverarbeitung gemäß
                  Datenschutzerklärung zu.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
