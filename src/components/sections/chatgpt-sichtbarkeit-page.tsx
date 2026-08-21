import Link from "next/link";
import { Reveal } from "./reveal";
import { AuthorModule } from "./author-module";
import { NetworkBg } from "./network-bg";
import { RelatedReading } from "./related-reading";
import { RelationshipFlow } from "./relationship-flow";

const TERMS = [
  {
    label: "Mention",
    title: "Wird dein Unternehmen genannt?",
    text: "Deine Marke oder dein Unternehmen taucht in einer relevanten ChatGPT-Antwort auf.",
  },
  {
    label: "Citation",
    title: "Wird deine Website als Quelle verwendet?",
    text: "Eine Seite oder Information wird im Zusammenhang mit einer Antwort als Quelle herangezogen oder verlinkt.",
  },
  {
    label: "Recommendation",
    title: "Wirst du empfohlen?",
    text: "ChatGPT nennt dein Unternehmen als mögliche Lösung, Anbieter oder Empfehlung für eine konkrete Frage.",
  },
  {
    label: "Sentiment",
    title: "Wie wird dein Unternehmen eingeordnet?",
    text: "Eine Nennung allein reicht nicht. Entscheidend ist auch, ob dein Unternehmen positiv, neutral oder kritisch dargestellt wird und mit welchen Eigenschaften es verbunden wird.",
  },
];

const EXAMPLE_PROMPTS = [
  "Welche Anbieter eignen sich für …?",
  "Welche Alternative gibt es zu …?",
  "Welches Unternehmen bietet … für kleine Unternehmen an?",
  "Was ist die beste Lösung für …?",
  "Welche Anbieter haben Erfahrung mit …?",
];

const PROMPT_QUESTIONS = [
  "Welche Fragen stellen potenzielle Kunden?",
  "Welche Probleme versuchen sie zu lösen?",
  "Welche Anbieter werden bei diesen Fragen genannt?",
  "Welche Marken fehlen?",
  "Welche Quellen werden verwendet?",
  "Welche Eigenschaften werden mit den genannten Unternehmen verbunden?",
];

const GOOGLE_VS_CHATGPT = [
  "verständliche und eindeutige Inhalte",
  "thematische Zuordnung eines Unternehmens",
  "technische Zugänglichkeit",
  "strukturierte Informationen",
  "externe Erwähnungen",
  "vertrauenswürdige Quellen",
  "Citations",
  "Empfehlungen",
  "Marken- und Unternehmenssignale",
];

const TECH_TERMS = [
  {
    label: "Crawlability",
    text: "Kann ein Bot deine Seite technisch abrufen? Das ist die Grundvoraussetzung für jede Form automatisierter Verarbeitung, unabhängig vom System.",
  },
  {
    label: "OAI-SearchBot",
    text: "OpenAIs eigener Crawler für die ChatGPT-Suche. Er lässt sich unabhängig von anderen OpenAI-Bots über robots.txt steuern.",
  },
  {
    label: "Bing / Suchindizes",
    text: "Für die Websuche in ChatGPT besteht unter anderem eine öffentlich bekannte technische Partnerschaft mit Microsoft Bing. Klassische Suchmaschinen-Sichtbarkeit kann deshalb relevant sein, ist aber kein alleiniger Faktor.",
  },
  {
    label: "Retrieval",
    text: "Für eine konkrete Frage wird nur ein kleiner Ausschnitt verfügbarer Inhalte tatsächlich herangezogen. Welcher, hängt von Formulierung, Kontext und Aktualität der Frage ab.",
  },
];

