import { DM_Mono, Manrope } from "next/font/google";

export const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });
export const dmmono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "500",
});
