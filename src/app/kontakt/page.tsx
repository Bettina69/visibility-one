import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Schreib mir, wo du gerade stehst – Antwort innerhalb von 24 Stunden.",
};

export default function KontaktPage() {
  return <Contact />;
}
