import Link from "next/link";
import { Reveal } from "./reveal";

export function OffersFreeCheck() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Kostenloser Einstieg</span>
          <h2>Erst einmal sehen, wo du stehst?</h2>
        </div>
        <div className="offer-intro-card offer-intro-card--compact">
          <p>
            Schick mir deine URL. Ich werfe einen ersten Blick auf deine Sichtbarkeit
            bei Google und in KI-Systemen und schicke dir 2–3 konkrete Beobachtungen.
          </p>
          <div className="offer-intro-cta">
            <Link href="/sichtbarkeitscheck" className="btn btn-primary">
              SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
            </Link>
            <span className="offer-intro-hint">
              unverbindlich · persönlich geprüft · 2–3 konkrete Hinweise
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
