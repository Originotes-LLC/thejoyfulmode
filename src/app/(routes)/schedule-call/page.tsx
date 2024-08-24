import type { Metadata } from "next";
import { ScheduleCallForm } from "./schedule-call-form";

export const metadata = {
  generator: "Next.js",
  applicationName: "The Joyful Mode",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Schedule a Call",
    "Contact The Joyful Mode",
    "Web Design Consultation",
    "SEO Consultation",
    "Marketing Consultation",
    "Law Firm Marketing",
    "The Joyful Mode",
  ],
  authors: [
    { name: "Waldo Lavaut" },
    { name: "The Joyful Mode Team", url: "https://www.thejoyfulmode.com" },
  ],
  creator: "Waldo Lavaut",
  publisher: "The Joyful Mode",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  title:
    "Schedule a Call with The Joyful Mode | Web Design & SEO for Law Firms",
  description:
    "Get in touch with The Joyful Mode for expert web design, SEO, and marketing services tailored for law firms. Schedule a consultation today.",
  openGraph: {
    title:
      "Schedule a Call with The Joyful Mode | Web Design & SEO for Law Firms",
    description:
      "Connect with The Joyful Mode to discuss your law firm's web design, SEO, and marketing needs. Schedule a call and start transforming your online presence.",
    url: "https://www.thejoyfulmode.com/schedule-call",
    siteName: "The Joyful Mode",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Schedule a Call with The Joyful Mode | Web Design & SEO for Law Firms",
    description:
      "Contact The Joyful Mode for a consultation on web design, SEO, and marketing strategies designed for law firms. Schedule your call today.",
    creator: "@TheJoyfulMode",
  },
  canonical: "https://www.thejoyfulmode.com/schedule-call",
};

export default function ScheduleCall() {
  return <ScheduleCallForm />;
}
