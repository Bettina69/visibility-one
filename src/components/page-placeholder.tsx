export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="section">
      <div className="wrap-narrow">
        <h1>{title}</h1>
        {description ? (
          <p className="lead" style={{ marginTop: 16 }}>
            {description}
          </p>
        ) : null}
        <p style={{ marginTop: 32, fontSize: "var(--fs-xs)", color: "var(--muted)" }}>
          Platzhalter-Seite – Inhalte folgen.
        </p>
      </div>
    </section>
  );
}
