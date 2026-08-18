export const siteConfig = {
  name: "Visibility One",
  legalName: "Bettina Teckentrup",
  description:
    "GEO- & KI-Sichtbarkeitsberatung für Online-Shops und KMU. Praxiserprobt seit 2008.",
  url: "https://visibility-one.de",
  email: "info@visibility-one.de",
} as const;

// Temporärer Deployment-Unterpfad für die GitHub-Pages-Vorschau
// (https://bettina69.github.io/visibility-one/). Muss mit `basePath` in
// next.config.ts übereinstimmen. next/image prefixt lokale Bild-Pfade bei
// `images.unoptimized: true` nicht automatisch, daher hier manuell nötig.
export const basePath = "/visibility-one";

export type NavItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavItem[] = [
  { label: "Meine Methode", href: "/meine-methode" },
  { label: "Angebote", href: "/angebote" },
  { label: "Wissen", href: "/wissen" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Qualifikationen", href: "/qualifikationen" },
  { label: "Kostenlose Tools", href: "/tools" },
];

export const footerNavigation: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];
