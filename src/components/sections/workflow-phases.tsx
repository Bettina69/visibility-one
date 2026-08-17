import { Reveal } from "./reveal";

const PHASES = [
  {
    title: "Analyse der Bestandswebsite",
    desc: "Vollständige technische und inhaltliche Bestandsaufnahme der Kundenwebsite vor dem Start.",
    tools: "Screaming Frog · SISTRIX · Google Search Console · Perplexity",
  },
  {
    title: "KI-gestützte Inhalts- und Entitätsanalyse",
    desc: "Bestehende Inhalte mit KI einlesen, strukturieren und GEO-Lücken aufdecken.",
    tools: "NotebookLM · Claude · ChatGPT · SISTRIX Prompt Monitoring",
  },
  {
    title: "Neue Inhalte generieren (SEO + GEO)",
    desc: "Auf Basis des Briefings neue, GEO-optimierte Inhalte erstellen – mit allen technischen Elementen (FAQ, Schema Markup, llms.txt, E-E-A-T-Signale).",
    tools: "Claude · ChatGPT · Gemini · Perplexity",
  },
  {
    title: "Technische Umsetzung & Design",
    desc: "Inhalte und Schema in die neue, moderne Website integrieren – schnell und skalierbar.",
    tools: "Claude Code · GitHub Copilot · Google Rich Results Test",
  },
  {
    title: "Validierung & GEO-Monitoring",
    desc: "Regelmäßige Prüfung, ob die Website in KI-Systemen als Quelle zitiert wird, plus monatliches Reporting.",
    tools: "SISTRIX · Google AI Overviews · Perplexity · Google Search Console",
  },
];

export function WorkflowPhases() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Der Workflow im Detail</span>
          <h2>
            5 Phasen von der <em>Analyse bis zum Monitoring.</em>
          </h2>
        </div>
        <p className="lead" style={{ marginTop: -32 }}>
          Der Prozess kombiniert klassische SEO-Methodik mit Generative Engine
          Optimization (GEO) – kombiniert mit gezieltem KI-Einsatz für Analyse,
          Texterstellung und technische Umsetzung, während strategische Steuerung und
          Qualitätssicherung bei mir liegen.
        </p>
        <div className="phase-list">
          {PHASES.map((p, i) => (
            <div key={i} className="phase-item">
              <span className="phase-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="tools">{p.tools}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
