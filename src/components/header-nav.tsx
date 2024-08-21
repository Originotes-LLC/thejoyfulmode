"use client";

import {
  AppWindowMac,
  ChartNoAxesCombined,
  Handshake,
  ImagePlay,
  Wrench,
} from "lucide-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import Image from "next/image";
import Link from "next/link";
import logo from "./v3.png";
import { useState } from "react";

const products = [
  {
    name: "Web Design & Development",
    description:
      "We don't just make your site look great; we make it so good, your competitors might ask for your autograph.",
    href: "#",
    icon: AppWindowMac,
  },
  {
    name: "SEO",
    description:
      "We fine-tune your site until it's so visible, even your grandma will find you on the first page.",
    href: "#",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Marketing",
    description:
      "Our campaigns so sharp, they cut through the noise and make your brand the star of the show.",
    href: "#",
    icon: ImagePlay,
  },
  {
    name: "IT Services",
    description:
      "Smooth, hassle-free tech solutions that let you focus on your game.",
    href: "#",
    icon: Wrench,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Schedule a call", href: "/schedule-call", icon: PhoneIcon },
  { name: "Client Onboarding", href: "#", icon: Handshake },
];
const callsToActionMobile = [
  { name: "Demo", href: "#", icon: PlayCircleIcon },
  { name: "Call Us", href: "#", icon: PhoneIcon },
  { name: "Onboarding", href: "#", icon: Handshake },
];

const company = [
  {
    name: "Just Us",
    href: "#",
    description:
      "Learn more about our company values and mission to empower others",
  },
  {
    name: "Client Cheers",
    href: "#",
    description:
      "Looking for you next career opportunity? See all of our open positions",
  },
  {
    name: "Support",
    href: "#",
    description:
      "Get in touch with our dedicated support team or reach out on our community forums",
  },
  {
    name: "Brain Candy",
    href: "/blog",
    description:
      "Read our latest announcements and get perspectives from our team",
  },
];

export function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative isolate z-10 bg-primary">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">The Joyful Mode</span>
            <div className="relative size-16 md:size-20">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                alt="the joyful mode logo"
                src={logo}
                className="size-full object-cover rounded-full"
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-foreground">
              Services
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-foreground"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-0 -z-10 bg-primary pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-secondary sm:flex-col sm:p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-foreground group-hover:text-background"
                      />
                    </div>
                    <Link
                      href={item.href}
                      className="mt-6 block font-semibold text-foreground group-hover:text-background"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-foreground group-hover:text-background">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-foreground">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                    {callsToAction.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-background hover:bg-secondary"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-5 flex-none text-background"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
          {company.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 p-0.5 text-foreground hover:text-accent hover:underline hover:decoration-1 hover:decoration-double"
            >
              {item.name}
            </Link>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-foreground hover:text-accent hover:underline hover:decoration-1 hover:decoration-double"
          >
            Client Portal <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-primary sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">The Joyful Mode</span>
                <div className="relative size-16 md:size-20">
                  <Image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    alt="the joyful mode logo"
                    src={logo}
                    className="size-full object-cover rounded-full"
                  />
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {products.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-foreground hover:bg-secondary hover:text-background"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg group-hover:text-background">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-foreground group-hover:text-background"
                        />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground hover:text-accent hover:underline hover:decoration-1 hover:decoration-double"
                  >
                    Client Portal
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5 bg-foreground">
            {callsToActionMobile.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-1 p-2.5 text-sm font-medium leading-6 text-background hover:bg-secondary"
              >
                <item.icon
                  aria-hidden="true"
                  className="size-4 flex-none text-background"
                />
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
