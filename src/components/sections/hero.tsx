import Link from "next/link";
import { NetworkBg } from "./network-bg";

export function Hero() {
  return (
    <section className="hero">
      <NetworkBg />
      <div className="hero-inner">
        <h1 className="hero-title">
          SEO &amp; KI-Sichtbarkeit <span className="soft">für kleine Unternehmen</span>
        </h1>
        <p className="hero-keymessage">Sichtbar bei Google. Gefunden in der KI-Suche.</p>
        <p className="hero-sub">
          SEO ist die Grundlage – die Optimierung für KI-Systeme ist die Ergänzung.
        </p>
        <div className="hero-actions">
          <Link href="/kontakt" className="btn btn-primary">
            KI-Sichtbarkeit kostenlos testen →
          </Link>
          <Link href="/angebote" className="btn btn-ghost">
            Leistungen ansehen
          </Link>
        </div>
        <div className="bafa-strip">
          <span className="badge">BAFA</span>
          <span>
            <strong>BAFA-anerkannte Beraterin</strong> · Förderung möglich
          </span>
          <Link href="/foerderung" className="btn-link">
            Mehr erfahren
          </Link>
        </div>
      </div>
    </section>
  );
}
