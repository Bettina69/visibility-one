import type { Metadata } from "next";
import { OfferBegleitung } from "@/components/sections/offer-begleitung";

export const metadata: Metadata = {
  title: "Monitoring & laufende Beratung",
  description:
    "Laufendes Monitoring deiner SEO- und KI-Sichtbarkeit mit monatlicher Einordnung und priorisierten nächsten Schritten.",
};

export default function BegleitungPage() {
  return <OfferBegleitung />;
}
