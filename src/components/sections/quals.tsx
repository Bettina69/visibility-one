import { Reveal } from "./reveal";

const QUALS = [
  { label: "BAFA", name: "Anerkannte Unternehmensberaterin", meta: "Förderfähige Beratung" },
  { label: "IHK", name: "Geprüfte E-Commerce-Managerin", meta: "Seit 2018" },
  { label: "Google", name: "Analytics & Search Console", meta: "Zertifizierte Auswertung" },
  { label: "Google", name: "GA4", meta: "Zertifiziert" },
  { label: "HubSpot", name: "HubSpot-Zertifizierung", meta: "Zertifikat vorhanden" },
  { label: "SEMrush", name: "SEMrush-Zertifizierung", meta: "Zertifikat vorhanden" },
  { label: "Shopify", name: "Partner-Programm", meta: "Shop-Optimierung" },
  { label: "OMR", name: "Speakerin & Workshop-Leiterin", meta: "KI-Sichtbarkeit für Shops" },
  { label: "Eigene", name: "Shop-Erfahrung seit 2008", meta: "18+ Jahre Praxis" },
];

export function Quals() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Qualifikationen</span>
          <h2>
            Belegt. <em>Praxiserprobt.</em>
          </h2>
        </div>
        <div className="qual-grid">
          {QUALS.map((q, i) => (
            <div key={i} className="qual-card">
              <span className="label">{q.label}</span>
              <div className="name">{q.name}</div>
              <div className="meta">{q.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
