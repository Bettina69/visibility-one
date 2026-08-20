const TREND_SOURCE_URL = "https://www.semrush.com/blog/ai-search-seo-traffic-study/";
const CHANNEL_MIX_SOURCE_URL = "https://www.semrush.com/blog/traffic-channel-mix-study/";

function SourceLink({ href }: { href: string }) {
  return (
    <a
      className="btn-link detail-secondary-link source-link shift-card-source"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      Quelle: Semrush →<span className="sr-only"> (öffnet in neuem Tab)</span>
    </a>
  );
}

function AxisFrame() {
  return (
    <>
      <line x1="40" y1="10" x2="40" y2="110" className="shift-axis-line" />
      <line x1="40" y1="110" x2="248" y2="110" className="shift-axis-line" />
      <text x="34" y="14" textAnchor="end" className="shift-axis-label">
        hoch
      </text>
      <text x="34" y="112" textAnchor="end" className="shift-axis-label">
        tief
      </text>
      <line x1="40" y1="110" x2="40" y2="114" className="shift-axis-tick" />
      <line x1="92" y1="110" x2="92" y2="114" className="shift-axis-tick" />
      <line x1="144" y1="110" x2="144" y2="114" className="shift-axis-tick" />
      <line x1="196" y1="110" x2="196" y2="114" className="shift-axis-tick" />
      <line x1="248" y1="110" x2="248" y2="114" className="shift-axis-tick" />
      <text x="40" y="126" textAnchor="middle" className="shift-axis-label">
        2025
      </text>
      <text x="92" y="126" textAnchor="middle" className="shift-axis-label">
        2026
      </text>
      <text x="144" y="126" textAnchor="middle" className="shift-axis-label">
        2027
      </text>
      <text x="196" y="126" textAnchor="middle" className="shift-axis-label">
        2028
      </text>
      <text x="248" y="126" textAnchor="middle" className="shift-axis-label">
        2029
      </text>
    </>
  );
}

export function SearchShift() {
  return (
    <>
      <span className="eyebrow facts-eyebrow">Warum das gerade passiert</span>
      <h2>Die Suche verändert sich.</h2>
      <p className="lead">
        Klassische Suche bleibt wichtig. Gleichzeitig wächst die Suche über
        KI-Systeme – und verändert, wie Menschen Unternehmen finden und
        auswählen.
      </p>

      <div className="shift-modules">
        {/* Modul 1: Heute */}
        <div className="shift-card">
          <h3 className="shift-card-title">Organische Suche dominiert – noch.</h3>
          <p className="shift-card-label">Anteil an allen Website-Besuchen · 2025</p>
          <dl className="shift-card-visual shift-figures" aria-hidden="true">
            <div className="shift-figure">
              <dt>Organische Suche</dt>
              <dd>16,04%</dd>
            </div>
            <div className="shift-figure shift-figure--ai">
              <dt>KI-Traffic</dt>
              <dd>0,14%</dd>
            </div>
          </dl>
          <p className="shift-card-text">
            Semrush wertete 2025 Milliarden Website-Besuche aus: Organische
            Suche bleibt mit Abstand der größte Kanal. KI-Traffic wuchs im
            gleichen Zeitraum um 66&nbsp;% – ausgehend von einem noch sehr
            kleinen Anteil.
          </p>
          <SourceLink href={CHANNEL_MIX_SOURCE_URL} />
        </div>

        {/* Modul 2: Zukunft – möglicher Schnittpunkt */}
        <div className="shift-card">
          <h3 className="shift-card-title">2028*</h3>
          <p className="shift-card-label">Möglicher Schnittpunkt</p>
          <svg
            className="shift-card-visual shift-line-chart"
            viewBox="0 0 270 150"
            role="img"
            aria-labelledby="shift-c2-title shift-c2-desc"
          >
            <title id="shift-c2-title">
              2028: möglicher Schnittpunkt von KI-Suche und klassischer
              organischer Suche
            </title>
            <desc id="shift-c2-desc">
              Qualitative Darstellung ohne Semrush-Prozentwerte: KI-Suche
              steigend, klassische organische Suche fallend, mit möglichem
              Schnittpunkt Anfang 2028.
            </desc>
            <AxisFrame />
            <line
              x1="196"
              y1="10"
              x2="196"
              y2="110"
              className="shift-marker-guide"
            />
            <polyline
              points="40,25 248,75"
              className="search-shift-line search-shift-line--organic"
            />
            <polyline
              points="40,95 248,51.7"
              className="search-shift-line search-shift-line--ai"
            />
            <circle
              cx="196"
              cy="62.5"
              r="4"
              className="search-shift-marker-dot"
            />
            <text
              x="196"
              y="48"
              textAnchor="middle"
              className="shift-marker-label"
            >
              Anfang 2028*
            </text>
          </svg>
          <ul className="shift-legend">
            <li>
              <span
                className="shift-legend-swatch shift-legend-swatch--ai"
                aria-hidden="true"
              ></span>
              KI-Suche
            </li>
            <li>
              <span
                className="shift-legend-swatch shift-legend-swatch--organic"
                aria-hidden="true"
              ></span>
              Klassische organische Suche
            </li>
          </ul>
          <p className="shift-card-text">
            Semrush erwartet, dass KI-Suche deutlich an Bedeutung gewinnt,
            während sich der Anteil klassischer organischer Suche verändert.
            Für die untersuchten Themen prognostiziert Semrush einen
            möglichen Schnittpunkt Anfang 2028.
          </p>
          <p className="check-note shift-card-footnote">
            * Prognose auf Basis von mehr als 500 untersuchten Themen und
            Unterthemen aus Digital Marketing und SEO. Nicht als
            allgemeingültiger Zeitpunkt für jede Branche zu verstehen.
          </p>
          <SourceLink href={TREND_SOURCE_URL} />
        </div>

        {/* Modul 3: Qualität des Traffics */}
        <div className="shift-card">
          <h3 className="shift-card-title">4,4×</h3>
          <p className="shift-card-label">Höherer Conversion-basierter Wert</p>
          <div className="shift-card-visual shift-bar-rows" aria-hidden="true">
            <div className="shift-bar-row">
              <span className="shift-bar-label">Organic Search</span>
              <span className="shift-bar-track">
                <span className="shift-bar-fill" style={{ width: "18%" }} />
              </span>
              <span className="shift-bar-value">1×</span>
            </div>
            <div className="shift-bar-row">
              <span className="shift-bar-label">AI Search</span>
              <span className="shift-bar-track">
                <span className="shift-bar-fill shift-bar-fill--ai" style={{ width: "80%" }} />
              </span>
              <span className="shift-bar-value">4,4×</span>
            </div>
          </div>
          <p className="shift-card-text">
            Semrush ermittelte für Besucher aus Nicht-Google-LLM-Suchen wie
            ChatGPT einen durchschnittlich 4,4-fach höheren
            Conversion-basierten Wert gegenüber traditionellem Organic
            Search – nicht auf die Trafficmenge.
          </p>
          <SourceLink href={TREND_SOURCE_URL} />
        </div>
      </div>

      <div className="method-benefit">
        <p>
          SEO wird dadurch nicht überflüssig. Aber Sichtbarkeit entsteht
          heute an mehr Orten als nur in den klassischen Suchergebnissen.
        </p>
      </div>
    </>
  );
}
