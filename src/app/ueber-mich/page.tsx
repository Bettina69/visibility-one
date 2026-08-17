import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/about-page";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Bettina Teckentrup: 18+ Jahre eigene E-Commerce-Praxis, SEO- und KI-Sichtbarkeitsberatung aus erster Hand.",
};

export default function UeberMichPage() {
  return <AboutPage />;
}
