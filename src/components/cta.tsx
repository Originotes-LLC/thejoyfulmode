import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";
//
export function CTA() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start w-full pt-6 pb-12 lg:py-12 xl:pb-40 xl:pt-20">
      <div className="max-w-[600px]">
        {/* We are like the Michelangelo of pixels, but with more coffee and
          fewer marble statues. */}
        <h4 className="font-medium text-xl tracking-tighter text-foreground">
          Expert SEO, Marketing, and Web Design & Development tailored for{" "}
          <span className="text-accent font-semibold">Law Firms.</span>
        </h4>
      </div>
      <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
        <Link className="group" href="/schedule-call">
          <Button className="rounded-3xl inline-flex items-center gap-x-2 px-3.5 py-5 text-sm lg:text-base font-medium text-foreground shadow-sm ring-1 ring-inset ring-foreground group-hover:bg-accent group-hover:text-white group-hover:ring-accent">
            <PhoneIcon
              aria-hidden="true"
              className="-ml-0.5 size-5 group-hover:text-white text-foreground"
            />
            Let&rsquo;s Talk
          </Button>
        </Link>
      </div>
    </div>
  );
}
