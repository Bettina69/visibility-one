import Link from "next/link";
import { Reveal } from "./reveal";

const BAUSTEINE = [
  {
    label: "01 · Seiten- & Inhaltsstrategie",
    price: "ab 390 €",
    title: "Die richtige Struktur zuerst.",
    points: [
      "URL- und Seitenstruktur prüfen",
      "Themencluster definieren",
      "fehlende Seiten identifizieren",
      "zentrale Unternehmens-/Themenseiten schärfen",
      "interne Verlinkung planen",
      "priorisierten Contentplan erstellen",
    ],
    note: "Du weißt anschließend, welche Seiten du brauchst, welche fehlen und wie sie zusammenhängen.",
  },
  {
    label: "02 · Content-Optimierung",
    price: "ab 690 €",
    title: "Inhalte, die Menschen verstehen – und Maschinen einordnen können.",
    points: [
      "bestehende Kernseiten nach Suchintention optimieren",
      "Title, H1–H3 und Meta-Daten",
      "klare Entitäten und Zusammenhänge",
      "zitierfähige Definitionen und Antworten",
      "FAQ-Inhalte",
      "Mission & Werte, wo relevant für Empfehlungen",
      "Bildoptimierung (Alt-Texte, Dateigröße)",
      "E-E-A-T-Signale (Erfahrung, Fachwissen, Vertrauenssignale)",
      "Content Gaps schließen",
      "menschliche Endredaktion",
    ],
    note: "Der tatsächliche Umfang richtet sich nach Anzahl und Komplexität der Seiten.",
  },
  {
    label: "03 · Technisches SEO & strukturierte Daten",
    price: "ab 790 €",
    title: "Maschinenlesbar statt nur schön.",
    points: [
      "technischer SEO-Check",
      "Indexierbarkeit, Canonicals, Sitemap, robots.txt, Redirects, Breadcrumbs",
      "technische Zugänglichkeit für KI-Crawler",
      "PageSpeed / Core Web Vitals analysieren und Optimierungsmaßnahmen definieren",
      "strukturierte Daten / Schema.org / JSON-LD (Organization, Person, ggf. Product, BreadcrumbList)",
      "strukturierte Daten validieren",
    ],
    note: "Technische Umsetzung kann je nach System und Aufwand separat kalkuliert werden.",
  },
];

const FAQ = [
  {
    q: "Muss ich alle drei Bausteine buchen?",
    a: "Nein. Du kannst einzelne Bausteine buchen oder sie kombinieren – je nachdem, wo bei dir der größte Hebel liegt.",
  },
  {
    q: "Kann ich nur Content optimieren lassen?",
    a: "Ja, das ist möglich. Sinnvoll ist es, wenn Struktur und Technik bereits passen und der größte Hebel bei den Inhalten liegt.",
  },
  {
    q: "Übernimmst du auch die technische Umsetzung?",
    a: "Ich analysiere und definiere konkrete Optimierungsmaßnahmen. Die technische Umsetzung kann je nach System und Aufwand separat abgestimmt werden.",
  },
  {
    q: "Muss meine Website neu gebaut werden?",
    a: "In der Regel nicht. Es geht um gezielte Anpassungen an Struktur, Inhalten und Technik – nicht um einen Website-Relaunch.",
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
            Je nach Ausgangslage geht es um Struktur, Inhalte, Technik – oder eine
            sinnvolle Kombination daraus.
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
            <h2>Drei Bereiche. Du brauchst nicht automatisch alle.</h2>
          </div>
          <div className="offer-paths">
            {BAUSTEINE.map((b) => (
              <div key={b.label} className="offer-path">
                <span className="offer-path-label">{b.label}</span>
                <div className="offer-path-price">{b.price}</div>
                <h3>{b.title}</h3>
                <ul>
                  {b.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="offer-path-idealfor">{b.note}</p>
              </div>
            ))}
          </div>
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
            verlässliche Quellen und konsistente Unternehmensinformationen.
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
            <li>die Analyse klare Baustellen gezeigt hat</li>
            <li>bestehende Inhalte Potenzial haben</li>
            <li>Seitenstruktur unklar ist</li>
            <li>technische SEO-Probleme bestehen</li>
            <li>KI-Systeme das Unternehmen schlecht einordnen</li>
            <li>Wettbewerber bei wichtigen Themen sichtbarer sind</li>
          </ul>
          <p className="check-text" style={{ marginTop: 16 }}>
            Auch einzelne Bausteine können gebucht werden.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Du möchtest Analyse, Content und Technik kombinieren?</h2>
          </div>
          <div className="compare-columns">
            <div>
              <h3 className="question-col-label">Starter</h3>
              <p className="detail-price">1.490 €</p>
            </div>
            <div>
              <h3 className="question-col-label">Komplett</h3>
              <p className="detail-price">2.290 €</p>
            </div>
          </div>
          <Link href="/angebote" className="btn-link detail-secondary-link">
            Pakete vergleichen →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Was solltest du wirklich optimieren?</h2>
            <p className="lead">
              Wenn du noch nicht weißt, welcher Baustein für dich sinnvoll ist, starten
              wir mit der Analyse.
            </p>
          </div>
          <div className="detail-cta-row">
            <Link href="/kontakt" className="btn btn-primary">
              Optimierung anfragen →
            </Link>
            <Link href="/angebote/analyse" className="btn-link">
              SEO- &amp; KI-Sichtbarkeitsanalyse ansehen →
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
