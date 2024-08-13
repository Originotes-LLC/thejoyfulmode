"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { PickServices } from "./pick-services";
import { SelectIndustry } from "./select-industry";
import { Textarea } from "@/components/ui/textarea";
import { schema } from "./schedule-call-schema";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { useRef } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//
export function ScheduleCallForm({
  onFormAction,
}: {
  onFormAction: (
    prevState: {
      message: string;
      issues?: string[];
    },
    data: FormData
  ) => Promise<{
    message: string;
    issues?: string[];
  }>;
}) {
  const [state, formAction] = useFormState(onFormAction, {
    message: "",
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      businessName: "",
      helpMessage: "",
      webDesignAndDevelopment: false,
      seo: false,
      ppc: false,
      marketing: false,
      service_not_listed: false,
    },
  });

  const formRef = useRef<HTMLFormElement>(null);
  const { errors } = form.formState;

  return (
    <div className="relative overflow-hidden">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <div className="relative h-64 w-full sm:h-80 lg:absolute lg:h-full">
          <Image
            fill
            alt="The Joyful Mode work office picture."
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
            className="size-full object-cover bg-gray-50"
          />
        </div>
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Let&rsquo;s work together
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Give us your details, and we&apos;ll give you the website your
              competitors will hate you for.
            </p>
            <div className="mt-16">
              <Form {...form}>
                <form
                  ref={formRef}
                  action={formAction}
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    form.handleSubmit(() => {
                      const formDataForAction = new FormData(formRef.current!);
                      return formAction(formDataForAction);
                    })(evt);
                  }}
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>
                            First Name{" "}
                            <span className="text-red-500 font-medium -mr-0.5 ml-1">
                              *
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                              autoComplete="given-name"
                              placeholder=""
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>
                            Last Name{" "}
                            <span className="text-red-500 font-medium -mr-0.5 ml-1">
                              *
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                              autoComplete="family-name"
                              placeholder=""
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="sm:col-span-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>
                              Work Email{" "}
                              <span className="text-red-500 font-medium -mr-0.5 ml-1">
                                *
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                autoComplete="email"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>
                              Phone Number{` `}
                              <span
                                id="phone-description"
                                className="text-gray-400 text-xs"
                              >
                                (Optional)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                pattern="^(\+)?[0-9\s]*$"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                autoComplete="tel"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>
                              Law Firm Name{" "}
                              <span className="text-xs">(or Company Name)</span>
                              <span className="text-red-500 font-medium -mr-0.5 ml-1">
                                *
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                placeholder=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* Area of Practice for Law Firms */}
                    <div className="sm:col-span-2">
                      <SelectIndustry form={form} errors={errors} />
                      <p
                        id="areaOfPractice"
                        className="mt-2 text-sm text-red-600"
                      >
                        {errors.areaOfPractice?.message}
                      </p>
                    </div>
                    {/* Services We Offer */}
                    <div className="sm:col-span-2">
                      <PickServices form={form} errors={errors} />
                    </div>
                    <div className="sm:col-span-2">
                      <FormField
                        control={form.control}
                        name="helpMessage"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>
                              How can we help you?{" "}
                              <span className="text-red-500 font-medium -mr-0.5 ml-1">
                                *
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                id="helpMessage"
                                name="helpMessage"
                                rows={4}
                                aria-describedby="helpMessage-description"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                    <Button
                      className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
              <p className="mt-6 text-gray-400 text-xs">
                By sharing your number and clicking &apos;Submit,&apos;
                you&apos;re agreeing to let us text you—responsibly, of course.
                Standard &apos;you may incur charges&apos; rates apply. And if
                you ever decide you&apos;ve had enough, just text STOP, and
                we’ll gracefully exit stage left.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
