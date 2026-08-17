import type { Metadata } from "next";
import { WissenPage } from "@/components/sections/wissen-page";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "SEO & KI-Sichtbarkeit: Wissen & Grundlagen",
  description:
    "SEO, GEO und KI-Sichtbarkeit verständlich erklärt: Wissen zu ChatGPT, Google AI, Prompt Research und strukturierten Daten für Unternehmen.",
};

const pageUrl = `${siteConfig.url}/wissen/`;

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SEO & KI-Sichtbarkeit verständlich erklärt",
  description:
    "SEO, GEO und KI-Sichtbarkeit verständlich erklärt: Wissen zu ChatGPT, Google AI, Prompt Research und strukturierten Daten für Unternehmen.",
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
      name: "Wissen",
      item: pageUrl,
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <WissenPage />
    </>
  );
}