const FACTORS = [
  {
    num: "01",
    title: "Eine technisch zugängliche Website",
    text: "Inhalte müssen grundsätzlich auffindbar und technisch zugänglich sein. Blockierte, schlecht strukturierte oder schwer erfassbare Informationen erschweren auch die weitere maschinelle Verarbeitung.",
  },
  {
    num: "02",
    title: "Klare Unternehmenssignale",
    text: "Eine Website sollte eindeutig beantworten können:",
    list: [
      "Wer ist das Unternehmen?",
      "Was bietet es an?",
      "Für wen?",
      "In welchem Markt?",
      "Mit welcher Erfahrung und Kompetenz?",
    ],
    after: "Je widersprüchlicher diese Informationen sind, desto schwieriger wird eine eindeutige Zuordnung.",
  },
  {
    num: "03",
    title: "Inhalte, die echte Fragen beantworten",
    text: "Nicht jede Seite braucht mehr Text. Entscheidend ist, ob die vorhandenen Inhalte die Fragen beantworten, die Kunden tatsächlich stellen. Hilfreich können beispielsweise Leistungsseiten, Fachinhalte, FAQs, Vergleiche, Anwendungsfälle und nachvollziehbare Erklärungen sein.",
  },
  {
    num: "04",
    title: "E-E-A-T und Vertrauen",
    text: "E-E-A-T steht für Experience, Expertise, Authoritativeness und Trustworthiness – also Erfahrung, Fachwissen, Autorität und Vertrauenswürdigkeit.",
    list: [
      "Wer steht hinter dem Angebot?",
      "Welche praktische Erfahrung ist vorhanden?",
      "Wer verantwortet Inhalte?",
      "Welche Aussagen lassen sich nachvollziehen?",
      "Welche externen Signale stützen die Positionierung?",
    ],
  },
  {
    num: "05",
    title: "Externe Erwähnungen und Quellen",
    text: "Ein Unternehmen beschreibt sich auf der eigenen Website naturgemäß selbst. Interessant wird deshalb auch, was außerhalb der eigenen Domain über das Unternehmen zu finden ist. Brand Mentions, Citations und Empfehlungen können zusätzliche Signale liefern.",
  },
];

const METRICS = [
  { label: "Mentions", text: "Wie häufig wird ein Unternehmen bei relevanten Fragen genannt?" },
  { label: "Citations", text: "Welche Domains und Seiten werden als Quellen verwendet?" },
  { label: "Recommendations", text: "Bei welchen kauf- oder entscheidungsnahen Fragen wird ein Unternehmen empfohlen?" },
  { label: "Sentiment", text: "Wie wird über die Marke gesprochen?" },
  { label: "Prompts", text: "Bei welchen konkreten Fragestellungen entsteht Sichtbarkeit?" },
  { label: "Wettbewerb", text: "Welche Unternehmen werden stattdessen oder häufiger genannt?" },
  { label: "Share of Voice", text: "Wie verteilt sich die Sichtbarkeit innerhalb eines relevanten Themen- oder Wettbewerbsumfelds?" },
];

const COMPETITOR_QUESTIONS = [
  "Fehlt eine relevante Seite?",
  "Ist die Positionierung unklar?",
  "Fehlen Informationen?",
  "Gibt es Unterschiede bei externen Signalen?",
  "Oder besteht schlicht kein sinnvoller Optimierungsbedarf?",
];

const GEO_STEPS = [
  { num: "01", title: "SEO-Basis verstehen", text: "Technik, Rankings, Inhalte und bestehende Sichtbarkeit prüfen." },
  { num: "02", title: "KI-Sichtbarkeit analysieren", text: "Mentions, Citations, Recommendations, Sentiment, Prompts und Wettbewerber betrachten." },
  { num: "03", title: "Ursachen einordnen", text: "Nicht jede fehlende Nennung ist automatisch ein Problem." },
  { num: "04", title: "Maßnahmen priorisieren", text: "Nur das umsetzen, was nachvollziehbar und wirtschaftlich sinnvoll ist." },
];

