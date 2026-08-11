import Link from "next/link";
import { Reveal } from "./reveal";

const ITEMS = [
  "Warum sinkt mein Traffic – obwohl meine Rankings gleich geblieben sind?",
  "Wie werde ich von ChatGPT, Google AI & Co. empfohlen statt übergangen?",
  "Warum nennt ChatGPT meine Wettbewerber – aber nicht mich?",
  "Muss ich meine Content-Strategie grundlegend ändern?",
  "Was kann ich jetzt tun, bevor die Konkurrenz den Vorsprung ausbaut?",
  "Wie bleibt mein Shop sichtbar, wenn KI die Suche zunehmend ersetzt?",
];

export function Questions() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Kennst du das?</span>
          <h2>
            Diese Fragen kenne ich – <em>weil ich sie selbst hatte.</em>
          </h2>
        </div>
        <div className="q-list">
          {ITEMS.map((q, i) => (
            <Link href="/kontakt" key={i} className="q-item">
              <span className="q-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="q-text">{q}</span>
              <span className="q-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
