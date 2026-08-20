import { Reveal } from "./reveal";

const INCLUDED = [
  "Google-/SEO-Sichtbarkeit",
  "relevante Suchthemen",
  "exemplarische Prüfung relevanter Fragen in KI-Systemen",
  "erste KI-Erwähnungen",
  "erste Quellenverweise (Citations)",
  "erste Empfehlungen in KI-Antworten",
  "kurze Einschätzung des größten Potenzials",
];

const DEEPER = [
  "Ursachen und Prioritäten",
  "relevante Suchbegriffe, Themen und Fragen",
  "vertiefte Google- und KI-Sichtbarkeit",
  "Erwähnungen und Quellenverweise",
  "Wettbewerbsvergleich",
  "technische Prüfung",
  "strukturierte Daten / Entity-Klarheit, soweit relevant",
  "konkrete Handlungsempfehlungen und Prioritäten",
];

export function CheckBoundary() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Bewusst kompakt</span>
          <h2>Ein erster Überblick – noch kein umfassendes Audit.</h2>
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
            <h3 className="question-col-label">SEO- &amp; KI-Sichtbarkeits-Audit</h3>
            <ul className="compare-list deeper">
              {DEEPER.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="check-text" style={{ marginTop: 28 }}>
          Wenn der Check zeigt, dass sich ein genauerer Blick lohnt, ist das
          SEO- &amp; KI-Sichtbarkeits-Audit für 790&nbsp;€ der nächste Schritt.
          Dort klären wir, woher Auffälligkeiten kommen und ob SEO, GEO,
          beides – oder aktuell gar keine weitere Maßnahme – sinnvoll ist.
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
            Wenn sich aus dem Check Handlungsbedarf ergibt, kannst du das
            passende Audit oder ein Beratungspaket wählen – ohne langfristige
            Bindung.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
