const ITEMS = [
  "Warum sinkt mein Traffic – obwohl meine Rankings gleich geblieben sind?",
  "Wie werde ich von ChatGPT, Google AI & Co. empfohlen statt übergangen?",
  "Warum nennt ChatGPT meine Wettbewerber – aber nicht mich?",
  "Muss ich meine Content-Strategie grundlegend ändern?",
  "Was kann ich jetzt tun, bevor die Konkurrenz den Vorsprung ausbaut?",
  "Wie bleibt mein Shop sichtbar, wenn KI die Suche zunehmend ersetzt?",
];

export function Questions() {
  return (
    <>
      <div className="question-intro">
        <span className="eyebrow">Kennst du das?</span>
        <h2>
          Diese Fragen kenne ich – <em>weil ich sie selbst hatte.</em>
        </h2>
      </div>
      <div className="question-grid">
        {ITEMS.map((q, i) => (
          <div key={i} className="question-card">
            <span className="question-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="question-text">{q}</span>
          </div>
        ))}
      </div>
    </>
  );
}
