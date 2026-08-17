import type { Metadata } from "next";
import { KiSichtbarkeitPage } from "@/components/sections/ki-sichtbarkeit-page";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "KI-Sichtbarkeit für Unternehmen: Was bedeutet sie?",
  description:
    "Was bedeutet KI-Sichtbarkeit? Erfahre, wie Unternehmen in ChatGPT, Google AI & Co. genannt, zitiert und empfohlen werden – und wie SEO die Grundlage bildet.",
};

const pageUrl = `${siteConfig.url}/ki-sichtbarkeit/`;

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Was bedeutet KI-Sichtbarkeit für Unternehmen?",
  description:
    "Was bedeutet KI-Sichtbarkeit? Erfahre, wie Unternehmen in ChatGPT, Google AI & Co. genannt, zitiert und empfohlen werden – und wie SEO die Grundlage bildet.",
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
      item: pageUrl,
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <KiSichtbarkeitPage />
    </>
  );
}
