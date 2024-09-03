// import { GoToLawAcademy } from "@/components/landing-page/go-to-law-academy";
import { ChallengesCTA } from "@/components/landing-page/challenges-cta";
import { Hero } from "@/components/landing-page/hero3";
import { LawFirmChallenges } from "@/components/landing-page/law-firm-challenges";
// import { ProblemStatement } from "@/components/landing-page/problem-statement";
export default function Home() {
  return (
    <main>
      <Hero />
      <LawFirmChallenges />
      <ChallengesCTA />
      {/* <GoToLawAcademy /> */}
      {/* <ProblemStatement /> */}
    </main>
  );
}
