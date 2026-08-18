import { Fragment } from "react";

type FlowStage = {
  title: string;
  text: string;
  uncertain?: boolean;
};

export function RelationshipFlow({ stages }: { stages: FlowStage[] }) {
  return (
    <div className="seo-ai-flow">
      {stages.map((s, i) => (
        <Fragment key={s.title}>
          {i > 0 && (
            <span
              className={`seo-ai-flow-connector${
                s.uncertain ? " seo-ai-flow-connector--uncertain" : ""
              }`}
              aria-hidden="true"
            >
              {s.uncertain ? "⇢" : "→"}
            </span>
          )}
          <div
            className={`seo-ai-flow-stage${
              s.uncertain ? " seo-ai-flow-stage--uncertain" : ""
            }`}
          >
            <span className="seo-ai-flow-title">{s.title}</span>
            <span className="seo-ai-flow-text">{s.text}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
