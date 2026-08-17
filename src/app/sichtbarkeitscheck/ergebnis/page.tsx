import type { Metadata } from "next";
import { CheckResultReport } from "@/components/sections/check-result-report";
import { exampleCheckResult } from "@/lib/check-result-data";

export const metadata: Metadata = {
  title: "Dein Sichtbarkeitscheck-Ergebnis",
  robots: { index: false, follow: false },
};

// Wiederverwendbares Ergebnis-Template: Für einen neuen Interessenten
// hier einfach einen eigenen Datensatz übergeben (siehe
// src/lib/check-result-data.ts für die Feldstruktur und ein Beispiel).
export default function SichtbarkeitscheckErgebnisPage() {
  return <CheckResultReport {...exampleCheckResult} />;
}
