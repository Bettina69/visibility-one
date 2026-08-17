import { Reveal } from "./reveal";

const QUALS = [
  {
    title: "SISTRIX Seminar",
    institution: "SISTRIX GmbH",
    desc: "Fachschulung im führenden SEO-Analyse-Tool für den deutschsprachigen Markt. Grundlage für datenbasierte SEO- und KI-Sichtbarkeitsanalysen.",
    status: "✓ Zertifikat vorhanden",
  },
  {
    title: "SEO Certification Course",
    institution: "HubSpot Academy",
    desc: "Zertifizierung in Suchmaschinenoptimierung – Keyword-Strategie, On-Page-Optimierung, technisches SEO und Content-Planung.",
    status: "✓ Zertifikat vorhanden",
  },
  {
    title: "SEO Fundamentals",
    institution: "Semrush Academy",
    desc: "Zertifizierung in SEO-Grundlagen, Keyword-Recherche, Ranking-Analyse und technischer Optimierung.",
    status: "✓ Zertifikat vorhanden",
  },
  {
    title: "Google Zukunftswerkstatt",
    institution: "Google Deutschland",
    desc: "Trainings in Online-Marketing, SEO, Google Ads & Analytics, E-Commerce und digitalen Geschäftsmodellen.",
    status: "✓ Zertifikat vorhanden",
  },
  {
    title: "Google Analytics 4 (GA4)",
    institution: "Google",
    desc: "Zertifizierung in Google Analytics 4 – Analyse von Website-Traffic, Nutzerverhalten, Akquisition und Conversions als Grundlage für datenbasierte SEO- und E-Commerce-Entscheidungen.",
    status: "✓ Zertifikat vorhanden",
  },
  {
    title: "18+ Jahre E-Commerce-Praxis",
    institution: "Glückspilz-Shop · seit 2008",
    desc: "Operative E-Commerce-Erfahrung im eigenen Multi-Channel-Shop mit eigenem Onlineshop und verschiedenen Marktplätzen – verbunden mit praktischer SEO- und GEO-Umsetzung.",
    status: "✓ Nachgewiesene Praxis",
  },
];

export function Quals() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Qualifikationen im Überblick</span>
          <h2>Zertifikate und praktische Erfahrung im Überblick.</h2>
        </div>
        <div className="qual-grid">
          {QUALS.map((q) => (
            <div key={q.title} className="qual-card">
              <span className="label">{q.institution}</span>
              <div className="name">{q.title}</div>
              <p className="qual-card-desc">{q.desc}</p>
              <span className="qual-card-status">{q.status}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
