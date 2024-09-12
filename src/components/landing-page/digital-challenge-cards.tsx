import Image, { StaticImageData } from "next/image";

import Link from "next/link";
import elderly_woman from "@/assets/images/elderly_woman.jpg";
import lone_lawyer from "@/assets/images/lone_lawyer.jpg";
import spark_dollars from "@/assets/images/spark_dollars.jpg";
import thanks_nothing from "@/assets/images/thanks_nothing.jpg";
import vintage_computer from "@/assets/images/vintage_computer.jpg";

const linkText = "Learn why this matters";

const challenges = [
  {
    id: 0,
    name: "Poor Search Engine Visibility (SEO)",
    description: "Your expertise is buried in search results.",
    link: "#",
    image: lone_lawyer,
    alt: "A lone lawyer in a courtroom",
  },
  {
    id: 1,
    name: "Ineffective Digital Marketing Strategies",
    description:
      "You're wasting time on tactics that don't work for legal services.",
    link: "#",
    image: elderly_woman,
    alt: "Elderly woman confused by technology",
  },
  {
    id: 2,
    name: "Ineffective Advertising",
    description: "Your PPC campaigns aren't targeting the right legal clients.",
    link: "#",
    image: spark_dollars,
    alt: "A pile of money catching fire",
  },
  {
    id: 3,
    name: "Outdated Website Design",
    description:
      "Your online presence doesn't reflect your professional standards.",
    link: "#",
    image: vintage_computer,
    alt: "A vintage computer",
  },
  {
    id: 4,
    name: "Struggle to Attract Ideal Clients",
    description:
      "You're not attracting the high-value clients your firm deserves.",
    link: "#",
    image: thanks_nothing,
    alt: "A white bag with the words 'Thanks for nothing' on it",
  },
];

export function DigitalChallengeCards() {
  return (
    <div>
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <Link
            href="#"
            className="hidden text-sm font-semibold text-background hover:text-accent sm:block"
          >
            {linkText}
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 scroll-smooth"
            >
              {challenges.map((product) => (
                <li
                  key={product.id}
                  className="inline-flex lg:w-[720px] h-[480] flex-col text-center relative"
                >
                  <div className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-[32px]">
                      <Image
                        className="size-full object-cover object-center group-hover:opacity-75"
                        src={product.image}
                        alt={product.alt}
                      />
                    </div>
                    <div className="relative mt-6">
                      <p className="text-sm text-background">
                        {product.description}
                      </p>
                    </div>
                    <div className="absolute flex-col inset-x-0 top-0 flex h-[480] items-center justify-end overflow-hidden p-4">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 size-full bg-gradient-to-t from-foreground opacity-50"
                      />
                      <p className="relative text-lg font-semibold text-background mb-8 lg:mb-0">
                        {product.name}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex px-4 sm:hidden">
          <Link
            href="#"
            className="text-sm font-semibold text-background hover:text-accent"
          >
            {linkText}
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
