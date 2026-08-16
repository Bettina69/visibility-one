const CATEGORIES = [
  {
    label: "Sichtbarkeit",
    items: [
      "Warum sinkt mein Traffic, obwohl meine Rankings stabil sind?",
      "Warum nennt ChatGPT meine Wettbewerber – aber nicht mich?",
      "Wie werde ich bei ChatGPT, Google AI & Co. sichtbar?",
      "Muss ich meine SEO- und Content-Strategie jetzt komplett ändern?",
    ],
  },
  {
    label: "Beratung",
    items: [
      "Du brauchst schnelle, konkrete Hilfe statt monatelanger Beratung?",
      "Du hast kein großes Marketingbudget und möchtest trotzdem etwas bewegen?",
      "Du willst keinen langfristigen Agenturvertrag abschließen?",
      "Du möchtest überschaubare Kosten und konkrete Maßnahmen, die du wirklich umsetzen kannst?",
    ],
  },
];

export function Questions() {
  return (
    <>
      <div className="question-intro">
        <span className="eyebrow">Kennst du das?</span>
        <h2>Kommt dir das bekannt vor?</h2>
        <p className="lead">
          Die Suche verändert sich. Und Beratung sollte zu deinem Unternehmen passen.
        </p>
      </div>
      <div className="question-columns">
        {CATEGORIES.map((cat, catIndex) => (
          <div key={cat.label} className="question-col">
            <h3 className="question-col-label">{cat.label}</h3>
            <div className="question-list">
              {cat.items.map((q, i) => (
                <div key={q} className="question-row">
                  <span className="question-num">
                    {String(catIndex * 4 + i + 1).padStart(2, "0")}
                  </span>
                  <span className="question-text">{q}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
