import { Reveal } from "./reveal";

const ROWS = [
  { label: "Google-Sichtbarkeit", value: "vorhanden / gering / kaum vorhanden" },
  { label: "KI-Erwähnungen", value: "vorhanden / vereinzelt / nicht sichtbar" },
  { label: "Citations", value: "vorhanden / gering / keine gefunden" },
  { label: "Recommendations", value: "vorhanden / vereinzelt / keine gefunden" },
  { label: "Größtes Potenzial", value: "kurze individuelle Einschätzung" },
];

export function CheckResult() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="check-head">
          <span className="eyebrow">Dein Ergebnis</span>
          <h2>Du weißt danach, wo du stehst.</h2>
          <p className="lead">
            Nach dem Check bekommst du eine kompakte und verständliche Einschätzung
            deiner aktuellen Sichtbarkeit.
          </p>
        </div>
        <dl className="result-list">
          {ROWS.map((row) => (
            <div key={row.label} className="result-row">
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="check-note">
          Das sind Beispiele für die Art der Auswertung, keine vorab feststehenden
          Ergebnisse.
        </p>
        <p className="check-text" style={{ marginTop: 20 }}>
          Auch wenn dein Unternehmen in der KI-Suche bisher kaum oder gar nicht
          auftaucht, ist das ein wichtiges Ergebnis. Entscheidend ist zu verstehen, wo
          deine Ausgangslage liegt.
        </p>
      </div>
    </Reveal>
  );
}
