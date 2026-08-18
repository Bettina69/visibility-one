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
          <div className="shift-card-visual shift-trend-rows" aria-hidden="true">
            <div className="shift-trend-row">
              <span className="shift-trend-arrow shift-trend-arrow--muted">↘</span>
              Klassische organische Suche
            </div>
            <div className="shift-trend-row">
              <span className="shift-trend-arrow">↗</span>
              KI-Suche
            </div>
          </div>
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
            className="shift-card-visual shift-cross-chart"
            viewBox="0 0 160 90"
            aria-hidden="true"
          >
            <polyline
              points="10,15 150,65"
              className="search-shift-line search-shift-line--organic"
            />
            <polyline
              points="10,70 150,20"
              className="search-shift-line search-shift-line--ai"
            />
            <circle cx="87" cy="43" r="4" className="search-shift-marker-dot" />
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
            Search.
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
