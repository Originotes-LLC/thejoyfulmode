export const EmptyBlog = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden lg:absolute lg:inset-0 lg:block"
      >
        <svg
          fill="none"
          width={640}
          height={784}
          viewBox="0 0 640 784"
          className="absolute left-1/2 top-0 -translate-y-8 translate-x-64 transform"
        >
          <defs>
            <pattern
              x={118}
              y={0}
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                fill="currentColor"
                width={4}
                height={4}
                className="text-background"
              />
            </pattern>
          </defs>
          <rect
            y={72}
            fill="currentColor"
            width={640}
            height={640}
            className="text-secondary"
          />
          <rect
            x={118}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
            width={404}
            height={784}
          />
        </svg>
      </div>

      <div className="relative pb-16 pt-6 sm:pb-24 lg:pb-32">
        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-base font-semibold text-accent sm:text-lg lg:text-base xl:text-lg">
                  Coming soon
                </span>
                <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  <span className="block text-foreground">The Joyful Blog</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                We're working on something great! <br />
                Check back soon for updates.
              </p>
            </div>
            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <svg
                fill="currentColor"
                width={640}
                height={784}
                viewBox="0 0 640 784"
                aria-hidden="true"
                className="absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
              >
                <defs>
                  <pattern
                    x={118}
                    y={0}
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      fill="currentColor"
                      width={4}
                      height={4}
                      className="text-background"
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  fill="currentColor"
                  width={640}
                  height={640}
                  className="text-secondary"
                />
                <rect
                  x={118}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                  width={404}
                  height={784}
                />
              </svg>
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full overflow-hidden rounded-lg bg-accent focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    className="w-full"
                  />
                  {/* <span
                    aria-hidden="true"
                    className="absolute inset-0 flex h-full w-full items-center justify-center"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 84 84"
                      className="h-20 w-20 text-accent"
                    >
                      <circle
                        r={42}
                        cx={42}
                        cy={42}
                        fill="black"
                        opacity="0.9"
                      />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </span> */}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
