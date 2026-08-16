import type { Metadata } from "next";
import { CheckHero } from "@/components/sections/check-hero";
import { CheckScope } from "@/components/sections/check-scope";
import { CheckWhy } from "@/components/sections/check-why";
import { CheckResult } from "@/components/sections/check-result";
import { CheckBoundary } from "@/components/sections/check-boundary";
import { CheckForm } from "@/components/sections/check-form";

export const metadata: Metadata = {
  title: "SEO & KI-Sichtbarkeit kostenlos prüfen",
  description:
    "Kostenloser Sichtbarkeitscheck: Wie sichtbar ist deine Website heute bei Google – und taucht dein Unternehmen bereits in der KI-Suche auf?",
};

export default function SichtbarkeitscheckPage() {
  return (
    <>
      <CheckHero />
      <CheckScope />
      <CheckWhy />
      <CheckResult />
      <CheckBoundary />
      <CheckForm />
    </>
  );
}
