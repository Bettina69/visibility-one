const ITEMS = [
  "SEO · Sichtbarkeit in Google",
  "GEO · Sichtbarkeit in KI",
  "ChatGPT · Google AI · Perplexity",
  "E-Commerce · Shops · KMU",
  "visibility-one.de",
  "KI verändert gerade alles",
  "Content-Strategie · Technische SEO",
];

export function Marquee() {
  const all = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((t, i) => (
          <span key={i}>
            {t}
            <span className="sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
