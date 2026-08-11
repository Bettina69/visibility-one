import { Reveal } from "./reveal";

const PROJECTS = [
  {
    title: "Nischenshop Wellness",
    meta: "Shopify",
    desc: "SEO-Vollbetreuung.",
  },
  {
    title: "Nischenshop International",
    meta: "Shopify · B2C & B2B",
    desc: "SEO + GEO, internationale Ausrichtung (u. a. Lateinamerika).",
  },
  {
    title: "Eigener Shop",
    meta: "WooCommerce",
    desc: "GEO-Volloptimierung am eigenen 18-Jahre-Shop.",
  },
];

export function ReferenceProjects() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Referenzprojekte</span>
          <h2>
            Praxis statt <em>Theorie.</em>
          </h2>
        </div>
        <div className="ref-grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className="cred-card">
              <div className="cred-title">{p.title}</div>
              <div className="cred-desc" style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {p.meta}
              </div>
              <div className="cred-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
