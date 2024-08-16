import "server-only";

import { PhoneNumberInstance } from "twilio/lib/rest/lookups/v2/phoneNumber";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function verifyPhoneNumber(
  phone: string
): Promise<PhoneNumberInstance | Error> {
  try {
    const phoneNumber = await client.lookups.v2.phoneNumbers(phone).fetch();
    return phoneNumber;
  } catch (error) {
    if (error instanceof Error) {
      return error;
    } else {
      return new Error("An unknown error occurred");
    }
  }
}
