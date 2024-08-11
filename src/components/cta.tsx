import { Button } from "@/components/ui/button";
import { PhoneIcon } from "@heroicons/react/24/outline";

//
export function CTA() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start w-full pt-6 pb-12 lg:py-12 xl:pb-40 xl:pt-20">
      <div className="max-w-[600px]">
        {/* We are like the Michelangelo of pixels, but with more coffee and
          fewer marble statues. */}
        <h4 className="font-medium text-xl tracking-tighter">
          Building websites and marketing strategies since 2020, so your law
          firm wins cases before clients even pick up the phone.
        </h4>
      </div>
      <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
        <Button className="inline-flex items-center gap-x-2 bg-white px-3.5 py-2.5 text-sm lg:text-base font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <PhoneIcon aria-hidden="true" className="-ml-0.5 size-5" />
          Schedule a call
        </Button>
      </div>
    </div>
  );
}