const FAQ = [
  {
    q: "Kann ich meine Website bei ChatGPT anmelden?",
    a: "ChatGPT-Sichtbarkeit funktioniert nicht wie ein klassischer Unternehmenseintrag, bei dem eine Anmeldung automatisch für relevante Empfehlungen sorgt. Entscheidend ist vielmehr, ob Informationen über ein Unternehmen technisch zugänglich, verständlich und im jeweiligen Kontext relevant sind.",
  },
  {
    q: "Warum findet ChatGPT meine Konkurrenz, aber mich nicht?",
    a: "Dafür kann es unterschiedliche Gründe geben. Unterschiede können beispielsweise bei Inhalten, Unternehmenssignalen, externen Erwähnungen, verwendeten Quellen oder der thematischen Einordnung bestehen. Erst ein Vergleich zeigt, welche Unterschiede tatsächlich relevant sind.",
  },
  {
    q: "Muss ich für ChatGPT andere Texte schreiben als für Google?",
    a: "Nicht grundsätzlich. Gute Inhalte sollten in erster Linie Menschen helfen und ein Thema eindeutig beantworten. GEO bedeutet nicht, Texte künstlich für eine KI umzuschreiben. Häufig geht es vielmehr darum, Informationen klarer, strukturierter und eindeutiger bereitzustellen.",
  },
  {
    q: "Hilft Schema Markup bei ChatGPT?",
    a: "Strukturierte Daten können dabei helfen, Informationen maschinenlesbar und eindeutig auszuzeichnen. Sie sind jedoch kein Garant dafür, dass ein Unternehmen von ChatGPT genannt, zitiert oder empfohlen wird.",
  },
  {
    q: "Sind viele Brand Mentions automatisch gut?",
    a: "Nein. Menge allein sagt wenig über Qualität und Kontext aus. Relevant ist unter anderem, wo, warum und in welchem Zusammenhang ein Unternehmen erwähnt wird.",
  },
  {
    q: "Was ist der Unterschied zwischen einer Mention und einer Citation?",
    a: "Bei einer Mention wird ein Unternehmen oder eine Marke in einer Antwort genannt. Bei einer Citation wird eine konkrete Quelle oder Seite zur Unterstützung beziehungsweise als Quelle einer Antwort herangezogen.",
  },
  {
    q: "Was bedeutet Sentiment bei ChatGPT?",
    a: "Sentiment beschreibt den Kontext einer Nennung. Ein Unternehmen kann positiv, neutral oder kritisch dargestellt werden. Deshalb sollte nicht nur die Anzahl der Nennungen betrachtet werden.",
  },
  {
    q: "Kann man garantieren, dass ChatGPT mein Unternehmen empfiehlt?",
    a: "Nein. Seriöse GEO- oder SEO-Beratung kann Voraussetzungen und Signale verbessern, aber keine konkrete Empfehlung durch ein generatives KI-System garantieren.",
  },
  {
    q: "Muss meine Website bei Bing indexiert sein, damit ChatGPT mich findet?",
    a: "Nicht zwingend. ChatGPT nutzt für die Websuche unter anderem eine Partnerschaft mit Microsoft Bing, betreibt mit OAI-SearchBot aber auch einen eigenen, unabhängig über robots.txt steuerbaren Crawler. Eine Bing-Indexierung kann ein relevanter Faktor sein, ist aber keine zwingende Einzelvoraussetzung und keine Garantie für eine Nennung.",
  },
  {
    q: "Was passiert, wenn ich OAI-SearchBot blockiere?",
    a: "Laut OpenAI erscheint deine Website dann nicht mehr in ChatGPT-Suchantworten, kann aber weiterhin als reiner Navigationslink auftauchen. Das betrifft nur die Sichtbarkeit in der Suche, nicht automatisch das Training der KI-Modelle – dafür ist der separate GPTBot zuständig.",
  },
  {
    q: "Was ist der Unterschied zwischen ChatGPT SEO und GEO?",
    a: "„ChatGPT SEO“ beschreibt meist speziell die Optimierung mit Blick auf ChatGPT-Sichtbarkeit. GEO – Generative Engine Optimization – betrachtet breiter, wie Unternehmen und Inhalte in generativen Such- und Antwortsystemen sichtbar werden. ChatGPT ist dabei ein wichtiger Kanal, aber nicht der einzige.",
  },
  {
    q: "Brauche ich ChatGPT-Sichtbarkeit überhaupt?",
    a: "Nicht für jedes Unternehmen hat jeder KI-Kanal dieselbe Priorität. Entscheidend ist, wo potenzielle Kunden tatsächlich suchen und welche wirtschaftliche Bedeutung der Kanal besitzt. Genau deshalb sollte vor Maßnahmen zunächst analysiert werden.",
  },
];

