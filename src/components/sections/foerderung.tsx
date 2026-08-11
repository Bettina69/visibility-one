import Link from "next/link";
import { Reveal } from "./reveal";

export function Foerderung() {
  return (
    <Reveal className="section foerderung">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">BAFA-Förderung</span>
          <h2>
            Bis zu <em>80%</em> deiner Beratung – <em>gefördert.</em>
          </h2>
        </div>
        <div className="foer-grid">
          <div>
            <div className="foer-num">
              80<span className="pct">%</span>
            </div>
            <p style={{ marginTop: 24, maxWidth: "50ch" }}>
              Als BAFA-anerkannte Beraterin kann ich für viele KMU eine Förderung von
              bis zu 80% der Beratungskosten vermitteln. Das macht professionelle
              GEO-Beratung auch für kleinere Shops sehr realistisch.
            </p>
          </div>
          <div>
            <ul className="foer-list">
              <li>Für KMU mit Sitz in Deutschland</li>
              <li>Bis zu 80% Förderquote (regional unterschiedlich)</li>
              <li>Antragstellung übernehme ich für dich</li>
              <li>Auszahlung nach Abschluss der Beratung</li>
            </ul>
            <Link
              href="/kontakt"
              className="btn btn-primary"
              style={{ marginTop: 32, background: "var(--cream)", color: "var(--ink)" }}
            >
              Förderfähigkeit prüfen →
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
