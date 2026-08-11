import { Reveal } from "./reveal";

const STATS = [
  { num: "– 60%", label: "weniger Klicks durch AI Overviews – selbst bei Top-Rankings" },
  { num: "– 64%", label: "Trafficverlust je nach Branche" },
  { num: "60%", label: "aller Suchen enden ohne Klick auf eine Website" },
  { num: "– 79%", label: "CTR-Verlust im Worst Case bei einzelnen Suchanfragen" },
];

export function Stats() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Was passiert</span>
          <p className="lead">
            Was gerade mit deinem Traffic passiert – und warum es nichts mit deinem SEO
            zu tun hat.
          </p>
        </div>
        <div className="stats-grid">
          {STATS.map((s, i) => {
            const isNeg = s.num.startsWith("–");
            return (
              <div key={i} className="stat">
                <span className={`stat-num ${isNeg ? "neg" : ""}`}>{s.num}</span>
                <div className="stat-label">{s.label}</div>
              </div>
            );
          })}
        </div>
        <p
          className="lead"
          style={{
            marginTop: 56,
            fontSize: 22,
            fontStyle: "italic",
            maxWidth: "60ch",
            color: "var(--ink)",
          }}
        >
          Nicht weil dein SEO schlechter wurde. Sondern weil KI die Antwort liefert – und
          deine Website übersprungen wird.
        </p>
      </div>
    </Reveal>
  );
}
