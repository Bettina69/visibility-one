import type { Metadata } from "next";
import { Credibility } from "@/components/sections/credibility";
import { Quals } from "@/components/sections/quals";

export const metadata: Metadata = {
  title: "Qualifikationen",
  description:
    "BAFA-Anerkennung, Google-, HubSpot- und SEMrush-Zertifizierungen sowie 18+ Jahre eigene E-Commerce-Praxis.",
};

export default function QualifikationenPage() {
  return (
    <>
      <Credibility />
      <Quals />
    </>
  );
}
