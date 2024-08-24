import type { Metadata } from "next";
import { ScheduleCallForm } from "./schedule-call-form";

export const metadata: Metadata = {
  title: "Contact Us for Web Design, SEO & Marketing for Law Firms ",
  description:
    "Get in touch with The Joyful Mode for expert web design, SEO, and marketing tailored for law firms. Fill out our contact form to start attracting more clients today.",
};

export default function ScheduleCall() {
  return <ScheduleCallForm />;
}
