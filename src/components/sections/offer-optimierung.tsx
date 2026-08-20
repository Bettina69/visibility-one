import Link from "next/link";
import { Reveal } from "./reveal";

const PACKAGES = [
  {
    name: "Kompakt S",
    price: "590 €",
    sub: "bis zu 2 bestehende Kernseiten",
    points: [
      "SEO, GEO oder beides – abhängig vom Audit-Befund",
      "relevante Suchbegriffe und Themen",
      "typische Fragen in relevanten KI-Systemen",
    ],
    scope: "Interner Scope-Rahmen: ca. 5 Suchbegriffe/Themen, ca. 10 Prompts/Fragen.",
  },
  {
    name: "Fokus M",
    price: "1.190 €",
    sub: "bis zu 5 bestehende Kernseiten",
    points: [
      "SEO, GEO oder beides – abhängig vom Audit-Befund",
      "relevante Suchbegriffe und Themen",
      "typische Fragen in relevanten KI-Systemen",
    ],
    scope: "Interner Scope-Rahmen: ca. 15 Suchbegriffe/Themen, ca. 25 Prompts/Fragen.",
  },
  {
    name: "Intensiv L",
    price: "1.790 €",
    sub: "bis zu 8 bestehende Kernseiten",
    points: [
      "SEO, GEO oder beides – abhängig vom Audit-Befund",
      "relevante Suchbegriffe und Themen",
      "typische Fragen in relevanten KI-Systemen",
    ],
    scope: "Interner Scope-Rahmen: ca. 30 Suchbegriffe/Themen, ca. 40 Prompts/Fragen.",
  },
];

const FAQ = [
  {
    q: "Woher weiß ich, welches Paket ich brauche?",
    a: "Das klärt das Audit. Es zeigt, ob SEO, GEO oder beides sinnvoll ist und wie viele deiner Kernseiten relevant sind. Danach entscheidest du, welches Paket passt.",
  },
  {
    q: "Was zählt als Kernseite?",
    a: "Eine bestehende Seite, die für dein Geschäft besonders relevant ist – zum Beispiel die Startseite, zentrale Leistungsseiten oder wichtige Kategorie- bzw. Themenseiten.",
  },
  {
    q: "Übernimmst du auch die technische Umsetzung?",
    a: "Ich analysiere und definiere konkrete Optimierungsmaßnahmen. Die technische Umsetzung kann je nach System und Aufwand separat abgestimmt werden.",
  },
  {
    q: "Muss meine Website neu gebaut werden?",
    a: "In der Regel nicht. Es geht um gezielte Anpassungen an Struktur, Inhalten und Technik bestehender Seiten – nicht um einen Website-Relaunch.",
  },
  {
    q: "Was ist GEO-Optimierung konkret?",
    a: "GEO (Generative Engine Optimization) sorgt dafür, dass dein Unternehmen für KI-Systeme eindeutig einordenbar und maschinenlesbar ist – zusätzlich zur klassischen SEO.",
  },
  {
    q: "Kann ich meine Texte selbst schreiben?",
    a: "Ja. Ich kann Texte selbst schreiben, gemeinsam mit dir entwickeln oder deine vorhandenen Texte redigieren und für SEO und KI-Sichtbarkeit optimieren.",
  },
  {
    q: "Was bedeutet E-E-A-T?",
    a: "E-E-A-T steht für Experience, Expertise, Authoritativeness und Trustworthiness – also Erfahrung, Fachwissen, Autorität und Vertrauenswürdigkeit. Diese Signale helfen dabei, Kompetenz und Glaubwürdigkeit nachvollziehbar zu machen. Dazu gehören zum Beispiel echte Erfahrung, klare Autorenschaft, verlässliche Quellen und konsistente Unternehmensinformationen.",
  },
  {
    q: "Was bedeutet Human in the Loop?",
    a: "Human in the Loop bedeutet: KI unterstützt, aber der Mensch bleibt Teil des Prozesses. Analysen, Empfehlungen und KI-unterstützte Inhalte werden fachlich geprüft, eingeordnet und bei Bedarf korrigiert. Entscheidungen werden nicht ungeprüft einer KI überlassen.",
  },
];

