import type { Metadata } from "next";
import { Foerderung } from "@/components/sections/foerderung";

export const metadata: Metadata = {
  title: "Förderung",
  description: "Als BAFA-anerkannte Beraterin bis zu 80% Förderung für deine Beratung.",
};

export default function FoerderungPage() {
  return <Foerderung />;
}
