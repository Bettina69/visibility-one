import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <PagePlaceholder
      title="Impressum"
      description="Rechtlich vorgeschriebene Angaben folgen (z. B. nach § 5 TMG). Bitte finalen Text auf Richtigkeit prüfen bzw. rechtlich prüfen lassen."
    />
  );
}
