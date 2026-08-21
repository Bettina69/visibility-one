const SISTRIX_SOURCE_URL =
  "https://www.sistrix.de/news/ai-overviews-in-deutschland-so-stark-sinken-die-klickraten-wirklich/";

function SourceLink() {
  return (
    <a
      className="btn-link detail-secondary-link source-link shift-card-source"
      href={SISTRIX_SOURCE_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      Quelle: SISTRIX →<span className="sr-only"> (öffnet in neuem Tab)</span>
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
        <div className="shift-card">
          <h3 className="shift-card-title">
            Position 1 bekommt deutlich weniger Klicks
          </h3>
          <p className="shift-card-label">Klickrate auf Position 1 bei Google</p>
          <dl className="shift-card-visual shift-figures" aria-hidden="true">
            <div className="shift-figure">
              <dt>Ohne AI Overview</dt>
              <dd>27%</dd>
            </div>
            <div className="shift-figure shift-figure--ai">
              <dt>Mit AI Overview</dt>
              <dd>11%</dd>
            </div>
          </dl>
          <p className="shift-card-text">
            Erscheint eine AI Overview, sinkt die Klickrate auf den ersten
            Treffer laut SISTRIX von über 27&nbsp;% auf 11&nbsp;%.
          </p>
          <SourceLink />
        </div>

        <div className="shift-card">
          <h3 className="shift-card-title">
            Insgesamt wird seltener weitergeklickt
          </h3>
          <p className="shift-card-label">Klickrate über alle Positionen · Google-Suche</p>
          <dl className="shift-card-visual shift-figures" aria-hidden="true">
            <div className="shift-figure">
              <dt>Ohne AI Overview</dt>
              <dd>57%</dd>
            </div>
            <div className="shift-figure shift-figure--ai">
              <dt>Mit AI Overview</dt>
              <dd>33%</dd>
            </div>
          </dl>
          <p className="shift-card-text">
            Bei einer durchschnittlichen Google-Suche klicken 57&nbsp;% auf
            ein organisches Ergebnis – mit AI Overview laut SISTRIX nur
            noch 33&nbsp;%.
          </p>
          <SourceLink />
        </div>
      </div>

      <div className="method-benefit">
        <p>
          Google bleibt wichtig. Aber KI verändert bereits heute, wie
          Google-Sichtbarkeit funktioniert – und wie häufig Nutzer auf
          klassische Suchergebnisse klicken.
        </p>
      </div>
    </>
  );
}
