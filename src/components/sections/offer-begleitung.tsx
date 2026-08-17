import Link from "next/link";
import { Reveal } from "./reveal";

const FAQ = [
  {
    q: "Muss ich vorher eine Analyse buchen?",
    a: "Nein, das ist keine Voraussetzung. Sinnvoll ist Monitoring vor allem nach einer Analyse oder Optimierung, wenn es etwas gibt, dessen Entwicklung sich zu beobachten lohnt.",
  },
  {
    q: "Welche Kennzahlen werden beobachtet?",
    a: "Google-Kennzahlen wie Klicks, Impressionen und Rankings sowie KI-Sichtbarkeit wie Prompt-Sichtbarkeit, Brand Mentions, Citations, Recommendations und Share of Voice.",
  },
  {
    q: "Werden auch Wettbewerber berücksichtigt?",
    a: "Ja. Ich beobachte, ob Wettbewerber bei wichtigen Themen, Citations oder Empfehlungen stärker werden, um Verschiebungen früh zu erkennen.",
  },
  {
    q: "Was sind Brand Mentions, Citations, Recommendations und Sentiment?",
    a: "Brand Mentions zeigen, ob deine Marke erwähnt wird. Citations zeigen, welche Quellen KI-Systeme bei relevanten Antworten heranziehen. Recommendations zeigen, ob du bei konkreten Entscheidungsfragen empfohlen wirst. Sentiment zeigt, ob dabei eher positiv, neutral oder kritisch über dich gesprochen wird.",
  },
  {
    q: "Sind Optimierungen im Monatspreis enthalten?",
    a: "Das Paket ist Monitoring und strategische Einordnung. Größere operative Umsetzungen sind nicht automatisch enthalten und werden bei Bedarf separat abgestimmt.",
  },
  {
    q: "Kann ich das Monitoring wieder beenden?",
    a: "Ja. Es gibt kein festes langfristiges Vertragsmodell – du kannst das Monitoring beenden, wenn es für dich keinen Sinn mehr macht.",
  },
];

