import Link from "next/link";
import { Reveal } from "./reveal";
import { AuthorModule } from "./author-module";
import { NetworkBg } from "./network-bg";

const LABEL_TERMS = [
  {
    label: "AI / KI",
    text: "Allgemeine sichtbare Kennzeichnung dafür, dass KI bei der Erstellung oder Bearbeitung eines Bildes eingesetzt wurde.",
  },
  {
    label: "AI generated / KI-generiert",
    text: "Kennzeichnung für ein Bild, das überwiegend bzw. vollständig mithilfe eines KI-Systems erzeugt wurde.",
  },
  {
    label: "AI modified / KI-bearbeitet",
    text: "Kennzeichnung für ein vorhandenes Bild, das mithilfe von KI verändert oder bearbeitet wurde.",
  },
];

const TRANSPARENCY_LIST = [
  "Transparenz gegenüber Nutzern",
  "nachvollziehbare Bildherkunft",
  "interne Content-Prozesse",
  "Markenvertrauen",
  "steigende Transparenzanforderungen",
];

const ECOMMERCE_LIST = [
  "tatsächliche Produkteigenschaften nicht verfälschen",
  "Produktbild und Moodbild unterscheiden",
  "KI-Bearbeitung transparent einsetzen",
  "Nutzervertrauen berücksichtigen",
  "sichtbare Kennzeichnung kann Transparenz unterstützen",
];

const IMAGE_LABELS = ["AI", "AI modified", "AI generated"];

const STEPS = [
  { num: "01", title: "Bild hochladen" },
  { num: "02", title: "Kennzeichnung und Darstellung auswählen" },
  { num: "03", title: "Bild mit sichtbarem Label weiterverwenden" },
];

const FAQ = [
  {
    q: "Muss ich jedes KI-generierte Bild kennzeichnen?",
    a: "Das lässt sich nicht pauschal beantworten. Ob eine Kennzeichnung rechtlich erforderlich ist, hängt vom konkreten Inhalt und Einsatz ab. Eine sichtbare Kennzeichnung kann unabhängig davon Transparenz schaffen.",
  },
  {
    q: "Was ist der Unterschied zwischen KI-generiert und KI-bearbeitet?",
    a: "Bei einem KI-generierten Bild entsteht das Bild überwiegend oder vollständig mithilfe eines KI-Systems. Bei einem KI-bearbeiteten Bild basiert die Darstellung auf einem vorhandenen Bild, das mithilfe von KI verändert wurde.",
  },
  {
    q: "Kann ich KI-Produktbilder im Online-Shop nutzen?",
    a: "Das hängt vom konkreten Einsatz ab. Besonders wichtig ist, dass Produktdarstellungen Nutzer nicht über tatsächliche Eigenschaften oder das Aussehen eines Produkts täuschen.",
  },
  {
    q: "Was bedeutet AI generated?",
    a: "AI generated wird als sichtbare Kennzeichnung dafür verwendet, dass ein Bild mithilfe eines KI-Systems generiert wurde.",
  },
  {
    q: "Was bedeutet AI modified?",
    a: "AI modified kennzeichnet praktisch, dass ein bestehendes Bild mithilfe von KI verändert oder bearbeitet wurde.",
  },
  {
    q: "Macht der AI Image Marker meine Bilder EU-AI-Act-konform?",
    a: "Nein. Das Tool unterstützt bei der sichtbaren technischen Kennzeichnung. Es prüft nicht automatisch, welche gesetzlichen Anforderungen für einen konkreten Einsatz gelten.",
  },
  {
    q: "Werden meine hochgeladenen Bilder gespeichert?",
    a: "Die hochgeladenen Bilder werden spätestens nach 60 Minuten gelöscht.",
  },
  {
    q: "Ist der AI Image Marker kostenlos?",
    a: "Ja, der AI Image Marker kann kostenlos genutzt werden.",
  },
];

