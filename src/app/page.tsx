import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { SearchShift } from "@/components/sections/search-shift";
import { Questions } from "@/components/sections/questions";
import { Reveal } from "@/components/sections/reveal";
import { MethodOverview } from "@/components/sections/method-overview";
import { UseCasesTeaser } from "@/components/sections/use-cases-teaser";
import { OffersOverview } from "@/components/sections/offers-overview";
import { SocialProof } from "@/components/sections/social-proof";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Faq } from "@/components/sections/faq";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Marquee } from "@/components/sections/marquee";

// Vorläufig auf die aktuell erreichbare GitHub-Pages-Vorschau-URL gesetzt
// (absolute URLs, damit sie unabhängig vom production-`metadataBase` in
// layout.tsx aufgelöst werden). Beim Umzug auf die eigene Domain hier
// austauschen.
const SOCIAL_PREVIEW_URL = "https://bettina69.github.io/visibility-one/";
const SOCIAL_IMAGE_URL = "https://bettina69.github.io/visibility-one/og-image.jpg";
const SOCIAL_TITLE = "Visibility One – SEO & KI-Sichtbarkeit für kleine Unternehmen";
const SOCIAL_DESCRIPTION =
  "Sichtbar bei Google. Gefunden in der KI-Suche. SEO- und KI-Sichtbarkeitsberatung aus 18 Jahren eigener E-Commerce-Praxis.";

export const metadata: Metadata = {
  openGraph: {
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    url: SOCIAL_PREVIEW_URL,
    siteName: "Visibility One",
    type: "website",
    images: [
      {
        url: SOCIAL_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: SOCIAL_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: [SOCIAL_IMAGE_URL],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal className="section hero-transition">
        <div className="wrap">
          <Questions />
          <SearchShift />
        </div>
      </Reveal>
      <Marquee />
      <MethodOverview />
      <UseCasesTeaser />
      <OffersOverview />
      <SocialProof />
      <AboutTeaser />
      <Faq />
      <ClosingCta />
    </>
  );
}
