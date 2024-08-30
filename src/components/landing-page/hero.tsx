import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { StatsHero } from "./stats-hero";
import lawyer from "@/assets/images/lawyer-transparent.png";

/*
  potential good lines: 
  - Your Next Big Case Starts Here.
  - We turn traffic into trials.
  - Habeas Corpus Meets Habeas Clicks
  - We are like the Michelangelo of pixels, but with more coffee and fewer marble statues.
  - We turn your website into a winning argument.
  -No Need for Miranda: Your Website Has the Right to Be Eye-Catching
*/

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl space-y-1">
            Hey, 👋🏻 Law Firm. <br /> Your Next Big Case{` `}
            <span className="inline-block text-background bg-accent px-3 py-1 my-2">
              {" "}
              Starts Here
            </span>
            .
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground font-medium">
            Expert SEO, Marketing, Web Design & Development tailored for{" "}
            <span className="text-accent">Law Firms {` `}</span>
            that want to be found, not forgotten.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <div className="flex items-center gap-x-6 lg:flex-shrink-0">
              <Link className="group" href="/schedule-call">
                <Button className="rounded-[8px] inline-flex items-center p-6 text-sm bg-foreground lg:text-base font-medium text-background shadow-sm ring-2 ring-inset ring-foreground group-hover:bg-accent group-hover:text-white group-hover:ring-accent">
                  Get Started Now
                  <ArrowUpRightIcon
                    aria-hidden="true"
                    className="ml-5 size-5 group-hover:text-white text-background"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none">
          <div className="absolute lg:top-32 overflow-hidden">
            <div className="transform translate-x-12 translate-y-12 md:transform-none">
              <Circle className="text-sky-100 h-[800px] w-[800px] md:w-[1600px] md:h-[1600px] bg-accent/50 rounded-full" />
            </div>
          </div>
          {/* section non sense icons */}
          <div className="absolute top-20 lg:top-60 lg:transform lg:translate-x-32">
            <StatsHero />
          </div>
          <div className="max-w-xl flex-none sm:max-w-3xl lg:max-w-none z-40">
            <div className="-m-2 p-2 lg:-m-4 lg:p-4">
              <Image
                alt="A young lawyer feeling empowered by the joyful mode services"
                src={lawyer}
                width={2432}
                height={1442}
                className="w-[76rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
