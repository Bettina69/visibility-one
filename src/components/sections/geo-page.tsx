import Link from "next/link";
import { Reveal } from "./reveal";
import { AuthorModule } from "./author-module";

const SEO_QUESTIONS = [
  "Für welche Keywords rankt meine Website?",
  "Welche Seiten erhalten organischen Traffic?",
  "Ist die Website technisch zugänglich?",
  "Entsprechen Inhalte der Suchintention?",
  "Welche Seiten und Wettbewerber ranken vor mir?",
];

const GEO_QUESTIONS = [
  "Bei welchen relevanten Prompts wird mein Unternehmen genannt?",
  "Wird meine Website als Quelle zitiert?",
  "Werde ich in Entscheidungssituationen empfohlen?",
  "Welche Wettbewerber erscheinen stattdessen?",
  "Welche Quellen werden verwendet?",
  "Wie wird meine Marke dargestellt?",
];

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Technische Grundlage",
    text: "Informationen müssen zunächst zugänglich und erfassbar sein. Dazu gehören beispielsweise eine nachvollziehbare Website-Struktur, Crawlbarkeit und technisch sauber bereitgestellte Inhalte.",
  },
  {
    num: "02",
    title: "Eindeutige Unternehmensinformationen",
    list: ["Wer ist das Unternehmen?", "Was bietet es an?", "Für wen?", "In welchem Markt?", "Mit welcher Erfahrung?"],
    after: "Je klarer diese Informationen miteinander verbunden sind, desto leichter können Systeme Zusammenhänge erkennen.",
  },
  {
    num: "03",
    title: "Relevante Inhalte",
    text: "GEO bedeutet nicht automatisch, mehr Content zu produzieren. Entscheidend ist, ob relevante Fragen tatsächlich beantwortet werden. Eine bestehende Seite zu verbessern kann sinnvoller sein, als zehn neue KI-Texte zu veröffentlichen.",
  },
  {
    num: "04",
    title: "Struktur und Maschinenlesbarkeit",
    text: "Klare Seitenstrukturen, semantisch verständliche Inhalte und – wo sinnvoll – strukturierte Daten können dabei helfen, Informationen eindeutiger bereitzustellen. Schema Markup ist dabei kein GEO-Trick und keine Garantie für KI-Citations. Es ist ein Baustein innerhalb einer größeren Informationsstruktur.",
  },
  {
    num: "05",
    title: "Externe Signale",
    text: "Ein Unternehmen definiert seine eigene Bedeutung nicht ausschließlich über seine Website. Auch externe Quellen können beeinflussen, welches Gesamtbild im Web über eine Marke entsteht. Deshalb gehören zur GEO-Analyse auch Signale außerhalb der eigenen Domain.",
  },
];

const VISIBILITY_TERMS = [
  { label: "Mention", title: "Wird das Unternehmen genannt?", text: "Eine Marke kann in einer Antwort vorkommen, ohne als Quelle verwendet zu werden." },
  { label: "Citation", title: "Wird das Unternehmen als Quelle herangezogen?", text: "Hier interessiert, welche Domain oder konkrete Seite in einer KI-Antwort als Quelle auftaucht." },
  { label: "Recommendation", title: "Wird das Unternehmen empfohlen?", text: "Besonders interessant wird Sichtbarkeit, wenn Nutzer nach konkreten Anbietern, Produkten oder Lösungen fragen." },
  { label: "Sentiment", title: "Wie wird das Unternehmen dargestellt?", text: "Eine Nennung kann positiv, neutral oder kritisch sein. Deshalb ist die Anzahl der Mentions allein noch keine ausreichende Kennzahl." },
  { label: "Share of Voice", title: "Wie verteilt sich die Sichtbarkeit im Wettbewerbsumfeld?", text: "Wenn mehrere Anbieter für dieselben relevanten Fragen infrage kommen, lässt sich betrachten, wer wie häufig sichtbar wird." },
];

