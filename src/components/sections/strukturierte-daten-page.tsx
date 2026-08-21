import Link from "next/link";
import { Reveal } from "./reveal";
import { AuthorModule } from "./author-module";
import { NetworkBg } from "./network-bg";
import { RelatedReading } from "./related-reading";
import { RelationshipFlow } from "./relationship-flow";

const WHAT_IS_LIST = [
  "standardisierte Kennzeichnung von Inhalten",
  "Informationen über Inhalt und Bedeutung einer Seite",
  "basiert häufig auf dem Schema.org-Vokabular",
  "wird technisch häufig als JSON-LD eingebunden",
];

const SCHEMA_ORG_LIST = [
  "ein gemeinsames Vokabular für strukturierte Daten",
  "definiert Typen und Eigenschaften",
  "hilft dabei, Entitäten und ihre Beziehungen zu beschreiben",
];

const JSON_LD_LIST = [
  "ein Format zur Auszeichnung strukturierter Daten",
  "wird häufig als Skript-Block im HTML eingebunden",
  "für Nutzer unsichtbar, für Maschinen lesbar",
  "die Inhalte müssen mit der sichtbaren Seite übereinstimmen",
];

const SCHEMA_TYPES = [
  "Organization",
  "Person",
  "Product",
  "Offer",
  "BreadcrumbList",
  "Article",
  "LocalBusiness",
  "FAQPage – aktuell mit dem Hinweis, dass zugehörige Rich Results je nach Suchmaschine eingeschränkt sein können",
];

const PRODUCT_LIST = [
  "Produktname",
  "Preis",
  "Verfügbarkeit",
  "Marke",
  "Varianten",
  "Bewertung – nur, wenn tatsächlich vorhanden",
  "Angebot",
];

const SEO_BENEFIT_LIST = [
  "bessere maschinelle Interpretation der Inhalte",
  "je nach Suchmaschine und Typ mögliche Rich Results",
  "eindeutigere Informationen für Suchsysteme",
  "keine Rankinggarantie",
];

const GEO_LIST = [
  "ein Unternehmen eindeutig zu identifizieren",
  "Personen und Rollen zuzuordnen",
  "Produkte und Eigenschaften zu verstehen",
  "Beziehungen zwischen Entitäten zu verdeutlichen",
];

const CONSISTENCY_LIST = [
  "Name",
  "Unternehmen",
  "Website",
  "Personen",
  "Leistungen",
  "Produkte",
  "Kontakt",
  "dieselben Fakten überall",
];

const MISTAKES_LIST = [
  "falscher Schema-Typ",
  "Daten stimmen nicht mit der sichtbaren Seite überein",
  "erfundene Bewertungen",
  "veraltete Preise",
  "doppelte, widersprüchliche Markups",
  "technisch ungültiges JSON-LD",
  "Schema ohne echten Inhalt dahinter",
];

const VALIDATION_LIST = [
  "Syntax prüfen",
  "Pflicht- und empfohlene Felder kontrollieren",
  "Suchmaschinen-Testtools nutzen",
  "regelmäßige Kontrolle bei Änderungen an der Website",
];

const AI_SEARCH_LIST = [
  "semantische Inhalte",
  "klare Texte",
  "interne Struktur",
  "Entitäten",
  "externe Signale",
  "E-E-A-T",
];

const HUMAN_LOOP_LIST = [
  "Plugins können beim Erstellen helfen.",
  "KI kann Markup vorschlagen oder erzeugen.",
  "Die finale Prüfung erfolgt durch einen Menschen.",
  "Der sichtbare Inhalt muss mit dem Markup übereinstimmen.",
];

