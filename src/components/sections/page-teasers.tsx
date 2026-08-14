import Link from "next/link";
import { Reveal } from "./reveal";

const TEASERS = [
  {
    href: "/meine-methode",
    eyebrow: "Meine Methode",
    title: "Ein Arbeitsschritt, doppelter Nutzen.",
    desc: "Strategie, Struktur, Content, Technik, Monitoring – für Google und KI zugleich.",
  },
  {
    href: "/angebote",
    eyebrow: "Angebote",
    title: "Einfach starten, ohne großes Commitment.",
    desc: "Vom kostenlosen Quick-Check bis zur laufenden Begleitung.",
  },
  {
    href: "/ueber-mich",
    eyebrow: "Über mich",
    title: "18+ Jahre eigene Shop-Praxis.",
    desc: "Kein Lehrbuch-Wissen, sondern gelebte E-Commerce-Erfahrung.",
  },
  {
    href: "/qualifikationen",
    eyebrow: "Qualifikationen",
    title: "Belegt, praxiserprobt.",
    desc: "BAFA, Google, IHK, Shopify und weitere Zertifizierungen.",
  },
  {
    href: "/foerderung",
    eyebrow: "Förderung",
    title: "Bis zu 80% gefördert.",
    desc: "Als BAFA-anerkannte Beraterin kläre ich deine Förderfähigkeit.",
  },
];

export function PageTeasers() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="method-list">
          {TEASERS.map((t) => (
            <Link key={t.href} href={t.href} className="method-item">
              <span className="eyebrow">{t.eyebrow}</span>
              <div className="method-mid">
                <h3>{t.title}</h3>
              </div>
              <div>
                <div className="method-desc">{t.desc}</div>
                <span className="method-tag">Mehr erfahren</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
