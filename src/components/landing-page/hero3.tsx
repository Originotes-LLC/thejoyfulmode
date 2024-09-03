import Image from "next/image";
import Link from "next/link";
import lawyer from "@/assets/images/lawyer-lion.png";
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
    <div className="bg-primary">
      <div>
        <div className="mt-16 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Hey, Ambitious Law Firm. <br /> Your Next Big Case{` `}
              <span className="inline-block text-accent"> Starts Here</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-foreground">
              We don't just deliver more clients.
              <br /> We deliver{" "}
              <span className="text-accent font-medium">
                Game Changing {` `}
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
        {/* image used to go here */}
        <div className="mt-16 sm:mt-24">
          <div className="">
            <Image
              priority
              alt="A lion lawyer in a suit representing the power we bring to your law firm with The Joyful Mode Marketing Services"
              src={lawyer}
              width={2432}
              height={1442}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
