import { Reveal } from "./reveal";

const PACKAGES = [
  {
    name: "Kompakt S",
    price: "590 €",
    sub: "bis zu 2 bestehende Kernseiten",
    items: [
      "SEO, GEO oder beides – abhängig vom Audit-Befund",
      "relevante Suchbegriffe und Themen",
      "typische Fragen in relevanten KI-Systemen",
    ],
  },
  {
    name: "Fokus M",
    price: "1.190 €",
    sub: "bis zu 5 bestehende Kernseiten",
    items: [
      "SEO, GEO oder beides – abhängig vom Audit-Befund",
      "relevante Suchbegriffe und Themen",
      "typische Fragen in relevanten KI-Systemen",
    ],
  },
  {
    name: "Intensiv L",
    price: "1.790 €",
    sub: "bis zu 8 bestehende Kernseiten",
    items: [
      "SEO, GEO oder beides – abhängig vom Audit-Befund",
      "relevante Suchbegriffe und Themen",
      "typische Fragen in relevanten KI-Systemen",
    ],
  },
];

export function OffersPackages() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Optimierungspakete</span>
          <h2>Welches Paket zu dir passt, klärt das Audit.</h2>
          <p className="lead">
            Die Paketgröße richtet sich nach der Anzahl deiner bestehenden
            Kernseiten. Ob SEO, GEO oder beides optimiert wird, entscheidet der
            Befund aus dem Audit – nicht das Paket selbst.
          </p>
        </div>
        <div className="offer-paths offer-paths--packages">
          {PACKAGES.map((p) => (
            <div key={p.name} className="offer-path">
              <span className="offer-path-label">{p.sub}</span>
              <h3>{p.name}</h3>
              <div className="offer-path-price">{p.price}</div>
              <ul>
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="check-note" style={{ marginTop: 24 }}>
          Nicht automatisch enthalten: vollständige Neuerstellung umfangreicher
          Seiten, umfangreiche zusätzliche Texterstellung, Programmierung oder
          größere technische Eingriffe. Für Projekte oberhalb von Intensiv L
          erstelle ich ein individuelles Angebot.
        </p>
      </div>
    </Reveal>
  );
}
