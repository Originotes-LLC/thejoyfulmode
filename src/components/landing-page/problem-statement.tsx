import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import happyWorkers from "@/assets/images/celebrate-office.jpg";

export function ProblemStatement() {
  return (
    <div className="bg-primary px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        {/* <p className="text-base font-semibold leading-7 text-secondary">
          Introducing
        </p> */}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          How We Transform Your Legal Practice with a Digital Makeover.
        </h1>
        <p className="mt-6 text-xl leading-8">
          At The Joyful Mode, we specialize in creating digital experiences that
          reflect the professionalism and authority of top-tier law firms. Now,
          I know what you're thinking, 'Digital experiences? Is this some kind
          of virtual reality courtroom? Not quite, but we do make your website
          look so compelling, it should be considered a masterpiece.
        </p>
        <figure className="mt-16">
          <div className="relative aspect-w-16 aspect-h-9">
            <Image
              fill
              alt="happy workers at The Joyful Mode"
              src={happyWorkers}
              className="rounded-xl bg-gray-50 object-cover size-full"
            />
          </div>

          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-foreground">
            <InformationCircleIcon
              aria-hidden="true"
              className="mt-0.5 size-5 flex-none text-foreground"
            />
            Photo by Mariana Pedroza from Lummi.ai
          </figcaption>
        </figure>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            A Digital Persona as Sharp as Your Legal Mind
          </h2>
          <p className="mt-6">
            We understand that your online presence is an extension of your
            practice. It&rsquo;s like your online persona, but with fewer
            selfies and more legal jargon. Our team has extensive experience in
            working with legal professionals, ensuring that your website is
            optimized for client engagement and search engine visibility.
            We&rsquo;re basically the SEO equivalent of a courtroom ace.
          </p>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
            Dedication and Detail: Our Digital Pledge to You
          </h2>
          <p className="mt-8">
            We approach every project with the same dedication and attention to
            detail that you provide to your clients. By tailoring our services
            to meet your specific needs, we help you stand out in a competitive
            market. From custom web design to targeted SEO strategies, we have
            the expertise to turn your website into a powerful asset for your
            firm.
          </p>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
            Join Us for a Legal Digital Revolution
          </h2>
          <p className="mt-8">
            So, let us partner with you to create a digital presence that
            mirrors the excellence and trustworthiness your clients have come to
            expect – with a touch of humor, because who said law has to be all
            serious business? After all, a smile is the best briefcase, right?"
          </p>
        </div>
      </div>
    </div>
  );
}
