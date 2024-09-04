import Link from "next/link";

export function ChallengesCTA() {
  return (
    <div className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
          It's time to turn the tide.
          <br />
          Make your digital presence unbeatable.
        </h2>
        <div className="mt-10 gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            className="rounded-md bg-foreground px-3.5 py-2.5 text-sm font-semibold text-background shadow-sm hover:bg-primary hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            href="#"
          >
            Take Our Free Assessment
            <span className="ml-1" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
