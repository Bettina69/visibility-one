import Link from "next/link";
import { Reveal } from "./reveal";

const TERMS = [
  {
    title: "Wird deine Marke genannt?",
    label: "Mention",
    text: "Dein Unternehmen oder deine Marke wird in einer KI-Antwort erwähnt.",
  },
  {
    title: "Wirst du als Quelle verwendet?",
    label: "Citation",
    text: "Eine Seite deiner Website oder eine andere Quelle wird von einem KI-System im Zusammenhang mit einem relevanten Thema herangezogen oder zitiert.",
  },
  {
    title: "Wirst du empfohlen?",
    label: "Recommendation",
    text: "Dein Unternehmen, Produkt oder Angebot wird in einem passenden kauf- oder entscheidungsnahen Kontext empfohlen.",
  },
  {
    title: "Wie wird über dich gesprochen?",
    label: "Sentiment",
    text: "Eine Erwähnung allein sagt noch wenig. Sentiment beschreibt, ob ein Unternehmen eher positiv, neutral oder kritisch dargestellt wird.",
  },
];

const FACTORS = [
  {
    num: "01",
    title: "Technische Verständlichkeit",
    text: "Suchmaschinen und andere Systeme müssen Inhalte zuverlässig erfassen und strukturell verstehen können. Dazu gehören unter anderem eine saubere Informationsarchitektur, Crawlbarkeit und technisch verständliche Seiten.",
  },
  {
    num: "02",
    title: "Relevante und eindeutige Inhalte",
    text: "Eine Website sollte klar vermitteln, wer du bist, was du anbietest, für wen und bei welchen Themen dein Unternehmen Kompetenz besitzt. Unklare oder austauschbare Inhalte erschweren diese Zuordnung.",
  },
  {
    num: "03",
    title: "Strukturierte Daten",
    text: "Schema Markup kann Maschinen zusätzliche Informationen über Unternehmen, Produkte, Personen, Leistungen oder Inhalte geben. Strukturierte Daten garantieren keine KI-Nennung. Sie können aber dabei helfen, Informationen eindeutiger maschinenlesbar zu machen.",
  },
  {
    num: "04",
    title: "E-E-A-T",
    text: "E-E-A-T steht für Experience, Expertise, Authoritativeness und Trustworthiness – also Erfahrung, Fachwissen, Autorität und Vertrauenswürdigkeit. Für Unternehmen bedeutet das zum Beispiel, nachvollziehbar zu zeigen, wer hinter Inhalten und Leistungen steht, welche Erfahrung vorhanden ist und warum Aussagen vertrauenswürdig sind.",
  },
  {
    num: "05",
    title: "Externe Signale",
    text: "Was andere Quellen über ein Unternehmen sagen, spielt ebenfalls eine Rolle. Dazu gehören beispielsweise Erwähnungen, Citations und Empfehlungen außerhalb der eigenen Website. Deshalb reicht es nicht immer aus, ausschließlich die eigene Website zu optimieren.",
  },
];

