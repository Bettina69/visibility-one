export function SeoToAiVisibilityFlow() {
  return (
    <div className="seo-ai-flow">
      <div className="seo-ai-flow-stage">
        <span className="seo-ai-flow-title">SEO-Sichtbarkeit</span>
        <span className="seo-ai-flow-text">
          Technische Auffindbarkeit, thematische Relevanz
        </span>
      </div>
      <span className="seo-ai-flow-connector" aria-hidden="true">
        →
      </span>
      <div className="seo-ai-flow-stage">
        <span className="seo-ai-flow-title">Verständlichkeit</span>
        <span className="seo-ai-flow-text">
          Klare Einordnung durch Such- und KI-Systeme
        </span>
      </div>
      <span
        className="seo-ai-flow-connector seo-ai-flow-connector--uncertain"
        aria-hidden="true"
      >
        ⇢
      </span>
      <div className="seo-ai-flow-stage seo-ai-flow-stage--uncertain">
        <span className="seo-ai-flow-title">Mögliche KI-Sichtbarkeit</span>
        <span className="seo-ai-flow-text">
          Mention · Citation · Recommendation
        </span>
      </div>
    </div>
  );
}
