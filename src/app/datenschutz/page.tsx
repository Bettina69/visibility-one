import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <PagePlaceholder
      title="Datenschutz"
      description="Datenschutzerklärung folgt (z. B. nach DSGVO). Bitte finalen Text rechtlich prüfen lassen."
    />
  );
}
