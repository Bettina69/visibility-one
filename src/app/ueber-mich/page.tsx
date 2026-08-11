import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Story } from "@/components/sections/story";
import { ReferenceProjects } from "@/components/sections/reference-projects";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Bettina Teckentrup: 18+ Jahre eigene E-Commerce-Praxis, BAFA-anerkannte GEO-Beraterin.",
};

export default function UeberMichPage() {
  return (
    <>
      <About />
      <Story />
      <ReferenceProjects />
    </>
  );
}
