import Link from "next/link";
import { Reveal } from "./reveal";
import { AuthorModule } from "./author-module";
import { RelatedReading } from "./related-reading";

const AI_OVERVIEWS_LIST = [
  "generierte Antwort innerhalb der Google-Suche",
  "Kombination verschiedener Informationen",
  "Quellen können eingebunden bzw. verlinkt werden",
  "erscheint nicht bei jeder Suche",
  "klassische Suchergebnisse bleiben relevant",
];

const AI_MODE_LIST = [
  "stärker dialogorientierte Suche",
  "komplexere Fragen",
  "Folgefragen",
  "stärkerer Antwort-/Recherchecharakter",
  "unterscheidet sich vom klassischen SERP-Erlebnis",
];

const COMPARISON = [
  { label: "AI Overviews", text: "generative Zusammenfassung innerhalb der Suche" },
  { label: "AI Mode", text: "stärker dialogorientierter KI-Suchmodus" },
  { label: "Beide", text: "können Quellen und Webinhalte einbeziehen" },
];

const STILL_IMPORTANT = [
  "Crawlbarkeit",
  "Indexierung",
  "Seitenstruktur",
  "Contentqualität",
  "Suchintention",
  "interne Verlinkung",
  "technische Qualität",
  "Vertrauen",
];

const ADDITIONALLY_RELEVANT = [
  "klare Antworten",
  "eindeutige Informationen",
  "strukturierte Inhalte",
  "Entitäten",
  "Quellenfähigkeit",
  "Vergleich mit KI-Sichtbarkeit",
];

const MEASURE_LIST = [
  "AI Overviews Citations",
  "AI Mode Citations",
  "Themen / Prompts",
  "verwendete URLs",
  "Wettbewerber",
  "Share of Voice",
  "Entwicklung über Zeit",
];

const CONTENT_LIST = [
  "klare Antworten",
  "kurze verständliche Aussagen",
  "tiefergehende Erklärung",
  "Fakten",
  "Struktur",
  "gute Zwischenüberschriften",
  "Fragen beantworten",
  "Aktualität",
];

const STRUCTURED_DATA_LIST = [
  "helfen Maschinen, Informationen einzuordnen",
  "können Entitäten und Eigenschaften verdeutlichen",
  "keine Garantie für eine AI-Overview-Citation",
  "ein sauberer technischer Baustein",
];

const EEAT_LIST = [
  "Autoren",
  "Erfahrung",
  "Unternehmensinformationen",
  "Quellen",
  "Aktualität",
  "nachvollziehbare Expertise",
];

const CLICKS_LIST = [
  "Direkte Antworten können das Klickverhalten verändern.",
  "Sichtbarkeit und Klicks sind nicht mehr immer dasselbe.",
  "Deshalb sollten Rankings, Klicks und KI-Präsenz gemeinsam betrachtet werden.",
];

const SEO_GEO_LIST = [
  "SEO bleibt Basis.",
  "GEO erweitert die Analyse.",
  "Google AI macht die Trennung zwischen beidem besonders sichtbar.",
];

const FAQ = [
  { q: "Was sind Google AI Overviews?", a: "AI Overviews sind generierte Antworten innerhalb der Google-Suche, die verschiedene Informationen zusammenfassen und dabei Quellen einbinden können. Sie erscheinen nicht bei jeder Suchanfrage." },
  { q: "Was ist Google AI Mode?", a: "AI Mode ist ein stärker dialogorientierter Suchmodus für komplexere Fragen und Folgefragen. Er unterscheidet sich vom klassischen Ergebnislisten-Erlebnis, ersetzt die klassische Suche aber nicht." },
  { q: "Ersetzen AI Overviews klassische Suchergebnisse?", a: "Nein. Klassische Suchergebnisse bleiben relevant und werden weiterhin angezeigt. AI Overviews ergänzen die Suche um eine zusätzliche, generierte Ebene." },
  { q: "Kann man für AI Overviews optimieren?", a: "Man kann die Voraussetzungen verbessern, etwa durch klare Antworten, technische Zugänglichkeit und eindeutige Inhalte. Eine bestimmte Platzierung oder Citation lässt sich dadurch nicht garantieren." },
  { q: "Garantieren strukturierte Daten eine Citation?", a: "Nein. Strukturierte Daten können helfen, Informationen maschinenlesbar auszuzeichnen. Sie sind ein technischer Baustein, keine Garantie für eine Nennung in AI Overviews." },
  { q: "Brauche ich GEO für Google AI?", a: "Das hängt vom Unternehmen ab. GEO betrachtet KI-Sichtbarkeit als zusätzliche Ebene neben klassischem SEO – wie relevant das ist, sollte eine Analyse der eigenen Ausgangslage zeigen." },
  { q: "Wie misst man AI-Overview-Sichtbarkeit?", a: "Unter anderem durch Beobachtung von Citations, verwendeten URLs, relevanten Themen bzw. Prompts, Wettbewerbern und der Entwicklung über die Zeit. Eine einzelne Kennzahl reicht dafür meist nicht aus." },
  { q: "Sind Rankings weiterhin wichtig?", a: "Ja. Klassische Rankings und Sichtbarkeit in generativen Antworten sind unterschiedliche, aber verwandte Sichtbarkeitsformen. Beide bleiben relevant." },
];

