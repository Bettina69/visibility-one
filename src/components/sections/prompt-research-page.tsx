import Link from "next/link";
import { Reveal } from "./reveal";
import { AuthorModule } from "./author-module";

const PROMPT_CONTEXT = [
  "Unternehmensgröße",
  "Problem",
  "Ziel",
  "Zielgruppe",
  "Produkt",
  "Standort",
  "Budget",
  "Entscheidungskriterien",
  "gewünschte Empfehlung",
];

const WHY_LIST = [
  "welche Fragen potenzielle Kunden stellen",
  "welche Themen mit dem Unternehmen verbunden werden",
  "welche Wettbewerber auftauchen",
  "welche Marken fehlen",
  "welche Quellen verwendet werden",
  "wann Recommendations entstehen",
  "wie das Sentiment ausfällt",
];

const CATEGORIES = [
  { num: "01", label: "Information", example: "Was ist …?" },
  { num: "02", label: "Problem", example: "Wie löse ich …?" },
  { num: "03", label: "Vergleich", example: "Was ist besser …?" },
  { num: "04", label: "Anbieter", example: "Welche Unternehmen bieten …?" },
  { num: "05", label: "Empfehlung", example: "Welche Lösung eignet sich für …?" },
  { num: "06", label: "Entscheidung", example: "Welcher Anbieter passt zu …?" },
];

const PRACTICE_STEPS = [
  { num: "01", title: "Geschäftsmodell verstehen", text: "Welche Leistungen, Produkte, Zielgruppen und Entscheidungen sind relevant?" },
  { num: "02", title: "Such- und Themenwelt analysieren", text: "Welche Keywords, Suchintentionen und Themen existieren bereits?" },
  { num: "03", title: "Fragen ableiten", text: "Welche Informations-, Problem-, Vergleichs- und Entscheidungsfragen ergeben sich daraus?" },
  { num: "04", title: "Wettbewerbsumfeld prüfen", text: "Welche Unternehmen werden bei diesen Fragen genannt oder empfohlen?" },
  { num: "05", title: "Prompts priorisieren", text: "Welche Fragen besitzen tatsächlich wirtschaftliche Relevanz?" },
];

const METRICS = [
  { label: "Mentions", text: "Wird die Marke genannt?" },
  { label: "Citations", text: "Welche Quellen werden verwendet?" },
  { label: "Recommendations", text: "Wird das Unternehmen empfohlen?" },
  { label: "Sentiment", text: "Wie wird die Marke dargestellt?" },
  { label: "Share of Voice", text: "Wie verteilt sich Sichtbarkeit gegenüber Wettbewerbern?" },
  { label: "Modell / System", text: "In welchem KI-System entsteht die Sichtbarkeit?" },
  { label: "Wettbewerb", text: "Welche Unternehmen erscheinen stattdessen?" },
];

const HUMAN_LOOP_LIST = [
  "Daten unterstützen.",
  "Mensch prüft.",
  "Irrelevante Prompts werden aussortiert.",
  "Kundenkontext wird berücksichtigt.",
  "Maßnahmen werden nicht automatisch aus Tool-Daten abgeleitet.",
];

