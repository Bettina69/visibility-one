import Link from "next/link";

export function CheckHero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <span className="eyebrow">Kostenloser Sichtbarkeitscheck</span>
        <h1 className="hero-title" style={{ marginTop: 16 }}>
          SEO &amp; KI-Sichtbarkeit <span className="soft">kostenlos prüfen</span>
        </h1>
        <p className="hero-keymessage">
          Weißt du, wie sichtbar dein Unternehmen wirklich ist?
        </p>
        <p className="hero-sub">
          Kunden suchen längst nicht mehr nur bei Google. Sie fragen auch ChatGPT,
          Google AI, Perplexity &amp; Co.
        </p>
        <p className="hero-explainer" style={{ marginBottom: 20 }}>
          Ich schaue mir deshalb beides an: Wie sichtbar ist deine Website heute bei
          Google – und taucht dein Unternehmen bereits in der KI-Suche auf?
        </p>
        <div className="hero-actions">
          <Link href="#check-form" className="btn btn-primary">
            SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
          </Link>
        </div>
        <p className="check-trust">Kostenlos · unverbindlich · verständlich erklärt</p>
      </div>
    </section>
  );
}
