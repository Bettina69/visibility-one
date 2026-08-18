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

      <div className="search-shift-grid">
        <div className="search-shift-chart-card">
          <svg
            className="search-shift-chart"
            viewBox="0 0 600 260"
            role="img"
            aria-labelledby="search-shift-chart-title search-shift-chart-desc"
          >
            <title id="search-shift-chart-title">
              Trend 2025–2029: klassische organische Suche und KI-Suche
            </title>
            <desc id="search-shift-chart-desc">
              Konzeptionelle Darstellung ohne Achsenwerte. Traditionelle
              organische Suche zeigt einen fallenden Trend, KI-Suche einen
              steigenden Trend. Semrush prognostiziert auf Basis einer
              Untersuchung von mehr als 500 Themen und Unterthemen einen
              möglichen Schnittpunkt um 2028.
            </desc>
            <line
              x1="430"
              y1="24"
              x2="430"
              y2="216"
              className="search-shift-marker-line"
            />
            <polyline
              points="40,50 560,190"
              className="search-shift-line search-shift-line--organic"
            />
            <polyline
              points="40,220 560,133"
              className="search-shift-line search-shift-line--ai"
            />
            <circle cx="430" cy="155" r="5" className="search-shift-marker-dot" />
            <text x="430" y="16" textAnchor="middle" className="search-shift-marker-label">
              2028*
            </text>
            <text x="40" y="238" className="search-shift-year-label">
              2025
            </text>
            <text x="560" y="238" textAnchor="end" className="search-shift-year-label">
              2029
            </text>
          </svg>
          <ul className="search-shift-legend">
            <li>
              <span className="search-shift-swatch search-shift-swatch--organic" aria-hidden="true"></span>
              Traditionelle organische Suche ↘
            </li>
            <li>
              <span className="search-shift-swatch search-shift-swatch--ai" aria-hidden="true"></span>
              KI-Suche ↗
            </li>
          </ul>
          <p className="search-shift-caption">
            KI-Suchtraffic könnte klassischen organischen Suchtraffic
            überholen.
          </p>
          <p className="check-note">
            * Semrush prognostiziert auf Basis einer Untersuchung von mehr
            als 500 Themen und Unterthemen aus Digital Marketing und SEO
            einen möglichen Schnittpunkt um 2028. Die Prognose ist nicht
            als allgemeingültiger Zeitpunkt für jede Branche zu verstehen.
          </p>
        </div>

        <div className="search-shift-stat">
          <span className="search-shift-stat-num">4,4×</span>
          <p className="search-shift-stat-label">
            höherer Conversion-basierter Wert eines AI-Search-Besuchers
          </p>
          <p className="search-shift-stat-text">
            Semrush ermittelte für Besucher aus Nicht-Google-LLM-Suchen wie
            ChatGPT einen durchschnittlich 4,4-fach höheren
            Conversion-basierten Wert gegenüber traditionellem Organic
            Search.
          </p>
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
        href="https://www.semrush.com/blog/ai-search-seo-traffic-study/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Semrush: We Studied the Impact of AI Search on SEO Traffic →{" "}
        <span className="sr-only">(öffnet in neuem Tab)</span>
      </a>
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
