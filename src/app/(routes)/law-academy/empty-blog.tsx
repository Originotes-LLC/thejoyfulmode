import Image from "next/image";
import lawyerStudying from "./lawyers-studying-min.jpeg";
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
                  <span className="block text-foreground">
                    The Joyful Law Academy
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                We're working hard to bring you the best SEO tips, marketing
                strategies, and web design & development tailored for law firms
                that want to be noticed, not ignored. Stay tuned!
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
                <Image
                  width={1800}
                  height={1200}
                  alt="lawyer studying the best seo tips from the joyful mode law academy"
                  src={lawyerStudying}
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
