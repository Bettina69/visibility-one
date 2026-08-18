import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/lib/site-config";
import { Reveal } from "./reveal";

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

const PRINCIPLES = [
  {
    num: "01",
    title: "SEO zuerst verstehen",
    text: "Ohne eine solide SEO-Basis funktioniert auch keine KI-Sichtbarkeit. Deshalb stehen bestehende Struktur, Inhalte und Technik immer am Anfang.",
  },
  {
    num: "02",
    title: "KI-Sichtbarkeit ergänzen",
    text: "Darauf aufbauend prüfe ich, wie ein Unternehmen in KI-Antworten vorkommt – ob es genannt, zitiert und empfohlen wird.",
  },
  {
    num: "03",
    title: "Nur sinnvolle Maßnahmen umsetzen",
    text: "Nicht jede theoretisch mögliche Optimierung bringt etwas. Priorität hat, was tatsächlich einen Unterschied macht.",
  },
];

const WORKING_POINTS = [
  {
    num: "01",
    title: "1:1 Zusammenarbeit",
    text: "Du sprichst direkt mit mir – ohne Zwischenstationen, ohne wechselnde Ansprechpartner.",
  },
  {
    num: "02",
    title: "Daten statt Bauchgefühl",
    text: "Entscheidungen basieren auf echten Zahlen aus SEO- und KI-Sichtbarkeit, nicht auf Vermutungen.",
  },
  {
    num: "03",
    title: "Praxis statt Theorie",
    text: "Ich schlage nichts vor, das ich nicht selbst in meinem eigenen Shop geprüft oder eingesetzt habe.",
  },
  {
    num: "04",
    title: "Verständlich statt technisch kompliziert",
    text: "Du bekommst Erklärungen und Empfehlungen, die auch ohne SEO-Hintergrund nachvollziehbar sind.",
  },
];

const PROJECTS = [
  {
    title: "SEO für Online-Shops",
    desc: "Strategische und operative SEO-Betreuung von zwei Online-Shops im DACH-Markt.",
  },
  {
    title: "Amazon Handmade",
    desc: "SEO- und Listing-Audit für ein handgefertigtes Produktsortiment.",
  },
  {
    title: "Shopify International",
    desc: "SEO- & GEO-Strategie für einen internationalen Shopify-Shop mit B2C- und B2B-Zielgruppen.",
  },
];

