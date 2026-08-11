// Generische Komponente für strukturierte Daten (schema.org).
// Wird pro Seite mit konkreten Daten befüllt, sobald Inhalte feststehen.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
