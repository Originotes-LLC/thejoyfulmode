import "./globals.css";

import { CSPostHogProvider } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { HeaderNav } from "@/components/header-nav";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const sora = Sora({ subsets: ["latin"], variable: "--font-sans" });

//
export const metadata: Metadata = {
  metadataBase: new URL("https://www.thejoyfulmode.com"),
  description:
    "Specializing in Web Design, SEO, and Marketing Strategies for Law Firms that want to be noticed, not ignored.",
  title: {
    template: "%s | The Joyful Mode",
    default:
      "Expert Web Design, SEO & Marketing for Law Firms | The Joyful Mode",
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
          <GoogleAnalytics
            gaId={process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID!}
          />
          <PostHogPageView />
          <HeaderNav />
          {children}
          <Toaster />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
