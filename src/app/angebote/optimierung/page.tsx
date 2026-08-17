import type { Metadata } from "next";
import { OfferOptimierung } from "@/components/sections/offer-optimierung";

export const metadata: Metadata = {
  title: "SEO- & KI-Optimierung",
  description:
    "Seiten- & Inhaltsstrategie, Content-Optimierung und technisches SEO – gezielt dort, wo es für deine Sichtbarkeit wirklich etwas bringt.",
};

export default function OptimierungPage() {
  return <OfferOptimierung />;
}
