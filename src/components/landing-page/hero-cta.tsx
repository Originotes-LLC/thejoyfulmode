import Image from "next/image";
import Link from "next/link";
import meeting from "@/assets/images/meeting_presentation.jpg";
import presentation2 from "@/assets/images/corporate_presentation.jpg";
import relaxedOffice from "@/assets/images/relaxed_office.jpg";
import smiling_woman from "@/assets/images/smiling_woman.jpg";

export function HeroCallToAction() {
  return (
    <div className="overflow-hidden bg-foreground py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-background text-2xl lg:text-4xl font-normal leading-[43.92px]">
              If your law firm isn&rsquo;t dominating search results,
              you&rsquo;re basically the internet&rsquo;s best-kept secret. And
              not in a cool, mysterious way—more like the “why hasn&rsquo;t
              anyone called us?” kind of way.
            </h2>
            <div className="mt-10 flex">
              <div className="group px-3.5 py-2.5 bg-transparent border-2 border-background justify-center items-center inline-flex w-full hover:bg-primary hover:shadow-[-7px_7px_0_0] hover:shadow-background">
                <Link
                  href="/schedule-call"
                  className="text-center text-background text-base lg:text-xl font-semibold leading-loose tracking-wide group-hover:text-foreground"
                >
                  READY TO OUTRANK YOUR RIVALS?
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                alt=""
                src={presentation2}
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  alt=""
                  src={meeting}
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  alt=""
                  src={relaxedOffice}
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  alt=""
                  src={smiling_woman}
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