const FAQ = [
  { q: "Was ist Prompt Research?", a: "Prompt Research untersucht relevante Fragen und Entscheidungssituationen, die Nutzer an KI-Systeme richten könnten. Es ergänzt klassische Keyword Research um kontextreichere Fragestellungen." },
  { q: "Ersetzt Prompt Research Keyword Research?", a: "Nein. Keyword Research bleibt die Grundlage für klassische Suchnachfrage. Prompt Research ergänzt diese Perspektive um längere, kontextreichere Fragen und Entscheidungssituationen." },
  { q: "Wie viele Prompts sollte man beobachten?", a: "Dafür gibt es keine pauschale Zahl. Relevant ist nicht die Anzahl der Fragen, sondern ihre Nähe zum echten Geschäftsmodell und zu tatsächlichen Entscheidungssituationen." },
  { q: "Was ist Prompt Monitoring?", a: "Prompt Monitoring beobachtet, wie sich die Sichtbarkeit bei einem bereits definierten Prompt-Set über die Zeit verändert. Prompt Research legt vorher fest, welche Fragen dafür überhaupt relevant sind." },
  { q: "Kann man echte ChatGPT-Suchvolumina messen?", a: "Nicht mit derselben Genauigkeit wie klassisches Suchvolumen bei Google. KI-Antworten können sich je nach Formulierung, System, Kontext und Zeitpunkt unterscheiden. Deshalb betrachte ich mehrere Signale gemeinsam, statt mich auf eine einzelne Kennzahl zu verlassen." },
  { q: "Muss ich für jeden Prompt Content schreiben?", a: "Nein. Ein Prompt kann auf eine Frage hinweisen, die bereits durch bestehende Inhalte beantwortet wird. Häufig reicht es, eine vorhandene Seite klarer zu strukturieren oder zu ergänzen." },
  { q: "Welche Prompts sind für Unternehmen besonders relevant?", a: "Das hängt vom jeweiligen Geschäftsmodell ab. Relevant sind vor allem Fragen, die nah an echten Informations-, Vergleichs- oder Entscheidungssituationen potenzieller Kunden liegen." },
  { q: "Warum verändern sich KI-Antworten bei gleichen Prompts?", a: "KI-Antworten können sich abhängig von Formulierung, Kontext, System und Zeitpunkt unterscheiden. Das ist einer der Gründe, warum Prompt Research eher Tendenzen als exakte, feste Werte liefert." },
];

