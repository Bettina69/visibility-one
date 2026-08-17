import Image from "next/image";
import Link from "next/link";

export function AuthorModule({ checkedDate }: { checkedDate?: string }) {
  return (
    <div className="author-module">
      <div className="author-module-avatar">
        <Image
          src="/bettina-portrait-about.jpg"
          alt=""
          width={112}
          height={112}
        />
      </div>
      <div>
        <span className="eyebrow">Fachlich geprüft</span>
        <div className="author-module-name">Bettina Teckentrup</div>
        <p className="author-module-text">
          SEO- &amp; KI-Beraterin mit über 18 Jahren eigener
          E-Commerce-Praxis.
        </p>
        <p className="author-module-text">
          Seit 2008 arbeite ich operativ mit Online-Shops, SEO, Content und
          digitaler Sichtbarkeit. Neue Entwicklungen rund um GEO und
          KI-Suche verbinde ich mit dieser praktischen SEO- und
          E-Commerce-Erfahrung.
        </p>
        <div className="author-module-links">
          <Link href="/ueber-mich" className="btn-link">
            Über mich →
          </Link>
          <Link href="/qualifikationen" className="btn-link">
            Qualifikationen →
          </Link>
        </div>
        {checkedDate && (
          <p className="author-module-date">
            Zuletzt fachlich geprüft: {checkedDate}
          </p>
        )}
      </div>
    </div>
  );
}
