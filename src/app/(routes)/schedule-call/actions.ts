"use server";

import { revalidatePath } from "next/cache";
import { saveScheduleCallRecord } from "@/lib/airtable-save-record";
import { schema } from "@/app/(routes)/schedule-call/schedule-call-schema";

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
    const result = await saveScheduleCallRecord(parsed);
    if (result.status !== 200) {
      return {
        status: 500,
        message: `${result.message}`,
      };
    }

    revalidatePath("/schedule-call");
    return { status: 200, message: "Form submitted successfully", issues: [] };
  } else {
    return {
      status: 400,
      message: "Invalid data. Please correct the following issues:",
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }
}
