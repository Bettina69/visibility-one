import { Reveal } from "./reveal";

const CASES = [
  {
    title: "Italienisches Restaurant",
    desc: "Beim Restaurantnamen wird der Betrieb gefunden. Bei generischen lokalen Suchen oder Empfehlungen – auch in Google AI Overviews – stehen andere Restaurants vorne.",
  },
  {
    title: "Kosmetikerin",
    desc: "Stammkundinnen kennen den Betrieb. Neue Kundinnen suchen aber nach konkreten Behandlungen wie Microneedling oder Problemhaut-Pflege – und finden andere Anbieterinnen.",
  },
  {
    title: "Coach",
    desc: "Bei Google besteht bereits gute Sichtbarkeit. Bei relevanten Fragen an ChatGPT oder andere KI-Systeme werden bei diesem Spezialgebiet aber andere Coaches genannt.",
  },
  {
    title: "Heizungs- und Sanitärbetrieb",
    desc: "Eine über Jahre gewachsene Website, auf der Heizung, Wärmepumpe und Badsanierung strukturell nicht sauber getrennt sind. Wettbewerber stehen bei Google vorne und werden teils auch in KI-generierten Empfehlungen häufiger berücksichtigt.",
  },
  {
    title: "„Eigentlich läuft meine Website gut.“",
    desc: "Gute Google-Sichtbarkeit, Anfragen kommen. Jetzt hört der Unternehmer von AI Overviews, ChatGPT und Perplexity und fragt sich, ob dringend etwas geändert werden muss. Antwort: Vielleicht nicht – auch das kann ein Audit-Ergebnis sein.",
  },
];

export function UseCases() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Typische Situationen</span>
          <h2>Erkennst du dein Unternehmen wieder?</h2>
          <p className="lead">
            Du musst SEO oder GEO nicht verstehen, bevor du mich kontaktierst. Hier
            sind fünf typische Ausgangslagen – keine Erfolgsversprechen, sondern
            erkennbare Situationen.
          </p>
        </div>
        <div className="check-grid">
          {CASES.map((c, i) => (
            <div key={c.title} className="check-item">
              <span className="check-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