export function KiBilderKennzeichnenPage() {
  return (
    <>
      <section className="hero">
        <NetworkBg />
        <div className="hero-inner">
          <span className="eyebrow">Wissen · KI-Bilder</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            KI-Bilder kennzeichnen: transparent zeigen, wo KI im Einsatz war
          </h1>
          <p className="hero-sub">
            KI-generierte und KI-bearbeitete Bilder werden längst in Shops,
            Social Media und Marketing eingesetzt.
          </p>
          <p className="hero-sub">Damit entsteht eine praktische Frage:</p>
          <p className="hero-question">
            Wie kann ich sichtbar machen, dass ein Bild vollständig oder
            teilweise mit KI entstanden ist?
          </p>
          <p className="hero-explainer" style={{ marginBottom: 16 }}>
            Eine klare Kennzeichnung schafft Transparenz – sie ersetzt aber
            keine rechtliche Prüfung.
          </p>
          <p className="hero-keymessage">
            Der kostenlose AI Image Marker hilft dir bei der sichtbaren
            technischen Kennzeichnung.
          </p>
          <div className="hero-actions">
            <a
              href="https://ai.visibility-one.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              AI Image Marker öffnen → <span className="sr-only">(öffnet in neuem Tab)</span>
            </a>
          </div>
          <p className="check-trust">Kostenlos nutzbar · keine Rechtsberatung</p>
        </div>
      </section>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Grundlagen</span>
            <h2>Nicht jedes KI-Bild entsteht auf die gleiche Weise.</h2>
          </div>
          <div className="analysis-grid">
            {LABEL_TERMS.map((t) => (
              <div key={t.label} className="check-item">
                <h3>{t.label}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Transparenz</span>
            <h2>Warum KI-Bilder überhaupt kennzeichnen?</h2>
          </div>
          <p className="check-text">
            Transparenz hilft Nutzern dabei zu verstehen, wie ein Bild
            entstanden ist.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Gerade bei Produktdarstellungen, Moodbildern, Werbung oder
            redaktionellen Inhalten kann es relevant sein, zwischen
            Fotografie, KI-Bearbeitung und vollständig generierten Bildern
            zu unterscheiden.
          </p>
          <ul className="detail-list" style={{ marginTop: 16 }}>
            {TRANSPARENCY_LIST.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">E-Commerce</span>
            <h2>KI-Bilder im Online-Shop</h2>
          </div>
          <p className="check-text">Gerade im E-Commerce kann KI sehr praktisch sein.</p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Produktbilder lassen sich bearbeiten, Hintergründe verändern,
            zusätzliche Moodbilder erstellen oder visuelle Varianten
            entwickeln.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Dabei sollte jedoch klar bleiben, ob ein Bild das tatsächliche
            Produkt realistisch abbildet oder eine künstlich erzeugte
            Darstellung enthält.
          </p>
          <ul className="detail-list" style={{ marginTop: 16 }}>
            {ECOMMERCE_LIST.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Aus der Praxis</span>
            <h2>Warum der AI Image Marker entstanden ist</h2>
          </div>
          <p className="check-text">
            Ich nutze KI selbst im Rahmen meines eigenen E-Commerce-Shops –
            unter anderem für Produkt- und Moodbilder.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Dabei entstand eine ganz praktische Frage: Wie kann ich Bilder
            schnell und sichtbar kennzeichnen, ohne jedes Mal manuell ein
            Label zu bauen?
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Aus diesem eigenen Bedarf ist der AI Image Marker entstanden.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Kostenloses Tool</span>
            <h2>AI Image Marker</h2>
          </div>
          <p className="check-text">
            Mit dem AI Image Marker kannst du JPG- und PNG-Bilder hochladen
            und direkt mit einer sichtbaren Kennzeichnung versehen.
          </p>
          <div className="tool-label-chips">
            {IMAGE_LABELS.map((label) => (
              <span key={label} className="tool-label-chip">
                {label}
              </span>
            ))}
          </div>
          <p className="check-text" style={{ marginTop: 20 }}>Nutzer können:</p>
          <ul className="detail-list">
            <li>Position wählen</li>
            <li>Größe anpassen</li>
            <li>Transparenz einstellen</li>
          </ul>
          <div className="detail-cta-row">
            <a
              href="https://ai.visibility-one.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              AI Image Marker öffnen → <span className="sr-only">(öffnet in neuem Tab)</span>
            </a>
          </div>
          <p className="check-trust">
            Kostenlos nutzbar · Bilder werden spätestens nach 60 Minuten
            gelöscht · keine Rechtsberatung
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">So geht&apos;s</span>
            <h2>In drei Schritten zum gekennzeichneten Bild</h2>
          </div>
          <div className="phase-list">
            {STEPS.map((s) => (
              <div key={s.num} className="phase-item">
                <span className="phase-num">{s.num}</span>
                <div>
                  <h3>{s.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Wichtig</span>
            <h2>Technische Kennzeichnung ist nicht dasselbe wie Rechtsberatung.</h2>
          </div>
          <p className="check-text">
            Welche Kennzeichnung in einem konkreten Fall rechtlich
            erforderlich ist, hängt vom Einsatz, Inhalt und den jeweils
            geltenden Vorgaben ab.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Der AI Image Marker unterstützt bei der technischen und
            sichtbaren Kennzeichnung.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Er prüft nicht automatisch, welche rechtliche Verpflichtung im
            Einzelfall besteht.
          </p>
          <div className="method-benefit">
            <p>
              Kennzeichnen hilft bei Transparenz – ersetzt aber keine
              rechtliche Prüfung.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">EU AI Act</span>
            <h2>Was hat der EU AI Act mit KI-Bildern zu tun?</h2>
          </div>
          <p className="check-text">
            Der EU AI Act (Verordnung (EU) 2024/1689) enthält in Artikel 50
            Transparenzpflichten für bestimmte KI-generierte oder
            manipulierte Inhalte. Diese Pflichten gelten seit dem 2. August
            2026.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Artikel 50 unterscheidet dabei zwischen verschiedenen Pflichten
            und Akteuren – etwa zwischen Anbietern von KI-Systemen und
            Betreibern, die bestimmte Inhalte veröffentlichen. Es gibt
            außerdem Ausnahmen und Differenzierungen, etwa bei rein
            redaktioneller Standardbearbeitung.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Welche konkrete Pflicht für ein bestimmtes Bild oder einen
            konkreten Einsatz gilt, muss deshalb im Einzelfall geprüft
            werden.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Kennzeichnung</span>
            <h2>Sichtbares Label und technische Metadaten sind nicht dasselbe.</h2>
          </div>
          <p className="check-text">
            Ein sichtbares Label kann unmittelbar von Nutzern wahrgenommen
            werden.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Technische Metadaten oder maschinenlesbare Informationen können
            zusätzlich existieren.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Der AI Image Marker dient primär der sichtbaren Kennzeichnung –
            damit werden nicht automatisch sämtliche technischen oder
            gesetzlichen Kennzeichnungspflichten erfüllt.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Human in the Loop</span>
            <h2>Am Ende entscheidet der Mensch.</h2>
          </div>
          <p className="check-text">KI kann Bilder erzeugen oder verändern.</p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Die Verantwortung dafür, wie ein Bild eingesetzt, beschrieben
            und gekennzeichnet wird, sollte aber nicht automatisch an ein
            Tool delegiert werden.
          </p>
          <div className="method-benefit">
            <p>KI unterstützt. Der Mensch prüft Kontext und Verwendung.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Quellen</span>
            <h2>Weiterführende Primärquellen</h2>
          </div>
          <a
            href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link detail-secondary-link source-link"
          >
            EUR-Lex: Verordnung (EU) 2024/1689, Artikel 50 →{" "}
            <span className="sr-only">(öffnet in neuem Tab)</span>
          </a>
          <a
            href="https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link detail-secondary-link source-link"
          >
            Europäische Kommission: Transparency obligations under Article
            50 AI Act → <span className="sr-only">(öffnet in neuem Tab)</span>
          </a>
          <a
            href="https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link detail-secondary-link source-link"
          >
            Europäische Kommission: Guidelines on transparency obligations →{" "}
            <span className="sr-only">(öffnet in neuem Tab)</span>
          </a>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Häufige Fragen</span>
            <h2>Fragen zur Kennzeichnung von KI-Bildern</h2>
          </div>
          <div className="faq-col" style={{ marginTop: 24 }}>
            {FAQ.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <AuthorModule />
        </div>
      </Reveal>

      <Reveal className="section final-cta">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Kostenloses Tool</span>
            <h2>KI-Bild kennzeichnen</h2>
            <p className="lead">
              Bild hochladen, Kennzeichnung auswählen und direkt sichtbar
              machen, wo KI eingesetzt wurde.
            </p>
          </div>
          <div className="detail-cta-row">
            <a
              href="https://ai.visibility-one.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              AI Image Marker öffnen → <span className="sr-only">(öffnet in neuem Tab)</span>
            </a>
          </div>
          <p className="check-trust">
            Kostenlos nutzbar · Bilder werden spätestens nach 60 Minuten
            gelöscht · keine Rechtsberatung
          </p>
          <Link href="/wissen" className="btn-link detail-secondary-link">
            Alle Themen im Wissensbereich →
          </Link>
        </div>
      </Reveal>
    </>
  );
}
