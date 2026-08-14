const FACTS = [
  { num: "– 60%", label: "weniger Klicks durch AI Overviews – selbst bei Top-Rankings" },
  { num: "– 64%", label: "Trafficverlust je nach Branche" },
  { num: "60%", label: "aller Suchen enden ohne Klick auf eine Website" },
  { num: "– 79%", label: "CTR-Verlust im Worst Case bei einzelnen Suchanfragen" },
];

export function Facts() {
  return (
    <>
      <span className="eyebrow">Was gerade passiert</span>
      <div className="facts-bar">
        {FACTS.map((f, i) => {
          const isNeg = f.num.startsWith("–");
          return (
            <div key={i} className="fact">
              <span className={`fact-num ${isNeg ? "neg" : ""}`}>{f.num}</span>
              <div className="fact-label">{f.label}</div>
            </div>
          );
        })}
      </div>
      <p className="facts-bridge">
        Nicht weil dein SEO schlechter wurde. Sondern weil KI die Antwort liefert – und
        deine Website übersprungen wird.
      </p>
    </>
  );
}