export function OfferOptimierung() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Optimieren</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            SEO &amp; KI dort optimieren, wo es wirklich etwas bringt.
          </h1>
          <p className="hero-keymessage">
            Keine Komplettsanierung um jeden Preis. Wir arbeiten an den Bereichen, die
            für deine Sichtbarkeit tatsächlich relevant sind.
          </p>
          <p className="hero-sub">
            Ob SEO, GEO oder beides sinnvoll ist, klärt vorher das Audit. Die
            Paketgröße richtet sich nach der Anzahl deiner Kernseiten.
          </p>
          <div className="hero-actions">
            <Link href="/kontakt" className="btn btn-primary">
              Optimierung anfragen →
            </Link>
          </div>
        </div>
      </section>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <h2>Drei Pakete. SEO, GEO oder beides – abhängig vom Audit.</h2>
            <p className="lead">
              Wenn dieselben Seiten für SEO und GEO optimiert werden, wird die Arbeit
              nicht künstlich doppelt verkauft.
            </p>
          </div>
          <div className="offer-paths">
            {PACKAGES.map((p) => (
              <div key={p.name} className="offer-path">
                <span className="offer-path-label">{p.sub}</span>
                <h3>{p.name}</h3>
                <div className="offer-path-price">{p.price}</div>
                <ul>
                  {p.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="offer-path-idealfor">{p.scope}</p>
              </div>
            ))}
          </div>
          <p className="check-note" style={{ marginTop: 24 }}>
            Nicht automatisch enthalten: vollständige Neuerstellung umfangreicher
            Seiten, umfangreiche zusätzliche Texterstellung, Programmierung oder
            größere technische Eingriffe. Für Projekte oberhalb von Intensiv L
            erstelle ich ein individuelles Angebot.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Was bedeutet KI-Optimierung hier konkret?</h2>
            <p className="lead">SEO bleibt die Grundlage. Für KI-Sichtbarkeit kommen zusätzliche Fragen hinzu:</p>
          </div>
          <ul className="detail-list">
            <li>Ist das Unternehmen eindeutig einordenbar?</li>
            <li>Sind Leistungen, Themen und Entitäten verständlich?</li>
            <li>Können relevante Antworten leicht extrahiert werden?</li>
            <li>Gibt es klare Quellen und Nachweise?</li>
            <li>Ist die Website strukturiert und maschinenlesbar?</li>
            <li>Sind deine Unternehmensinformationen auf Website und externen Profilen konsistent?</li>
            <li>Wo fehlen Inhalte gegenüber sichtbaren Wettbewerbern?</li>
          </ul>
          <p className="check-text" style={{ marginTop: 20 }}>
            Strukturierte Daten und klare Inhalte helfen Suchmaschinen und anderen
            maschinellen Systemen, Informationen eindeutiger zu verstehen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Dazu gehören auch Vertrauenssignale: Erfahrung, Fachwissen, Autorität und
            Vertrauenswürdigkeit (E-E-A-T) beschreiben, wie nachvollziehbar Kompetenz
            und Glaubwürdigkeit sichtbar werden – etwa durch klare Autorenschaft,
            verlässliche Quellen und konsistente Unternehmensinformationen. Je nach
            Befund kann dazugehören, zu prüfen, ob eine bestehende Unternehmensseite
            bereits ausreichend Entity-Klarheit bietet – oder ob eine ergänzende
            Grounding Page sinnvoll wäre.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            KI unterstützt meine Arbeit dabei – sie ersetzt nicht die fachliche Prüfung.
            Jeder relevante Inhalt und jede Empfehlung wird von mir persönlich
            kontrolliert und eingeordnet (Human in the Loop).
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Du musst nicht alles neu machen.</h2>
          </div>
          <p className="check-text">Geeignet, wenn:</p>
          <ul className="detail-list">
            <li>das Audit klare Baustellen gezeigt hat</li>
            <li>bestehende Inhalte Potenzial haben</li>
            <li>Seitenstruktur unklar ist</li>
            <li>technische SEO-Probleme bestehen</li>
            <li>KI-Systeme das Unternehmen schlecht einordnen</li>
            <li>Wettbewerber bei wichtigen Themen sichtbarer sind</li>
          </ul>
          <p className="check-text" style={{ marginTop: 16 }}>
            Auch ein kleineres Paket lässt sich später erweitern, wenn sich zeigt,
            dass mehr Kernseiten relevant sind.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Du weißt noch nicht, welches Paket zu dir passt?</h2>
            <p className="lead">
              Dann starten wir mit dem Audit. Es zeigt, wo der größte Hebel liegt –
              und ob überhaupt ein Optimierungspaket sinnvoll ist.
            </p>
          </div>
          <div className="detail-cta-row">
            <Link href="/kontakt" className="btn btn-primary">
              Optimierung anfragen →
            </Link>
            <Link href="/angebote/analyse" className="btn-link">
              SEO- &amp; KI-Sichtbarkeits-Audit ansehen →
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Häufige Fragen</span>
            <h2>Fragen zur Optimierung</h2>
          </div>
          <div className="faq-col" style={{ marginTop: 24 }}>
            {FAQ.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
