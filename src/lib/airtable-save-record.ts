import "server-only";

import Airtable from "airtable";
import { SafeParseSuccess } from "zod";
import { schema } from "@/app/(routes)/schedule-call/schedule-call-schema";
import z from "zod";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID!
);

export async function saveScheduleCallRecord(
  parsed: SafeParseSuccess<z.infer<typeof schema>>
) {
  const selectedServices = () => {
    const services = [];
    if (parsed.data.webDesignAndDevelopment) {
      services.push("Web Design & Development");
    }
    if (parsed.data.seo) {
      services.push("SEO");
    }
    if (parsed.data.ppc) {
      services.push("Pay-Per-Click (PPC)");
    }
    if (parsed.data.marketing) {
      services.push("Marketing Strategies");
    }
    if (parsed.data.service_not_listed) {
      services.push("Other");
    }
    return services;
  };

  try {
    await new Promise((resolve, reject) => {
      base("Table 1").create(
        [
          {
            fields: {
              "First Name": parsed.data.firstName,
              "Last Name": parsed.data.lastName,
              "Work Email": parsed.data.email,
              "Law Firm Name": parsed.data.businessName,
              "Phone Number": parsed.data.phone,
              "Practice Area": parsed.data.areaOfPractice,
              "How can we help you": parsed.data.helpMessage,
              Services: selectedServices(),
            },
          },
        ],
        (err, records) => {
          if (err) {
            reject(err);
          } else {
            resolve(records);
          }
        }
      );
    });
    return { status: 200, message: "Record saved successfully" };
  } catch (error) {
    return { status: 500, message: `Failed to save record ${error}` };
  }
}
