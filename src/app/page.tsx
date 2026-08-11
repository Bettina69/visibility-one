import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { PageTeasers } from "@/components/sections/page-teasers";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <PageTeasers />
    </>
  );
}
