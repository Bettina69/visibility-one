import type { Metadata } from "next";
import { PromptResearchPage } from "@/components/sections/prompt-research-page";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Prompt Research: Keywords für KI-Suche erweitern",
  description:
    "Keywords bleiben wichtig, KI-Fragen enthalten aber mehr Kontext. Prompt Research zeigt, wie sich relevante Entscheidungssituationen für GEO identifizieren lassen.",
};

const pillarUrl = `${siteConfig.url}/ki-sichtbarkeit/`;
const pageUrl = `${siteConfig.url}/prompt-research/`;

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Was ist Prompt Research?",
  description:
    "Keywords bleiben wichtig, KI-Fragen enthalten aber mehr Kontext. Prompt Research zeigt, wie sich relevante Entscheidungssituationen für GEO identifizieren lassen.",
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
