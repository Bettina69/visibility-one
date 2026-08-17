import Link from "next/link";
import { Reveal } from "./reveal";

const PACKAGES = [
  {
    name: "Starter",
    price: "1.490 €",
    sub: "Verstehen & gezielt verbessern",
    items: [
      "SEO- & KI-Sichtbarkeitsanalyse",
      "Seiten- & Inhaltsstrategie",
      "Content-Optimierung definierter Kernseiten",
      "Abschlussgespräch",
      "weitere Roadmap",
    ],
    idealFor:
      "kleinere Websites und Unternehmen, die zunächst die wichtigsten Hebel angehen möchten.",
  },
  {
    name: "Komplett",
    price: "2.290 €",
    sub: "SEO & KI-Sichtbarkeit ganzheitlich optimieren",
    featured: true,
    items: [
      "alles aus Starter",
      "technischer SEO-Check",
      "strukturierte Daten / Schema",
      "technische Entity-/GEO-Signale",
      "Validierung",
      "Abschluss-Check",
    ],
  },
  {
    name: "All-in-One",
    price: "2.990 €",
    sub: "Optimierung + 3 Monate Begleitung",
    items: [
      "alles aus Komplett",
      "3 Monate Monitoring",
      "Prompt Tracking",
      "Brand Mentions",
      "Citations",
      "Recommendations",
      "Share of Voice",
      "Wettbewerbsentwicklung",
      "Nachsteuerung",
      "Abschlussreview",
    ],
    idealFor:
      "Unternehmen, die nicht nur optimieren, sondern auch sehen möchten, was sich tatsächlich verändert.",
  },
];

export function OffersPackages() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Pakete</span>
          <h2>Du möchtest mehrere Schritte kombinieren?</h2>
          <p className="lead">
            Die Pakete verbinden Analyse, Optimierung und bei Bedarf Monitoring zu
            einem klar definierten Projekt.
          </p>
        </div>
        <div className="offer-paths offer-paths--packages">
          {PACKAGES.map((p) => (
            <div key={p.name} className={`offer-path ${p.featured ? "featured" : ""}`}>
              {p.featured && <span className="offer-path-badge">Empfohlen</span>}
              <h3>{p.name}</h3>
              <div className="offer-path-price">{p.price}</div>
              <p className="offer-path-sub">{p.sub}</p>
              <ul>
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {p.idealFor && <p className="offer-path-idealfor">Ideal für: {p.idealFor}</p>}
            </div>
          ))}
        </div>

        <div className="offer-hourly">
          <h4>Du brauchst nur punktuell Unterstützung?</h4>
          <p>
            Du kannst mich auch flexibel auf Stundenbasis buchen – ohne Paket und ohne
            langfristige Bindung.
          </p>
          <Link href="/kontakt" className="btn-link">
            Unverbindlich anfragen →
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
