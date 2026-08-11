import type { Metadata } from "next";
import { Stats } from "@/components/sections/stats";
import { Questions } from "@/components/sections/questions";

export const metadata: Metadata = {
  title: "Das Problem",
  description:
    "Warum sinkende Klicks nicht an deinem SEO liegen, sondern an KI-Antworten, die deine Website überspringen.",
};

export default function DasProblemPage() {
  return (
    <>
      <Stats />
      <Questions />
    </>
  );
}