const PROMPT_LIST = [
  "Welche Fragen sind für das Geschäftsmodell relevant?",
  "Welche Fragen liegen nah an einer Entscheidung?",
  "Welche Themen werden mit dem Unternehmen verbunden?",
  "Welche Wettbewerber erscheinen?",
  "Welche Quellen werden verwendet?",
  "Wo fehlt die eigene Marke?",
];

const EXTERNAL_SIGNALS = [
  { label: "Brand Mentions", text: "Wo wird die Marke erwähnt?" },
  { label: "Citations", text: "Welche Quellen und Domains spielen bei relevanten KI-Antworten eine Rolle?" },
  { label: "Recommendations", text: "Bei welchen relevanten Fragestellungen werden Unternehmen empfohlen?" },
  { label: "Wettbewerber", text: "Welche anderen Anbieter besitzen bei denselben Themen oder Prompts Sichtbarkeit?" },
  { label: "Sentiment", text: "In welchem Kontext werden Marke und Wettbewerber genannt?" },
];

const EEAT_QUESTIONS = [
  "Ist erkennbar, wer hinter dem Unternehmen steht?",
  "Wer hat einen Fachbeitrag geschrieben?",
  "Welche praktische Erfahrung besteht?",
  "Sind Aussagen nachvollziehbar?",
  "Sind Kontakt- und Unternehmensinformationen transparent?",
  "Gibt es Belege für Expertise?",
  "Passen Aussagen auf verschiedenen Seiten zusammen?",
];

const INFLUENCE_LIST = [
  "technische Hindernisse beseitigen",
  "Informationen eindeutiger strukturieren",
  "relevante Fragen besser beantworten",
  "Unternehmens- und Markeninformationen konsistent halten",
  "Expertise nachvollziehbarer darstellen",
  "strukturierte Daten sinnvoll einsetzen",
  "externe Signale analysieren",
  "Content-Lücken erkennen",
  "Unterschiede zu sichtbaren Wettbewerbern untersuchen",
];

const NOT_GEO_LIST = [
  "möglichst viele Texte mit KI zu produzieren",
  "ChatGPT mit Keywords vollzuschreiben",
  "Schema Markup einzubauen und anschließend Empfehlungen zu erwarten",
  "möglichst viele beliebige Brand Mentions zu erzeugen",
  "SEO durch „KI-SEO“ zu ersetzen",
  "eine bestimmte ChatGPT-Platzierung zu versprechen",
];

const PRIORITY_STEPS = [
  { num: "01", title: "Ausgangslage verstehen", text: "Wie steht das Unternehmen bei SEO und KI-Sichtbarkeit da?" },
  { num: "02", title: "Relevanz prüfen", text: "Sind die beobachteten Lücken für das Geschäftsmodell überhaupt wichtig?" },
  { num: "03", title: "Ursachen untersuchen", text: "Was unterscheidet die eigene Präsenz von sichtbaren Wettbewerbern?" },
  { num: "04", title: "Maßnahmen priorisieren", text: "Was verspricht gemessen an Aufwand und Nutzen den größten sinnvollen Hebel?" },
];

const PRACTICE_STEPS = [
  { label: "SEO-Ausgangslage", text: "Wie sichtbar ist die Domain bereits in der klassischen Suche?" },
  { label: "Prompt- und Themenumfeld", text: "Bei welchen relevanten Fragen sollte das Unternehmen überhaupt vorkommen?" },
  { label: "Mentions & Citations", text: "Wo wird die Marke genannt und welche Quellen werden verwendet?" },
  { label: "Recommendations", text: "Bei welchen relevanten Fragen werden Anbieter empfohlen?" },
  { label: "Sentiment", text: "Wie werden Marke und Wettbewerber eingeordnet?" },
  { label: "Wettbewerbsvergleich", text: "Wer besitzt dort Sichtbarkeit, wo die eigene Marke fehlt?" },
  { label: "Ursachenanalyse", text: "Welche technischen, inhaltlichen, strukturellen oder externen Unterschiede sind erkennbar?" },
];

