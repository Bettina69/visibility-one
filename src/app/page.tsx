import { Hero } from "@/components/sections/hero";
import { Facts } from "@/components/sections/facts";
import { Questions } from "@/components/sections/questions";
import { Reveal } from "@/components/sections/reveal";
import { MethodOverview } from "@/components/sections/method-overview";
import { OffersOverview } from "@/components/sections/offers-overview";
import { SocialProof } from "@/components/sections/social-proof";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Faq } from "@/components/sections/faq";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Marquee } from "@/components/sections/marquee";

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
      <Marquee />
      <MethodOverview />
      <OffersOverview />
      <SocialProof />
      <AboutTeaser />
      <Faq />
      <ClosingCta />
    </>
  );
}
