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

export const metadata: Metadata = {
  title: "The Joyful Mode - Expert Web Design, SEO & Marketing for Law Firms",
  description:
    "Transform your Law Firm's online presence with The Joyful Mode. Specializing in Web Design, SEO, and Marketing, we help lawyers attract more clients and stand out in the crowd—because you want to be noticed, not ignored.",
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
