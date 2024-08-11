import Image from "next/image";
import SparklesText from "@/components/magicui/sparkles-text";
export function Hero() {
  return (
    <div
      data-name="Hero Page"
      className="flex content-center items-start flex-col lg:pt-20 gap-6 lg:gap-10 w-full"
    >
      {/* aligned set of images */}
      <div>
        <div className="flex -space-x-2 overflow-hidden justify-start w-full">
          <div className="relative inline-block size-10">
            <Image
              className="rounded-full ring-2 ring-white"
              fill
              alt=""
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
          <div className="relative inline-block size-10">
            <Image
              className="rounded-full ring-2 ring-white"
              fill
              alt=""
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
          <div className="relative inline-block size-10">
            <Image
              className="rounded-full ring-2 ring-white"
              fill
              alt=""
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            />
          </div>
          <div className="relative inline-block size-10">
            <Image
              className="rounded-full ring-2 ring-white"
              fill
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
        </div>
      </div>
      {/* hero headline */}
      <div className="font-bold pb-6 lg:pb-20 text-4xl lg:text-5xl tracking-tighter leading-9 lg:leading-[48px] xl:text-[64px] xl:leading-[64px]">
        <h1>Ready to make your{` `}</h1>
        <h1>
          <span className="text-rose-800 inline-block">Law Firm</span> shine
        </h1>
        <h1>Brigther than a</h1>
        <h1>
          <SparklesText
            className="text-4xl lg:text-5xl tracking-tighter leading-9 lg:leading-[48px] xl:text-[64px] xl:leading-[64px]"
            text="SuperNova?"
          />
        </h1>
      </div>
      {/* hero subheader */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full pt-6 pb-12 lg:py-12 xl:pb-40 xl:pt-20">
        <div className="max-w-[600px]">
          {/* We are like the Michelangelo of pixels, but with more coffee and
            fewer marble statues. */}
          <h4 className="font-semibold text-xl tracking-tighter">
            <span className="lg:block">
              We build websites and marketing strategies{` `}
            </span>
            <span className="lg:block">
              that <span className="text-rose-800">win cases</span> before
              clients even pick up the phone.
            </span>
          </h4>
        </div>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 space-x-2"
          >
            <span aria-hidden="true">&darr;</span>{` `}Find out how
          </a>
        </div>
      </div>
    </div>
  );
}
