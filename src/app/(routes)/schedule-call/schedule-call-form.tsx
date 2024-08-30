"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoaderCircle, Origami } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { ControlledPhoneInput } from "./controlled-phone-input";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { PickServices } from "./pick-services";
import { SelectIndustry } from "./select-industry";
import { Textarea } from "@/components/ui/textarea";
import { saveLeadForm } from "./actions";
import { schema } from "./schedule-call-schema";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function ScheduleCallForm() {
  const { toast } = useToast();
  const [serverErrors, setServerErrors] = useState<{
    status: number;
    message: string;
    issues: { message: string; path: (string | number)[] }[];
  } | null>(null);

  const [state, formAction] = useActionState(saveLeadForm, null);
  const [isPending, startTransition] = useTransition();
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

  useEffect(() => {
    // I'm doing this to clear the server errors when the phone number is changed, because when the phone is validated server side and it's invalid, the server will return an error message. If the user then changes the phone number, the server error will persist in React state until the form is submitted again.
    const subscription = form.watch((value, { name }) => {
      if (name === "phone") {
        setServerErrors(null);
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  const formRef = useRef<HTMLFormElement>(null);
  const { errors } = form.formState;

  const onSubmit = () => {
    startTransition(async () => {
      const isFormSaved = await saveLeadForm(
        "",
        new FormData(formRef.current!)
      );

      if (isFormSaved.status !== 200) {
        setServerErrors(isFormSaved);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: isFormSaved.message,
          duration: 10000,
        });
      } else {
        setServerErrors(null);
        form.reset({
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
        });
        toast({
          title: "Form submitted successfully",
          description: "We'll be in touch soon!",
        });
      }
    });
  };

  return (
    <main className="relative overflow-hidden">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <div className="relative h-64 w-full sm:h-80 lg:absolute lg:h-full">
          <Image
            priority
            fill
            alt="The Joyful Mode work office picture."
            src="https://images.unsplash.com/photo-1552960394-c81add8de6b8?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="size-full object-cover bg-gray-50 object-top md:object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Let&rsquo;s Create Something Extraordinary Together.
            </h1>
            <p className="mt-2 text-lg leading-8 text-foreground">
              We work with law firms that are all-in on growth, transparency,
              and top-tier digital strategies
            </p>
            <div className="mt-16">
              <Form {...form}>
                <form
                  ref={formRef}
                  action={formAction}
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel
                            className={
                              state?.issues
                                .filter(
                                  (issue) => issue.path[0] === "firstName"
                                )
                                .map((issue) => issue.message)[0]
                                ? "text-red-500"
                                : ""
                            }
                          >
                            First Name{" "}
                            <span className="text-red-500 font-medium -mr-0.5 ml-1">
                              *
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className={
                                errors.firstName ||
                                state?.issues
                                  .filter(
                                    (issue) => issue.path[0] === "firstName"
                                  )
                                  .map((issue) => issue.message)[0]
                                  ? "text-base block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-2 ring-inset ring-red-500 sm:text-sm sm:leading-6 focus:bg-background"
                                  : "block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-foreground sm:text-sm sm:leading-6 text-base focus:bg-background"
                              }
                              autoComplete="given-name"
                              placeholder="John"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                          {state && (
                            <p className="mt-2 text-xs text-red-600">
                              {
                                state?.issues
                                  .filter(
                                    (issue) => issue.path[0] === "firstName"
                                  )
                                  .map((issue) => issue.message)[0]
                              }
                            </p>
                          )}
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel
                            className={
                              state?.issues
                                .filter((issue) => issue.path[0] === "lastName")
                                .map((issue) => issue.message)[0]
                                ? "text-red-500"
                                : ""
                            }
                          >
                            Last Name{" "}
                            <span className="text-red-500 font-medium -mr-0.5 ml-1">
                              *
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className={
                                errors.lastName ||
                                state?.issues
                                  .filter(
                                    (issue) => issue.path[0] === "lastName"
                                  )
                                  .map((issue) => issue.message)[0]
                                  ? "text-base block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-2 ring-inset ring-red-500 sm:text-sm sm:leading-6 focus:bg-background"
                                  : "block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-foreground sm:text-sm sm:leading-6 text-base focus:bg-background"
                              }
                              autoComplete="family-name"
                              placeholder="Doe"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                          {state && (
                            <p className="mt-2 text-xs text-red-600">
                              {
                                state?.issues
                                  .filter(
                                    (issue) => issue.path[0] === "lastName"
                                  )
                                  .map((issue) => issue.message)[0]
                              }
                            </p>
                          )}
                        </FormItem>
                      )}
                    />

                    <div className="sm:col-span-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel
                              className={
                                state?.issues
                                  .filter((issue) => issue.path[0] === "email")
                                  .map((issue) => issue.message)[0]
                                  ? "text-red-500"
                                  : ""
                              }
                            >
                              Work Email{" "}
                              <span className="text-red-500 font-medium -mr-0.5 ml-1">
                                *
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                className={
                                  errors.email ||
                                  state?.issues
                                    .filter(
                                      (issue) => issue.path[0] === "lastName"
                                    )
                                    .map((issue) => issue.message)[0]
                                    ? "text-base block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-2 ring-inset ring-red-500 sm:text-sm sm:leading-6 focus:bg-background"
                                    : "block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-foreground sm:text-sm sm:leading-6 text-base focus:bg-background"
                                }
                                autoComplete="email"
                                placeholder="your-work-email@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                            {state && (
                              <p className="mt-2 text-xs text-red-600">
                                {
                                  state?.issues
                                    .filter(
                                      (issue) => issue.path[0] === "email"
                                    )
                                    .map((issue) => issue.message)[0]
                                }
                              </p>
                            )}
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <ControlledPhoneInput
                        control={form.control}
                        name="phone"
                        serverErrors={serverErrors}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel
                              className={
                                state?.issues
                                  .filter(
                                    (issue) => issue.path[0] === "businessName"
                                  )
                                  .map((issue) => issue.message)[0]
                                  ? "text-red-500"
                                  : ""
                              }
                            >
                              Law Firm Name{" "}
                              <span className="text-xs">(or Company Name)</span>
                              <span className="text-red-500 font-medium -mr-0.5 ml-1">
                                *
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                className={
                                  errors.businessName ||
                                  state?.issues
                                    .filter(
                                      (issue) =>
                                        issue.path[0] === "businessName"
                                    )
                                    .map((issue) => issue.message)[0]
                                    ? "text-base block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-2 ring-inset ring-red-500 sm:text-sm sm:leading-6 focus:bg-background"
                                    : "block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-foreground sm:text-sm sm:leading-6 text-base focus:bg-background"
                                }
                                placeholder="The Best Law Firm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                            {state && (
                              <p className="mt-2 text-xs text-red-600">
                                {
                                  state?.issues
                                    .filter(
                                      (issue) =>
                                        issue.path[0] === "businessName"
                                    )
                                    .map((issue) => issue.message)[0]
                                }
                              </p>
                            )}
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* Area of Practice for Law Firms */}
                    <div className="sm:col-span-2">
                      <SelectIndustry
                        form={form}
                        errors={errors}
                        state={state}
                      />
                      <p
                        id="areaOfPractice"
                        className="mt-2 text-sm text-red-600"
                      >
                        {errors.areaOfPractice?.message ||
                          state?.issues
                            .filter((issue) => issue.path[0] === "businessName")
                            .map((issue) => issue.message)[0]}
                      </p>
                    </div>
                    {/* Services We Offer */}
                    <div className="sm:col-span-2">
                      <PickServices form={form} errors={errors} state={state} />
                    </div>
                    <div className="sm:col-span-2">
                      <FormField
                        control={form.control}
                        name="helpMessage"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel
                              className={
                                state?.issues
                                  .filter(
                                    (issue) => issue.path[0] === "helpMessage"
                                  )
                                  .map((issue) => issue.message)[0]
                                  ? "text-red-500"
                                  : ""
                              }
                            >
                              How can we help you?{" "}
                              <span className="text-red-500 font-medium -mr-0.5 ml-1">
                                *
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Tell us about your project..."
                                id="helpMessage"
                                name="helpMessage"
                                rows={4}
                                aria-describedby="helpMessage-description"
                                className={
                                  errors.helpMessage ||
                                  state?.issues
                                    .filter(
                                      (issue) => issue.path[0] === "helpMessage"
                                    )
                                    .map((issue) => issue.message)[0]
                                    ? "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 focus:bg-background"
                                    : "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-foreground placeholder:text-secondary focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:bg-background"
                                }
                              />
                            </FormControl>
                            <FormMessage />
                            {state && (
                              <p className="mt-2 text-xs text-red-600">
                                {
                                  state?.issues
                                    .filter(
                                      (issue) => issue.path[0] === "helpMessage"
                                    )
                                    .map((issue) => issue.message)[0]
                                }
                              </p>
                            )}
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                    <Button
                      disabled={isPending}
                      className={
                        isPending
                          ? "opacity-50 inline-flex items-center gap-x-2 rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                          : "bg-background inline-flex items-center gap-x-2 rounded-md px-3.5 py-2.5 text-sm font-semibold text-foreground shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:text-white"
                      }
                      type="submit"
                    >
                      {isPending ? "Processing..." : "Send message"}
                      {isPending ? (
                        <LoaderCircle className="-mr-0.5 size-5 animate-spin" />
                      ) : (
                        <Origami className="-mr-0.5 size-5" />
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
              <p className="mt-6 text-foreground text-xs">
                By sharing your number and clicking &lsquo;Submit,&rsquo;
                you&rsquo;re agreeing to let us text you—responsibly, of course.
                Standard &lsquo;you may incur charges&rsquo; rates apply. And if
                you ever decide you&rsquo;ve had enough, just text STOP, and
                we&rsquo;ll gracefully exit stage left.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
