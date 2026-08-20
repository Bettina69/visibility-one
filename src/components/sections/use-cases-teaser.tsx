import Link from "next/link";
import { Reveal } from "./reveal";

const CASES = [
  {
    label: "Restaurant",
    quote:
      "Mein Restaurant findet man, wenn man den Namen kennt. Aber bei lokalen Empfehlungen stehen andere vorne.",
  },
  {
    label: "Kosmetikerin",
    quote:
      "Meine Stammkundinnen kennen mich. Neue Kundinnen suchen nach einer Behandlung – und finden andere Studios.",
  },
  {
    label: "Coach",
    quote:
      "Bei Google werde ich gefunden. Warum nennen KI-Assistenten bei meinem Spezialgebiet trotzdem andere Coaches?",
  },
];

export function UseCasesTeaser() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Kommt dir bekannt vor?</span>
          <h2>Drei von vielen typischen Situationen.</h2>
        </div>
        <div className="offer-paths">
          {CASES.map((c) => (
            <div key={c.label} className="offer-path">
              <span className="offer-path-label">{c.label}</span>
              <p>„{c.quote}“</p>
            </div>
          ))}
        </div>
        <Link href="/angebote" className="btn-link" style={{ marginTop: 24 }}>
          Weitere typische Situationen ansehen →
        </Link>
      </div>
    </Reveal>
  );
}
