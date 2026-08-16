import { Reveal } from "./reveal";

const INCLUDED = [
  "Google-/SEO-Sichtbarkeit",
  "relevante Suchthemen",
  "KI-Erwähnungen",
  "Citations",
  "Recommendations",
  "kurze Einschätzung des größten Potenzials",
];

const DEEPER = [
  "Ursachenanalyse",
  "umfassende Wettbewerbsanalyse",
  "detailliertes Keyword Research",
  "Prompt Research",
  "Prompt Tracking",
  "technische SEO-Analyse",
  "strukturierte Daten / Schema",
  "Entity-Analyse",
  "konkrete Maßnahmen-Roadmap",
];

export function CheckBoundary() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Bewusst kompakt</span>
          <h2>Ein erster Überblick – keine 40-seitige Analyse.</h2>
        </div>
        <p className="check-text">
          Der kostenlose Check zeigt dir deine aktuelle Ausgangslage. Er soll dir eine
          einfache Frage beantworten:
        </p>
        <p className="check-quote">„Bin ich dort sichtbar, wo meine Kunden heute suchen?“</p>
        <div className="compare-columns">
          <div>
            <h3 className="question-col-label">Im kostenlosen Check</h3>
            <ul className="compare-list included">
              {INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="question-col-label">Vertiefende Analyse</h3>
            <ul className="compare-list deeper">
              {DEEPER.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="check-text" style={{ marginTop: 28 }}>
          Wenn der Check zeigt, dass Handlungsbedarf besteht, entscheiden wir gemeinsam,
          ob und welche vertiefende Analyse für dich überhaupt sinnvoll ist.
        </p>

        <div
          style={{
            marginTop: 40,
            paddingTop: 32,
            borderTop: "1px solid var(--line)",
          }}
        >
          <h3>Du entscheidest, wie es weitergeht.</h3>
          <p className="check-text" style={{ marginTop: 12 }}>
            Wenn sich aus dem Check Handlungsbedarf ergibt, kannst du eine passende
            Analyse oder ein Beratungspaket wählen. Und wenn du nur punktuell
            Unterstützung brauchst, kannst du mich auch flexibel auf Stundenbasis buchen
            – ohne langfristige Bindung.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
