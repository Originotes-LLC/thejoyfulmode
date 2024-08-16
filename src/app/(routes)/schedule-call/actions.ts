"use server";

import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";
import { saveScheduleCallRecord } from "@/lib/airtable-save-record";
import { schema } from "@/app/(routes)/schedule-call/schedule-call-schema";
import { verifyPhoneNumber } from "@/lib/twilio-verify-phone";

export async function saveLeadForm(prevState: any, formData: FormData) {
  const parsed = await schema.safeParseAsync({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    businessName: formData.get("businessName"),
    phone: formData.get("phone"),
    helpMessage: formData.get("helpMessage"),
    areaOfPractice: formData.get("areaOfPractice"),
    webDesignAndDevelopment: formData.get("webDesignAndDevelopment") === "on",
    seo: formData.get("seo") === "on",
    ppc: formData.get("ppc") === "on",
    marketing: formData.get("marketing") === "on",
    service_not_listed: formData.get("service_not_listed") === "on",
  });

  if (parsed.success) {
    // verify phone number with Twilio first
    const phone = parsed.data.phone;

    if (phone) {
      const res = await verifyPhoneNumber(phone);

      if (res instanceof Error) {
        return {
          status: 400,
          message: "We could not verify your phone number",
          issues: [{ message: "Invalid phone number", path: ["phone"] }],
        };
      }
      if (res.valid) {
        const result = await saveScheduleCallRecord(parsed);

        if (result.status !== 200) {
          // if there was an error saving the record, return the error message
          return {
            status: result.status,
            message: `${result.message}`,
            issues: [],
          };
        }
        redirect("/thank-you-for-contacting-us");
      }
      return {
        status: 400,
        message:
          "We could not verify your phone number. Please provide a valid phone number",
        issues: [{ message: "Invalid phone number", path: ["phone"] }],
      };
    }
    // since phone number is not required, we can save the record without verifying it
    const result = await saveScheduleCallRecord(parsed);

    if (result.status !== 200) {
      return {
        status: result.status,
        message: `${result.message}`,
        issues: [],
      };
    }
    redirect("/thank-you-for-contacting-us");
  } else {
    return {
      status: 400,
      message: "Invalid data. Please correct the errors and try again.",
      issues: parsed.error.issues.map((issue) => {
        return {
          message: issue.message,
          path: issue.path,
        };
      }),
    };
  }
}
