import type { Metadata } from "next";
import { OffersHero } from "@/components/sections/offers-hero";
import { OffersFreeCheck } from "@/components/sections/offers-free-check";
import { UseCases } from "@/components/sections/use-cases";
import { OffersMain } from "@/components/sections/offers-main";
import { OffersPackages } from "@/components/sections/offers-packages";

export const metadata: Metadata = {
  title: "Angebote",
  description:
    "Erst verstehen, dann optimieren: kostenloser Check, Audit, passendes Optimierungspaket und optionales Monitoring für Bestandskunden.",
};

export default function AngebotePage() {
  return (
    <>
      <OffersHero />
      <OffersFreeCheck />
      <UseCases />
      <OffersMain />
      <OffersPackages />
    </>
  );
}