const FAQ = [
  {
    q: "Brauche ich GEO, wenn meine Website bei Google gut rankt?",
    a: "Gute SEO-Rankings sind eine starke Grundlage, bedeuten aber nicht automatisch, dass ein Unternehmen auch in KI-Antworten häufig genannt oder empfohlen wird. Deshalb lohnt sich ein zusätzlicher Blick auf die KI-Sichtbarkeit.",
  },
  {
    q: "Ist GEO ein Ersatz für SEO?",
    a: "Nein. Für Visibility One ist SEO die Grundlage und GEO die Erweiterung. Eine technisch oder inhaltlich schwache Website wird nicht dadurch besser, dass man sie zusätzlich für KI-Systeme optimieren möchte.",
  },
  {
    q: "Wie schnell kann sich KI-Sichtbarkeit verändern?",
    a: "Dafür gibt es keine verlässliche pauschale Frist. KI-Antworten und die zugrunde liegenden Systeme verändern sich laufend. Deshalb sind Momentaufnahmen hilfreich, Entwicklungen über einen längeren Zeitraum aber aussagekräftiger.",
  },
  {
    q: "Muss ich für GEO meine Website neu bauen?",
    a: "In der Regel nicht. Zuerst sollte geprüft werden, welche technischen, strukturellen und inhaltlichen Grundlagen bereits vorhanden sind und wo tatsächlich Lücken bestehen.",
  },
  {
    q: "Was ist Sentiment?",
    a: "Sentiment beschreibt vereinfacht den Kontext, in dem eine Marke oder ein Unternehmen genannt wird – beispielsweise positiv, neutral oder kritisch. Damit lässt sich eine Erwähnung qualitativ besser einordnen.",
  },
  {
    q: "Was bedeutet E-E-A-T?",
    a: "E-E-A-T steht für Experience, Expertise, Authoritativeness und Trustworthiness – also Erfahrung, Fachwissen, Autorität und Vertrauenswürdigkeit. Für Unternehmen bedeutet das unter anderem, nachvollziehbar zu machen, wer hinter einem Angebot oder Inhalt steht und worauf die eigene Expertise beruht.",
  },
  {
    q: "Was bedeutet Human in the Loop?",
    a: "Human in the Loop bedeutet, dass automatisierte Analysen nicht ungeprüft übernommen werden. Daten und Tools unterstützen die Analyse; ein Mensch bewertet anschließend den Kontext und leitet daraus sinnvolle Maßnahmen ab.",
  },
];

