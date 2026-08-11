import Link from "next/link";
import { footerNavigation, mainNavigation, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="brand-block">
          <div className="brand">
            <span className="brand-dot" style={{ background: "var(--accent-soft)" }}></span>
            {siteConfig.name}
          </div>
          <p>{siteConfig.description}</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul>
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Kontakt</h4>
          <ul>
            <li>{siteConfig.email}</li>
            <li>Remote · Deutschland</li>
          </ul>
        </div>
        <div>
          <h4>Rechtliches</h4>
          <ul>
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap">
        <div className="legal">
          <span>
            © {new Date().getFullYear()} {siteConfig.legalName} · {siteConfig.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
