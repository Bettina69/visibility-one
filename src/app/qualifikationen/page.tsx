import type { Metadata } from "next";
import { QualifikationenPage } from "@/components/sections/qualifikationen-page";

export const metadata: Metadata = {
  title: "Qualifikationen",
  description:
    "SISTRIX-, HubSpot-, Semrush- und Google-Zertifizierungen sowie 18+ Jahre eigene E-Commerce-Praxis seit 2008.",
};

export default function Page() {
  return <QualifikationenPage />;
}
