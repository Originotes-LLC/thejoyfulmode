import Link from "next/link";
const features = [
  {
    name: "Poor Search Engine Visibility (SEO)",
    description: "Your expertise is buried in search results.",
    link: "#",
  },
  {
    name: "Ineffective Digital Marketing Strategies",
    description:
      "You're wasting time on tactics that don't work for legal services.",
    link: "#",
  },
  {
    name: "Wasted Advertising Budget",
    description: "Your PPC campaigns aren't targeting the right legal clients.",
    link: "#",
  },
  {
    name: "Outdated Website Design",
    description:
      "Your online presence doesn't reflect your professional standards.",
    link: "#",
  },
  {
    name: "Lack of Quality Leads",
    description:
      "You're not attracting the high-value clients your firm deserves.",
    link: "#",
  },
];

export function LawFirmChallenges() {
  return (
    <div className="bg-foreground py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            Overcome Digital Marketing Challenges for Lawyers
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Is your law firm struggling to stand out in the digital landscape?
            <br />
            You're not alone. <br />
            Many talented attorneys face these common obstacles:
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-background">{feature.name}</dt>
              <dd className="mt-1 text-muted-foreground">
                {feature.description}
              </dd>
              <Link
                className="mt-4 font-medium hover:underline hover:text-primary text-muted-foreground text-xs"
                href={feature.link}
              >
                Find out why <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
