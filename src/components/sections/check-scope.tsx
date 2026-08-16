import { Reveal } from "./reveal";

const ITEMS = [
  {
    title: "Google-Sichtbarkeit",
    desc: "Ist deine Website grundsätzlich organisch sichtbar und wird sie für relevante Suchanfragen gefunden?",
  },
  {
    title: "Relevante Suchbegriffe",
    desc: "Für welche Themen und Suchanfragen ist deine Website bereits sichtbar?",
  },
  {
    title: "KI-Erwähnungen",
    desc: "Taucht dein Unternehmen bzw. deine Marke in relevanten KI-Antworten auf?",
  },
  {
    title: "Citations",
    desc: "Wird deine Website von KI-Systemen als Quelle herangezogen?",
  },
  {
    title: "Recommendations",
    desc: "Wird dein Unternehmen bei passenden Fragen von KI-Systemen empfohlen?",
  },
];

export function CheckScope() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Dein Sichtbarkeits-Check</span>
          <h2>Was ich mir für dich anschaue</h2>
          <p className="lead">
            Du bekommst keinen komplizierten SEO-Report, sondern einen kompakten
            Überblick darüber, wo dein Unternehmen aktuell sichtbar ist – und wo
            möglicherweise Potenzial fehlt.
          </p>
        </div>
        <div className="check-grid">
          {ITEMS.map((item, i) => (
            <div key={item.title} className="check-item">
              <span className="check-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
