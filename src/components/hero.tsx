import { CTA } from "./cta";

export function Hero() {
  return (
    <div
      data-name="Hero Page"
      className="flex content-center items-start flex-col lg:pt-20 gap-6 lg:gap-10 w-full"
    >
      <div></div>
      {/* hero headline */}
      <div className="font-bold pb-6 lg:pb-20 text-4xl lg:text-5xl tracking-tighter leading-9 lg:leading-[48px] xl:text-[64px] xl:leading-[64px] lg:max-w-screen-sm">
        <h1 className="text-foreground">
          Hey, 👋🏻 Law Firm. <br /> Your Next Big Case
          <span className="text-accent"> Starts Here</span>.
        </h1>
      </div>
      <CTA />
    </div>
  );
}

/*
  potential good lines: 
  - Your Next Big Case Starts Here.
  - We turn traffic into trials.
  - Habeas Corpus Meets Habeas Clicks
  - We are like the Michelangelo of pixels, but with more coffee and fewer marble statues.
  - We turn your website into a winning argument.
  -No Need for Miranda: Your Website Has the Right to Be Eye-Catching
*/
