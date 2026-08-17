import type { Metadata } from "next";
import { GeoPage } from "@/components/sections/geo-page";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Was ist GEO? Generative Engine Optimization erklärt",
  description:
    "GEO ergänzt SEO um die Frage, wie Unternehmen in KI-Antworten verstanden werden – mit Prompts, Citations, Empfehlungen, Sentiment und E-E-A-T als zentralen Bausteinen.",
};

const pillarUrl = `${siteConfig.url}/ki-sichtbarkeit/`;
const pageUrl = `${siteConfig.url}/geo/`;

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Was ist GEO? Generative Engine Optimization verständlich erklärt",
  description:
    "GEO ergänzt SEO um die Frage, wie Unternehmen in KI-Antworten verstanden werden – mit Prompts, Citations, Empfehlungen, Sentiment und E-E-A-T als zentralen Bausteinen.",
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
      name: "GEO",
      item: pageUrl,
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <GeoPage />
    </>
  );
}
