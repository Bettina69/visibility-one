import type { Metadata } from "next";
import { PromptResearchPage } from "@/components/sections/prompt-research-page";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Prompt Research: Keywords für KI-Suche erweitern",
  description:
    "Was ist Prompt Research? Erfahre, wie relevante Prompts für KI-Sichtbarkeit, GEO, Wettbewerbsanalyse und Monitoring entwickelt werden.",
};

const pillarUrl = `${siteConfig.url}/ki-sichtbarkeit/`;
const pageUrl = `${siteConfig.url}/prompt-research/`;

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Was ist Prompt Research?",
  description:
    "Was ist Prompt Research? Erfahre, wie relevante Prompts für KI-Sichtbarkeit, GEO, Wettbewerbsanalyse und Monitoring entwickelt werden.",
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
      name: "Prompt Research",
      item: pageUrl,
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PromptResearchPage />
    </>
  );
}
