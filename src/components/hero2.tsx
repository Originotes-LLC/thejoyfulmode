import Image from "next/image";
import Link from "next/link";
import lawyer from "./lawyer-transparent.png";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hey, 👋🏻 Law Firm. <br /> Your Next Big Case
            <span className="text-accent"> Starts Here</span>.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Expert SEO, Marketing, Web Design & Development tailored for{" "}
            <span className="text-accent">Law Firms {` `}</span>
            that want to be found, not forgotten.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/schedule-call"
              className="rounded-md bg-background px-3.5 py-2.5 text-sm font-semibold text-foreground shadow-sm hover:bg-accent hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="relative max-w-xl flex-none sm:max-w-3xl lg:max-w-none">
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
