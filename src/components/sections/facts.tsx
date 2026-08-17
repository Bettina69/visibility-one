const FACTS = [
  {
    num: "− 25 %",
    label: "weniger klassische Suchanfragen bis 2026 durch KI-Assistenten",
    sourceLabel: "Gartner (Prognose)",
    href: "https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents",
    neg: true,
  },
  {
    num: "− 58 %",
    label: "weniger Klickrate auf Position 1 bei Google AI Overviews",
    sourceLabel: "Ahrefs · 300.000 Keywords",
    href: "https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/",
    neg: true,
  },
  {
    num: "8 % statt 15 %",
    label: "Klickrate auf Google-Ergebnisse mit vs. ohne KI-Zusammenfassung",
    sourceLabel: "Pew Research Center",
    href: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/",
    neg: true,
  },
  {
    num: "2–5×",
    label: "höhere Klickrate bei Zitation in Google AI Overviews",
    sourceLabel: "Seer Interactive",
    href: "https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update",
    neg: false,
  },
];

export function Facts() {
  return (
    <>
      <h3 className="eyebrow facts-eyebrow">Warum das gerade passiert</h3>
      <div className="facts-bar">
        {FACTS.map((f, i) => (
          <div key={i} className="fact">
            <span className={`fact-num ${f.neg ? "neg" : ""}`}>{f.num}</span>
            <div className="fact-label">{f.label}</div>
            <a
              className="fact-source"
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quelle: {f.sourceLabel} ↗
            </a>
          </div>
        ))}
      </div>
      <p className="facts-bridge">
        Dein SEO muss nicht schlechter geworden sein. Die Suche selbst verändert sich –
        und KI entscheidet zunehmend mit, welche Unternehmen sichtbar werden.
      </p>
    </>
  );
}
