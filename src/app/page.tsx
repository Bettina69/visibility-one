import { Hero } from "@/components/sections/hero";
import { Facts } from "@/components/sections/facts";
import { Questions } from "@/components/sections/questions";
import { Reveal } from "@/components/sections/reveal";
import { MethodOverview } from "@/components/sections/method-overview";
import { Marquee } from "@/components/sections/marquee";
import { PageTeasers } from "@/components/sections/page-teasers";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal className="section hero-transition">
        <div className="wrap">
          <Questions />
          <Facts />
        </div>
      </Reveal>
      <MethodOverview />
      <Marquee />
      <PageTeasers />
    </>
  );
}
