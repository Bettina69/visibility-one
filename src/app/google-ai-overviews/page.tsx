import type { Metadata } from "next";
import { GoogleAiOverviewsPage } from "@/components/sections/google-ai-overviews-page";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Google AI Overviews & AI Mode: Was bedeutet das für SEO?",
  description:
    "Wie verändern Google AI Overviews und AI Mode die Suche? Erfahre, was für SEO, Citations, Content und KI-Sichtbarkeit wichtig wird.",
};

const pillarUrl = `${siteConfig.url}/ki-sichtbarkeit/`;
const pageUrl = `${siteConfig.url}/google-ai-overviews/`;

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Google AI Overviews & AI Mode: Was verändert sich für SEO?",
  description:
    "Wie verändern Google AI Overviews und AI Mode die Suche? Erfahre, was für SEO, Citations, Content und KI-Sichtbarkeit wichtig wird.",
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
      name: "Google AI",
      item: pageUrl,
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <GoogleAiOverviewsPage />
    </>
  );
}
