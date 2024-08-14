import { z } from "zod";
const validPracticeAreas = [
  "Personal Injury",
  "Criminal Defense",
  "Family Law",
  "Bankruptcy Law",
  "Employment Law",
  "Estate & Probate",
  "Immigration",
  "Intellectual Property",
  "Full Service",
  "Other",
  "Not a Law Firm",
];

export const schema = z
  .object({
    firstName: z.string().trim().min(1, {
      message: "We're on a first-name basis, right? Don't leave us hanging.",
    }),
    lastName: z.string().trim().min(1, {
      message:
        "We need your last name—unless you're like Prince, then carry on.",
    }),
    email: z.string().email({
      message: "We promise not to spam, but we still need your email.",
    }),
    businessName: z.string().trim().min(1, {
      message: "Your firm's name? It's kind of a big deal. Don't skip this.",
    }),
    phone: z
      .string()
      .min(10, {
        message: "Invalid phone number",
      })
      .optional()
      .or(z.literal("")),
    helpMessage: z.string().trim().min(1, {
      message: "Give us a clue so we can work our magic. We are all ears!",
    }),
  })
  .and(
    z
      .object({
        webDesignAndDevelopment: z.boolean().default(false),
        seo: z.boolean().default(false),
        ppc: z.boolean().default(false),
        marketing: z.boolean().default(false),
        service_not_listed: z.boolean().default(false),
      })
      .partial()
      .transform((data, ctx) => {
        const {
          service_not_listed,
          seo,
          ppc,
          marketing,
          webDesignAndDevelopment,
        } = data;

        if (
          !Boolean(service_not_listed) &&
          !Boolean(seo) &&
          !Boolean(ppc) &&
          !Boolean(marketing) &&
          !Boolean(webDesignAndDevelopment)
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message:
              "Please select at least one of the services you might be interested in or select 'Other'.",
            path: ["seo"],
          });

          return z.NEVER;
        }
        return data;
      })
  )
  .and(
    z.object({
      areaOfPractice: z.string().min(1, {
        message: "Please select an area of practice.",
      }),
    })
  )
  .transform((data, ctx) => {
    const { areaOfPractice } = data;
    if (
      !areaOfPractice ||
      (typeof areaOfPractice === "string" &&
        !validPracticeAreas.includes(areaOfPractice))
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select an area of practice.",
        path: ["areaOfPractice"],
      });
      return z.NEVER;
    }

    return data;
  });
