import Link from "next/link";
import { Reveal } from "./reveal";

const STEPS = [
  { label: "Analysieren", question: "Wo wirst du gefunden?" },
  { label: "Verstehen", question: "Was fehlt – und warum?" },
  { label: "Priorisieren", question: "Was bringt wirklich etwas?" },
  { label: "Umsetzen", question: "Was kannst du konkret tun?" },
  { label: "Messen", question: "Was hat sich verändert?" },
];

export function MethodOverview() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Meine Methode</span>
          <h2>Erst verstehen, dann optimieren.</h2>
          <p className="lead">
            Gute Sichtbarkeit beginnt nicht mit einzelnen Maßnahmen. Zuerst schauen wir,
            wo dein Unternehmen heute steht – bei Google und in der KI-Suche.
          </p>
        </div>
        <div className="process-bar">
          {STEPS.map((s, i) => (
            <div key={s.label} className="process-step">
              <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="process-label">{s.label}</div>
              <div className="process-question">{s.question}</div>
            </div>
          ))}
        </div>
        <Link href="/meine-methode" className="btn-link process-link">
          Meine Methode im Detail →
        </Link>
      </div>
    </Reveal>
  );
}
