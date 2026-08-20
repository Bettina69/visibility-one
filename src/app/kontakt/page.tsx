import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Schreib mir, wo du gerade stehst – Antwort in der Regel innerhalb von 2 Werktagen.",
};

export default function KontaktPage() {
  return <Contact />;
}
