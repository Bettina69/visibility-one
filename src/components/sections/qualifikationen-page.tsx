import Link from "next/link";
import { Reveal } from "./reveal";
import { Credibility } from "./credibility";
import { Quals } from "./quals";

const STATS = [
  { num: "18+ Jahre", lbl: "E-Commerce-Praxis" },
  { num: "50.000+", lbl: "Bestellungen" },
  { num: "6 Kanäle", lbl: "Shop & Marktplätze" },
];

function WordPressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" />
      <path d="M6.2 9.3l2.3 7 1.9-5 1.9 5 2.3-7" />
    </svg>
  );
}

function ShopifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

function AmazonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 8l8-4 8 4-8 4-8-4z" />
      <path d="M4 8v8l8 4 8-4V8" />
      <path d="M12 12v8" />
    </svg>
  );
}

function EtsyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M11 4h6a2 2 0 0 1 2 2v6L11.5 20.5a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L11 4z" />
      <circle cx="15.5" cy="8.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Kein offizielles kasuwa-Markenicon in der bestehenden Library - bewusst ein
// neutrales Marktkorb-Motiv statt einer Logo-Nachbildung.
function MarketBasketIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M5 10h14l-1.5 9a2 2 0 0 1-2 1.7h-7a2 2 0 0 1-2-1.7L5 10z" />
      <path d="M8 10a4 4 0 0 1 8 0" />
      <path d="M9 13v5M12 13v5M15 13v5" />
    </svg>
  );
}

// Ebenfalls kein offizielles Markenicon verfügbar - neutrales
// Storefront-Motiv statt Logo-Nachbildung.
function StorefrontIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 9l1-4h14l1 4" />
      <path d="M4 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0" />
      <path d="M5 9v10h14V9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}

const PLATFORMS = [
  { name: "WordPress / WooCommerce", Icon: WordPressIcon },
  { name: "Shopify", Icon: ShopifyIcon },
  { name: "Amazon", Icon: AmazonIcon },
  { name: "Etsy", Icon: EtsyIcon },
  { name: "kasuwa", Icon: MarketBasketIcon },
  { name: "ZEIT Shop", Icon: StorefrontIcon },
];

export function QualifikationenPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Qualifikationen</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            Belegt, aber vor allem praxiserprobt.
          </h1>
          <p className="hero-sub">
            SEO und KI-Sichtbarkeit verändern sich ständig. Deshalb verbinde ich
            fachliche Weiterbildung mit dem, was ich seit 2008 selbst im E-Commerce
            anwende und erlebe.
          </p>
          <p className="hero-sub">
            Nicht nur gelernt. Im eigenen Unternehmen getestet, umgesetzt und
            gemessen.
          </p>
        </div>
      </section>

      <Credibility />
      <Quals />

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Aus der Praxis</span>
            <h2>18+ Jahre E-Commerce aus eigener Erfahrung.</h2>
          </div>
          <p className="check-text">
            Ich kenne die Herausforderungen kleiner Online-Shops nicht nur aus der
            Beratung. Seit 2008 betreibe ich selbst einen Multi-Channel-Shop – mit
            eigenem Onlineshop und verschiedenen Marktplätzen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Ich weiß, was es bedeutet, wenn Traffic zurückgeht, Budgets begrenzt sind
            und nicht jede theoretisch sinnvolle Maßnahme auch wirtschaftlich
            sinnvoll ist.
          </p>
          <div className="about-teaser-stats">
            {STATS.map((s) => (
              <div key={s.lbl}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
          <span className="about-platform-label">Plattform-Erfahrung</span>
          <ul className="about-teaser-stack">
            {PLATFORMS.map(({ name, Icon }) => (
              <li key={name}>
                <Icon />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Weiterlernen</span>
            <h2>Weil sich Suche gerade verändert.</h2>
          </div>
          <p className="check-text">
            SEO bleibt die Grundlage. Gleichzeitig verändern KI-Systeme wie
            ChatGPT, Google AI und Perplexity, wie Menschen Unternehmen, Produkte
            und Informationen finden.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Deshalb gehört für mich zur Beratung auch, Entwicklungen zu
            beobachten, neue Möglichkeiten kritisch zu prüfen und nur das zu
            übernehmen, was für Unternehmen tatsächlich sinnvoll ist.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Qualifikation ist die Grundlage. Entscheidend ist, was daraus wird.</h2>
            <p className="lead">
              Wie ich Analyse, Priorisierung, Umsetzung und Messung miteinander
              verbinde, zeige ich dir in meiner Methode.
            </p>
          </div>
          <Link href="/meine-methode" className="btn-link detail-secondary-link">
            Meine Methode ansehen →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section final-cta">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Kontakt</span>
            <h2>Lass uns schauen, wo du stehst.</h2>
            <p className="lead">
              Du bist dir nicht sicher, was dein Unternehmen bei SEO oder
              KI-Sichtbarkeit gerade braucht? Schick mir deine URL – wir schauen
              gemeinsam, welcher nächste Schritt sinnvoll ist.
            </p>
          </div>
          <div className="detail-cta-row">
            <Link href="/sichtbarkeitscheck" className="btn btn-primary">
              SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
            </Link>
          </div>
          <Link href="/kontakt" className="btn-link detail-secondary-link">
            Unverbindlich anfragen →
          </Link>
        </div>
      </Reveal>
    </>
  );
}
