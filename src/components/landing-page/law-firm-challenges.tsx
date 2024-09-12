import { DigitalChallengeCards } from "./digital-challenge-cards";

export function LawFirmChallenges() {
  return (
    <section className="bg-foreground py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            {/* Overcome Digital Marketing Challenges for Lawyers */}
            {/* The Hidden Threat to Your Law Firm's Success */}
            Your Law Firm Deserves to Shine Online — But Right Now, It&rsquo;s
            Playing Hide-and-Seek.
          </h2>
          <p className="mt-6 text-lg leading-8 text-background">
            Let&rsquo;s face it, if your website looks like it was made on
            dial-up or shows up on page five of Google, your future clients are
            never going to find out just how brilliant you are.
            {/* Is your law firm struggling to stand out in the digital landscape?
            <br />
            You're not alone. Many talented attorneys face these common
            obstacles: */}
          </p>

          <p className="mt-6 text-lg leading-8 text-background">
            Wondering what&rsquo;s standing between your law firm&rsquo;s
            success and your competitors? Spoiler alert: it&rsquo;s probably
            these common roadblocks:
          </p>
        </div>

        <DigitalChallengeCards />
        <div className="mx-auto max-w-2xl lg:mx-0">
          {/* <p className="mt-6 text-lg leading-8 text-background">
            Imagine the frustration of pouring your heart into your practice,
            only to be overshadowed by competitors online. Every day that passes
            with these issues unresolved is a day of lost opportunities.
          </p> */}
          <p className="mt-6 text-lg leading-8 text-background">
            {/* The longer these problems persist, the wider the gap grows between
            your firm and the success you deserve. Can you afford to let another
            day go by without addressing these critical issues? */}
            The longer these issues hang out, the bigger the gap between your
            firm and the bigger success you&rsquo;ve been dreaming about. So,
            can you afford to ignore them for another day? Only if you're into
            watching your competition win. No pressure.
          </p>
        </div>
      </div>
    </section>
  );
}