export function KiSichtbarkeitPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">Wissen · KI-Sichtbarkeit</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>
            Was bedeutet KI-Sichtbarkeit für Unternehmen?
          </h1>
          <p className="hero-sub">
            Menschen suchen nicht mehr nur bei Google. Sie stellen ihre
            Fragen auch direkt an ChatGPT und andere KI-Systeme oder erhalten
            bei Google bereits KI-generierte Antworten.
          </p>
          <p className="hero-sub">Für Unternehmen entsteht damit eine neue Form von Sichtbarkeit:</p>
          <p className="hero-question">
            Wird dein Unternehmen von KI-Systemen gefunden, genannt, als
            Quelle zitiert oder sogar empfohlen?
          </p>
          <p className="hero-explainer" style={{ marginBottom: 12 }}>
            Genau darum geht es bei KI-Sichtbarkeit.
          </p>
          <p className="hero-keymessage">
            SEO bleibt dabei die Grundlage. KI-Sichtbarkeit ergänzt
            klassische Suchmaschinenoptimierung – sie ersetzt sie nicht.
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
            <h2>Wo entsteht KI-Sichtbarkeit?</h2>
          </div>
          <p className="check-text">
            KI-Sichtbarkeit ist kein einzelnes Ranking wie eine Position bei
            Google.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Unternehmen können heute an unterschiedlichen Stellen in
            KI-basierten Such- und Antwortsystemen auftauchen – beispielsweise
            in ChatGPT, Google AI Overviews oder AI Mode und weiteren
            KI-Suchen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Dabei geht es nicht nur darum, ob eine Marke vorkommt.
            Entscheidend ist auch, wie sie vorkommt.
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
            Eine Erwähnung allein ist deshalb noch keine gute KI-Sichtbarkeit.
          </p>
          <Link href="/chatgpt-sichtbarkeit" className="btn-link detail-secondary-link">
            Vertiefend: Sichtbarkeit bei ChatGPT →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">SEO + GEO</span>
            <h2>SEO und GEO: Was ist der Unterschied?</h2>
          </div>
          <p className="check-text">
            SEO optimiert die Sichtbarkeit einer Website in klassischen
            Suchmaschinen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            GEO – Generative Engine Optimization – beschäftigt sich
            zusätzlich damit, wie Unternehmen, Marken und Inhalte von
            generativen KI-Systemen verstanden und in Antworten
            berücksichtigt werden.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Die beiden Disziplinen stehen nicht gegeneinander.
          </p>

          <h3 style={{ marginTop: 32 }}>SEO schafft die Grundlage</h3>
          <p className="check-text" style={{ marginTop: 8 }}>
            Eine technisch saubere Website, verständliche Seitenstrukturen,
            relevante Inhalte und eine eindeutige thematische Zuordnung
            helfen Suchmaschinen – und bilden zugleich eine wichtige
            Grundlage für KI-Systeme.
          </p>

          <h3 style={{ marginTop: 28 }}>GEO erweitert die Perspektive</h3>
          <p className="check-text" style={{ marginTop: 8 }}>
            Bei KI-Sichtbarkeit kommen weitere Fragen hinzu:
          </p>
          <ul className="detail-list">
            <li>Wird die Marke überhaupt erkannt?</li>
            <li>Mit welchen Themen wird sie verbunden?</li>
            <li>Welche Quellen stützen diese Einordnung?</li>
            <li>Wie sichtbar sind Wettbewerber?</li>
            <li>Bei welchen Fragen wird ein Unternehmen genannt oder empfohlen?</li>
            <li>Wie wird darüber gesprochen?</li>
          </ul>

          <div className="method-benefit">
            <p>
              Deshalb beginnt KI-Optimierung nicht mit einem KI-Trick,
              sondern mit der bestehenden SEO-Basis.
            </p>
          </div>
          <Link href="/geo" className="btn-link detail-secondary-link">
            Vertiefend: Was ist GEO? →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap">
          <div className="check-head">
            <span className="eyebrow">Einflussfaktoren</span>
            <h2>Was beeinflusst KI-Sichtbarkeit?</h2>
            <p className="lead">
              Es gibt keinen einzelnen Schalter, mit dem sich ein Unternehmen
              in ChatGPT oder anderen KI-Systemen platzieren lässt.
              Stattdessen wirken verschiedene Signale zusammen.
            </p>
          </div>
          <div className="phase-list">
            {FACTORS.map((f) => (
              <div key={f.num} className="phase-item">
                <span className="phase-num">{f.num}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Messung</span>
            <h2>Wie misst man KI-Sichtbarkeit?</h2>
          </div>
          <p className="check-text">
            Bei Google lässt sich relativ eindeutig feststellen: Keyword →
            Position → URL.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            KI-Antworten sind dynamischer. Sie können sich je nach Frage,
            Formulierung, System und Zeitpunkt unterscheiden. Deshalb sollte
            KI-Sichtbarkeit nicht anhand einer einzelnen Zahl beurteilt
            werden.
          </p>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            Betrachtet werden u. a.: Mentions · Citations · Recommendations ·
            Sentiment · Wettbewerber · relevante Prompts · Share of Voice
          </p>
          <div className="method-benefit">
            <p>
              So entsteht ein wesentlich aussagekräftigeres Bild: nicht nur
              „Komme ich vor?&ldquo;, sondern „Bei welchen Themen komme ich
              vor – und wie werde ich dabei eingeordnet?&ldquo;
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
            <span className="eyebrow">Realistische Erwartungen</span>
            <h2>Kann man beeinflussen, ob ChatGPT ein Unternehmen empfiehlt?</h2>
          </div>
          <p className="check-text">Ja – aber nicht garantieren.</p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Unternehmen können die Voraussetzungen dafür verbessern, von
            KI-Systemen eindeutig verstanden und als relevante Quelle oder
            mögliche Empfehlung berücksichtigt zu werden.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Was niemand seriös versprechen kann: „Nach dieser Optimierung
            empfiehlt ChatGPT dein Unternehmen.&ldquo; KI-Systeme entscheiden
            selbst, welche Informationen sie für eine konkrete Antwort
            verwenden.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Eine gute GEO-Strategie arbeitet deshalb nicht mit Garantien,
            sondern verbessert systematisch die Signale, die ein Unternehmen
            für Suchmaschinen und KI-Systeme verständlich, relevant und
            vertrauenswürdig machen.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Wettbewerb</span>
            <h2>Die Frage ist nicht nur: Bin ich sichtbar?</h2>
          </div>
          <p className="check-text">Sondern auch: Wer wird stattdessen genannt?</p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Wenn Wettbewerber bei relevanten Fragen regelmäßig vorkommen,
            lässt sich untersuchen:
          </p>
          <ul className="detail-list">
            <li>bei welchen Themen sie genannt werden</li>
            <li>welche Quellen dabei eine Rolle spielen</li>
            <li>wie häufig sie zitiert oder empfohlen werden</li>
            <li>wie ihre Marke eingeordnet wird</li>
            <li>welche Unterschiede zur eigenen Sichtbarkeit bestehen</li>
          </ul>
          <p className="check-text" style={{ marginTop: 16 }}>
            Damit wird aus einem abstrakten „Wir müssen etwas mit KI
            machen&ldquo; eine konkrete Analyse.
          </p>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Human in the Loop</span>
            <h2>Daten analysieren. Vom Menschen einordnen.</h2>
          </div>
          <p className="check-text">
            Tools können große Mengen an Rankings, Prompts, Citations und
            Mentions analysieren.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Sie können aber nicht automatisch entscheiden, welche Maßnahme
            für ein konkretes Unternehmen wirtschaftlich sinnvoll ist.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Deshalb arbeite ich nach dem Prinzip Human in the Loop: Daten und
            Tools liefern die Grundlage. Die Interpretation, Priorisierung
            und Empfehlung wird anschließend von einem Menschen geprüft.
          </p>
          <div className="method-benefit">
            <p>
              Das ist besonders für kleine Unternehmen wichtig. Denn nicht
              jede technisch mögliche Optimierung rechtfertigt auch Zeit,
              Aufwand und Budget.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section final-cta">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Erster Schritt</span>
            <h2>Wo steht dein Unternehmen heute?</h2>
          </div>
          <p className="check-text">
            Du musst nicht mit einer vollständigen GEO-Analyse beginnen.
          </p>
          <p className="check-text" style={{ marginTop: 12 }}>
            Der kostenlose SEO- &amp; KI-Sichtbarkeitscheck gibt dir zunächst
            eine erste Orientierung. Ich schaue mir unter anderem vorhandene
            SEO-Signale und erste Hinweise auf deine Sichtbarkeit in
            KI-Systemen an und gebe dir 2–3 konkrete Beobachtungen mit.
          </p>
          <p className="check-note" style={{ maxWidth: "62ch" }}>
            Der Check ersetzt keine vollständige Ursachen-, Wettbewerbs-,
            Citation-, Recommendation- oder Sentiment-Analyse. Er beantwortet
            zunächst die wichtigere Frage: Gibt es etwas, das wir uns genauer
            ansehen sollten?
          </p>
          <div className="detail-cta-row">
            <Link href="/sichtbarkeitscheck" className="btn btn-primary">
              SEO &amp; KI-Sichtbarkeit kostenlos prüfen →
            </Link>
          </div>
          <p className="check-trust">
            unverbindlich · persönlich geprüft · 2–3 konkrete Hinweise
          </p>
          <Link href="/angebote/analyse" className="btn-link detail-secondary-link">
            Vertiefte SEO- &amp; KI-Sichtbarkeitsanalyse ansehen →
          </Link>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Häufige Fragen</span>
            <h2>Fragen zur KI-Sichtbarkeit</h2>
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

      <Reveal className="section final-cta">
        <div className="wrap-narrow">
          <div className="check-head">
            <span className="eyebrow">Nächster Schritt</span>
            <h2>KI-Sichtbarkeit ist kein Ersatz für gute SEO.</h2>
            <p className="lead">
              Sie erweitert die Frage, wo und wie dein Unternehmen gefunden
              wird. Wenn du wissen möchtest, wie deine Ausgangslage aussieht,
              ist der kostenlose Check der einfachste Einstieg.
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
        </div>
      </Reveal>
    </>
  );
}
