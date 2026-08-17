import type { CSSProperties } from "react";
import Link from "next/link";
import { Reveal } from "./reveal";

const CHECK_HIGHLIGHTS = [
  { num: "Google", lbl: "Sichtbarkeit" },
  { num: "KI", lbl: "Sichtbarkeit" },
  { num: "Citations", lbl: "erste Signale" },
  { num: "Persönlich", lbl: "eingeordnet" },
];

const IMAGE_LABELS = ["AI", "AI modified", "AI generated"];

export function ToolsPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Kostenlose Tools</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            Praktische Tools für Sichtbarkeit und KI im Alltag.
          </h1>
          <p className="hero-sub">
            Manchmal braucht es keine lange Beratung, sondern erst einmal eine
            schnelle Antwort auf eine konkrete Frage.
          </p>
          <p className="hero-sub">
            Hier findest du kostenlose Tools, die aus meiner eigenen
            E-Commerce- und Beratungsarbeit entstanden sind.
          </p>
          <p className="check-trust">Einfach nutzen. Ohne Verpflichtung.</p>
        </div>
      </section>

      <Reveal className="section final-cta">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">01 · Sichtbarkeit</span>
            <h2>SEO &amp; KI-Sichtbarkeit kostenlos prüfen.</h2>
          </div>
          <p className="check-text">
            Du möchtest wissen, wie sichtbar dein Unternehmen aktuell ist?
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Ich werfe einen ersten Blick auf deine Website und prüfe, wie sie
            bei Google und in KI-Systemen wie ChatGPT, Google AI oder
            Perplexity aufgestellt ist.
          </p>
          <p className="check-text" style={{ marginTop: 20 }}>
            Du bekommst einen ersten Überblick zu:
          </p>
          <ul className="detail-list">
            <li>Google-Sichtbarkeit</li>
            <li>relevanten Rankings</li>
            <li>KI-Sichtbarkeit</li>
            <li>ersten Auffälligkeiten bei Citations bzw. KI-Erwähnungen</li>
            <li>2–3 persönlichen Beobachtungen</li>
          </ul>
          <p className="check-note" style={{ marginTop: 16, maxWidth: "62ch" }}>
            Der kostenlose Check zeigt erste Auffälligkeiten. Eine vollständige
            Ursachen-, Wettbewerbs-, Mention-, Citation-, Recommendation- und
            Sentiment-Analyse ist nicht enthalten.
          </p>
          <div className="result-stats" style={{ "--result-cols": 4 } as CSSProperties}>
            {CHECK_HIGHLIGHTS.map((s) => (
              <div key={s.num} className="result-stat">
                <span className="result-stat-num">{s.num}</span>
                <div className="result-stat-label">{s.lbl}</div>
              </div>
            ))}
          </div>
          <div className="detail-cta-row">
            <Link href="/sichtbarkeitscheck" className="btn btn-primary">
              SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
            </Link>
          </div>
          <p className="check-trust">
            unverbindlich · persönlich geprüft · 2–3 konkrete Hinweise
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">02 · Bild-KI</span>
            <h2>KI-Bilder transparent kennzeichnen.</h2>
          </div>
          <p className="check-text">
            Du nutzt KI-generierte oder KI-bearbeitete Bilder in deinem Shop
            oder Marketing?
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Mit dem AI Image Marker kannst du JPG- und PNG-Bilder hochladen
            und direkt sichtbar kennzeichnen.
          </p>
          <p className="check-text" style={{ marginTop: 20 }}>Kennzeichnung möglich als:</p>
          <div className="tool-label-chips">
            {IMAGE_LABELS.map((label) => (
              <span key={label} className="tool-label-chip">
                {label}
              </span>
            ))}
          </div>
          <p className="check-text" style={{ marginTop: 20 }}>Nutzer können:</p>
          <ul className="detail-list">
            <li>Position wählen</li>
            <li>Größe anpassen</li>
            <li>Transparenz einstellen</li>
          </ul>
          <div className="detail-cta-row">
            <a
              href="https://ai.visibility-one.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              AI Image Marker öffnen → <span className="sr-only">(öffnet in neuem Tab)</span>
            </a>
          </div>
          <p className="check-trust">
            Kostenlos nutzbar · Bilder werden spätestens nach 60 Minuten
            gelöscht · keine Rechtsberatung
          </p>
          <Link href="/ki-bilder-kennzeichnen" className="btn-link detail-secondary-link">
            Wann und wie KI-Bilder kennzeichnen? →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Aus der Praxis</span>
            <h2>Tools, die aus echten Fragestellungen entstanden sind.</h2>
          </div>
          <p className="check-text">
            Beide Tools haben ihren Ursprung nicht in einer Produktidee,
            sondern in konkreten Fragen aus meiner eigenen Arbeit.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Beim Sichtbarkeitscheck geht es darum, Unternehmen schnell eine
            erste Orientierung bei SEO und KI-Sichtbarkeit zu geben.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Der AI Image Marker entstand aus meinem eigenen
            E-Commerce-Alltag, in dem ich KI unter anderem für Produkt- und
            Moodbilder nutze.
          </p>
          <p className="check-text" style={{ marginTop: 20 }}>
            Mein Anspruch ist dabei immer gleich: Technik soll verständlicher
            werden – und im Alltag tatsächlich helfen.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Wann ein Tool nicht reicht</span>
            <h2>Du möchtest nicht nur ein Ergebnis, sondern wissen, was es bedeutet?</h2>
          </div>
          <p className="check-text">
            Ein Tool kann dir zeigen, was sichtbar ist oder eine konkrete
            Aufgabe vereinfachen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Wenn du verstehen möchtest, warum deine Sichtbarkeit so aussieht,
            wie Wettbewerber aufgestellt sind oder welche Maßnahmen wirklich
            sinnvoll sind, braucht es eine vertiefte Analyse und persönliche
            Einordnung.
          </p>
          <div className="detail-cta-row">
            <Link href="/angebote/analyse" className="btn-link">
              SEO- &amp; KI-Sichtbarkeitsanalyse ansehen →
            </Link>
            <Link href="/angebote" className="btn-link">
              Angebote ansehen →
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
