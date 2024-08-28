"use client";

import {
  AppWindowMac,
  ChartNoAxesCombined,
  Handshake,
  ImagePlay,
  Wrench,
} from "lucide-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo/tjm_logo_black_on_transparent.png";
import { usePathname } from "next/navigation";
import { useState } from "react";

const products = [
  {
    name: "Web Design & Development",
    description:
      "Build a website that'll have your competitors asking for autographs.",
    href: "#",
    icon: AppWindowMac,
  },
  {
    name: "SEO",
    description:
      "We optimize your site until your grandma finds you on the first page",
    href: "#",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Marketing",
    description:
      "Our campaigns cut through the noise and make your brand shine.",
    href: "#",
    icon: ImagePlay,
  },
  {
    name: "Pay Per Click (PPC)",
    description:
      "We'll make sure your ads are seen by the right people at the right time.",
    href: "#",
    icon: Wrench,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayCircleIcon },
  { name: "Schedule a Call", href: "/schedule-call", icon: PhoneIcon },
  { name: "Onboarding", href: "#", icon: Handshake },
];
const callsToActionMobile = [
  { name: "Demo", href: "#", icon: PlayCircleIcon },
  { name: "Call Us", href: "/schedule-call", icon: PhoneIcon },
  { name: "Onboarding", href: "#", icon: Handshake },
];

const company = [
  {
    name: "Our Mission",
    href: "#",
    description:
      "Learn more about our agency values and mission to empower others.",
  },
  {
    name: "Client Cheers",
    href: "#",
    description:
      "All the love we've received from our clients. We're blushing.",
  },
  {
    name: "Say Hello",
    href: "/schedule-call",
    description: "Get in touch with our team of joyful experts.",
  },
  {
    name: "Law Academy",
    href: "/law-academy",
    description:
      "Our blog is full of tips and tricks to help you grow your practice.",
  },
];

export function HeaderNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return pathname.includes("/studio") ? null : (
    <NavigationMenu className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="flex flex-1">
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

      <NavigationMenuList className="hidden lg:flex lg:gap-x-12">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {products.map((item) => (
                <div
                  key={item.name}
                  className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6"
                >
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg">
                    <item.icon
                      aria-hidden="true"
                      className="size-6 text-foreground"
                    />
                  </div>
                  <div>
                    <Link
                      href={item.href}
                      className="font-semibold text-foreground"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </ul>
            <div className="bg-foreground">
              <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-background hover:bg-accent"
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
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {company.map((item) => (
            <Link
              legacyBehavior
              passHref
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 p-0.5 text-foreground hover:text-accent hover:underline hover:decoration-1 hover:decoration-double"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.name}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavigationMenuItem>
            <Link
              legacyBehavior
              passHref
              href="#"
              className="text-sm font-semibold leading-6 p-0.5 text-foreground hover:text-accent hover:underline hover:decoration-1 hover:decoration-double"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Client Portal <span aria-hidden="true">&rarr;</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>

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
                  {/* small screens / mobile view */}
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-foreground"
                        />
                      </div>
                      <div>
                        <a
                          href={item.href}
                          className="font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-neutral-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  {company.map((item) => (
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}

                      <p className="mt-0.5 text-foreground text-sm font-normal">
                        {item.description}
                      </p>
                    </Link>
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
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-1 p-2.5 text-sm font-medium leading-6 text-background hover:bg-accent"
              >
                <item.icon
                  aria-hidden="true"
                  className="size-4 flex-none text-background"
                />
                {item.name}
              </Link>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </NavigationMenu>
  );
}