const FAQ = [
  { q: "Was sind strukturierte Daten?", a: "Strukturierte Daten sind eine standardisierte Kennzeichnung von Inhalten, die Maschinen zusätzliche Informationen über Bedeutung und Zusammenhang einer Seite geben. Sie basieren häufig auf dem Schema.org-Vokabular." },
  { q: "Was ist Schema.org?", a: "Schema.org ist ein gemeinsames, von mehreren Suchmaschinen unterstütztes Vokabular für strukturierte Daten. Es definiert Typen wie Organisation oder Produkt sowie deren Eigenschaften." },
  { q: "Was ist JSON-LD?", a: "JSON-LD ist ein Format, mit dem strukturierte Daten technisch umgesetzt werden. Es wird meist als eigener Skript-Block im HTML eingebunden, ist für Besucher unsichtbar und muss inhaltlich zur sichtbaren Seite passen." },
  { q: "Sind strukturierte Daten ein Rankingfaktor?", a: "Strukturierte Daten sind kein direkter Rankingfaktor. Sie helfen Suchmaschinen, Inhalte eindeutiger zu interpretieren, und können je nach Suchmaschine und Typ Rich Results ermöglichen – eine Ranking- oder Sichtbarkeitsgarantie sind sie nicht." },
  { q: "Brauche ich Schema für GEO?", a: "Strukturierte Daten können helfen, ein Unternehmen, Personen, Produkte und ihre Beziehungen eindeutiger zu beschreiben. Sie sind ein Baustein für Maschinenlesbarkeit, aber keine Voraussetzung, die allein über KI-Sichtbarkeit entscheidet." },
  { q: "Hilft Schema bei ChatGPT?", a: "Schema sorgt nicht dafür, dass ChatGPT dich zitiert. Es kann aber dazu beitragen, dass Informationen über ein Unternehmen technisch eindeutiger vorliegen." },
  { q: "Welche Schema-Typen braucht mein Unternehmen?", a: "Das hängt vom Unternehmen ab. Häufig relevant sind zum Beispiel Organization, LocalBusiness, Product oder BreadcrumbList – nicht jeder Typ ist für jede Website sinnvoll." },
  { q: "Kann ein WordPress-Plugin das automatisch?", a: "Plugins können beim Erstellen strukturierter Daten unterstützen. Die erzeugten Daten sollten trotzdem geprüft werden, damit sie zum tatsächlichen Inhalt der Seite passen." },
  { q: "Wie prüfe ich strukturierte Daten?", a: "Üblich sind das Prüfen der Syntax, ein Abgleich mit Pflicht- und empfohlenen Feldern sowie der Einsatz gängiger Suchmaschinen-Testtools – idealerweise regelmäßig, insbesondere nach Änderungen an der Website." },
];

