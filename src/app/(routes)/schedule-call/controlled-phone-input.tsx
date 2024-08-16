import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseControllerProps, useController } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { normalizePhonerNumberInput } from "@/app/utils/phone-input-formatter";
import { schema } from "./schedule-call-schema";
import { useState } from "react";
import { z } from "zod";

type ServerErrorType = {
  status: number;
  message: string;
  issues: { message: string; path: (string | number)[] }[];
} | null;

interface ControlledPhoneInputProps
  extends UseControllerProps<z.infer<typeof schema>> {
  serverErrors?: ServerErrorType;
}

export const ControlledPhoneInput = (props: ControlledPhoneInputProps) => {
  const { field } = useController(props);
  const [phone, setPhone] = useState("");

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className={props.serverErrors ? "text-red-500" : ""}>
            Phone Number{` `}
            <span className="text-xs">(Optional)</span>
          </FormLabel>
          <FormControl>
            <Input
              name={field.name}
              value={phone}
              inputMode="numeric"
              onChange={(event) => {
                field.onChange(event.target.value);
                setPhone((prevState) =>
                  normalizePhonerNumberInput(event.target.value, prevState)
                );
              }}
              type="text"
              className={
                props.serverErrors
                  ? "text-base block w-full rounded-md border-0 px-3.5 py-2 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  : "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 text-base"
              }
              autoComplete="tel"
              placeholder="(555) 555-5555"
            />
          </FormControl>
          <FormMessage />
          {props.serverErrors && (
            <p className="mt-2 text-sm text-red-600">
              {props.serverErrors.message}
            </p>
          )}
        </FormItem>
      )}
    />
  );
};
