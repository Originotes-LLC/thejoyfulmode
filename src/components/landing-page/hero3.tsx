import Link from "next/link";

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
    <div>
      <div className="mx-auto max-w-3xl py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Hey, Ambitious Law Firm. <br /> Your Next Big Case <br /> Starts
            Here
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We don't just deliver more clients.
            <br /> We deliver{" "}
            <span className="text-accent font-medium bg-primary/50 p-0.5">
              game changing {` `}
            </span>
            clients. <br />
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
            <Link
              className="rounded-md bg-foreground px-3.5 py-2.5 text-sm font-semibold text-background shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              href="/schedule-call"
            >
              Schedule Your Free Consultation
            </Link>
            <Link
              href="#"
              className="text-sm font-medium leading-6 text-foreground"
            >
              Discover Our Fresh Approach <br />
              to Legal Marketing <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
