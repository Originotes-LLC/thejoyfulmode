import "./globals.css";

import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { cn } from "@/lib/utils";

const sora = Sora({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "The Joyful Mode",
  description:
    "A creative agency that specializes in branding, web design & development, and digital marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          sora.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
