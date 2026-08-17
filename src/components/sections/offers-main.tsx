import Link from "next/link";
import { Reveal } from "./reveal";

const OFFERS = [
  {
    label: "01 · Verstehen",
    title: "SEO- & KI-Sichtbarkeitsanalyse",
    price: "490 €",
    desc: "Du möchtest wissen, warum deine Sichtbarkeit nachlässt, wo Wettbewerber stärker sind und wie dein Unternehmen bei Google und in KI-Systemen tatsächlich dasteht.",
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
      "Ursachen und priorisierte Handlungsfelder",
    ],
    cta: "Analyse ansehen →",
    href: "/angebote/analyse",
  },
  {
    label: "02 · Optimieren",
    title: "SEO- & KI-Optimierung",
    priceHints: ["einzelne Bausteine ab 390 €", "operative Optimierung ab 690 €"],
    desc: "Wenn klar ist, wo die größten Hebel liegen, optimieren wir genau die Bereiche, die für dein Unternehmen relevant sind.",
    points: [
      "Seiten- & Inhaltsstrategie",
      "Content-Optimierung",
      "technisches SEO & strukturierte Daten",
      "Vertrauenssignale & menschliche Prüfung",
    ],
    cta: "Optimierung ansehen →",
    href: "/angebote/optimierung",
  },
  {
    label: "03 · Begleiten",
    title: "Monitoring & laufende Beratung",
    price: "349 € / Monat",
    desc: "Du möchtest wissen, ob Maßnahmen wirken und was sich bei Google und in der KI-Suche verändert.",
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
        <div className="offer-paths offer-paths--main">
          {OFFERS.map((o) => (
            <div key={o.title} className="offer-path">
              <span className="offer-path-label">{o.label}</span>
              <h3>{o.title}</h3>
              {o.price && <div className="offer-path-price">{o.price}</div>}
              {o.priceHints && (
                <div className="offer-path-price offer-path-price--hint">
                  {o.priceHints.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              )}
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