export function ChatgptSichtbarkeitPage() {
  return (
    <>
      <section className="hero">
        <NetworkBg />
        <div className="hero-inner">
          <span className="eyebrow">Wissen · ChatGPT-Sichtbarkeit</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            Bei ChatGPT gefunden werden: Wie Unternehmen in KI-Antworten
            sichtbar werden
          </h1>
          <p className="hero-sub">
            Immer mehr Menschen suchen nicht mehr nur über eine klassische
            Ergebnisliste. Sie fragen ChatGPT direkt nach Anbietern,
            Produkten, Lösungen oder Empfehlungen.
          </p>
          <p className="hero-sub">Für Unternehmen entsteht dadurch eine neue Frage:</p>
          <p className="hero-question">
            Was antwortet ChatGPT, wenn jemand nach einem Angebot wie meinem
            sucht – und kommt mein Unternehmen darin überhaupt vor?
          </p>
          <p className="hero-explainer" style={{ marginBottom: 8 }}>
            Eine gute Google-Platzierung ist dafür eine wichtige Grundlage.
            Sie bedeutet aber nicht automatisch, dass dein Unternehmen auch
            in ChatGPT-Antworten genannt, als Quelle verwendet oder
            empfohlen wird.
          </p>
          <p className="hero-explainer" style={{ marginBottom: 20 }}>
            ChatGPT-Sichtbarkeit betrachtet deshalb nicht nur Rankings,
            sondern wie dein Unternehmen von einem KI-System verstanden und
            in relevanten Antworten eingeordnet wird.
          </p>
          <p className="hero-keymessage">
            ChatGPT-Sichtbarkeit ist Teil einer umfassenderen SEO- und
            GEO-Strategie – kein Ersatz für SEO.
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
            <span className="eyebrow">Grundlagen</span>
            <h2>Was bedeutet Sichtbarkeit bei ChatGPT?</h2>
          </div>
          <p className="check-text">
            Bei Google denken wir häufig in Rankings: Suchbegriff →
            Suchergebnis → Position → Klick.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Bei ChatGPT funktioniert Sichtbarkeit anders. Nutzer formulieren
            konkrete Fragen und erhalten daraus generierte Antworten. Dabei
            kann dein Unternehmen auf unterschiedliche Weise vorkommen.
          </p>
          <div className="analysis-grid" style={{ marginTop: 32 }}>
            {TERMS.map((t) => (
              <div key={t.label} className="check-item">
                <span className="check-num">{t.label}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            Sichtbarkeit bedeutet deshalb nicht nur: „ChatGPT kennt meine
            Marke.“ Entscheidend ist, wann, warum und in welchem
            Zusammenhang sie auftaucht.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Suchverhalten</span>
            <h2>Warum ChatGPT für Unternehmen interessant wird</h2>
          </div>
          <p className="check-text">
            Eine klassische Google-Suche besteht häufig aus wenigen
            Begriffen. Bei ChatGPT können Nutzer wesentlich konkreter
            fragen.
          </p>
          <ul className="detail-list" style={{ marginTop: 20 }}>
            {EXAMPLE_PROMPTS.map((p) => (
              <li key={p}>„{p}“</li>
            ))}
          </ul>
          <p className="check-text" style={{ marginTop: 20 }}>
            Damit verschiebt sich ein Teil der Suche von einzelnen Keywords
            hin zu Fragen, Situationen und Entscheidungskontexten.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Für Unternehmen bedeutet das: Es reicht nicht mehr nur zu
            wissen, für welche Keywords eine Website rankt.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Zusätzlich wird interessant: Bei welchen Fragen und Themen wird
            mein Unternehmen von einem KI-System berücksichtigt?
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Technische Grundlagen</span>
            <h2>Was muss technisch stimmen, damit ChatGPT deine Website überhaupt findet?</h2>
          </div>
          <p className="check-text">
            Bevor irgendetwas mit Mentions, Citations oder Recommendations
            passiert, muss eine Website überhaupt technisch erreichbar
            sein. Diese Grundlage wird oft übersprungen. Dabei entscheidet
            sie, ob ChatGPT deine Inhalte im besten Fall überhaupt in
            Betracht ziehen kann.
          </p>
          <RelationshipFlow
            stages={[
              { title: "Website", text: "Technisch erreichbar und crawlbar" },
              {
                title: "Crawlability / OAI-SearchBot",
                text: "Bot kann Inhalte abrufen und einordnen",
              },
              {
                title: "Search / Retrieval",
                text: "Inhalt wird für eine konkrete Frage herangezogen",
              },
              {
                title: "Mögliche Citation / Recommendation",
                text: "Nennung, Quelle oder Empfehlung in der Antwort",
                uncertain: true,
              },
            ]}
          />
          <div className="analysis-grid" style={{ marginTop: 24 }}>
            {TECH_TERMS.map((t) => (
              <div key={t.label} className="check-item">
                <span className="check-num">{t.label}</span>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <div className="method-benefit">
            <p>
              Wird OAI-SearchBot in der robots.txt blockiert, taucht eine
              Website laut OpenAI nicht mehr in ChatGPT-Suchantworten auf,
              kann aber weiterhin als reiner Navigationslink erscheinen.
              Änderungen an der robots.txt wirken sich laut OpenAI nicht
              sofort aus, sondern nach etwa 24 Stunden.
            </p>
          </div>
          <p className="check-text" style={{ marginTop: 24 }}>
            Technisch erreichbar zu sein bedeutet aber noch nicht, genannt,
            zitiert oder empfohlen zu werden. Diese drei Ebenen habe ich
            weiter oben bereits unterschieden. Crawlability entscheidet nur
            darüber, ob eine Website überhaupt in Betracht kommen kann.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Ob ein Inhalt in einer konkreten Antwort tatsächlich verwendet
            wird, hängt zusätzlich von Aktualität, Spezifität,
            Quellenqualität ab und davon, wie genau er zur gestellten
            Frage passt. Technik schafft die Möglichkeit. Sie entscheidet
            nicht allein über das Ergebnis.
          </p>
          <p className="check-note" style={{ marginTop: 20, maxWidth: "62ch" }}>
            Häufig liest man, eine Bing-Indexierung sei zwingende
            Voraussetzung für ChatGPT-Sichtbarkeit. Das ist zu pauschal:
            ChatGPT nutzt für die Websuche unter anderem eine Partnerschaft
            mit Bing, betreibt mit OAI-SearchBot aber auch einen eigenen,
            unabhängig steuerbaren Crawler. Beide Wege können relevant
            sein. Keiner davon garantiert eine Nennung.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Prompt Research</span>
            <h2>Keywords bleiben wichtig. Prompts erweitern die Analyse.</h2>
          </div>
          <p className="check-text">
            Ein Keyword beschreibt häufig relativ kompakt, wonach jemand
            sucht. Ein Prompt kann dagegen wesentlich mehr Kontext
            enthalten.
          </p>
          <div className="compare-columns">
            <div>
              <h3 className="question-col-label">Keyword</h3>
              <p className="check-text">SEO Beratung</p>
            </div>
            <div>
              <h3 className="question-col-label">Prompt</h3>
              <p className="check-text">
                „Welche SEO-Beratung eignet sich für einen kleinen
                Online-Shop, der zusätzlich seine Sichtbarkeit in ChatGPT
                verbessern möchte?“
              </p>
            </div>
          </div>
          <p className="check-text" style={{ marginTop: 24 }}>
            Damit verändern sich auch die Anforderungen an eine
            Sichtbarkeitsanalyse. Es geht nicht darum, möglichst viele
            künstliche Prompts zu produzieren.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Entscheidend ist, die Fragen zu identifizieren, die für das
            eigene Unternehmen und die tatsächlichen Entscheidungen
            potenzieller Kunden relevant sind.
          </p>
          <h3 style={{ marginTop: 28 }}>Prompt Research fragt deshalb:</h3>
          <ul className="detail-list" style={{ marginTop: 8 }}>
            {PROMPT_QUESTIONS.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
          <div className="method-benefit">
            <p>
              So wird aus klassischer Keyword Research eine zusätzliche
              Ebene der Nachfrageanalyse.
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
            <span className="eyebrow">Google + ChatGPT</span>
            <h2>Warum gute Google-Rankings nicht automatisch ChatGPT-Sichtbarkeit bedeuten</h2>
          </div>
          <p className="check-text">
            SEO und ChatGPT-Sichtbarkeit hängen zusammen – sind aber nicht
            identisch.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Eine Website kann bei Google gute Rankings besitzen und
            trotzdem bei relevanten ChatGPT-Fragen kaum vorkommen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Umgekehrt kann ein Unternehmen in einer KI-Antwort genannt
            werden, obwohl seine eigene Website für die konkrete
            Formulierung nicht auf Position 1 bei Google steht.
          </p>
          <p className="check-text" style={{ marginTop: 20 }}>
            Neben der eigenen Website können beispielsweise relevant sein:
          </p>
          <ul className="detail-list">
            {GOOGLE_VS_CHATGPT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="method-benefit">
            <p>
              Deshalb beginnt ChatGPT-Sichtbarkeit mit einer guten SEO-Basis
              – endet dort aber nicht.
            </p>
          </div>
          <Link href="/ki-sichtbarkeit" className="btn-link detail-secondary-link">
            Mehr über KI-Sichtbarkeit →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">Einflussfaktoren</span>
            <h2>Was beeinflusst, ob ein Unternehmen bei ChatGPT auftaucht?</h2>
            <p className="lead">
              Es gibt keine einzelne Einstellung und keinen geheimen
              „ChatGPT-SEO&ldquo;-Trick. Mehrere Faktoren können dazu beitragen,
              dass ein Unternehmen und seine Inhalte eindeutig verstanden
              werden.
            </p>
          </div>
          <div className="phase-list">
            {FACTORS.map((f) => (
              <div key={f.num} className="phase-item">
                <span className="phase-num">{f.num}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                  {f.list && (
                    <ul className="detail-list" style={{ marginTop: 8 }}>
                      {f.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                  {f.after && (
                    <p style={{ marginTop: 8 }}>{f.after}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="check-note" style={{ marginTop: 24, maxWidth: "62ch" }}>
            Relevanz, Kontext und Qualität sind wichtiger als bloße Masse.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Messung</span>
            <h2>Wie lässt sich ChatGPT-Sichtbarkeit messen?</h2>
          </div>
          <p className="check-text">
            Es gibt keine universelle Position „3 bei ChatGPT&ldquo;, die sich
            genauso behandeln lässt wie ein klassisches Google-Ranking.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            KI-Antworten können sich verändern – abhängig von Frage,
            Formulierung, Kontext, System und Zeitpunkt. Deshalb betrachte
            ich mehrere Signale gemeinsam.
          </p>
          <div className="analysis-grid" style={{ marginTop: 24 }}>
            {METRICS.map((m) => (
              <div key={m.label} className="check-item">
                <span className="check-num">{m.label}</span>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            Nicht eine einzelne Kennzahl ist entscheidend. Das Gesamtbild
            zeigt, wo ein Unternehmen bereits sichtbar ist und wo
            erkennbare Lücken bestehen.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Wettbewerb</span>
            <h2>Vielleicht ist nicht deine Sichtbarkeit die interessanteste Zahl.</h2>
          </div>
          <p className="check-text">Manchmal ist die wichtigere Frage:</p>
          <p className="hero-question" style={{ marginTop: 4 }}>
            Warum wird ein Wettbewerber genannt – und mein Unternehmen
            nicht?
          </p>
          <p className="check-text" style={{ marginTop: 20 }}>Dabei lässt sich untersuchen:</p>
          <ul className="detail-list">
            <li>welche Wettbewerber bei relevanten Prompts vorkommen</li>
            <li>mit welchen Themen sie verbunden werden</li>
            <li>wann sie empfohlen werden</li>
            <li>welche Quellen dabei auftauchen</li>
            <li>wie das Sentiment ausfällt</li>
            <li>welche Unterschiede zur eigenen Präsenz bestehen</li>
          </ul>
          <p className="check-text" style={{ marginTop: 16 }}>
            Das liefert noch keine automatische Handlungsanweisung. Aber es
            hilft dabei, die richtigen Fragen zu stellen.
          </p>
          <ul className="detail-list" style={{ marginTop: 16 }}>
            {COMPETITOR_QUESTIONS.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
          <div className="method-benefit">
            <p>
              Gerade die letzte Möglichkeit gehört zu einer seriösen
              Analyse dazu.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Realistische Erwartungen</span>
            <h2>Kann man beeinflussen, ob ChatGPT mein Unternehmen empfiehlt?</h2>
          </div>
          <p className="hero-keymessage">Beeinflussen: ja. Garantieren: nein.</p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Du kannst die Voraussetzungen verbessern, damit dein
            Unternehmen, seine Leistungen und seine Expertise möglichst
            eindeutig verstanden werden.
          </p>
          <ul className="detail-list">
            <li>Inhalte verbessern</li>
            <li>technische Hindernisse beseitigen</li>
            <li>Unternehmensinformationen konsistenter machen</li>
            <li>relevante Fragen beantworten</li>
            <li>externe Signale untersuchen</li>
            <li>Citations und Mentions analysieren</li>
          </ul>
          <p className="check-text" style={{ marginTop: 16 }}>
            Aber niemand kann seriös garantieren: „Wir optimieren deine
            Website und danach empfiehlt ChatGPT dein Unternehmen.&ldquo;
          </p>
          <div className="method-benefit">
            <p>
              Gute GEO-Arbeit versucht deshalb nicht, eine KI zu
              manipulieren. Sie verbessert die Informationsgrundlage, auf
              deren Basis Suchmaschinen und KI-Systeme ein Unternehmen
              verstehen können.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">ChatGPT SEO</span>
            <h2>Gibt es überhaupt „ChatGPT SEO&ldquo;?</h2>
          </div>
          <p className="check-text">
            Der Begriff wird häufig verwendet, weil er schnell verständlich
            macht, worum es geht: bei ChatGPT besser sichtbar zu werden.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Fachlich greift er allerdings etwas zu kurz. Denn viele
            Maßnahmen, die ChatGPT-Sichtbarkeit unterstützen können, sind
            keine isolierten „ChatGPT-Maßnahmen&ldquo;.
          </p>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            SEO · Content · technische Zugänglichkeit · Entitäten · E-E-A-T
            · strukturierte Informationen · externe Signale · Citations ·
            Markenverständnis
          </p>
          <p className="check-text" style={{ marginTop: 16 }}>
            Deshalb ordne ich ChatGPT-Sichtbarkeit als Teil einer
            umfassenderen GEO- und KI-Sichtbarkeitsstrategie ein.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Das verhindert auch einen häufigen Fehler: Bestehende
            SEO-Grundlagen zu vernachlässigen, weil gerade ein neues
            KI-Thema wichtiger erscheint.
          </p>
          <Link href="/ki-sichtbarkeit" className="btn-link detail-secondary-link">
            Was bedeutet KI-Sichtbarkeit? →
          </Link>
          <Link href="/geo" className="btn-link detail-secondary-link">
            Was ist GEO? →
          </Link>
          <Link href="/strukturierte-daten" className="btn-link detail-secondary-link">
            Mehr über strukturierte Daten →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Human in the Loop</span>
            <h2>Ein Tool findet Daten. Ein Mensch muss sie einordnen.</h2>
          </div>
          <p className="check-text">Eine Auswertung kann zeigen:</p>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            0 Nennungen · 12 Citations · 5 Wettbewerber · positives oder
            negatives Sentiment
          </p>
          <p className="check-text" style={{ marginTop: 16 }}>
            Aber diese Zahlen beantworten noch nicht automatisch die
            wichtigste Frage: Was davon ist für dein Unternehmen
            tatsächlich relevant?
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Deshalb gehört für mich zur KI-Sichtbarkeitsanalyse immer ein
            Human in the Loop. Tools unterstützen bei Datenerhebung und
            Analyse. Die anschließende Bewertung erfolgt persönlich:
          </p>
          <ul className="detail-list">
            <li>Was ist auffällig?</li>
            <li>Was ist erklärbar?</li>
            <li>Wo besteht echtes Potenzial?</li>
            <li>Welche Maßnahme wäre sinnvoll?</li>
            <li>
              Welche Maßnahme wäre zwar theoretisch möglich, wirtschaftlich
              aber nicht gerechtfertigt?
            </li>
          </ul>
          <div className="method-benefit">
            <p>
              Daten liefern Hinweise. Die Entscheidung über Maßnahmen
              sollte nicht automatisch erfolgen.
            </p>
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
            href="https://help.openai.com/en/articles/9237897-chatgpt-search"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link detail-secondary-link source-link"
          >
            OpenAI Help Center: ChatGPT Search →{" "}
            <span className="sr-only">(öffnet in neuem Tab)</span>
          </a>
          <a
            href="https://developers.openai.com/api/docs/bots"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link detail-secondary-link source-link"
          >
            OpenAI Developer Docs: OpenAI crawlers (OAI-SearchBot, GPTBot,
            ChatGPT-User) →{" "}
            <span className="sr-only">(öffnet in neuem Tab)</span>
          </a>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">SEO + GEO</span>
            <h2>Was solltest du zuerst optimieren?</h2>
          </div>
          <p className="hero-keymessage">Nicht automatisch ChatGPT.</p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Wenn eine Website technische Probleme hat, wichtige Inhalte
            fehlen oder Google das Angebot bereits nicht eindeutig
            einordnen kann, liegt die Priorität häufig zunächst bei der
            SEO-Basis.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Ist diese Grundlage vorhanden, lässt sich zusätzlich
            untersuchen: Wie wird das Unternehmen in KI-Systemen
            wahrgenommen?
          </p>
          <div className="phase-list">
            {GEO_STEPS.map((s) => (
              <div key={s.num} className="phase-item">
                <span className="phase-num">{s.num}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section final-cta">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Erster Schritt</span>
            <h2>Wird dein Unternehmen bei ChatGPT gefunden?</h2>
          </div>
          <p className="check-text">Das lässt sich besser prüfen als vermuten.</p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Der kostenlose SEO- &amp; KI-Sichtbarkeitscheck gibt dir eine
            erste Orientierung zu deiner aktuellen Ausgangslage. Ich prüfe
            erste SEO- und KI-Sichtbarkeitssignale und gebe dir 2–3
            konkrete Hinweise, wenn etwas auffällt.
          </p>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            Der kostenlose Check ist bewusst keine vollständige
            GEO-Analyse. Eine umfassende Analyse von Ursachen,
            Wettbewerbern, Citations, Recommendations, Sentiment und
            möglichen Maßnahmen ist darin nicht enthalten. Der erste
            Schritt ist einfacher: herausfinden, ob überhaupt etwas
            genauer betrachtet werden sollte.
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
            <h2>Fragen zur ChatGPT-Sichtbarkeit</h2>
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

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Weiterlesen</span>
            <h2>KI-Sichtbarkeit besteht nicht nur aus ChatGPT.</h2>
          </div>
          <p className="check-text">
            Diese Seite betrachtet gezielt ChatGPT. Für den größeren
            Zusammenhang:
          </p>
          <RelatedReading
            items={[
              {
                href: "/ki-sichtbarkeit",
                title: "Was bedeutet KI-Sichtbarkeit für Unternehmen?",
                context:
                  "Der Überblick über Google AI, Citations, Recommendations, Sentiment und weitere Systeme.",
              },
              {
                href: "/google-ai-overviews",
                title: "Google AI Overviews & AI Mode",
                context: "Der andere große Kanal neben ChatGPT.",
              },
              {
                href: "/geo",
                title: "Was ist GEO?",
                context:
                  "Die Methodik, in die ChatGPT-Sichtbarkeit als ein Baustein eingeordnet ist.",
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
            <h2>Nicht raten, ob ChatGPT dein Unternehmen kennt.</h2>
            <p className="lead">
              Prüfe zuerst, wie deine aktuelle Ausgangslage aussieht. Der
              kostenlose SEO- &amp; KI-Sichtbarkeitscheck gibt dir eine
              erste Orientierung – ohne daraus sofort ein großes
              Optimierungsprojekt zu machen.
            </p>
          </div>
          <div className="detail-cta-row">
            <Link href="/sichtbarkeitscheck" className="btn btn-primary">
              SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
            </Link>
          </div>
          <p className="check-trust">
            unverbindlich · persönlich geprüft · 2–3 konkrete Hinweise
          </p>
          <Link href="/wissen" className="btn-link detail-secondary-link">
            Alle Themen im Wissensbereich →
          </Link>
        </div>
      </Reveal>
    </>
  );
}
