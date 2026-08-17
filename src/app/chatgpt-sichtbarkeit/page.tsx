import type { Metadata } from "next";
import { ChatgptSichtbarkeitPage } from "@/components/sections/chatgpt-sichtbarkeit-page";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Bei ChatGPT gefunden werden: ChatGPT-Sichtbarkeit",
  description:
    "Wie wird ein Unternehmen bei ChatGPT sichtbar? Erfahre, welche Rolle Mentions, Citations, Empfehlungen, Sentiment, SEO und GEO spielen.",
};

const pillarUrl = `${siteConfig.url}/ki-sichtbarkeit/`;
const pageUrl = `${siteConfig.url}/chatgpt-sichtbarkeit/`;

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Bei ChatGPT gefunden werden: Wie Unternehmen in KI-Antworten sichtbar werden",
  description:
    "Wie wird ein Unternehmen bei ChatGPT sichtbar? Erfahre, welche Rolle Mentions, Citations, Empfehlungen, Sentiment, SEO und GEO spielen.",
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
      name: "ChatGPT-Sichtbarkeit",
      item: pageUrl,
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ChatgptSichtbarkeitPage />
    </>
  );
}
