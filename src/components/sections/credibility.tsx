import { Reveal } from "./reveal";
import { NetworkBg } from "./network-bg";

const ITEMS = [
  {
    num: "18+",
    title: "Jahre eigener Shop-Erfahrung",
    desc: "Ich weiß, wie es sich anfühlt, wenn Traffic einbricht – aus eigener Erfahrung.",
  },
  {
    num: "2008",
    title: "Seit wann ich E-Commerce betreibe",
    desc: "WooCommerce, Etsy, Amazon, Shopify, Dropshipping – ich kenne alle Seiten.",
  },
  {
    num: "1:1",
    title: "Direkte Zusammenarbeit – keine Agentur",
    desc: "Du arbeitest immer mit mir persönlich, nicht mit wechselnden Mitarbeitenden.",
  },
];

export function Credibility() {
  return (
    <Reveal className="section cred-section">
      <NetworkBg side="left" />
      <div className="wrap">
        <div className="cred-grid">
          {ITEMS.map((it, i) => (
            <div key={i} className="cred-card">
              <div className="cred-num">{it.num}</div>
              <div className="cred-title">{it.title}</div>
              <div className="cred-desc">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