export function OfferBegleitung() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Begleiten</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            Wissen, was sich verändert – und was du als Nächstes tun solltest.
          </h1>
          <p className="hero-keymessage">
            SEO und KI-Sichtbarkeit sind kein einmaliges Projekt. Nach der Optimierung
            beobachten wir, was tatsächlich passiert.
          </p>
          <div className="detail-hero-price">
            <Link href="/kontakt" className="btn btn-primary">
              Monitoring anfragen →
            </Link>
            <span className="detail-price">349 € / Monat</span>
          </div>
        </div>
      </section>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Du brauchst keine weitere Tabelle.</h2>
            <p className="lead">
              Zahlen allein helfen wenig. Entscheidend ist, was sie bedeuten und was
              daraus als nächster Schritt folgt.
            </p>
          </div>
          <p className="check-text">Jeden Monat beantworte ich:</p>
          <ul className="detail-list">
            <li>Was hat sich verändert?</li>
            <li>Warum ist das relevant?</li>
            <li>Wo gewinnen Wettbewerber?</li>
            <li>Wo entstehen neue Chancen?</li>
            <li>Was solltest du als Nächstes tun?</li>
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Was passiert bei Google?</h2>
          </div>
          <p className="check-text">Beobachtet werden u. a.:</p>
          <ul className="detail-list">
            <li>Klicks</li>
            <li>Impressionen</li>
            <li>Rankings</li>
            <li>wichtige URLs</li>
            <li>neue technische Auffälligkeiten</li>
            <li>Sichtbarkeitsentwicklung</li>
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <h2>Was passiert in der KI-Suche?</h2>
          </div>
          <div className="analysis-grid">
            <div className="check-item">
              <h3>Beobachtet</h3>
              <ul>
                <li>Prompt-Sichtbarkeit</li>
                <li>Share of Voice</li>
                <li>Brand Mentions</li>
                <li>Citations</li>
                <li>Recommendations</li>
                <li>Sentiment-Entwicklung</li>
                <li>Themenentwicklung</li>
                <li>Wettbewerbsentwicklung</li>
              </ul>
            </div>
            <div className="check-item">
              <h3>Kurz erklärt</h3>
              <p className="term" style={{ marginTop: 6 }}>
                <strong>Brand Mentions:</strong> Wird deine Marke erwähnt?
              </p>
              <p className="term">
                <strong>Citations:</strong> Welche Quellen werden in relevanten
                Antworten herangezogen?
              </p>
              <p className="term">
                <strong>Recommendations:</strong> Wirst du bei konkreten
                Entscheidungsfragen empfohlen?
              </p>
              <p className="term">
                <strong>Sentiment:</strong> Wird über deine Marke eher positiv, neutral
                oder kritisch gesprochen?
              </p>
              <p className="term">
                <strong>Share of Voice:</strong> Wie groß ist deine Sichtbarkeit im
                Vergleich zu Wettbewerbern?
              </p>
            </div>
          </div>
          <p className="check-note">
            Nicht nur beobachten, ob deine Marke genannt wird, sondern auch, ob sich die
            Darstellung positiv, neutral oder kritisch entwickelt.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Nicht nur deine Zahlen zählen.</h2>
          </div>
          <p className="check-text">
            Ich beobachte auch, ob Wettbewerber bei wichtigen Themen, Citations oder
            Empfehlungen stärker werden.
          </p>
          <p className="check-text" style={{ marginTop: 10 }}>
            Ziel: früh erkennen, wo sich Sichtbarkeit verschiebt.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <p className="check-text">Was du jeden Monat bekommst:</p>
          <ul className="detail-list">
            <li>Monitoring der wichtigsten SEO-Kennzahlen</li>
            <li>Beobachtung relevanter KI-Prompts</li>
            <li>Veränderungen bei Mentions, Citations, Recommendations und Sentiment</li>
            <li>auffällige Entwicklungen bei Wettbewerbern</li>
            <li>kurze monatliche Zusammenfassung</li>
            <li>Top-Entwicklungen</li>
            <li>priorisierte nächste Schritte</li>
            <li>optional kurze Abstimmung</li>
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <p className="check-text">Geeignet:</p>
          <ul className="detail-list">
            <li>nach einer Analyse oder Optimierung</li>
            <li>für Online-Shops und KMU ohne eigenes SEO-Team</li>
            <li>wenn intern niemand regelmäßig SEO-/KI-Daten einordnet</li>
            <li>wenn Maßnahmen nicht einfach „laufen gelassen“ werden sollen</li>
            <li>wenn Wettbewerbsentwicklungen relevant sind</li>
          </ul>
          <p className="check-text" style={{ marginTop: 20 }}>
            Das Paket ist Monitoring und strategische Einordnung. Größere operative
            Umsetzungen sind nicht automatisch enthalten und werden bei Bedarf separat
            abgestimmt.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Du möchtest Optimierung und Monitoring direkt kombinieren?</h2>
          </div>
          <div className="offer-path" style={{ maxWidth: 420 }}>
            <span className="offer-path-label">All-in-One</span>
            <div className="offer-path-price">2.990 €</div>
            <ul>
              <li>komplette Optimierung</li>
              <li>3 Monate Monitoring</li>
              <li>Nachsteuerung</li>
              <li>Abschlussreview</li>
            </ul>
            <Link href="/angebote" className="offer-path-cta">
              All-in-One ansehen →
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Du möchtest wissen, ob deine Maßnahmen wirken?</h2>
            <p className="lead">
              Dann lass uns deine wichtigsten SEO- und KI-Signale laufend beobachten
              und gemeinsam einordnen.
            </p>
          </div>
          <div className="detail-cta-row">
            <Link href="/kontakt" className="btn btn-primary">
              Monitoring &amp; Beratung anfragen →
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Häufige Fragen</span>
            <h2>Fragen zur Begleitung</h2>
          </div>
          <div className="faq-col" style={{ marginTop: 24 }}>
            {FAQ.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