export function PromptResearchPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Wissen · Prompt Research</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            Was ist Prompt Research?
          </h1>
          <p className="hero-sub">Keyword Research bleibt wichtig.</p>
          <p className="hero-sub">
            Doch Menschen formulieren ihre Fragen in KI-Systemen oft
            ausführlicher und konkreter als in einer klassischen
            Suchmaschine.
          </p>
          <p className="hero-explainer" style={{ marginBottom: 16 }}>
            Prompt Research ergänzt deshalb die klassische
            Keyword-Recherche um eine zusätzliche Frage: Welche konkreten
            Informations-, Vergleichs- und Entscheidungssituationen führen
            dazu, dass ein Unternehmen in KI-Antworten relevant werden
            könnte?
          </p>
          <p className="hero-keymessage">
            Prompts ersetzen Keywords nicht. Sie erweitern die Analyse um
            Kontext.
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
            <span className="eyebrow">Keyword + Prompt</span>
            <h2>Was ist der Unterschied zwischen Keyword Research und Prompt Research?</h2>
          </div>
          <div className="compare-columns">
            <div>
              <h3 className="question-col-label">Keyword</h3>
              <p className="check-text">SEO Beratung</p>
            </div>
            <div>
              <h3 className="question-col-label">Prompt</h3>
              <p className="check-text">
                „Welche SEO-Beratung eignet sich für einen kleinen
                Online-Shop, der bei Google sichtbar ist, aber kaum in
                ChatGPT vorkommt?“
              </p>
            </div>
          </div>
          <p className="check-text" style={{ marginTop: 24 }}>
            Ein Prompt kann zusätzliche Informationen enthalten:
          </p>
          <ul className="detail-list">
            {PROMPT_CONTEXT.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="method-benefit">
            <p>
              Prompt Research betrachtet deshalb nicht nur Begriffe,
              sondern Situationen.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Warum?</span>
            <h2>Warum Prompt Research für KI-Sichtbarkeit relevant ist</h2>
          </div>
          <p className="check-text">
            Generative Systeme beantworten häufig vollständige Fragen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Wer nur einzelne Keywords betrachtet, sieht deshalb nicht immer,
            in welchen konkreten Entscheidungssituationen Wettbewerber
            genannt oder empfohlen werden.
          </p>
          <p className="check-text" style={{ marginTop: 20 }}>
            Prompt Research kann helfen zu erkennen:
          </p>
          <ul className="detail-list">
            {WHY_LIST.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">Qualität statt Masse</span>
            <h2>Ein gutes Prompt-Set ist kein Fragenfriedhof.</h2>
            <p className="lead">
              Mehr Prompts bedeuten nicht automatisch bessere Erkenntnisse.
              Ein Prompt-Set sollte die tatsächlichen Informations- und
              Entscheidungswege potenzieller Kunden möglichst sinnvoll
              abbilden.
            </p>
          </div>
          <div className="analysis-grid">
            {CATEGORIES.map((c) => (
              <div key={c.num} className="check-item">
                <span className="check-num">
                  {c.num} · {c.label}
                </span>
                <p>„{c.example}“</p>
              </div>
            ))}
          </div>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            Relevant ist nicht die Anzahl der Fragen, sondern ihre Nähe zum
            echten Geschäftsmodell.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">Vorgehen</span>
            <h2>Wie entsteht ein relevantes Prompt-Set?</h2>
          </div>
          <div className="phase-list">
            {PRACTICE_STEPS.map((s) => (
              <div key={s.num} className="phase-item">
                <span className="phase-num">{s.num}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="check-note" style={{ marginTop: 24, maxWidth: "62ch" }}>
            Nicht jeder denkbare Prompt gehört ins Monitoring.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Auswertung</span>
            <h2>Was kann bei Prompts untersucht werden?</h2>
          </div>
          <div className="analysis-grid">
            {METRICS.map((m) => (
              <div key={m.label} className="check-item">
                <span className="check-num">{m.label}</span>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Research + Monitoring</span>
            <h2>Prompt Research und Prompt Monitoring sind nicht dasselbe.</h2>
          </div>
          <div className="compare-columns">
            <div>
              <h3 className="question-col-label">Prompt Research</h3>
              <p className="check-text">
                „Welche Fragen sollten wir überhaupt beobachten?“
              </p>
            </div>
            <div>
              <h3 className="question-col-label">Prompt Monitoring</h3>
              <p className="check-text">
                „Wie verändert sich die Sichtbarkeit bei diesen Fragen im
                Zeitverlauf?“
              </p>
            </div>
          </div>
          <div className="method-benefit">
            <p>
              Erst ein sinnvolles Prompt-Set macht Monitoring
              aussagekräftig.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Content</span>
            <h2>Muss für jeden Prompt eine neue Seite entstehen?</h2>
          </div>
          <p className="hero-keymessage">Nein.</p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Ein Prompt kann auf eine Frage hinweisen, die bereits durch
            bestehende Inhalte beantwortet wird.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Manchmal reicht es, eine vorhandene Seite klarer zu
            strukturieren oder zu ergänzen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Eine neue Seite ist nur sinnvoll, wenn eine eigenständige Such-
            oder Nutzerintention besteht.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Human in the Loop</span>
            <h2>Tools finden Muster. Menschen bewerten Relevanz.</h2>
          </div>
          <p className="check-text">
            Tools können viele Prompts generieren und analysieren.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Sie wissen aber nicht automatisch, welche davon für ein
            konkretes Unternehmen wirtschaftlich wichtig sind.
          </p>
          <ul className="detail-list" style={{ marginTop: 20 }}>
            {HUMAN_LOOP_LIST.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">SEO + GEO</span>
            <h2>Prompt Research ergänzt Keyword Research.</h2>
          </div>
          <p className="check-text">
            Keyword Research bleibt die Grundlage für klassische
            Suchnachfrage.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Prompt Research ergänzt diese Perspektive um längere,
            kontextreichere Fragen und Entscheidungssituationen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Zusammen entsteht ein besseres Bild davon, wonach Menschen
            suchen und wie KI-Systeme auf diese Fragen antworten.
          </p>
          <div className="detail-cta-row" style={{ gap: 12 }}>
            <Link href="/geo" className="btn-link">
              Was ist GEO? →
            </Link>
            <Link href="/ki-sichtbarkeit" className="btn-link">
              Was bedeutet KI-Sichtbarkeit? →
            </Link>
            <Link href="/chatgpt-sichtbarkeit" className="btn-link">
              Bei ChatGPT gefunden werden →
            </Link>
          </div>
          <AuthorModule />
        </div>
      </Reveal>

      <Reveal className="section final-cta">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Nächster Schritt</span>
            <h2>Welche Fragen sind für dein Unternehmen wirklich relevant?</h2>
            <p className="lead">
              Bevor du hunderte Prompts beobachtest, lohnt sich ein Blick
              auf deine bestehende SEO- und KI-Sichtbarkeit. Der kostenlose
              Check gibt dir eine erste Orientierung.
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
            <h2>Häufige Fragen zu Prompt Research</h2>
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
