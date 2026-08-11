import { Reveal } from "./reveal";

const STEPS = [
  {
    title: "Strategie",
    sub: "Wofür willst du gefunden werden?",
    desc: "Ich finde heraus, nach welchen Begriffen deine Zielgruppe sucht – und was sie damit wirklich meint. Gleichzeitig definiere ich klar, wofür dein Shop oder deine Marke steht, damit KI-Systeme dich richtig einordnen können.",
    tag: "Ein Arbeitsschritt – doppelter Nutzen für Google & KI",
  },
  {
    title: "Struktur",
    sub: "Wie ist deine Seite aufgebaut?",
    desc: "Ich plane, wie deine Seiten miteinander verbunden sind – welche Seiten fehlen, wo KI-Systeme keine Antworten finden und wie du mit einer klaren Struktur sowohl bei Google als auch bei ChatGPT & Co. sichtbar wirst.",
    tag: "Die Struktur für Google ist gleichzeitig die für KI",
  },
  {
    title: "Content",
    sub: "Was steht auf deinen Seiten?",
    desc: "Ich optimiere deine Texte so, dass sie echte Fragen deiner Zielgruppe beantworten – klar, vollständig, mit kurzen Absätzen und konkreten Erklärungen. Guter Content für Menschen ist automatisch guter Content für KI.",
    tag: "Guter SEO-Content ist automatisch guter GEO-Content",
  },
  {
    title: "Technik",
    sub: "Was sieht Google – was sieht KI?",
    desc: "Ich sorge dafür, dass deine Seite technisch sauber ist: schnell, fehlerfrei, mit strukturierten Daten hinterlegt. Das hilft Google deine Seite zu verstehen – und KI-Systeme ziehen daraus direkt Fakten über dich.",
    tag: "Strukturierte Daten: ein Setup, zwei Nutznießer",
  },
  {
    title: "Monitoring",
    sub: "Wer nennt dich – und wer nicht?",
    desc: "Ich beobachte laufend, wie sich deine Sichtbarkeit entwickelt – in Google-Rankings und in KI-Antworten. Was in Google steigt, taucht oft auch häufiger bei ChatGPT & Perplexity auf. Beide Signale zusammen ergeben das vollständige Bild.",
    tag: "Bereits im kostenlosen Quick-Check enthalten",
  },
];

export function Method() {
  return (
    <Reveal className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Meine Methode</span>
          <h2>
            Wie ich konkret <em>vorgehe.</em>
          </h2>
        </div>
        <p className="lead" style={{ marginTop: -32, marginBottom: 56 }}>
          Kein Buzzword-Bingo. SEO und KI-Sichtbarkeit sind kein Widerspruch – sie
          verstärken sich gegenseitig. Mein Ansatz: nie doppelte Arbeit, immer doppelter
          Nutzen.
        </p>
        <div className="method-list">
          {STEPS.map((s, i) => (
            <div key={i} className="method-item">
              <div className="method-num">
                <span className="big">0{i + 1}</span>
                STEP
              </div>
              <div className="method-mid">
                <h3>{s.title}</h3>
                <div className="sub">{s.sub}</div>
              </div>
              <div>
                <div className="method-desc">{s.desc}</div>
                <div className="method-tag">{s.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
