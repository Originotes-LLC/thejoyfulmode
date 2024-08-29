import Link from "next/link";

export function GoToLawAcademy() {
  return (
    <div className="bg-white">
      <div className="px-6 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Want more clients?
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-lg leading-8 text-foreground">
            Explore our blog full of expert SEO tips, web design secrets, and
            marketing strategies tailored for Law Firms. It's like law school,
            but free and more fun!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/law-academy"
              className="rounded-md bg-foreground px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              Discover More at Law Academy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
