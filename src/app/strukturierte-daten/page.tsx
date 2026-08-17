import type { Metadata } from "next";
import { StrukturierteDatenPage } from "@/components/sections/strukturierte-daten-page";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Strukturierte Daten & Schema Markup verständlich erklärt",
  description:
    "Was sind strukturierte Daten? Erfahre, wie Schema.org und JSON-LD SEO, Maschinenlesbarkeit und die eindeutige Einordnung von Inhalten unterstützen.",
};

const pillarUrl = `${siteConfig.url}/ki-sichtbarkeit/`;
const pageUrl = `${siteConfig.url}/strukturierte-daten/`;

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Strukturierte Daten: Informationen für Maschinen eindeutig machen.",
  description:
    "Was sind strukturierte Daten? Erfahre, wie Schema.org und JSON-LD SEO, Maschinenlesbarkeit und die eindeutige Einordnung von Inhalten unterstützen.",
  url: pageUrl,
  inLanguage: "de-DE",
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "KI-Sichtbarkeit",
      item: pillarUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Strukturierte Daten",
      item: pageUrl,
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <StrukturierteDatenPage />
    </>
  );
}
