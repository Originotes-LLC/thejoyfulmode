import Link from "next/link";

export function ChallengesCTA() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-w-2xl">
          Book your consultation today and start seeing clients roll in. <br />
          Before you even put on your best shoes.
        </h2>
        <div className="mt-10 gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            className="rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background shadow-sm hover:bg-primary hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            href="/schedule-call"
          >
            Schedulle a Call
            <span className="ml-1" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
