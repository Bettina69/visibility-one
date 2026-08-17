import type { Metadata } from "next";
import { MethodPage } from "@/components/sections/method-page";

export const metadata: Metadata = {
  title: "Meine Methode",
  description:
    "Analysieren, verstehen, priorisieren, umsetzen, messen – wie ich SEO und KI-Sichtbarkeit gemeinsam betrachte, Schritt für Schritt.",
};

export default function Page() {
  return <MethodPage />;
}
