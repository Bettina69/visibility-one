const CONTEXT_TAGS = [
  "Situation",
  "Zielgruppe",
  "Problem",
  "Anforderungen",
  "Entscheidungskriterium",
];

export function KeywordPromptVisual({
  keyword,
  prompt,
}: {
  keyword: string;
  prompt: string;
}) {
  return (
    <div className="kp-visual">
      <div className="kp-visual-col">
        <span className="kp-visual-label">Keyword</span>
        <span className="kp-visual-keyword">{keyword}</span>
      </div>
      <div className="kp-visual-arrow" aria-hidden="true">
        →
      </div>
      <div className="kp-visual-col">
        <span className="kp-visual-label">Prompt</span>
        <p className="kp-visual-prompt">„{prompt}“</p>
        <ul className="kp-visual-tags">
          {CONTEXT_TAGS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