const FAQ = [
  { q: "Was bedeutet GEO?", a: "GEO steht für Generative Engine Optimization. Gemeint ist die Optimierung von Informationen und digitalen Signalen mit Blick darauf, wie Unternehmen und Inhalte von generativen Such- und Antwortsystemen verstanden und berücksichtigt werden können." },
  { q: "Was ist der Unterschied zwischen SEO und GEO?", a: "SEO konzentriert sich vor allem auf Sichtbarkeit in klassischen Suchmaschinen. GEO erweitert diese Perspektive um generative Systeme und betrachtet beispielsweise Mentions, Citations, Recommendations, Prompts und die Einordnung einer Marke in KI-Antworten." },
  { q: "Ersetzt GEO klassische SEO?", a: "Nein. Viele Grundlagen überschneiden sich. Technische Zugänglichkeit, hilfreiche Inhalte, klare Strukturen und nachvollziehbare Unternehmensinformationen bleiben wichtig. GEO erweitert diese Grundlagen um zusätzliche Fragestellungen." },
  { q: "Ist ChatGPT SEO dasselbe wie GEO?", a: "Nicht ganz. „ChatGPT SEO“ fokussiert sprachlich auf ein einzelnes System. GEO ist breiter und betrachtet generative Such- und Antwortsysteme insgesamt." },
  { q: "Was sind Citations bei GEO?", a: "Citations sind Quellen, auf die sich ein KI-System im Zusammenhang mit einer Antwort bezieht oder die es als Quelle ausweist. Eine Citation ist damit etwas anderes als eine reine Markennennung." },
  { q: "Was bedeutet Sentiment?", a: "Sentiment beschreibt den Kontext, in dem ein Unternehmen oder eine Marke dargestellt wird – beispielsweise positiv, neutral oder kritisch." },
  { q: "Was ist Prompt Research?", a: "Prompt Research untersucht relevante Fragen und Entscheidungssituationen, die Nutzer an KI-Systeme richten könnten. Es ergänzt klassische Keyword Research um kontextreichere Fragestellungen." },
  { q: "Kann GEO garantieren, dass ChatGPT mein Unternehmen empfiehlt?", a: "Nein. Unternehmen können die Voraussetzungen für bessere Verständlichkeit und Sichtbarkeit beeinflussen. Die konkrete Antwort eines generativen Systems lässt sich jedoch nicht garantieren." },
  { q: "Wie schnell wirkt GEO?", a: "Dafür gibt es keine pauschale Frist. Ausgangslage, technische Voraussetzungen, Inhalte, externe Signale und Veränderungen der jeweiligen KI-Systeme unterscheiden sich." },
  { q: "Was kostet GEO?", a: "Das hängt davon ab, ob zunächst nur eine Analyse benötigt wird oder anschließend konkrete Optimierungsmaßnahmen umgesetzt werden sollen." },
];

