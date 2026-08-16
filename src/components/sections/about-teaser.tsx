import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";

const STATS = [
  { num: "18+ Jahre", lbl: "E-Commerce-Praxis" },
  { num: "50.000+", lbl: "Bestellungen" },
  { num: "6 Kanäle", lbl: "Shop & Marktplätze" },
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
            <Link href="/ueber-mich" className="btn-link about-teaser-cta">
              Mehr über mich →
            </Link>
          </div>
          <div className="about-teaser-photo">
            <Image
              src="/bettina-portrait-about.jpg"
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
