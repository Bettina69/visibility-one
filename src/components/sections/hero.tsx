import Link from "next/link";
import { NetworkBg } from "./network-bg";

export function Hero() {
  return (
    <section className="hero">
      <NetworkBg />
      <div className="hero-inner">
        <div className="hero-pretitle">
          <span className="dot"></span>
          <span>Wer in KI nicht vorkommt, verliert Reichweite.</span>
        </div>
        <h1 className="hero-title">
          Sichtbar <span className="it">in der<br />neuen</span>{" "}
          <span className="bold">Suche.</span>
        </h1>
        <p className="hero-sub">
          Google und KI-Assistenten wie ChatGPT entscheiden, wer gefunden wird –
          und wer nicht. Ich zeige dir was fehlt und was du konkret tun kannst.
        </p>
        <div className="hero-actions">
          <Link href="/kontakt" className="btn btn-primary">
            Kostenlose KI-Analyse anfragen →
          </Link>
          <Link href="/das-problem" className="btn btn-ghost">
            Was gerade passiert
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
