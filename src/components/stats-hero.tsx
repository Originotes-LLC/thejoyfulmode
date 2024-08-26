import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { ChartNoAxesCombined, Globe, UsersRound } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Client Conversions",
    stat: "98%",
    icon: Globe,
    change: "111",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Bounce Rate",
    stat: "25%",
    icon: UsersRound,
    change: "5",
    changeType: "decrease",
  },
  {
    id: 3,
    name: "Marketing Campaign Reach",
    stat: "2,560",
    icon: ChartNoAxesCombined,
    change: "15",
    changeType: "increase",
  },
];

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function StatsHero() {
  return (
    <div>
      <dl className="grid grid-cols-1">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden px-4 pt-5 sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-background/80 p-2">
                <item.icon
                  aria-hidden="true"
                  className="size-5 md:size-6 text-foreground"
                />
              </div>
              <p className="ml-14 truncate text-sm font-medium text-foreground/80">
                {item.name}
              </p>
            </dt>
            <dd className="ml-14 flex items-baseline">
              <p className="font-medium text-foreground text-sm">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === "increase"
                    ? "text-green-700"
                    : "text-red-600",
                  "ml-2 flex items-baseline text-xs font-semibold"
                )}
              >
                {item.changeType === "increase" ? (
                  <ArrowUpIcon
                    aria-hidden="true"
                    className="size-4 flex-shrink-0 self-center text-green-700"
                  />
                ) : (
                  <ArrowDownIcon
                    aria-hidden="true"
                    className="size-4 flex-shrink-0 self-center text-red-500"
                  />
                )}

                <span className="sr-only">
                  {" "}
                  {item.changeType === "increase"
                    ? "Increased"
                    : "Decreased"}{" "}
                  by{" "}
                </span>
                {item.change}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
