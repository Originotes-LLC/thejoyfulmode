import { Hero } from "@/components/landing-page/hero";
import { HeroCallToAction } from "@/components/landing-page/hero-cta";
import { StatsHero } from "@/components/landing-page/stats-hero";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsHero />
      <HeroCallToAction />
    </>
  );
}
