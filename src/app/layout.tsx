import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { CSPostHogProvider } from "./providers";
import { Footer } from "@/components/footer";
import { HeaderNav } from "@/components/header-nav";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const sora = Sora({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thejoyfulmode.com"),
  generator: "Next.js",
  applicationName: "The Joyful Mode",
  referrer: "origin-when-cross-origin",
  description:
    "Partner with The Joyful Mode for expert web design, SEO, and marketing tailored to law firms. Elevate your online presence and grow your practice.",
  keywords: [
    "Web Design",
    "SEO",
    "Marketing",
    "Law Firm Marketing",
    "Creative Agency",
    "The Joyful Mode",
  ],
  authors: [
    { name: "Waldo Lavaut" },
    { name: "The Joyful Mode Team", url: "https://www.thejoyfulmode.com" },
  ],
  creator: "Waldo Lavaut",
  publisher: "The Joyful Mode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: {
    template: "%s | The Joyful Mode",
    default:
      "Expert Web Design, SEO & Marketing for Law Firms | The Joyful Mode",
  },
  openGraph: {
    title:
      "Creative Web Design, SEO & Marketing for Law Firms | The Joyful Mode",
    description:
      "Partner with The Joyful Mode for expert web design, SEO, and marketing tailored to law firms. Elevate your online presence and grow your practice.",
    url: "https://www.thejoyfulmode.com",
    siteName: "The Joyful Mode",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Creative Web Design, SEO & Marketing for Law Firms | The Joyful Mode",
    description:
      "Enhance your law firm's online presence with professional web design, SEO, and marketing services from The Joyful Mode. Get noticed and attract more clients.",
    creator: "@TheJoyfulMode",
  },
};

const PostHogPageView = dynamic(() => import("./postHogPageView"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body
          className={cn(
            "min-h-screen bg-primary font-sans antialiased",
            sora.variable
          )}
        >
          <HeaderNav />
          <PostHogPageView />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
          <Toaster />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
