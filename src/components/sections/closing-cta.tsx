import Link from "next/link";
import { Reveal } from "./reveal";

export function ClosingCta() {
  return (
    <Reveal className="section contact-transition">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Kontakt</span>
          <h2>Lass uns schauen, wo du stehst.</h2>
          <p className="lead">
            Du bist dir nicht sicher, was dein Unternehmen bei SEO oder KI-Sichtbarkeit
            gerade braucht? Schreib mir – wir schauen gemeinsam, welcher nächste Schritt
            sinnvoll ist.
          </p>
        </div>
        <div className="cta-options">
          <div className="cta-option">
            <h3>Erst einmal unverbindlich starten?</h3>
            <p>
              Schick mir deine URL. Ich werfe einen ersten Blick auf deine Sichtbarkeit
              bei Google und in KI-Systemen.
            </p>
            <Link href="/sichtbarkeitscheck" className="btn btn-primary">
              SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
            </Link>
          </div>
          <div className="cta-option">
            <h3>Du weißt schon, wobei du Unterstützung brauchst?</h3>
            <p>Dann schreib mir direkt. Ich melde mich persönlich bei dir.</p>
            <Link href="/kontakt" className="btn-link">
              Unverbindlich anfragen →
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
