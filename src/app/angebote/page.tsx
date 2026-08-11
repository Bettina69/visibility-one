import type { Metadata } from "next";
import { Offers } from "@/components/sections/offers";

export const metadata: Metadata = {
  title: "Angebote",
  description: "Vom kostenlosen Quick-Check bis zur laufenden GEO-Begleitung.",
};

export default function AngebotePage() {
  return <Offers />;
}
