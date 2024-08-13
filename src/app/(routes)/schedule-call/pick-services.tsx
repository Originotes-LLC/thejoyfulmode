import { FieldErrors, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { schema } from "./schedule-call-schema";
import { useEffect } from "react";
import { z } from "zod";

//
export function PickServices({
  form,
  errors,
}: {
  form: UseFormReturn<z.infer<typeof schema>>;
  errors: FieldErrors<z.infer<typeof schema>>;
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
        form.trigger();
      }
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch]);

  return (
    <div className="w-full" id="services">
      <h2
        className={
          errors?.seo
            ? "text-base font-semibold leading-7 text-red-500"
            : "text-base font-semibold leading-7 text-gray-900"
        }
      >
        Services
        <span className="text-red-500 font-medium -mr-0.5 ml-1">*</span>
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Select all that tickle your fancy—let&apos;s make your competitors
        sweat.
      </p>

      <div className="mt-10 space-y-10">
        <fieldset>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="webDesignAndDevelopment"
              render={({ field }) => (
                <FormItem>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <FormControl>
                        <Checkbox
                          name="webDesignAndDevelopment"
                          className={
                            errors?.seo
                              ? "size-4 rounded border-red-400 text-red-500"
                              : "size-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                          }
                          checked={field.value}
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
                        Web Design & Development
                      </FormLabel>
                      <FormDescription
                        className={
                          errors?.seo ? "text-red-500" : "text-gray-500"
                        }
                      >
                        Your website is your digital storefront. Let&apos;s make
                        it shine.
                      </FormDescription>
                    </div>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="seo"
              render={({ field }) => (
                <FormItem>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <FormControl>
                        <Checkbox
                          name="seo"
                          className={
                            errors?.seo
                              ? "size-4 rounded border-red-400 text-red-500"
                              : "size-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                          }
                          checked={field.value}
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
                        SEO
                      </FormLabel>
                      <FormDescription
                        className={
                          errors?.seo ? "text-red-500" : "text-gray-500"
                        }
                      >
                        Get found online. We&apos;ll help you climb the ranks.
                      </FormDescription>
                    </div>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ppc"
              render={({ field }) => (
                <FormItem>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <FormControl>
                        <Checkbox
                          name="ppc"
                          className={
                            errors?.seo
                              ? "size-4 rounded border-red-400 text-red-500"
                              : "size-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                          }
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </div>
                    <div className="text-sm leading-6">
                      <FormLabel
                        htmlFor="candidates"
                        className={
                          errors?.seo
                            ? "font-medium text-red-500"
                            : "font-medium text-gray-900"
                        }
                      >
                        Pay-Per-Click (PPC)
                      </FormLabel>
                      <FormDescription
                        className={
                          errors?.seo ? "text-red-500" : "text-gray-500"
                        }
                      >
                        Get in front of your audience with targeted ads.
                      </FormDescription>
                    </div>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="marketing"
              render={({ field }) => (
                <FormItem>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <FormControl>
                        <Checkbox
                          name="marketing"
                          className={
                            errors?.seo
                              ? "size-4 rounded border-red-400 text-red-500"
                              : "size-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                          }
                          checked={field.value}
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
                        Marketing Strategies
                      </FormLabel>
                      <FormDescription
                        className={
                          errors?.seo ? "text-red-500" : "text-gray-500"
                        }
                      >
                        Let&apos;s build a plan that works for you.
                      </FormDescription>
                    </div>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="service_not_listed"
              render={({ field }) => (
                <FormItem>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <FormControl>
                        <Checkbox
                          name="service_not_listed"
                          className={
                            errors?.seo
                              ? "size-4 rounded border-red-400 text-red-500"
                              : "size-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                          }
                          checked={field.value}
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
                        Other
                      </FormLabel>
                      <FormDescription
                        className={
                          errors?.seo ? "text-red-500" : "text-gray-500"
                        }
                      >
                        Write a short description in the message box below.
                      </FormDescription>
                    </div>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </fieldset>
        <p className="text-[0.8rem] font-medium text-destructive">
          {errors?.seo?.message}
        </p>
      </div>
    </div>
  );
}
