import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main
      data-name="Content"
      className="relative p-6 lg:pt-6 lg:pb-12 lg:pr-12 lg:pl-12 flex flex-col items-center content-center max-w-[1200px] mx-auto"
    >
      <Hero />
    </main>
  );
}