export function StrukturierteDatenPage() {
  return (
    <>
      <section className="hero">
        <NetworkBg />
        <div className="hero-inner">
          <span className="eyebrow">Wissen · Strukturierte Daten</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            Strukturierte Daten: Informationen für Maschinen eindeutig
            machen.
          </h1>
          <p className="hero-sub">
            Menschen erkennen auf einer Website meist sofort, was ein
            Produkt, ein Unternehmen, ein Preis oder eine Person ist.
          </p>
          <p className="hero-sub">Maschinen benötigen dafür eindeutige Signale.</p>
          <p className="hero-explainer" style={{ marginBottom: 16 }}>
            Strukturierte Daten helfen dabei, Informationen zusätzlich
            maschinenlesbar auszuzeichnen.
          </p>
          <p className="hero-keymessage">
            Schema Markup ist kein Ranking-Trick. Es schafft Struktur.
          </p>
          <div className="hero-actions">
            <Link href="/sichtbarkeitscheck" className="btn btn-primary">
              SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
            </Link>
          </div>
        </div>
      </section>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Was sind strukturierte Daten?</h2>
          </div>
          <ul className="detail-list">
            {WHAT_IS_LIST.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Was ist Schema.org?</h2>
          </div>
          <ul className="detail-list">
            {SCHEMA_ORG_LIST.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Was ist JSON-LD?</h2>
          </div>
          <ul className="detail-list">
            {JSON_LD_LIST.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Welche strukturierten Daten können für Unternehmen sinnvoll sein?</h2>
          </div>
          <ul className="detail-list">
            {SCHEMA_TYPES.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            Nicht jeder Typ ist für jede Website sinnvoll.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">E-Commerce</span>
            <h2>Strukturierte Produktdaten im E-Commerce</h2>
          </div>
          <ul className="detail-list">
            {PRODUCT_LIST.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Was bringen strukturierte Daten für SEO?</h2>
          </div>
          <ul className="detail-list">
            {SEO_BENEFIT_LIST.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">GEO / KI</span>
            <h2>Welche Rolle spielen strukturierte Daten für GEO?</h2>
          </div>
          <p className="check-text">Strukturierte Daten können helfen:</p>
          <ul className="detail-list">
            {GEO_LIST.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <RelationshipFlow
            stages={[
              {
                title: "Inhalt",
                text: "Redaktioneller Text, Produkte, Informationen auf der Seite",
              },
              {
                title: "Maschinenlesbare Struktur",
                text: "Schema.org / JSON-LD ordnet Bedeutung eindeutiger zu",
              },
              {
                title: "Mögliche bessere Einordnung",
                text: "Durch Such- und KI-Systeme",
                uncertain: true,
              },
            ]}
          />
          <p className="check-text" style={{ marginTop: 24 }}>
            Schema sorgt nicht dafür, dass ChatGPT dich zitiert.
          </p>
          <div className="method-benefit">
            <p>
              Strukturierte Daten sind ein Baustein für Maschinenlesbarkeit
              – keine Citation-Garantie.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Strukturierte Daten funktionieren nur mit konsistenten Informationen.</h2>
          </div>
          <ul className="detail-list">
            {CONSISTENCY_LIST.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            Keine widersprüchlichen Schema-Daten auf verschiedenen Seiten.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Typische Fehler bei Schema Markup</h2>
          </div>
          <ul className="detail-list">
            {MISTAKES_LIST.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Strukturierte Daten sollten getestet werden.</h2>
          </div>
          <ul className="detail-list">
            {VALIDATION_LIST.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <h2>Maschinenlesbarkeit wird wichtiger – aber nicht alles lässt sich markieren.</h2>
          </div>
          <ul className="detail-list">
            {AI_SEARCH_LIST.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <div className="method-benefit">
            <p>Schema ist nur ein Teil.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Human in the Loop</span>
            <h2>Automatisch generiertes Schema sollte überprüft werden.</h2>
          </div>
          <ul className="detail-list">
            {HUMAN_LOOP_LIST.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Quellen</span>
            <h2>Weiterführende Primärquellen</h2>
          </div>
          <a
            href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link detail-secondary-link source-link"
          >
            Google Search Central: Introduction to structured data markup →{" "}
            <span className="sr-only">(öffnet in neuem Tab)</span>
          </a>
          <a
            href="https://schema.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link detail-secondary-link source-link"
          >
            Schema.org → <span className="sr-only">(öffnet in neuem Tab)</span>
          </a>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">SEO + GEO</span>
            <h2>Strukturierte Daten sind ein Baustein von SEO und GEO.</h2>
          </div>
          <RelatedReading
            items={[
              {
                href: "/google-ai-overviews",
                title: "Google AI Overviews & AI Mode",
                context:
                  "Der Kanal, bei dem strukturierte Daten am direktesten relevant werden.",
              },
              {
                href: "/geo",
                title: "Was ist GEO?",
                context: "Die größere Methodik, in die Schema Markup nur ein Baustein ist.",
              },
              {
                href: "/ki-sichtbarkeit",
                title: "Was bedeutet KI-Sichtbarkeit für Unternehmen?",
                context: "Der Überblick über das gesamte Thema.",
              },
            ]}
          />
          <AuthorModule />
        </div>
      </Reveal>

      <Reveal className="section final-cta">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Nächster Schritt</span>
            <h2>Sind deine Inhalte technisch eindeutig strukturiert?</h2>
            <p className="lead">
              Im kostenlosen SEO- &amp; KI-Sichtbarkeitscheck schaue ich
              zunächst auf die Gesamtposition. Eine detaillierte Prüfung
              und Umsetzung strukturierter Daten gehört zur vertieften
              Optimierung.
            </p>
          </div>
          <div className="detail-cta-row">
            <Link href="/sichtbarkeitscheck" className="btn btn-primary">
              SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
            </Link>
          </div>
          <Link href="/angebote/optimierung" className="btn-link detail-secondary-link">
            Technische SEO- &amp; KI-Optimierung ansehen →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Häufige Fragen</span>
            <h2>Fragen zu strukturierten Daten</h2>
          </div>
          <div className="faq-col" style={{ marginTop: 24 }}>
            {FAQ.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <Link href="/wissen" className="btn-link detail-secondary-link">
            Alle Themen im Wissensbereich →
          </Link>
        </div>
      </Reveal>
    </>
  );
}
