import Link from "next/link";
import { Reveal } from "./reveal";

function RestaurantIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="13" r="6" />
      <path d="M4 3v6M4 3c-1.3 0-1.3 2.2 0 2.2M4 9v12" />
      <path d="M20 3v18" />
      <path d="M20 3c1.4 0 1.8 2 1.8 3.5S21.4 10 20 10" />
    </svg>
  );
}

function BeautyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M17 3l4 4-8.5 8.5-4-4L17 3z" />
      <path d="M8.5 11.5L4 16l1 3 3 1 4.5-4.5" />
    </svg>
  );
}

function TwoPeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="3" />
      <path d="M3 20v-1a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v1" />
      <circle cx="17" cy="7" r="2.5" />
      <path d="M14.5 20v-1a4.5 4.5 0 0 1 6.5-4" />
    </svg>
  );
}

const CASES = [
  {
    label: "Restaurant",
    Icon: RestaurantIcon,
    quote:
      "Mein Restaurant findet man, wenn man den Namen kennt. Aber bei lokalen Empfehlungen stehen andere vorne.",
  },
  {
    label: "Kosmetikerin",
    Icon: BeautyIcon,
    quote:
      "Meine Stammkundinnen kennen mich. Neue Kundinnen suchen nach einer Behandlung – und finden andere Studios.",
  },
  {
    label: "Coach",
    Icon: TwoPeopleIcon,
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
              <div className="offer-path-icon-row">
                <span className="offer-path-icon" aria-hidden="true">
                  <c.Icon />
                </span>
                <span className="offer-path-label">{c.label}</span>
              </div>
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
