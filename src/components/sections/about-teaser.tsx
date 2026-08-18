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

const PLATFORMS = [
  { name: "WordPress / WooCommerce", Icon: WordPressIcon },
  { name: "Shopify", Icon: ShopifyIcon },
  { name: "Amazon", Icon: AmazonIcon },
  { name: "Etsy", Icon: EtsyIcon },
];

export function AboutTeaser() {
  return (
    <Reveal className="section about-transition">
      <div className="wrap">
        <div className="about-teaser">
          <div className="about-teaser-text">
            <span className="eyebrow">Über mich</span>
            <h2>18+ Jahre E-Commerce aus eigener Erfahrung.</h2>
            <p>
              Ich kenne die Herausforderungen kleiner Online-Shops nicht nur aus der
              Beratung. Seit 2008 betreibe ich selbst einen Multi-Channel-Shop – mit
              eigenem Onlineshop und verschiedenen Marktplätzen.
            </p>
            <p>
              Ich weiß, was es bedeutet, wenn Traffic zurückgeht, Budgets begrenzt sind
              und nicht jede theoretisch sinnvolle Maßnahme auch wirtschaftlich sinnvoll
              ist.
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
