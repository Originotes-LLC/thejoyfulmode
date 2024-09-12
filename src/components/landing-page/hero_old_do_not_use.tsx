import Link from "next/link";
//! DON'T USE THIS COMPONENT
/*
  potential good lines: 
  - Your Next Big Case Starts Here.
  - We turn traffic into Trials.
  - Habeas Corpus Meets Habeas Clicks
  - We are like the Michelangelo of pixels, but with more coffee and fewer marble statues.
  - We turn your website into a winning argument.
  -No Need for Miranda: Your Website Has the Right to Be Eye-Catching
*/
export function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="border-y-2 border-dotted border-foreground">
        <div className="grid md:grid-cols-9 md:gap-x-20 xl:gap-x-24">
          <div
            aria-hidden="true"
            className="hidden md:flex flex-col justify-start border-r-2 border-dotted border-foreground"
          >
            <div className="bg-secondary h-96 border-b-2 border-foreground border-dotted" />
          </div>
          <div className="md:col-span-7 py-16 md:py-24 rounded-sm">
            <div className="text-center">
              <div className="mx-auto max-w-5xl">
                <h1 className="text-4xl font-extrabold tracking-wide text-foreground sm:text-6xl">
                  Hey, ambitious law firm, your next big case starts here
                  {/* Hey, ambitious law firm <br /> We turn traffic into Trials. */}
                </h1>
                <p className="mt-6 text-xl leading-8 text-foreground font-medium max-w-3xl lg:mx-auto mx-6">
                  Winning cases is tough. Getting noticed online shouldn&rsquo;t
                  be. We turn your website into a magnet for the right clients,
                  with digital strategies sharper than your best courtroom
                  argument.
                  {/* We don't just deliver more clients.
                  <br /> We deliver{" "}
                  <span className="text-accent uppercase font-extrabold">
                    game changing {` `}
                  </span>
                  clients. <br /> */}
                </p>
              </div>
              <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-x-6">
                <Link
                  className="px-6 py-4 bg-foreground rounded-full text-md font-semibold text-background shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  href="/schedule-call"
                >
                  Free Consultation
                </Link>
                <Link
                  href="#"
                  className="text-md font-medium leading-6 hover:text-accent hover:decoration-accent underline decoration-dotted underline-offset-2 decoration-foreground"
                >
                  Our Approach to Law Firm Marketing
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="hidden md:flex flex-col justify-start border-l-2 border-dotted border-foreground"
          >
            <div className="bg-accent h-[180px] border-b-2 border-foreground border-dotted" />
          </div>
        </div>
      </div>
      {/* lower decorative elements */}
      <div className="grid grid-cols-3 md:grid-cols-6 xl:h-72 lg:h-44 h-32">
        <div className="md:col-span-5 col-span-2">
          <div className="flex flex-col flex-nowrap size-full">
            <div className="size-full grid grid-cols-5 border-b-2 border-dotted border-foreground">
              <div className="border-x-2 border-dotted border-foreground bg-[#03CEA4] col-start-3 md:w-40" />
              <div className="border-r-2 border-t border-dotted border-foreground rounded-tr-[180px] col-start-5" />
            </div>
            <div className="size-full">
              <div className="size-full grid grid-cols-5">
                <div className="border-x-2 border-dotted border-foreground col-start-3 md:w-40" />
                <div className="border-r-2 border-dotted border-foreground rounded-br-[180px] col-start-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden border-2 border-foreground rounded-[180px] border-dotted flex flex-row flex-nowrap justify-end">
          <div className="flex flex-col flex-nowrap justify-end items-stretch h-full w-[50%] border-l-2 border-dotted border-foreground">
            <div className="bg-[#70E4EF] w-full h-[50%] border-t-2 border-dotted border-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
