import Link from "next/link";
import { Reveal } from "./reveal";

const OFFERS = [
  {
    label: "01 · Verstehen",
    title: "SEO- & KI-Sichtbarkeits-Audit",
    price: "790 €",
    desc: "Du musst vorher nicht wissen, ob du SEO, GEO oder beides brauchst. Das Audit zeigt, wo dein Unternehmen bei Google und in KI-Systemen tatsächlich steht – und ob überhaupt Handlungsbedarf besteht.",
    points: [
      "Google- und SEO-Sichtbarkeit",
      "relevante Themen und Suchanfragen",
      "KI-Sichtbarkeit",
      "Brand Mentions",
      "Citations",
      "Recommendations",
      "Sentiment",
      "Share of Voice",
      "Wettbewerbsvergleich",
      "Befund: SEO, GEO, SEO + GEO oder kein Bedarf",
    ],
    cta: "Audit ansehen →",
    href: "/angebote/analyse",
  },
  {
    label: "02 · Optimieren",
    title: "Optimierungspaket",
    price: "ab 590 €",
    desc: "Nur wenn das Audit Handlungsbedarf zeigt: drei Pakete für bis zu 2, 5 oder 8 bestehende Kernseiten – SEO, GEO oder beides, je nach Befund.",
    points: [
      "Kompakt S · bis zu 2 Kernseiten",
      "Fokus M · bis zu 5 Kernseiten",
      "Intensiv L · bis zu 8 Kernseiten",
      "keine künstlich getrennte SEO-/GEO-Abrechnung",
    ],
    cta: "Optimierung ansehen →",
    href: "/angebote/optimierung",
  },
  {
    label: "03 · Begleiten",
    title: "Monitoring & laufende Beratung",
    price: "349 € / Monat",
    desc: "Ausschließlich für Kunden, die zuvor von mir beraten oder optimiert wurden. Kein frei buchbares Einstiegsprodukt.",
    points: [
      "Google-Sichtbarkeit",
      "Prompt- und KI-Sichtbarkeit",
      "Brand Mentions",
      "Citations",
      "Recommendations",
      "Sentiment-Entwicklung",
      "Share of Voice",
      "Wettbewerbsentwicklung",
      "monatliche Einordnung",
      "konkrete nächste Schritte",
    ],
    cta: "Begleitung ansehen →",
    href: "/angebote/begleitung",
  },
];

export function OffersMain() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Angebote</span>
          <h2>Vom Befund zur passenden Unterstützung.</h2>
          <p className="lead">
            Erst verstehen, dann gezielt optimieren und bei Bedarf weiter begleiten.
          </p>
        </div>
        <div className="offer-paths offer-paths--main">
          {OFFERS.map((o) => (
            <div key={o.title} className="offer-path">
              <span className="offer-path-label">{o.label}</span>
              <h3>{o.title}</h3>
              <div className="offer-path-price">{o.price}</div>
              <p>{o.desc}</p>
              <ul>
                {o.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link href={o.href} className="offer-path-cta">
                {o.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