export function GoogleAiOverviewsPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Wissen · Google AI</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            Google AI Overviews &amp; AI Mode: Was verändert sich für SEO?
          </h1>
          <p className="hero-sub">
            Google zeigt nicht mehr nur klassische Suchergebnisse.
          </p>
          <p className="hero-sub">
            Mit AI Overviews und AI Mode werden Antworten zunehmend direkt
            generiert und mit verschiedenen Quellen kombiniert.
          </p>
          <p className="hero-explainer" style={{ marginBottom: 16 }}>
            Für Unternehmen verändert sich damit nicht die Bedeutung von
            SEO – sondern die Zahl der Stellen, an denen Sichtbarkeit
            entstehen kann.
          </p>
          <p className="hero-keymessage">
            Gute SEO bleibt die Grundlage. Google AI erweitert die
            Suchergebnisse um eine zusätzliche Sichtbarkeitsebene.
          </p>
          <div className="hero-actions">
            <Link href="/sichtbarkeitscheck" className="btn btn-primary">
              SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
            </Link>
          </div>
        </div>
      </section>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Was sind Google AI Overviews?</h2>
          </div>
          <ul className="detail-list">
            {AI_OVERVIEWS_LIST.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Was ist Google AI Mode?</h2>
          </div>
          <ul className="detail-list">
            {AI_MODE_LIST.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Im Vergleich</span>
            <h2>AI Overviews und AI Mode im Überblick</h2>
          </div>
          <div className="analysis-grid">
            {COMPARISON.map((c) => (
              <div key={c.label} className="check-item">
                <span className="check-num">{c.label}</span>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">SEO</span>
            <h2>Ist klassische SEO jetzt weniger wichtig?</h2>
          </div>
          <p className="hero-keymessage">Nein.</p>
          <div className="compare-columns">
            <div>
              <h3 className="question-col-label">Weiterhin wichtig</h3>
              <ul className="detail-list">
                {STILL_IMPORTANT.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="question-col-label">Zusätzlich relevant</h3>
              <ul className="detail-list">
                {ADDITIONALLY_RELEVANT.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Ranking und Citation sind nicht dasselbe.</h2>
          </div>
          <p className="check-text">Eine URL kann klassisch ranken.</p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Eine Quelle kann in einer KI-Antwort auftauchen.
          </p>
          <div className="method-benefit">
            <p>Diese Sichtbarkeitsformen sind nicht identisch.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Messung</span>
            <h2>Wie lässt sich Sichtbarkeit in Google AI beobachten?</h2>
          </div>
          <ul className="detail-list">
            {MEASURE_LIST.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Content</span>
            <h2>Braucht Google AI anderen Content?</h2>
          </div>
          <p className="hero-keymessage">Nicht grundsätzlich.</p>
          <ul className="detail-list" style={{ marginTop: 16 }}>
            {CONTENT_LIST.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Struktur</span>
            <h2>Welche Rolle spielen strukturierte Daten?</h2>
          </div>
          <ul className="detail-list">
            {STRUCTURED_DATA_LIST.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <Link href="/strukturierte-daten" className="btn-link detail-secondary-link">
            Mehr über strukturierte Daten →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">E-E-A-T</span>
            <h2>Warum Erfahrung und Vertrauen wichtig bleiben</h2>
          </div>
          <p className="check-text">
            E-E-A-T steht für Experience, Expertise, Authoritativeness und
            Trustworthiness – also Erfahrung, Fachwissen, Autorität und
            Vertrauenswürdigkeit.
          </p>
          <p className="check-text" style={{ marginTop: 16 }}>Praktische Beispiele:</p>
          <ul className="detail-list">
            {EEAT_LIST.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Was passiert mit Klicks, wenn Google Antworten direkt zeigt?</h2>
          </div>
          <ul className="detail-list">
            {CLICKS_LIST.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Quellen</span>
            <h2>Weiterführende Primärquellen</h2>
          </div>
          <a
            href="https://developers.google.com/search/docs/appearance/ai-features"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link detail-secondary-link"
          >
            Google Search Central: AI features and your website →{" "}
            <span className="sr-only">(öffnet in neuem Tab)</span>
          </a>
          <a
            href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link detail-secondary-link"
          >
            Google Search Central: Optimizing your website for generative
            AI features → <span className="sr-only">(öffnet in neuem Tab)</span>
          </a>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">SEO + GEO</span>
            <h2>Google AI verbindet klassische Suche und generative Suche.</h2>
          </div>
          <ul className="detail-list">
            {SEO_GEO_LIST.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <RelatedReading
            items={[
              {
                href: "/ki-sichtbarkeit",
                title: "Was bedeutet KI-Sichtbarkeit für Unternehmen?",
                context: "Der Überblick über das gesamte Thema.",
              },
              {
                href: "/geo",
                title: "Was ist GEO?",
                context:
                  "Die Methodik, in die Google AI als ein Kanal eingeordnet ist.",
              },
              {
                href: "/strukturierte-daten",
                title: "Strukturierte Daten & Schema Markup",
                context:
                  "Die technische Grundlage, die auch für Google AI relevant sein kann.",
              },
            ]}
          />
          <AuthorModule />
        </div>
      </Reveal>

      <Reveal className="section final-cta">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Nächster Schritt</span>
            <h2>Taucht deine Website bereits in Google AI auf?</h2>
            <p className="lead">
              Der kostenlose SEO- &amp; KI-Sichtbarkeitscheck gibt dir eine
              erste Orientierung zu deiner Sichtbarkeit in Google und
              KI-Systemen.
            </p>
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
            <span className="eyebrow">Häufige Fragen</span>
            <h2>Fragen zu Google AI Overviews &amp; AI Mode</h2>
          </div>
          <div className="faq-col" style={{ marginTop: 24 }}>
            {FAQ.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <Link href="/wissen" className="btn-link detail-secondary-link">
            Alle Themen im Wissensbereich →
          </Link>
        </div>
      </Reveal>
    </>
  );
}
