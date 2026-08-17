import type { Metadata } from "next";
import { KiBilderKennzeichnenPage } from "@/components/sections/ki-bilder-kennzeichnen-page";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "KI-Bilder kennzeichnen: AI generated & AI modified",
  description:
    "KI-generierte oder KI-bearbeitete Bilder transparent kennzeichnen: Unterschiede verstehen und Bilder kostenlos mit dem AI Image Marker markieren.",
};

const hubUrl = `${siteConfig.url}/wissen/`;
const pageUrl = `${siteConfig.url}/ki-bilder-kennzeichnen/`;

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "KI-Bilder kennzeichnen: transparent zeigen, wo KI im Einsatz war",
  description:
    "KI-generierte oder KI-bearbeitete Bilder transparent kennzeichnen: Unterschiede verstehen und Bilder kostenlos mit dem AI Image Marker markieren.",
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
      item: hubUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "KI-Bilder kennzeichnen",
      item: pageUrl,
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <KiBilderKennzeichnenPage />
    </>
  );
}
