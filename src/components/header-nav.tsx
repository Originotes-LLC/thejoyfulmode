"use client";

import {
  AppWindowMac,
  ChartNoAxesCombined,
  CircleUser,
  Handshake,
  ImagePlay,
  Megaphone,
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
import logoDark from "../assets/logo/tjm_logo_black_on_transparent.png";
import logoWhite from "../assets/logo/tjm_logo_white_on_transparent.png";
import { usePathname } from "next/navigation";
import { useState } from "react";

const services = [
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
    name: "Advertising",
    description:
      "We'll make sure your ads are seen by the right people at the right time.",
    href: "#",
    icon: Megaphone,
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

const navLinks = [
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
          <div className="relative size-20 md:size-28">
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              alt="the joyful mode logo"
              src={logoWhite}
              className="size-full object-cover rounded-full"
            />
          </div>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-background"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
      </div>

      <NavigationMenuList className="hidden lg:flex lg:gap-x-12">
        <NavigationMenuItem className="text-background">
          <NavigationMenuTrigger>
            <span className="text-base">Services</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* Big screens */}
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {services.map((item) => (
                <li
                  key={item.name}
                  className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-base leading-6 hover:bg-gray-50 sm:flex-col sm:p-6"
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
                    <p className="mt-1 text-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-background">
              <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-foreground hover:bg-primary hover:text-foreground"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="size-5 flex-none text-foreground group-hover:text-foreground"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-background">
          {navLinks.map((item) => (
            <Link
              legacyBehavior
              passHref
              key={item.name}
              href={item.href}
              className=""
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-base">{item.name}</span>
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden lg:flex lg:flex-1 lg:justify-end text-background">
          <Link
            legacyBehavior
            passHref
            href="#"
            className="text-sm font-semibold leading-6 p-0.5 text-foreground hover:text-accent hover:underline hover:decoration-1 hover:decoration-double"
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="text-base">Client Portal</span>{" "}
              <span aria-hidden="true">&rarr;</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-background sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">The Joyful Mode</span>
                <div className="relative size-16 md:size-20">
                  <Image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    alt="the joyful mode logo"
                    src={logoDark}
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
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-base leading-6 hover:bg-gray-50 sm:flex-col sm:p-6"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-foreground"
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
                </div>
                <div className="space-y-2 py-6">
                  {navLinks.map((item) => (
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-gray-50"
                    >
                      {item.name}

                      <p className="mt-0.5 text-foreground text-base font-normal">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 flex items-center space-x-2 px-3 py-2.5 text-base font-semibold leading-7 text-foreground"
                  >
                    <CircleUser className="size-5 text-foreground mr-2" />
                    Client Portal <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ul className="sticky bottom-0 grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5 bg-foreground">
            {callsToActionMobile.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center justify-center gap-x-1 p-2.5 text-sm font-medium leading-6 text-background hover:bg-accent"
                >
                  <item.icon
                    aria-hidden="true"
                    className="size-4 flex-none text-background"
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </DialogPanel>
      </Dialog>
    </NavigationMenu>
  );
}
