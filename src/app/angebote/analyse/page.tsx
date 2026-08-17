import type { Metadata } from "next";
import { OfferAnalyse } from "@/components/sections/offer-analyse";

export const metadata: Metadata = {
  title: "SEO- & KI-Sichtbarkeitsanalyse",
  description:
    "Verstehen, warum deine Sichtbarkeit nachlässt, wo Wettbewerber stärker sind und welche Maßnahmen bei Google und in KI-Systemen wirklich Priorität haben.",
};

export default function AnalysePage() {
  return <OfferAnalyse />;
}
