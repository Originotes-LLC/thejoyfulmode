import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function HeroTestimonial() {
  return (
    <Card className="w-[230px] lg:w-[250px] transform lg:translate-x-1/2 bg-background/50 shadow-sm">
      <CardHeader>
        <CardDescription>
          <q>They made my legal issue stress-free.</q>
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-6 flex items-center gap-x-4">
        <Image
          width={40}
          height={40}
          alt=""
          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-10 object-cover rounded-full"
        />
        <div>
          <div className="text-sm">Anna Doe</div>

          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                aria-hidden="true"
                className={classNames(
                  4.5 > 0 ? "text-accent" : "text-secondary",
                  "size-5 flex-shrink-0"
                )}
              />
            ))}
            <p className="sr-only">4.9 out of 5 stars</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
