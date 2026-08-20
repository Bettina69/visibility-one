import type { Metadata } from "next";
import { OfferAnalyse } from "@/components/sections/offer-analyse";

export const metadata: Metadata = {
  title: "SEO- & KI-Sichtbarkeits-Audit",
  description:
    "Die fundierte Analyse deiner Sichtbarkeit bei Google und in relevanten KI-Systemen – inklusive Befund, ob SEO, GEO oder beides sinnvoll ist.",
};

export default function AnalysePage() {
  return <OfferAnalyse />;
}
