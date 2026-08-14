import Link from "next/link";
import { Reveal } from "./reveal";

// Preise final mit Bettina abstimmen – aktuell bewusst als "auf Anfrage"
// markiert, da sich Design- und Content-Referenz bei den Beträgen widersprechen.
const OFFERS = [
  {
    tag: "Quick-Check",
    name: "KI-Sichtbarkeits-Snapshot",
    price: "auf Anfrage",
    desc: "Der einfachste Einstieg. Du siehst konkret, wo du stehst – bevor du eine größere Entscheidung triffst.",
    features: [
      "Wo nennt ChatGPT dich – und wo nicht?",
      "3 wichtigste Hebel für mehr KI-Sichtbarkeit",
      "15-Minuten-Auswertungsgespräch",
    ],
    cta: "Quick-Check anfragen",
  },
  {
    tag: "Beratung",
    name: "GEO-Strategie-Workshop",
    price: "auf Anfrage",
    featured: true,
    desc: "Eintägiger Workshop mit klarer Strategie und Maßnahmenplan. BAFA-förderfähig.",
    features: [
      "Komplette KI- und SEO-Sichtbarkeitsanalyse",
      "Content- und Strukturplan für 3 Monate",
      "Technische Roadmap",
      "4 Wochen Follow-Up-Support",
    ],
    cta: "Workshop anfragen",
  },
  {
    tag: "Partnerschaft",
    name: "GEO-Begleitung",
    price: "auf Anfrage",
    desc: "Laufende Begleitung mit monatlichem Reporting, Content-Sparring und technischer Optimierung.",
    features: [
      "Monatliches Sichtbarkeits-Reporting",
      "Regelmäßige Strategy-Calls",
      "Content-Reviews & Optimierung",
      "Direkter Draht für laufende Fragen",
    ],
    cta: "Erstgespräch vereinbaren",
  },
];

export function Offers() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Meine Angebote</span>
          <h2>
            Einfach starten. <em>Ohne großes Commitment.</em>
          </h2>
        </div>
        <div className="offer-grid">
          {OFFERS.map((o, i) => (
            <div key={i} className={`offer-card ${o.featured ? "featured" : ""}`}>
              {o.featured && <span className="feat-tag">Beliebt</span>}
              <span className="offer-tag">{o.tag}</span>
              <h3>{o.name}</h3>
              <div className="price">{o.price}</div>
              <div
                className="desc"
                style={{
                  fontSize: 14,
                  color: o.featured ? "rgba(251,247,242,.75)" : "var(--muted)",
                }}
              >
                {o.desc}
              </div>
              <ul className="offer-features">
                {o.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <div className="offer-cta">
                <Link
                  href="/kontakt"
                  className={`btn ${o.featured ? "btn-ghost" : "btn-primary"}`}
                  style={
                    o.featured ? { borderColor: "var(--cream)", color: "var(--cream)" } : {}
                  }
                >
                  {o.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
