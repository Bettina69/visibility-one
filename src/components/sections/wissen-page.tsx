import Link from "next/link";
import { Reveal } from "./reveal";
import { AuthorModule } from "./author-module";
import { NetworkBg } from "./network-bg";

const KI_BILDER_ARTICLE_HREF: string | undefined = "/ki-bilder-kennzeichnen";

const GENERATIVE_SEARCH_CARDS = [
  {
    title: "Was ist GEO?",
    text: "Generative Engine Optimization verständlich erklärt: Was GEO bedeutet, wie es SEO ergänzt und welche Faktoren Unternehmen beeinflussen können.",
    cta: "GEO verstehen →",
    href: "/geo",
  },
  {
    title: "Bei ChatGPT gefunden werden",
    text: "Wie Unternehmen in ChatGPT-Antworten genannt, zitiert oder empfohlen werden können – und warum Sichtbarkeit mehr bedeutet als eine reine Mention.",
    cta: "ChatGPT-Sichtbarkeit verstehen →",
    href: "/chatgpt-sichtbarkeit",
  },
  {
    title: "Google AI Overviews & AI Mode",
    text: "Was verändert sich für SEO, wenn Google Antworten direkt generiert? Einordnung von AI Overviews, AI Mode, Rankings und Citations.",
    cta: "Google AI verstehen →",
    href: "/google-ai-overviews",
  },
];

