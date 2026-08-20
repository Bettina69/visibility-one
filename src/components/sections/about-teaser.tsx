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

export function AboutTeaser() {
  return (
    <Reveal className="section about-transition">
      <div className="wrap">
        <div className="about-teaser">
          <div className="about-teaser-text">
            <span className="eyebrow">Über mich</span>
            <h2>Ich kenne nicht nur die Marketingseite. Ich kenne auch deine.</h2>
            <p>
              Seit 18 Jahren betreibe ich selbst einen Onlineshop – mit rund 550
              Produkten und über 200 Landingpages. Mit Google Analytics und der
              Search Console habe ich immer wieder neu entschieden, wo sich Arbeit
              tatsächlich lohnt.
            </p>
            <p>
              Ich habe erlebt, wie schnell sich Plattformen und Suchverhalten ändern
              können – und weiß, was es bedeutet, wenn Budgets begrenzt sind und
              nicht jede theoretisch sinnvolle Maßnahme auch wirtschaftlich sinnvoll
              ist. Deshalb geht es mir bei SEO und KI-Sichtbarkeit nicht darum,
              möglichst viel zu optimieren – sondern herauszufinden, was für dein
              Unternehmen wirklich sinnvoll ist.
            </p>
            <div className="about-teaser-stats">
              {STATS.map((s) => (
                <div key={s.lbl}>
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
            <ul className="about-teaser-stack">
              {PLATFORMS.map(({ name, Icon }) => (
                <li key={name}>
                  <Icon />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
            <Link href="/ueber-mich" className="btn-link about-teaser-cta">
              Mehr über mich →
            </Link>
          </div>
          <div className="about-teaser-photo">
            <Image
              src={`${basePath}/bettina-portrait-about.jpg`}
              alt="Bettina Teckentrup"
              width={900}
              height={1350}
              sizes="(min-width: 900px) 320px, 70vw"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
