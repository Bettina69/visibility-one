"use client";

import { useState } from "react";
import { Reveal } from "./reveal";

type FormState = {
  name: string;
  email: string;
  company: string;
  domain: string;
  question: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  company: "",
  domain: "",
  question: "",
};

export function CheckForm() {
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
    if (!form.domain.trim()) errs.domain = "Bitte Website/Domain angeben";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
    }
  };

  return (
    <Reveal className="section" id="check-form">
      <div className="wrap-narrow">
        <div className="check-head">
          <span className="eyebrow">Los geht&apos;s</span>
          <h2>Lass uns deine Sichtbarkeit prüfen.</h2>
          <p className="lead">
            Schick mir deine Website. Ich schaue mir an, wie du aktuell bei Google und
            in der KI-Suche aufgestellt bist.
          </p>
        </div>
        <div className="contact-form">
          {sent ? (
            <div className="success-state">
              <div className="check">✓</div>
              <h3>Danke, {form.name.split(" ")[0]}.</h3>
              <p style={{ marginTop: 12, color: "var(--muted)" }}>
                Ich schaue mir deine Website an und melde mich innerhalb von 24 Stunden
                mit deiner Einschätzung.
              </p>
              <button
                className="btn btn-ghost"
                style={{ marginTop: 24 }}
                onClick={() => {
                  setSent(false);
                  setForm(INITIAL_STATE);
                }}
              >
                Neue Anfrage
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
                    <label htmlFor="domain">Website / Domain *</label>
                    <input
                      id="domain"
                      value={form.domain}
                      onChange={(e) => update("domain", e.target.value)}
                      placeholder="https://deine-website.de"
                      required
                      aria-invalid={errors.domain ? "true" : undefined}
                      aria-describedby={errors.domain ? "domain-error" : undefined}
                    />
                    {errors.domain && (
                      <div className="field-error" id="domain-error">
                        {errors.domain}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="field">
                <label htmlFor="question">Was möchtest du besonders wissen?</label>
                <textarea
                  id="question"
                  value={form.question}
                  onChange={(e) => update("question", e.target.value)}
                  placeholder="Zum Beispiel: Mein Traffic sinkt / Ich werde bei ChatGPT nicht genannt / Ich weiß nicht, wie sichtbar meine Website ist."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                SEO &amp; KI-Sichtbarkeit prüfen lassen →
              </button>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  marginTop: 14,
                  textAlign: "center",
                }}
              >
                Kostenlos und unverbindlich. Deine Angaben verwende ich ausschließlich
                für den Sichtbarkeitscheck und die Rückmeldung dazu.
              </p>
            </form>
          )}
        </div>
      </div>
    </Reveal>
  );
}
