const CHANNEL_MIX_SOURCE_URL = "https://www.semrush.com/blog/traffic-channel-mix-study/";
const SISTRIX_SOURCE_URL =
  "https://www.sistrix.de/news/ai-overviews-in-deutschland-so-stark-sinken-die-klickraten-wirklich/";

function SourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="btn-link detail-secondary-link source-link shift-card-source"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      Quelle: {label} →<span className="sr-only"> (öffnet in neuem Tab)</span>
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
          <h3 className="shift-card-title">Google ist weiterhin wichtig</h3>
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
            2025 kamen in der zugrunde liegenden Semrush-Untersuchung 16,04&nbsp;%
            der Website-Besuche über Organic Search und 0,14&nbsp;% über AI
            Traffic. SEO ist also nicht plötzlich überflüssig.
          </p>
          <SourceLink href={CHANNEL_MIX_SOURCE_URL} label="Semrush" />
        </div>

        <div className="shift-card">
          <h3 className="shift-card-title">Google verändert sich bereits</h3>
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
            Bei Google-Suchen mit AI Overview liegt die durchschnittliche
            Klickrate auf Position 1 laut einer SISTRIX-Analyse bei 11&nbsp;%
            – gegenüber über 27&nbsp;% bei durchschnittlichen
            Suchergebnisseiten. Ein gutes Google-Ranking bleibt wichtig –
            führt aber nicht mehr automatisch zu genauso vielen
            Website-Besuchen.
          </p>
          <SourceLink href={SISTRIX_SOURCE_URL} label="SISTRIX" />
        </div>
      </div>

      <div className="method-benefit">
        <p>
          Deshalb geht es heute nicht um SEO oder KI. Es geht darum, dort
          sichtbar zu sein, wo deine Kunden suchen und sich entscheiden.
        </p>
      </div>
    </>
  );
}
