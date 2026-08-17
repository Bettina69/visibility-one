import type { Metadata } from "next";
import { ToolsPage } from "@/components/sections/tools-page";

export const metadata: Metadata = {
  title: "Kostenlose Tools",
  description:
    "Zwei kostenlose Tools von Visibility One: der SEO- & KI-Sichtbarkeitscheck und der AI Image Marker zum Kennzeichnen von KI-Bildern.",
};

export default function Page() {
  return <ToolsPage />;
}
