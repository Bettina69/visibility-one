import type { Metadata } from "next";
import { OfferOptimierung } from "@/components/sections/offer-optimierung";

export const metadata: Metadata = {
  title: "SEO- & KI-Optimierung",
  description:
    "Drei Pakete für bis zu 2, 5 oder 8 bestehende Kernseiten – SEO, GEO oder beides, abhängig vom Audit-Befund.",
};

export default function OptimierungPage() {
  return <OfferOptimierung />;
}