export function GeoPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Wissen · GEO</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            Was ist GEO? Generative Engine Optimization verständlich erklärt
          </h1>
          <p className="hero-sub">
            SEO sorgt dafür, dass Websites in klassischen Suchmaschinen
            gefunden werden.
          </p>
          <p className="hero-sub">
            Doch Suche verändert sich: Menschen erhalten zunehmend direkt
            generierte Antworten – etwa über ChatGPT oder KI-Funktionen in
            Suchmaschinen.
          </p>
          <p className="hero-explainer" style={{ marginBottom: 8 }}>
            Damit entsteht eine zusätzliche Aufgabe für Unternehmen:
            Informationen müssen nicht nur auffindbar sein. Sie sollten so
            eindeutig, relevant und vertrauenswürdig sein, dass KI-Systeme
            ein Unternehmen und sein Angebot richtig einordnen können.
          </p>
          <p className="hero-explainer" style={{ marginBottom: 16 }}>
            Genau hier setzt GEO an.
          </p>
          <p className="hero-keymessage">
            GEO steht für Generative Engine Optimization.
          </p>
          <p className="hero-sub">
            Dabei geht es darum, die Voraussetzungen dafür zu verbessern,
            dass Unternehmen, Marken und Inhalte in generativen Such- und
            Antwortsystemen verstanden, berücksichtigt, genannt oder als
            Quelle verwendet werden können.
          </p>
          <p className="hero-keymessage">
            SEO schafft die Grundlage. GEO erweitert die Optimierung um die
            Sichtbarkeit in generativen Systemen.
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
            <span className="eyebrow">Warum GEO?</span>
            <h2>Suche besteht nicht mehr nur aus zehn blauen Links.</h2>
          </div>
          <p className="check-text">
            Bei einer klassischen Suchmaschine gibt ein Nutzer einen
            Suchbegriff ein und entscheidet anschließend selbst zwischen
            verschiedenen Suchergebnissen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Generative Systeme können einen Teil dieser Auswahl bereits in
            der Antwort übernehmen. Sie fassen Informationen zusammen,
            vergleichen Möglichkeiten, nennen Quellen oder schlagen Anbieter
            vor.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Für Unternehmen verändert sich damit die entscheidende Frage.
          </p>
          <div className="method-benefit">
            <p>Nicht mehr nur: Auf welcher Position rankt meine Website?</p>
            <p style={{ marginTop: 8 }}>
              Sondern zusätzlich: Kommt mein Unternehmen in der Antwort
              überhaupt vor?
            </p>
            <p style={{ marginTop: 8 }}>Und wenn ja: Wie wird es dargestellt?</p>
          </div>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            GEO betrachtet genau diese zusätzliche Ebene.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">SEO + GEO</span>
            <h2>Was ist der Unterschied zwischen SEO und GEO?</h2>
            <p className="lead">
              SEO und GEO verfolgen kein gegensätzliches Ziel. Beide
              versuchen, digitale Informationen so aufzubereiten, dass sie
              gefunden, verstanden und als relevant eingeordnet werden
              können. Der Betrachtungswinkel unterscheidet sich jedoch.
            </p>
          </div>
          <div className="compare-columns">
            <div>
              <h3 className="question-col-label">SEO fragt beispielsweise</h3>
              <ul className="detail-list">
                {SEO_QUESTIONS.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="question-col-label">GEO ergänzt Fragen wie</h3>
              <ul className="detail-list">
                {GEO_QUESTIONS.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="method-benefit">
            <p>
              GEO beginnt deshalb nicht dort, wo SEO aufhört. Beide Bereiche
              überschneiden sich und sollten gemeinsam betrachtet werden.
            </p>
          </div>
          <Link href="/ki-sichtbarkeit" className="btn-link detail-secondary-link">
            Was bedeutet KI-Sichtbarkeit? →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">Methode</span>
            <h2>Wie funktioniert GEO?</h2>
            <p className="lead">
              Es gibt keinen einzelnen GEO-Faktor, den man aktiviert und
              anschließend in ChatGPT oder Google AI sichtbar wird. GEO
              besteht vielmehr aus mehreren Ebenen.
            </p>
          </div>
          <div className="phase-list">
            {HOW_IT_WORKS.map((f) => (
              <div key={f.num} className="phase-item">
                <span className="phase-num">{f.num}</span>
                <div>
                  <h3>{f.title}</h3>
                  {f.text && <p>{f.text}</p>}
                  {f.list && (
                    <ul className="detail-list" style={{ marginTop: 8 }}>
                      {f.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                  {f.after && <p style={{ marginTop: 8 }}>{f.after}</p>}
                </div>
              </div>
            ))}
          </div>
          <Link href="/google-ai-overviews" className="btn-link detail-secondary-link">
            Vertiefend: Google AI Overviews &amp; AI Mode →
          </Link>
          <Link href="/strukturierte-daten" className="btn-link detail-secondary-link">
            Mehr über strukturierte Daten →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Messung</span>
            <h2>GEO bedeutet mehr als „Werde ich bei ChatGPT gefunden?&ldquo;</h2>
            <p className="lead">
              Eine sinnvolle GEO-Analyse sollte verschiedene Formen von
              Sichtbarkeit unterscheiden.
            </p>
          </div>
          <div className="analysis-grid">
            {VISIBILITY_TERMS.map((t) => (
              <div key={t.label} className="check-item">
                <span className="check-num">{t.label}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            GEO misst deshalb nicht nur Präsenz. Es untersucht Kontext und
            Qualität dieser Präsenz.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Prompt Research</span>
            <h2>Keywords verschwinden nicht. Aber sie bekommen Gesellschaft.</h2>
          </div>
          <p className="check-text">
            Keyword Research bleibt wichtig. Menschen suchen jedoch in
            generativen Systemen häufig anders.
          </p>
          <div className="compare-columns">
            <div>
              <h3 className="question-col-label">Keyword</h3>
              <p className="check-text">Shopify SEO Beratung</p>
            </div>
            <div>
              <h3 className="question-col-label">Prompt</h3>
              <p className="check-text">
                „Welche SEO-Beratung kennt sich mit kleinen Shopify-Shops
                aus und kann zusätzlich bei der Sichtbarkeit in KI-Suchen
                helfen?&ldquo;
              </p>
            </div>
          </div>
          <p className="check-text" style={{ marginTop: 24 }}>
            Der zweite Fall enthält wesentlich mehr Kontext:
            Unternehmensgröße, Shopsystem, Leistung und gewünschtes
            Ergebnis.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Genau deshalb ergänzt Prompt Research die klassische
            Keyword-Recherche.
          </p>
          <ul className="detail-list" style={{ marginTop: 20 }}>
            {PROMPT_LIST.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="method-benefit">
            <p>
              Ein gutes Prompt-Set bildet reale Informations- und
              Entscheidungssituationen ab – nicht möglichst viele
              künstliche Variationen derselben Frage.
            </p>
          </div>
          <Link href="/prompt-research" className="btn-link detail-secondary-link">
            Mehr über Prompt Research →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Externe Signale</span>
            <h2>Was sagt das Web über dein Unternehmen?</h2>
          </div>
          <p className="check-text">
            Die eigene Website ist nur eine Perspektive. Für die Einordnung
            eines Unternehmens ist auch interessant, wo und in welchem
            Zusammenhang die Marke außerhalb der eigenen Domain vorkommt.
          </p>
          <div className="analysis-grid" style={{ marginTop: 24 }}>
            {EXTERNAL_SIGNALS.map((s) => (
              <div key={s.label} className="check-item">
                <span className="check-num">{s.label}</span>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <p className="check-text" style={{ marginTop: 20 }}>
            Damit lässt sich nicht automatisch beweisen, warum ein
            KI-System eine bestimmte Antwort erzeugt.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Aber es entstehen vergleichbare Hinweise, anhand derer sich
            Unterschiede und mögliche Lücken untersuchen lassen.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">E-E-A-T</span>
            <h2>Warum Vertrauen auch für GEO wichtig ist</h2>
          </div>
          <p className="check-text">E-E-A-T steht für:</p>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            Experience · Expertise · Authoritativeness · Trustworthiness
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            also Erfahrung, Fachwissen, Autorität und Vertrauenswürdigkeit.
          </p>
          <ul className="detail-list" style={{ marginTop: 20 }}>
            {EEAT_QUESTIONS.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
          <div className="method-benefit">
            <p>
              E-E-A-T ist dabei kein einzelner GEO-Rankingfaktor, den man
              abhaken kann. Es ist vielmehr ein hilfreicher Blick darauf, ob
              eine Website ausreichend nachvollziehbare Vertrauens- und
              Kompetenzsignale vermittelt.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Einflussmöglichkeiten</span>
            <h2>Kann man für KI-Systeme optimieren?</h2>
          </div>
          <p className="hero-keymessage">
            Ja – wenn man unter Optimierung versteht, die Voraussetzungen zu
            verbessern.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>Unternehmen können beispielsweise:</p>
          <ul className="detail-list">
            {INFLUENCE_LIST.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="check-text" style={{ marginTop: 16 }}>
            Was Unternehmen nicht kontrollieren können: welche konkrete
            Antwort ein generatives System zu einem bestimmten Zeitpunkt
            erzeugt.
          </p>
          <div className="method-benefit">
            <p>
              Deshalb sollte seriöse GEO-Beratung keine Platzierungen,
              Citations oder Empfehlungen garantieren.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Keine GEO-Tricks</span>
            <h2>GEO braucht keine Zaubertricks</h2>
          </div>
          <p className="check-text">
            Rund um KI-Sichtbarkeit entstehen schnell neue Versprechen.
            Deshalb ist mindestens genauso wichtig, was ich nicht unter GEO
            verstehe.
          </p>
          <p className="check-text" style={{ marginTop: 16 }}>GEO bedeutet nicht:</p>
          <ul className="detail-list">
            {NOT_GEO_LIST.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <div className="method-benefit">
            <p>
              Eine gute GEO-Strategie beginnt mit einer Analyse – nicht mit
              einer Liste vermeintlicher Hacks.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Human in the Loop</span>
            <h2>Tools analysieren. Menschen entscheiden.</h2>
          </div>
          <p className="check-text">
            GEO ist stark datengetrieben. Tools können Rankings, Prompts,
            Mentions, Citations, Wettbewerber und weitere Signale erfassen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Die Zahlen allein sagen aber noch nicht, was ein Unternehmen als
            Nächstes tun sollte.
          </p>
          <p className="check-text" style={{ marginTop: 20 }}>
            Ein Wettbewerber wird häufiger genannt. Das bedeutet nicht
            automatisch, dass dessen gesamte Strategie kopiert werden
            sollte.
          </p>
          <ul className="detail-list" style={{ marginTop: 12 }}>
            <li>Vielleicht besitzt er mehr relevante Inhalte.</li>
            <li>Vielleicht gibt es stärkere externe Signale.</li>
            <li>Vielleicht unterscheidet sich seine Positionierung.</li>
            <li>
              Oder die untersuchten Prompts sind für das eigene
              Geschäftsmodell gar nicht wichtig genug.
            </li>
          </ul>
          <p className="check-text" style={{ marginTop: 16 }}>
            Deshalb arbeite ich nach dem Prinzip: Human in the Loop.
          </p>
          <div className="method-benefit">
            <p>
              Die Daten liefern Hinweise. Ein Mensch prüft Kontext,
              Relevanz und wirtschaftliche Bedeutung, bevor daraus eine
              Empfehlung entsteht.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">Priorisierung</span>
            <h2>Braucht jedes Unternehmen jetzt GEO?</h2>
          </div>
          <p className="hero-keymessage">Nein.</p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Und gerade das sollte eine gute Analyse herausfinden.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Wenn eine Website grundlegende technische Probleme hat,
            wichtige Leistungsseiten fehlen oder bereits bei Google kaum
            relevante Sichtbarkeit besitzt, können klassische
            SEO-Maßnahmen zunächst die höhere Priorität haben.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Bei anderen Unternehmen ist die SEO-Basis bereits solide – dort
            kann eine gezielte Analyse der KI-Sichtbarkeit neue Lücken
            sichtbar machen.
          </p>
          <div className="phase-list">
            {PRIORITY_STEPS.map((s) => (
              <div key={s.num} className="phase-item">
                <span className="phase-num">{s.num}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            Nicht jede mögliche GEO-Maßnahme ist automatisch eine sinnvolle
            GEO-Maßnahme.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">GEO in der Praxis</span>
            <h2>Wie könnte eine GEO-Analyse ablaufen?</h2>
          </div>
          <p className="check-text">
            Eine sinnvolle Analyse kann beispielsweise mit der bestehenden
            SEO-Situation beginnen. Danach werden relevante
            KI-Sichtbarkeitssignale betrachtet.
          </p>
          <div className="analysis-grid" style={{ marginTop: 24 }}>
            {PRACTICE_STEPS.map((s) => (
              <div key={s.label} className="check-item">
                <span className="check-num">{s.label}</span>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <p className="check-text" style={{ marginTop: 20 }}>
            Erst danach folgt: Priorisierung konkreter Maßnahmen.
          </p>
          <div className="method-benefit">
            <p>
              Damit unterscheidet sich eine GEO-Analyse von einem
              automatisierten Tool-Report.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">SEO + GEO</span>
            <h2>Die bessere Frage lautet: Wo liegt das eigentliche Problem?</h2>
          </div>
          <p className="check-text">
            Wenn organische Rankings fehlen, kann SEO die Priorität sein.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Wenn Google-Sichtbarkeit vorhanden ist, das Unternehmen aber bei
            relevanten KI-Fragen kaum vorkommt, lohnt sich ein genauerer
            Blick auf GEO.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Und häufig betrifft eine sinnvolle Maßnahme beide Bereiche
            gleichzeitig.
          </p>
          <ul className="detail-list" style={{ marginTop: 20 }}>
            <li>
              Ein klarerer Fachartikel kann Google helfen und Informationen
              für KI-Systeme verständlicher machen.
            </li>
            <li>
              Eine bessere Unternehmensdarstellung kann Vertrauen bei
              Nutzern schaffen und gleichzeitig die maschinelle Einordnung
              erleichtern.
            </li>
            <li>
              Eine saubere Seitenstruktur kann Crawlbarkeit und
              Verständlichkeit verbessern.
            </li>
          </ul>
          <div className="method-benefit">
            <p>
              Deshalb behandle ich SEO und GEO nicht als zwei getrennte
              Welten.
            </p>
          </div>
          <div className="detail-cta-row" style={{ gap: 12 }}>
            <Link href="/ki-sichtbarkeit" className="btn-link">
              Mehr über KI-Sichtbarkeit →
            </Link>
            <Link href="/chatgpt-sichtbarkeit" className="btn-link">
              Wie funktioniert Sichtbarkeit bei ChatGPT? →
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal className="section final-cta">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Erster Schritt</span>
            <h2>Erst verstehen, wo du stehst. Dann optimieren.</h2>
          </div>
          <p className="check-text">
            Bevor du neue GEO-Maßnahmen umsetzt, lohnt sich ein Blick auf
            die bestehende Ausgangslage.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Der kostenlose SEO- &amp; KI-Sichtbarkeitscheck gibt dir eine
            erste Orientierung. Du bekommst keine automatisierte Liste mit
            zwanzig Standardempfehlungen, sondern eine erste persönliche
            Einschätzung mit 2–3 konkreten Hinweisen.
          </p>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            Der Check ersetzt keine vollständige SEO-, GEO-, Wettbewerbs-,
            Citation-, Recommendation- oder Sentiment-Analyse. Er soll
            zunächst eine einfachere Frage beantworten: Wo lohnt es sich,
            genauer hinzusehen?
          </p>
          <div className="detail-cta-row">
            <Link href="/sichtbarkeitscheck" className="btn btn-primary">
              SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
            </Link>
          </div>
          <p className="check-trust">
            unverbindlich · persönlich geprüft · 2–3 konkrete Hinweise
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Häufige Fragen</span>
            <h2>Fragen zu GEO</h2>
          </div>
          <div className="faq-col" style={{ marginTop: 24 }}>
            {FAQ.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <Link href="/angebote" className="btn-link detail-secondary-link">
            GEO-Beratung &amp; Angebote ansehen →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Weiterlesen</span>
            <h2>GEO ist ein Teil von KI-Sichtbarkeit.</h2>
          </div>
          <p className="check-text">
            Wenn du zunächst verstehen möchtest, wie KI-Sichtbarkeit
            insgesamt gemessen und eingeordnet werden kann:
          </p>
          <Link href="/ki-sichtbarkeit" className="btn-link detail-secondary-link">
            Was bedeutet KI-Sichtbarkeit für Unternehmen? →
          </Link>
          <p className="check-text" style={{ marginTop: 20 }}>
            Wenn dich speziell interessiert, wie Unternehmen in
            ChatGPT-Antworten vorkommen:
          </p>
          <Link href="/chatgpt-sichtbarkeit" className="btn-link detail-secondary-link">
            Bei ChatGPT gefunden werden →
          </Link>
          <AuthorModule />
          <Link href="/wissen" className="btn-link detail-secondary-link">
            Alle Themen im Wissensbereich →
          </Link>
        </div>
      </Reveal>
    </>
  );
}
