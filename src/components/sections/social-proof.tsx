import Link from "next/link";
import { Reveal } from "./reveal";

const PROJECTS = [
  {
    label: "SEO & GEO · Online-Shops",
    title: "SEO-Betreuung",
    desc: "Strategische und operative Betreuung von zwei Online-Shops im DACH-Markt.",
    stats: ["287 Keywords", "141 Produkte"],
    tag: "SEO · Struktur · Content",
  },
  {
    label: "Amazon Handmade · Audit",
    title: "Listings systematisch analysiert",
    desc: "SEO- und Listing-Audit für ein handgefertigtes Produktsortiment auf Amazon Handmade.",
    stats: ["5 Listings", "425 Keywords"],
    tag: "Sichtbarkeit · Content · Conversion",
  },
  {
    label: "Shopify · International",
    title: "SEO & GEO für einen internationalen Shop",
    desc: "Strategie für einen Shopify-Shop mit B2C- und B2B-Zielgruppen und internationaler Ausrichtung.",
    stats: ["SEO + GEO", "Google + KI"],
    tag: "Strategie · SEO · GEO · KI-Sichtbarkeit",
  },
];

export function SocialProof() {
  return (
    <Reveal className="section proof-transition">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Aus der Praxis</span>
          <h2>Nicht nur beraten. Selbst gemacht.</h2>
          <p className="lead">
            Seit 2008 arbeite ich im E-Commerce – im eigenen Unternehmen und für andere
            Online-Shops. Von SEO und Content über Amazon und Shopify bis zur
            Sichtbarkeit in KI-Systemen.
          </p>
        </div>
        <div className="proof-cards">
          {PROJECTS.map((p) => (
            <div key={p.title} className="proof-card">
              <span className="proof-label">{p.label}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <div className="proof-stats">
                {p.stats.map((s) => (
                  <span key={s} className="proof-stat">
                    {s}
                  </span>
                ))}
              </div>
              <span className="proof-tag">{p.tag}</span>
            </div>
          ))}
        </div>
        <Link href="/ueber-mich" className="btn-link proof-link">
          Weitere Projekte &amp; Einblicke →
        </Link>
      </div>
    </Reveal>
  );
}
