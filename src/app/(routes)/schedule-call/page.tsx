import { ScheduleCallForm } from "./schedule-call-form";
import { schema } from "./schedule-call-schema";

//
export default function ScheduleCall() {
  const onFormAction = async (
    prevState: {
      message: string;
      issues?: string[];
    },
    formData: FormData
  ) => {
    "use server";

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
      return { message: "Form submitted successfully", issues: [] };
    } else {
      return {
        message: "Invalid data",
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }
  };

  return <ScheduleCallForm onFormAction={onFormAction} />;
}
