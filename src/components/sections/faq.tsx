import { Reveal } from "./reveal";

const FAQ_LEFT = [
  {
    q: "Was ist der Unterschied zwischen SEO und GEO?",
    a: "SEO verbessert deine Sichtbarkeit in klassischen Suchmaschinen wie Google. GEO (Generative Engine Optimization) ergänzt das um die Sichtbarkeit und Auffindbarkeit in KI-Systemen und KI-generierten Antworten – zum Beispiel bei ChatGPT, Google AI und Perplexity. SEO bleibt dabei die Grundlage: GEO ersetzt SEO nicht, sondern baut darauf auf.",
  },
  {
    q: "Für wen ist Visibility One gedacht?",
    a: "Visibility One richtet sich an Unternehmen, die bei Google und in KI-Systemen sichtbar sein müssen, aber kein eigenes SEO-Team haben. Dazu gehören insbesondere kleine und mittlere Online-Shops, inhabergeführte Unternehmen, lokale Dienstleister und Beratungen. Besonders sinnvoll ist die Zusammenarbeit, wenn du keine große Agentur beauftragen möchtest, sondern konkrete Unterstützung bei SEO, GEO und KI-Sichtbarkeit suchst.",
  },
  {
    q: "Ich habe schon SEO-Beratung gebucht – und es hat nichts gebracht. Warum sollte das hier anders sein?",
    a: "Ich arbeite nach einem klaren Ablauf: Analysieren → Verstehen → Priorisieren → Umsetzen → Messen. Statt pauschaler Checklisten schaue ich mir zuerst an, wo dein Unternehmen wirklich steht und warum – und leite Maßnahmen erst daraus ab. So bekommst du keine Standardempfehlungen, sondern Prioritäten, die zu deiner Situation passen.",
  },
  {
    q: "Brauche ich überhaupt GEO, wenn meine Website bei Google schon gut rankt?",
    a: "Ein gutes Google-Ranking ist eine gute Ausgangsbasis, aber keine Garantie für Sichtbarkeit in KI-Antworten. ChatGPT, Google AI und Perplexity werten Inhalte teils anders aus als die klassische Google-Suche. Ob und wie stark GEO für dich relevant ist, hängt von deiner Branche und deiner Zielgruppe ab – das schauen wir uns gemeinsam an.",
  },
];

const FAQ_RIGHT = [
  {
    q: "Muss ich selbst viel mitarbeiten?",
    a: "Etwas Mitarbeit ist sinnvoll, vor allem bei Freigaben, Produktwissen und Inhalten, die nur du liefern kannst. Wie viel Zeit du investierst, hängt vom gewählten Umfang ab – von punktueller Beratung bis zur laufenden Begleitung. Ich stimme das vorher konkret mit dir ab.",
  },
  {
    q: "Wann sehe ich erste Ergebnisse?",
    a: "Das lässt sich pauschal nicht seriös versprechen. Wie schnell sich etwas verändert, hängt von deiner Ausgangssituation, deinem Wettbewerb und den umgesetzten Maßnahmen ab. Manche Effekte zeigen sich schneller, andere brauchen mehrere Monate. Ich sage dir ehrlich, was realistisch ist.",
  },
  {
    q: "Wie läuft die Zusammenarbeit ab?",
    a: "Wir arbeiten 1:1 zusammen – ohne Projektteam oder wechselnde Ansprechpartner dazwischen. Nach einer ersten Einschätzung legen wir gemeinsam fest, welcher Umfang zu deiner Situation passt, und ich melde mich regelmäßig mit konkreten Ergebnissen und nächsten Schritten.",
  },
  {
    q: "Muss ich mich langfristig binden?",
    a: "Nein. Du kannst klein starten, zum Beispiel mit einer Analyse oder punktueller Unterstützung auf Stundenbasis. Ein langfristiger Agenturvertrag ist nicht automatisch nötig – du entscheidest, ob und wie es danach weitergeht.",
  },
];

function FaqColumn({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq-col">
      {items.map((item) => (
        <details key={item.q} className="faq-item">
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Faq() {
  return (
    <Reveal className="section faq-transition">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Häufige Fragen</span>
          <h2>Was du wissen möchtest.</h2>
        </div>
        <div className="faq-columns">
          <FaqColumn items={FAQ_LEFT} />
          <FaqColumn items={FAQ_RIGHT} />
        </div>
      </div>
    </Reveal>
  );
}
