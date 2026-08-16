import Image from "next/image";
import Link from "next/link";
import { NetworkBg } from "./network-bg";

// BAFA-Baustein bleibt vollstaendig im Code, wird aber aktuell nicht
// ausgegeben (keine Zertifizierung vorhanden). Auf true setzen, sobald
// die BAFA-Beratereigenschaft wieder aktiv beworben werden soll.
const SHOW_BAFA = false;

export function Hero() {
  return (
    <section className="hero">
      <NetworkBg />
      <div className="hero-portrait-wrap">
        <div className="hero-portrait">
          <Image
            src="/bettina-portrait.jpg"
            alt="Bettina Teckentrup"
            width={520}
            height={520}
            sizes="(min-width: 641px) 260px, 96px"
            priority
          />
        </div>
        <p className="hero-portrait-caption">
          <strong>Bettina Teckentrup</strong>
          SEO · E-Commerce · KI-Sichtbarkeit
        </p>
      </div>
      <div className="hero-inner">
        <h1 className="hero-title">
          SEO &amp; KI-Sichtbarkeit <span className="soft">für kleine Unternehmen</span>
        </h1>
        <p className="hero-keymessage">Sichtbar bei Google. Gefunden in der KI-Suche.</p>
        <p className="hero-sub">
          SEO ist die Grundlage – die Optimierung für KI-Systeme ist die Ergänzung.
        </p>
        <p className="hero-question">Weißt du, wie KI dein Unternehmen sieht?</p>
        <p className="hero-explainer">
          Kunden suchen längst nicht mehr nur bei Google. Sie fragen ChatGPT, Google AI
          oder Perplexity. Aber taucht dein Unternehmen dort überhaupt auf?
        </p>
        <div className="hero-actions">
          <Link href="/kontakt" className="btn btn-primary">
            Kostenlose KI-Sichtbarkeitsanalyse →
          </Link>
        </div>
        {SHOW_BAFA && (
          <div className="bafa-strip">
            <span className="badge">BAFA</span>
            <span>
              <strong>BAFA-anerkannte Beraterin</strong> · Förderung möglich
            </span>
            <Link href="/foerderung" className="btn-link">
              Mehr erfahren
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
