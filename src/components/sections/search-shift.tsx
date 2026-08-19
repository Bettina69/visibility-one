const SOURCE_URL = "https://www.semrush.com/blog/ai-search-seo-traffic-study/";

function SourceLink() {
  return (
    <a
      className="btn-link detail-secondary-link source-link shift-card-source"
      href={SOURCE_URL}
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
        {/* Modul 1: Die Bewegung */}
        <div className="shift-card">
          <h3 className="shift-card-title">KI-Suche wächst.</h3>
          <p className="shift-card-label">2025 → 2029</p>
          <svg
            className="shift-card-visual shift-line-chart"
            viewBox="0 0 270 150"
            role="img"
            aria-labelledby="shift-c1-title shift-c1-desc"
          >
            <title id="shift-c1-title">
              KI-Suche wächst, klassische organische Suche verändert sich
              (2025–2029)
            </title>
            <desc id="shift-c1-desc">
              Qualitative Trenddarstellung ohne Semrush-Prozentwerte:
              KI-Suche steigend, klassische organische Suche fallend.
            </desc>
            <AxisFrame />
            <polyline
              points="40,25 92,38 144,50 196,63 248,72"
              className="search-shift-line search-shift-line--organic"
            />
            <polyline
              points="40,95 92,78 144,60 196,42 248,25"
              className="search-shift-line search-shift-line--ai"
            />
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
          <p className="shift-chart-note">
            Qualitativer Trend, indexiert – Semrush veröffentlicht keine
            Prozentwerte je Jahr.
          </p>
          <p className="shift-card-text">
            Semrush erwartet, dass KI-Suche deutlich an Bedeutung gewinnt,
            während sich der Anteil klassischer organischer Suche verändert.
          </p>
          <SourceLink />
        </div>

        {/* Modul 2: Der mögliche Schnittpunkt */}
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
              Qualitative Darstellung: Semrush prognostiziert für die
              untersuchten Themen einen möglichen Schnittpunkt Anfang 2028.
              Keine veröffentlichten Prozentwerte.
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
          <p className="shift-card-text">
            Semrush prognostiziert für die untersuchten Themen, dass
            KI-Suchtraffic klassischen organischen Suchtraffic Anfang 2028
            überholen könnte.
          </p>
          <p className="check-note shift-card-footnote">
            * Prognose auf Basis von mehr als 500 untersuchten Themen und
            Unterthemen aus Digital Marketing und SEO. Nicht als
            allgemeingültiger Zeitpunkt für jede Branche zu verstehen.
          </p>
          <SourceLink />
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
          <SourceLink />
        </div>
      </div>

      <div className="method-benefit">
        <p>
          SEO wird dadurch nicht überflüssig. Aber Sichtbarkeit entsteht
          heute an mehr Orten als nur in den klassischen Suchergebnissen.
        </p>
      </div>

      <a
        className="btn-link detail-secondary-link source-link"
        href="https://www.semrush.com/blog/traffic-channel-mix-study/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Semrush: How AI is reshaping traffic channels →{" "}
        <span className="sr-only">(öffnet in neuem Tab)</span>
      </a>
    </>
  );
}
