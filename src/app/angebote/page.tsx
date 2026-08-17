import type { Metadata } from "next";
import { OffersHero } from "@/components/sections/offers-hero";
import { OffersFreeCheck } from "@/components/sections/offers-free-check";
import { OffersMain } from "@/components/sections/offers-main";
import { OffersPackages } from "@/components/sections/offers-packages";

export const metadata: Metadata = {
  title: "Angebote",
  description:
    "Verstehen, optimieren, begleiten: SEO- & KI-Sichtbarkeit so umfassend, wie du sie brauchst.",
};

export default function AngebotePage() {
  return (
    <>
      <OffersHero />
      <OffersFreeCheck />
      <OffersMain />
      <OffersPackages />
    </>
  );
}
