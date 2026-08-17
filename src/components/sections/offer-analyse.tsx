import Link from "next/link";
import { Reveal } from "./reveal";

const FAQ = [
  {
    q: "Brauche ich die Analyse, wenn ich bereits SEO-Daten habe?",
    a: "Wenn du bereits eigene SEO-Daten hast, ist das eine gute Grundlage. In der Analyse ordne ich sie ein, ergänze die KI-Sichtbarkeit und leite daraus konkrete Prioritäten ab, die aus reinen Rohdaten meist nicht direkt hervorgehen.",
  },
  {
    q: "Was ist der Unterschied zum kostenlosen Check?",
    a: "Der kostenlose Check zeigt, ob ein Problem oder Potenzial sichtbar ist. Die Analyse erklärt Ursachen, Ausmaß, Wettbewerbsumfeld und konkrete Prioritäten.",
  },
  {
    q: "Muss ich Zugriff auf meine Google Search Console geben?",
    a: "Das hilft, ist aber keine Voraussetzung. Auch ohne diesen Zugriff lässt sich deine Sichtbarkeit bei Google und in KI-Systemen belastbar einschätzen.",
  },
  {
    q: "Werden auch Wettbewerber analysiert?",
    a: "Ja. Ich schaue mir an, welche Wettbewerber bei relevanten Themen sichtbarer sind, welche Quellen sie stärken und wo dir dadurch Signale fehlen.",
  },
  {
    q: "Was passiert nach der Analyse?",
    a: "Du bekommst eine priorisierte Liste konkreter Maßnahmen und ein Gespräch dazu. Ob und wie die Umsetzung danach erfolgt, entscheidest du – selbst, mit deinem Team oder gemeinsam mit mir.",
  },
];

