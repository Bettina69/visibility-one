import Link from "next/link";

type RelatedItem = {
  href: string;
  title: string;
  context?: string;
};

export function RelatedReading({
  items,
  eyebrow = "Weiterlesen",
}: {
  items: RelatedItem[];
  eyebrow?: string;
}) {
  return (
    <div className="related-reading">
      <span className="eyebrow">{eyebrow}</span>
      <ul className="related-reading-list">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="related-reading-item">
              <span className="related-reading-text">
                <span className="related-reading-title">{item.title}</span>
                {item.context && (
                  <span className="related-reading-context">
                    {item.context}
                  </span>
                )}
              </span>
              <span className="related-reading-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
