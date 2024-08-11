import { CTA } from "./cta";
import Image from "next/image";

//
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
      <div className="font-bold pb-6 lg:pb-20 text-4xl lg:text-5xl tracking-tighter leading-9 lg:leading-[48px] xl:text-[64px] xl:leading-[64px] lg:max-w-screen-sm">
        <h1>We turn your website into a winning argument.</h1>
      </div>
      <CTA />
    </div>
  );
}