export function OfferAnalyse() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Verstehen</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            SEO- &amp; KI-Sichtbarkeitsanalyse
          </h1>
          <p className="hero-keymessage">
            Bevor du optimierst, solltest du wissen, was wirklich fehlt.
          </p>
          <p className="hero-sub">
            Ich analysiere, wie dein Unternehmen bei Google und in KI-Systemen sichtbar
            ist, wo Wettbewerber stärker auftreten und welche Maßnahmen für dich
            tatsächlich Priorität haben.
          </p>
          <div className="detail-hero-price">
            <Link href="/kontakt" className="btn btn-primary">
              Analyse anfragen →
            </Link>
            <span className="detail-price">490 €</span>
          </div>
        </div>
      </section>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Du brauchst keine weitere Liste mit 50 SEO-Fehlern.</h2>
          </div>
          <p className="check-text">Du brauchst eine Antwort auf drei Fragen:</p>
          <ul className="detail-list">
            <li>Wo verliere ich Sichtbarkeit?</li>
            <li>Warum passiert das?</li>
            <li>Was sollte ich als Erstes ändern?</li>
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <h2>Google und KI gemeinsam betrachten.</h2>
          </div>
          <div className="analysis-grid">
            <div className="check-item">
              <span className="check-num">01</span>
              <h3>SEO-Sichtbarkeit</h3>
              <ul>
                <li>Klicks</li>
                <li>Impressionen</li>
                <li>CTR</li>
                <li>Rankings</li>
                <li>wichtige URLs</li>
                <li>Sichtbarkeitsverluste</li>
                <li>relevante Keyword-Cluster</li>
                <li>Content Gaps</li>
              </ul>
            </div>
            <div className="check-item">
              <span className="check-num">02</span>
              <h3>KI-Sichtbarkeit</h3>
              <ul>
                <li>relevante Such- und Fragekontexte</li>
                <li>Prompt-Sichtbarkeit</li>
                <li>Sichtbarkeit nach Themenfeldern</li>
                <li>Share of Voice</li>
                <li>Präsenz in relevanten KI-Antworten</li>
              </ul>
            </div>
            <div className="check-item">
              <span className="check-num">03</span>
              <h3>Brand Mentions, Citations &amp; Recommendations</h3>
              <p className="term" style={{ marginTop: 6 }}>
                Das ist ein wichtiger Teil meiner GEO-Analyse (Generative Engine
                Optimization – Sichtbarkeit in KI-generierten Antworten).
              </p>
              <p className="term">
                <strong>Brand Mentions:</strong> Wo und in welchem Kontext wird deine
                Marke in KI-Antworten erwähnt?
              </p>
              <p className="term">
                <strong>Citations:</strong> Welche Quellen werden bei relevanten Themen
                zitiert – und welche davon stärken deine Wettbewerber?
              </p>
              <p className="term">
                <strong>Recommendations:</strong> Bei welchen kauf- oder
                entscheidungsnahen Fragen werden Unternehmen konkret empfohlen?
              </p>
              <ul style={{ marginTop: 10 }}>
                <li>Vergleich mit relevanten Wettbewerbern</li>
                <li>Unterschiede bei Mentions, Citations und Recommendations</li>
                <li>Citation-/Authority-Gaps identifizieren</li>
              </ul>
            </div>
            <div className="check-item">
              <span className="check-num">04</span>
              <h3>Wettbewerb &amp; Prioritäten</h3>
              <ul>
                <li>Welche Wettbewerber sind sichtbarer?</li>
                <li>Bei welchen Themen?</li>
                <li>Welche Quellen stärken sie?</li>
                <li>Wo fehlen dir Signale?</li>
                <li>Welche Maßnahmen haben den größten Hebel?</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Kein Datenfriedhof. Eine klare Prioritätenliste.</h2>
          </div>
          <p className="check-text">Du bekommst:</p>
          <ul className="detail-list">
            <li>kompakte Analyse deiner SEO- und KI-Sichtbarkeit</li>
            <li>Wettbewerbsvergleich</li>
            <li>Einordnung von Brand Mentions, Citations und Recommendations</li>
            <li>erkennbare Content-, Struktur- und Technik-Gaps</li>
            <li>priorisierte Handlungsfelder</li>
            <li>konkrete Empfehlung für die nächsten Schritte</li>
            <li>Review-Call / Ergebnisbesprechung</li>
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Was ist der Unterschied zum kostenlosen Check?</h2>
          </div>
          <div className="compare-columns">
            <div>
              <h3 className="question-col-label">Kostenloser Check</h3>
              <p className="check-text">zeigt, ob ein Problem oder Potenzial sichtbar ist.</p>
            </div>
            <div>
              <h3 className="question-col-label">Analyse</h3>
              <p className="check-text">
                erklärt Ursachen, Ausmaß, Wettbewerbsumfeld und konkrete Prioritäten.
              </p>
            </div>
          </div>
          <Link href="/sichtbarkeitscheck" className="btn-link detail-secondary-link">
            Noch nicht sicher? SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Für wen ist die Analyse sinnvoll?</h2>
          </div>
          <ul className="detail-list">
            <li>kleine und mittlere Online-Shops</li>
            <li>inhabergeführte Unternehmen</li>
            <li>Dienstleister und Beratungen ohne eigenes SEO-Team</li>
            <li>Unternehmen mit sinkendem Traffic</li>
            <li>Unternehmen, die wissen möchten, wie sie in KI-Systemen wahrgenommen werden</li>
            <li>Unternehmen, deren Wettbewerber häufiger genannt oder empfohlen werden</li>
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <ul className="detail-list">
            <li>keine automatisierte Standardauswertung</li>
            <li>keine 80-seitige Agenturpräsentation</li>
            <li>keine Erfolgsgarantie</li>
            <li>keine vollständige Umsetzung</li>
          </ul>
          <p className="check-text" style={{ marginTop: 16 }}>
            Die Analyse beantwortet: Was solltest du tun – und in welcher Reihenfolge?
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Lass uns herausfinden, wo du stehst.</h2>
            <p className="lead">
              Schick mir kurz deine Website und beschreib mir, was dir gerade auffällt.
              Ich melde mich persönlich bei dir.
            </p>
          </div>
          <div className="detail-hero-price">
            <Link href="/kontakt" className="btn btn-primary">
              SEO- &amp; KI-Sichtbarkeitsanalyse anfragen →
            </Link>
            <span className="detail-price">490 €</span>
          </div>
          <Link href="/sichtbarkeitscheck" className="btn-link detail-secondary-link">
            Erst kostenlos prüfen →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Häufige Fragen</span>
            <h2>Fragen zur Analyse</h2>
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
