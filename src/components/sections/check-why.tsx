import { Reveal } from "./reveal";

export function CheckWhy() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Warum SEO + KI?</span>
          <h2>KI-Sichtbarkeit beginnt nicht erst bei KI.</h2>
        </div>
        <p className="check-text">
          Wenn deine Website technisch, inhaltlich oder thematisch nicht klar
          aufgestellt ist, wirkt sich das nicht nur auf Google aus. Auch KI-Systeme
          müssen verstehen können, wer du bist, wofür dein Unternehmen steht und bei
          welchen Fragen du relevant bist.
        </p>
        <p className="check-text" style={{ marginTop: 12 }}>
          Deshalb betrachte ich SEO und KI-Sichtbarkeit nicht getrennt.
        </p>
        <div className="flow-row">
          <span className="flow-step">SEO-Sichtbarkeit</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Verständlichkeit &amp; Relevanz</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">KI-Sichtbarkeit</span>
        </div>
      </div>
    </Reveal>
  );
}
