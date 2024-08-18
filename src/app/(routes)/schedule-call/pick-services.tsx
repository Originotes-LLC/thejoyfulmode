import { FieldErrors, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { schema } from "./schedule-call-schema";
import { useEffect } from "react";
import { z } from "zod";

type FieldName =
  | "webDesignAndDevelopment"
  | "seo"
  | "ppc"
  | "marketing"
  | "service_not_listed"
  | "firstName"
  | "lastName"
  | "email"
  | "businessName"
  | "phone"
  | "helpMessage"
  | "areaOfPractice";

type Service = {
  id: number;
  name: string;
  fieldName: FieldName;
  description: string;
};

const services: Service[] = [
  {
    id: 1,
    name: "Web Design & Development",
    fieldName: "webDesignAndDevelopment",
    description:
      "Your website is your digital storefront. Let&rsquo;s make it shine.",
  },
  {
    id: 2,
    name: "SEO",
    fieldName: "seo",
    description: "Get found online. We&rsquo;ll help you climb the ranks.",
  },
  {
    id: 3,
    name: "Pay-Per-Click (PPC)",
    fieldName: "ppc",
    description: "Get in front of your audience with targeted ads.",
  },
  {
    id: 4,
    name: "Marketing Strategies",
    fieldName: "marketing",
    description: "Let&rsquo;s build a plan that works for you.",
  },
  {
    id: 5,
    name: "Other",
    fieldName: "service_not_listed",
    description: "Write a short description in the message box below.",
  },
];

//
export function PickServices({
  form,
  errors,
  state,
}: {
  form: UseFormReturn<z.infer<typeof schema>>;
  errors: FieldErrors<z.infer<typeof schema>>;
  state: {
    status: number;
    message: string;
    issues: {
      message: string;
      path: (string | number)[];
    }[];
  } | null;
}) {
  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  useEffect(() => {
    const subscription = form.watch((data) => {
      const {
        seo,
        service_not_listed,
        ppc,
        webDesignAndDevelopment,
        marketing,
      } = data;

      if (
        seo ||
        service_not_listed ||
        ppc ||
        webDesignAndDevelopment ||
        marketing
      ) {
        if (state?.message !== "not submitted yet") {
          form.trigger();
        }
      }
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch, state?.message]);

  return (
    <div className="w-full" id="services">
      <h2
        className={
          errors?.seo ||
          state?.issues
            .filter((issue) => issue.path[0] === "seo")
            .map((issue) => issue.message)[0]
            ? "text-base font-semibold leading-7 text-red-500"
            : "text-base font-semibold leading-7 text-gray-900"
        }
      >
        Services
        <span className="text-red-500 font-medium -mr-0.5 ml-1">*</span>
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Choose what you need. Let&rsquo;s make your competitors sweat.
      </p>
      {state && (
        <p className="mt-2 text-xs text-red-600">
          {
            state.issues
              .filter((issue) => issue.path[0] === "seo")
              .map((issue) => issue.message)[0]
          }
        </p>
      )}

      <div className="mt-10 space-y-10">
        <fieldset>
          <div className="space-y-6">
            {services.map((service) => (
              <FormField
                key={service.id}
                control={form.control}
                name={service.fieldName}
                render={({ field }) => (
                  <FormItem>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <FormControl>
                          <Checkbox
                            name={service.fieldName}
                            className={
                              errors?.seo
                                ? "size-4 rounded border-red-400 text-red-500"
                                : "size-4 rounded border-foreground text-accent focus:ring-accent"
                            }
                            checked={field.value as CheckedState}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </div>
                      <div className="text-sm leading-6">
                        <FormLabel
                          className={
                            errors?.seo
                              ? "font-medium text-red-500"
                              : "font-medium text-gray-900"
                          }
                        >
                          {service.name}
                        </FormLabel>
                        <FormDescription
                          className={
                            errors?.seo ? "text-red-500" : "text-gray-500"
                          }
                        >
                          {service.description}
                        </FormDescription>
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </fieldset>
        <p className="text-[0.8rem] font-medium text-destructive">
          {errors?.seo?.message}
        </p>
      </div>
    </div>
  );
}
// <FormField
//   control={form.control}
//   name="webDesignAndDevelopment"
//   render={({ field }) => (
//     <FormItem>
//       <div className="relative flex gap-x-3">
//         <div className="flex h-6 items-center">
//           <FormControl>
//             <Checkbox
//               name="webDesignAndDevelopment"
//               className={
//                 errors?.seo
//                   ? "size-4 rounded border-red-400 text-red-500"
//                   : "size-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
//               }
//               checked={field.value}
//               onCheckedChange={field.onChange}
//             />
//           </FormControl>
//         </div>
//         <div className="text-sm leading-6">
//           <FormLabel
//             className={
//               errors?.seo
//                 ? "font-medium text-red-500"
//                 : "font-medium text-gray-900"
//             }
//           >
//             Web Design & Development
//           </FormLabel>
//           <FormDescription
//             className={
//               errors?.seo ? "text-red-500" : "text-gray-500"
//             }
//           >
//             Your website is your digital storefront. Let&rsquo;s
//             make it shine.
//           </FormDescription>
//         </div>
//       </div>
//     </FormItem>
//   )}
// />

// <FormField
//   control={form.control}
//   name="seo"
//   render={({ field }) => (
//     <FormItem>
//       <div className="relative flex gap-x-3">
//         <div className="flex h-6 items-center">
//           <FormControl>
//             <Checkbox
//               name="seo"
//               className={
//                 errors?.seo
//                   ? "size-4 rounded border-red-400 text-red-500"
//                   : "size-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
//               }
//               checked={field.value}
//               onCheckedChange={field.onChange}
//             />
//           </FormControl>
//         </div>
//         <div className="text-sm leading-6">
//           <FormLabel
//             className={
//               errors?.seo
//                 ? "font-medium text-red-500"
//                 : "font-medium text-gray-900"
//             }
//           >
//             SEO
//           </FormLabel>
//           <FormDescription
//             className={
//               errors?.seo ? "text-red-500" : "text-gray-500"
//             }
//           >
//             Get found online. We&rsquo;ll help you climb the ranks.
//           </FormDescription>
//         </div>
//       </div>
//     </FormItem>
//   )}
// />
// <FormField
//   control={form.control}
//   name="ppc"
//   render={({ field }) => (
//     <FormItem>
//       <div className="relative flex gap-x-3">
//         <div className="flex h-6 items-center">
//           <FormControl>
//             <Checkbox
//               name="ppc"
//               className={
//                 errors?.seo
//                   ? "size-4 rounded border-red-400 text-red-500"
//                   : "size-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
//               }
//               checked={field.value}
//               onCheckedChange={field.onChange}
//             />
//           </FormControl>
//         </div>
//         <div className="text-sm leading-6">
//           <FormLabel
//             htmlFor="candidates"
//             className={
//               errors?.seo
//                 ? "font-medium text-red-500"
//                 : "font-medium text-gray-900"
//             }
//           >
//             Pay-Per-Click (PPC)
//           </FormLabel>
//           <FormDescription
//             className={
//               errors?.seo ? "text-red-500" : "text-gray-500"
//             }
//           >
//             Get in front of your audience with targeted ads.
//           </FormDescription>
//         </div>
//       </div>
//     </FormItem>
//   )}
// />
// <FormField
//   control={form.control}
//   name="marketing"
//   render={({ field }) => (
//     <FormItem>
//       <div className="relative flex gap-x-3">
//         <div className="flex h-6 items-center">
//           <FormControl>
//             <Checkbox
//               name="marketing"
//               className={
//                 errors?.seo
//                   ? "size-4 rounded border-red-400 text-red-500"
//                   : "size-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
//               }
//               checked={field.value}
//               onCheckedChange={field.onChange}
//             />
//           </FormControl>
//         </div>
//         <div className="text-sm leading-6">
//           <FormLabel
//             className={
//               errors?.seo
//                 ? "font-medium text-red-500"
//                 : "font-medium text-gray-900"
//             }
//           >
//             Marketing Strategies
//           </FormLabel>
//           <FormDescription
//             className={
//               errors?.seo ? "text-red-500" : "text-gray-500"
//             }
//           >
//             Let&rsquo;s build a plan that works for you.
//           </FormDescription>
//         </div>
//       </div>
//     </FormItem>
//   )}
// />
// <FormField
//   control={form.control}
//   name="service_not_listed"
//   render={({ field }) => (
//     <FormItem>
//       <div className="relative flex gap-x-3">
//         <div className="flex h-6 items-center">
//           <FormControl>
//             <Checkbox
//               name="service_not_listed"
//               className={
//                 errors?.seo
//                   ? "size-4 rounded border-red-400 text-red-500"
//                   : "size-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
//               }
//               checked={field.value}
//               onCheckedChange={field.onChange}
//             />
//           </FormControl>
//         </div>
//         <div className="text-sm leading-6">
//           <FormLabel
//             className={
//               errors?.seo
//                 ? "font-medium text-red-500"
//                 : "font-medium text-gray-900"
//             }
//           >
//             Other
//           </FormLabel>
//           <FormDescription
//             className={
//               errors?.seo ? "text-red-500" : "text-gray-500"
//             }
//           >
//             Write a short description in the message box below.
//           </FormDescription>
//         </div>
//       </div>
//     </FormItem>
//   )}
// />
