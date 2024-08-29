import { GoToLawAcademy } from "@/components/landing-page/go-to-law-academy";
import { Hero } from "@/components/landing-page/hero";
import { ProblemStatement } from "@/components/landing-page/problem-statement";
export default function Home() {
  return (
    <main>
      <Hero />
      <GoToLawAcademy />
      <ProblemStatement />
    </main>
  );
}