export function WissenPage() {
  return (
    <>
      <section className="hero">
        <NetworkBg />
        <div className="hero-inner">
          <span className="eyebrow">Wissen</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            SEO &amp; KI-Sichtbarkeit verständlich erklärt
          </h1>
          <p className="hero-sub">
            Wie verändert KI die Suche? Was bedeutet GEO? Wie lässt sich
            Sichtbarkeit in ChatGPT oder Google AI untersuchen – und welche
            technischen Grundlagen spielen dabei eine Rolle?
          </p>
          <p className="hero-sub">
            Im Wissensbereich von Visibility One findest du verständliche
            Einordnungen zu SEO, GEO und KI-Sichtbarkeit.
          </p>
          <p className="hero-explainer" style={{ marginBottom: 16 }}>
            Ohne Hype, ohne vermeintliche GEO-Tricks und mit dem Blick
            darauf, was für Unternehmen tatsächlich relevant ist.
          </p>
          <p className="hero-keymessage">
            SEO bleibt die Grundlage. KI-Sichtbarkeit erweitert den Blick.
          </p>
        </div>
      </section>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Einstieg</span>
            <h2>Neu im Thema KI-Sichtbarkeit?</h2>
          </div>
          <div className="offer-intro-card offer-intro-card--compact">
            <span className="offer-intro-label">
              Grundlagen · empfohlener Einstieg
            </span>
            <h3>Was bedeutet KI-Sichtbarkeit für Unternehmen?</h3>
            <p>
              Wie verändert sich digitale Sichtbarkeit, wenn Menschen
              Antworten nicht mehr nur über klassische Suchergebnisse
              erhalten? Diese Einführung erklärt die wichtigsten Grundlagen
              und Begriffe.
            </p>
            <Link href="/ki-sichtbarkeit" className="btn-link">
              KI-Sichtbarkeit verstehen →
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">Generative Suche</span>
            <h2>Wie verändert KI die Suche?</h2>
          </div>
          <div className="proof-cards">
            {GENERATIVE_SEARCH_CARDS.map((c) => (
              <div key={c.href} className="proof-card">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <Link href={c.href} className="btn-link proof-link">
                  {c.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Analyse &amp; Strategie</span>
            <h2>Wie lässt sich KI-Sichtbarkeit untersuchen?</h2>
          </div>
          <div className="offer-intro-card offer-intro-card--compact">
            <h3>Prompt Research</h3>
            <p>
              Keywords bleiben wichtig – aber KI-Fragen enthalten oft
              wesentlich mehr Kontext. Prompt Research untersucht relevante
              Informations-, Vergleichs- und Entscheidungssituationen.
            </p>
            <Link href="/prompt-research" className="btn-link">
              Prompt Research verstehen →
            </Link>
          </div>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            Dabei geht es unter anderem um: Mentions · Citations ·
            Recommendations · Sentiment
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Technische Grundlagen</span>
            <h2>Wie werden Informationen für Maschinen verständlicher?</h2>
          </div>
          <div className="offer-intro-card offer-intro-card--compact">
            <h3>Strukturierte Daten &amp; Schema Markup</h3>
            <p>
              Schema.org und JSON-LD helfen dabei, Informationen
              maschinenlesbar auszuzeichnen. Was strukturierte Daten
              leisten können – und was nicht.
            </p>
            <Link href="/strukturierte-daten" className="btn-link">
              Strukturierte Daten verstehen →
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">KI &amp; Content</span>
            <h2>KI-Bilder transparent einsetzen</h2>
          </div>
          <p className="check-text">
            KI wird längst nicht nur für Texte eingesetzt. Auch
            Produktbilder, Moodbilder und Marketingvisuals können
            vollständig oder teilweise mit KI entstehen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Dabei wird Transparenz zunehmend wichtiger: Was wurde mit KI
            erstellt, was lediglich bearbeitet – und wie lässt sich das für
            Nutzer sichtbar kennzeichnen?
          </p>
          <div className="compare-columns" style={{ marginTop: 24 }}>
            <div className="offer-intro-card offer-intro-card--compact">
              <h3>KI-Bilder kennzeichnen</h3>
              <p>
                Wann ist eine Kennzeichnung sinnvoll? Welche Unterschiede
                gibt es zwischen KI-generierten und KI-bearbeiteten
                Bildern – und wo liegen die Grenzen automatischer
                Kennzeichnung?
              </p>
              {KI_BILDER_ARTICLE_HREF ? (
                <Link href={KI_BILDER_ARTICLE_HREF} className="btn-link">
                  KI-Bilder kennzeichnen verstehen →
                </Link>
              ) : (
                <span className="offer-intro-hint">
                  Ausführlicher Wissensartikel folgt.
                </span>
              )}
            </div>
            <div className="offer-intro-card offer-intro-card--compact">
              <h3>AI Image Marker</h3>
              <p>
                JPG- oder PNG-Bilder hochladen und sichtbar als AI, AI
                modified oder AI generated kennzeichnen. Position, Größe
                und Transparenz lassen sich anpassen.
              </p>
              <a
                href="https://ai.visibility-one.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                AI Image Marker öffnen → <span className="sr-only">(öffnet in neuem Tab)</span>
              </a>
              <p className="check-trust" style={{ marginTop: 8 }}>
                Kostenlos nutzbar · Bilder werden spätestens nach 60
                Minuten gelöscht · keine Rechtsberatung
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Wo anfangen?</span>
            <h2>Du musst nicht alles gleichzeitig optimieren.</h2>
          </div>
          <p className="check-text">
            Nicht jedes Unternehmen braucht sofort GEO, Prompt Monitoring
            oder zusätzliche strukturierte Daten.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Oft ist die wichtigere Frage: Wo liegt aktuell überhaupt das
            größte Sichtbarkeitspotenzial?
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Deshalb sollte zuerst die Ausgangslage betrachtet und
            anschließend priorisiert werden.
          </p>
          <div className="method-benefit">
            <p>Erst verstehen. Dann priorisieren. Dann umsetzen.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section final-cta">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Kostenloser Einstieg</span>
            <h2>Wie sichtbar ist dein Unternehmen heute?</h2>
            <p className="lead">
              Der kostenlose SEO- &amp; KI-Sichtbarkeitscheck gibt dir eine
              erste persönliche Orientierung. Du bekommst keine
              automatisierte Standardauswertung, sondern 2–3 konkrete
              Hinweise dazu, wo es sich lohnt, genauer hinzusehen.
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
          <AuthorModule />
        </div>
      </Reveal>
    </>
  );
}
