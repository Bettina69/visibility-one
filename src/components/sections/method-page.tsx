import Link from "next/link";
import { Reveal } from "./reveal";
import { NetworkBg } from "./network-bg";

const STEPS = [
  { label: "Analysieren", question: "Wo wirst du gefunden?" },
  { label: "Verstehen", question: "Was fehlt – und warum?" },
  { label: "Priorisieren", question: "Was bringt wirklich etwas?" },
  { label: "Umsetzen", question: "Was kannst du konkret tun?" },
  { label: "Messen", question: "Was hat sich verändert?" },
];

export function MethodPage() {
  return (
    <>
      <section className="hero">
        <NetworkBg />
        <div className="hero-inner">
          <span className="eyebrow">Meine Methode</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            Erst verstehen, dann optimieren.
          </h1>
          <p className="hero-sub">
            Gute Sichtbarkeit beginnt nicht mit einzelnen Maßnahmen.
          </p>
          <p className="hero-sub">
            Zuerst schauen wir, wo dein Unternehmen heute steht – bei Google und in
            der KI-Suche. Danach entscheiden wir, was wirklich sinnvoll ist.
          </p>
          <div className="process-bar">
            {STEPS.map((s, i) => (
              <div key={s.label} className="process-step">
                <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="process-label">{s.label}</div>
                <div className="process-question">{s.question}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">01 · Analysieren</span>
            <h2>Wo stehst du heute – bei Google und in der KI-Suche?</h2>
          </div>
          <p className="check-text">
            Bevor wir über Maßnahmen sprechen, schaue ich mir an, was bereits
            funktioniert und wo Sichtbarkeit fehlt. Dabei betrachte ich SEO und
            KI-Sichtbarkeit gemeinsam.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Je nach Ausgangslage gehören dazu zum Beispiel Google-Sichtbarkeit,
            Rankings und relevante Themen, technische Auffälligkeiten sowie die
            Präsenz in KI-Systemen.
          </p>
          <p className="check-note">
            Bei der KI-Sichtbarkeit u. a.: Brand Mentions · Citations ·
            Recommendations · Sentiment · Share of Voice · Wettbewerbsumfeld
          </p>
          <div className="method-benefit">
            <span className="method-benefit-label">Was du davon hast</span>
            <p>
              Du bekommst zunächst ein realistisches Bild deiner Ausgangslage –
              ohne dass schon vor der Analyse feststeht, was du angeblich alles
              optimieren musst.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">02 · Verstehen</span>
            <h2>Warum sind andere sichtbarer – und wo liegen die Ursachen?</h2>
          </div>
          <p className="check-text">
            Daten allein sagen noch nicht, was zu tun ist. Deshalb ordne ich die
            Ergebnisse ein und suche nach den Ursachen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Liegt es an Technik, Seitenstruktur oder Inhalten? Fehlen relevante
            Themen oder eindeutige Signale zur Marke? Sind Wettbewerber bei
            wichtigen Fragen präsenter, werden häufiger zitiert oder empfohlen?
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Dabei betrachte ich auch E-E-A-T – also Erfahrung, Fachwissen,
            Autorität und Vertrauenswürdigkeit – sowie die Frage, ob
            Suchmaschinen und KI-Systeme dein Unternehmen, deine Leistungen und
            deine Themen eindeutig verstehen können.
          </p>
          <div className="method-benefit">
            <span className="method-benefit-label">Was du davon hast</span>
            <p>
              Du weißt nicht nur, wo Sichtbarkeit fehlt, sondern auch, warum – und
              welche Ursachen tatsächlich relevant sind.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">03 · Priorisieren</span>
            <h2>
              Was bringt deinem Unternehmen wirklich etwas – und was können wir
              uns sparen?
            </h2>
          </div>
          <p className="check-text">
            Nicht jede gefundene Baustelle muss behoben werden. Und nicht jede
            neue SEO- oder GEO-Maßnahme ist für jedes Unternehmen sinnvoll.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>Ich bewerte Maßnahmen deshalb nach:</p>
          <ul className="detail-list">
            <li>Wirkung</li>
            <li>Aufwand</li>
            <li>Dringlichkeit</li>
            <li>vorhandenen Ressourcen</li>
          </ul>
          <p className="check-text" style={{ marginTop: 16 }}>
            Daraus entsteht eine klare Reihenfolge: Was sollten wir zuerst
            angehen? Was kann warten? Und was brauchen wir überhaupt nicht?
          </p>
          <div className="method-benefit">
            <span className="method-benefit-label">Was du davon hast</span>
            <p>
              Keine endlose Maßnahmenliste, sondern eine realistische Roadmap, die
              zu deinem Unternehmen, deinem Budget und deinen Möglichkeiten passt.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">04 · Umsetzen</span>
            <h2>Aus Erkenntnissen werden konkrete Verbesserungen.</h2>
          </div>
          <p className="check-text">
            Je nach Priorität arbeiten wir an Seitenstruktur, Content, interner
            Verlinkung, technischem SEO, strukturierten Daten, E-E-A-T- und
            Entity-Signalen oder an Inhalten, die auch für KI-Systeme klar
            verständlich und einordenbar sind.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Die Umsetzung richtet sich nach der zuvor festgelegten
            Priorisierung.
          </p>

          <div className="offer-intro-card offer-intro-card--compact" style={{ marginTop: 28 }}>
            <span className="offer-intro-label">Human in the Loop</span>
            <h3>KI unterstützt. Der Mensch prüft.</h3>
            <p>
              KI kann Recherche, Analyse, Strukturierung und Contentarbeit
              unterstützen. Ergebnisse werden aber nicht ungeprüft übernommen.
            </p>
            <p>
              Die fachliche Bewertung, Einordnung und finale Qualitätskontrolle
              bleibt beim Menschen.
            </p>
            <span className="offer-intro-hint">
              Das gilt insbesondere für: Empfehlungen · Interpretationen ·
              Content · Priorisierungen
            </span>
            <div className="method-benefit" style={{ marginTop: 16 }}>
              <span className="method-benefit-label">Was du davon hast</span>
              <p>
                Keine Maßnahmen um ihrer selbst willen, sondern nachvollziehbare
                Verbesserungen mit einem konkreten Ziel.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">05 · Messen</span>
            <h2>Was hat sich tatsächlich verändert?</h2>
          </div>
          <p className="check-text">
            Nach der Umsetzung endet die Arbeit nicht mit „fertig“. Wir
            beobachten, wie sich deine Sichtbarkeit entwickelt – bei Google und
            in der KI-Suche.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Dazu können klassische SEO-Kennzahlen wie Rankings, Klicks und
            Sichtbarkeit gehören.
          </p>
          <p className="check-note">
            Bei der KI-Sichtbarkeit zusätzlich u. a.: Brand Mentions · Citations
            · Recommendations · Sentiment · Share of Voice · Wettbewerbern
          </p>
          <div className="method-benefit">
            <span className="method-benefit-label">Was du davon hast</span>
            <p>
              Du siehst, was funktioniert, wo sich etwas bewegt und wo wir
              nachsteuern sollten.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section final-cta">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Der erste Schritt</span>
            <h2>Erst verstehen. Dann entscheiden.</h2>
            <p className="lead">
              Du musst nicht schon wissen, ob du SEO, GEO, neue Inhalte oder
              technische Optimierungen brauchst. Genau das finden wir zuerst
              heraus.
            </p>
          </div>
          <div className="detail-cta-row">
            <Link href="/sichtbarkeitscheck" className="btn btn-primary">
              SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
            </Link>
            <Link href="/angebote" className="btn-link">
              Angebote ansehen →
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