export function AboutPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="about-hero-grid">
            <div>
              <span className="eyebrow">Über mich</span>
              <h1 className="hero-title" style={{ marginTop: 16 }}>
                Unternehmerin. Strategin.
                <br />
                SEO- &amp; KI-Beraterin.
              </h1>
              <p className="hero-sub">
                Ich berate nicht aus der Distanz. Seit 2008 führe ich mein eigenes
                E-Commerce-Unternehmen – mit allem, was dazugehört: Sichtbarkeit
                gewinnen, Kund:innen verstehen und Entscheidungen treffen, wenn nicht
                jede Antwort eindeutig ist.
              </p>
              <p className="hero-sub">
                SEO, Content, Shopsysteme, Marktplätze und inzwischen auch
                KI-Sichtbarkeit sind für mich keine Theorie, sondern tägliche Praxis –
                in meinem eigenen Shop und in der Arbeit mit anderen Unternehmen.
              </p>
              <a href="#arbeitsweise" className="btn-link about-hero-scroll">
                Mehr über meine Arbeitsweise ↓
              </a>
            </div>
            <div className="about-hero-photo">
              <Image
                src={`${basePath}/bettina-portrait-about.jpg`}
                alt="Bettina Teckentrup"
                width={900}
                height={1350}
                sizes="(min-width: 900px) 360px, 70vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Aus eigener Erfahrung</span>
            <h2>18+ Jahre E-Commerce aus eigener Praxis.</h2>
          </div>
          <p className="check-text">
            Ich kenne die Herausforderungen kleiner Online-Shops nicht nur aus der
            Beratung. Seit 2008 betreibe ich selbst einen Multi-Channel-Shop – mit
            eigenem Onlineshop und verschiedenen Marktplätzen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Ich weiß, was es bedeutet, wenn Traffic zurückgeht, Budgets begrenzt sind
            und nicht jede theoretisch sinnvolle Maßnahme auch wirtschaftlich sinnvoll
            ist.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Deshalb arbeite ich anders als klassische Agenturen: erst verstehen, was
            in deinem Unternehmen tatsächlich wichtig ist – dann priorisieren, was
            sich davon auch wirklich lohnt.
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
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">Warum Visibility One</span>
            <h2>
              SEO bleibt die Grundlage.
              <br />
              KI verändert, wo Sichtbarkeit entsteht.
            </h2>
            <p className="lead">
              Menschen suchen weiterhin bei Google. Gleichzeitig stellen immer mehr
              Menschen ihre Fragen direkt an KI-Systeme. Wer nur für Google sichtbar
              ist, aber in KI-Antworten nicht vorkommt, verliert dort unbemerkt an
              Boden.
            </p>
          </div>
          <div className="phase-list">
            {PRINCIPLES.map((p) => (
              <div key={p.num} className="phase-item">
                <span className="phase-num">{p.num}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section" id="arbeitsweise">
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">Meine Arbeitsweise</span>
            <h2>Direkt, datenbasiert und ohne Agenturumwege.</h2>
          </div>
          <div className="phase-list">
            {WORKING_POINTS.map((p) => (
              <div key={p.num} className="phase-item">
                <span className="phase-num">{p.num}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Aus der eigenen Praxis entstanden</span>
            <h2>AI Image Marker</h2>
          </div>
          <p className="check-text">
            In meinem eigenen Shop nutze ich KI längst praktisch – etwa um Produkt-
            und Stimmungsbilder schneller zu erstellen oder zu bearbeiten.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Daraus ist ein kostenloses Tool entstanden: der AI Image Marker. Er hilft
            dabei, KI-generierte oder KI-bearbeitete Bilder transparent zu
            kennzeichnen.
          </p>
          <div className="offer-intro-card offer-intro-card--compact">
            <p>
              JPG- oder PNG-Bilder hochladen und mit einem Label „KI“,
              „KI-bearbeitet“ oder „KI-generiert“ versehen – Größe, Position und
              Transparenz lassen sich individuell anpassen.
            </p>
            <div className="offer-intro-cta">
              <a
                href="https://ai.visibility-one.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                AI Image Marker öffnen →
              </a>
              <span className="offer-intro-hint">
                Kostenlos nutzbar · Bilder werden spätestens nach 60 Minuten
                gelöscht · keine Rechtsberatung.
              </span>
            </div>
          </div>
          <Link href="/ki-bilder-kennzeichnen" className="btn-link detail-secondary-link">
            Mehr über KI-Bilder &amp; Kennzeichnung →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">Aus der Praxis</span>
            <h2>Nicht nur im eigenen Shop.</h2>
            <p className="lead">
              Neben meinem eigenen Shop arbeite ich auch für andere Unternehmen an
              SEO, Content, Shop-Struktur und Sichtbarkeit – bei Google wie in
              KI-Systemen.
            </p>
          </div>
          <div className="proof-cards">
            {PROJECTS.map((p) => (
              <div key={p.title} className="proof-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Fachlicher Hintergrund</span>
            <h2>Praxis – ergänzt durch kontinuierliche Weiterbildung.</h2>
          </div>
          <p className="check-text">
            Mein Wissen kommt in erster Linie aus der eigenen Praxis. Ergänzend
            bilde ich mich kontinuierlich zu SEO, GEO und KI-Sichtbarkeit weiter, um
            auf dem aktuellen Stand zu bleiben.
          </p>
          <Link href="/qualifikationen" className="btn-link detail-secondary-link">
            Qualifikationen ansehen →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section final-cta">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Nächster Schritt</span>
            <h2>Lass uns schauen, wo du stehst.</h2>
            <p className="lead">
              Der einfachste Einstieg ist der kostenlose Sichtbarkeitscheck. Du
              bekommst eine erste Einschätzung – unverbindlich und ohne
              Verkaufsgespräch.
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
