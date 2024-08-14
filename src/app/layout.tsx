import "./globals.css";

import { CSPostHogProvider } from "./providers";
import { HeaderNav } from "@/components/header-nav";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const sora = Sora({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "The Joyful Mode",
  description:
    "A creative agency that specializes in branding, web design & development, and digital marketing",
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
            "min-h-screen bg-background font-sans antialiased",
            sora.variable
          )}
        >
          <PostHogPageView />
          <HeaderNav />
          {children}
          <Toaster />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
