import { Reveal } from "./reveal";

export function Story() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="story">
          <div className="story-text">
            <span className="eyebrow">Was gerade passiert</span>
            <h2 style={{ marginTop: 18 }}>
              Du rankst gut – <em>aber die Klicks fehlen.</em>
            </h2>
            <p style={{ marginTop: 24, fontSize: 17 }}>
              Ich kenne das aus eigener Erfahrung. Mein Shop läuft seit 18 Jahren – und
              ich habe selbst erlebt, wie sich Traffic-Zahlen verändern, ohne dass sich
              Rankings verändert haben. Der Grund: ChatGPT, Google AI und andere
              KI-Systeme beantworten Fragen direkt. Nutzer klicken einfach nicht mehr.
            </p>
            <p style={{ marginTop: 16, fontSize: 17 }}>
              Und wenn KI-Systeme nicht wissen, wofür dein Shop steht, nennen sie ihn
              nicht – oder schlimmer: sie ordnen ihn falsch ein.
            </p>
          </div>
          <div className="pullquote">
            <span className="dash">—</span>
            Kein Lehrbuch-Wissen. Ich berate aus 18 Jahren eigener Shop-Praxis – mit
            allem was dazugehört.
          </div>
        </div>
      </div>
    </Reveal>
  );
}
