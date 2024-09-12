import { dmmono } from "@/app/fonts";

export function StatsHero() {
  return (
    <div className="px-12 flex-col justify-start items-start inline-flex bg-foreground pt-32 overflow-hidden">
      <div className="justify-start items-start gap-10 lg:gap-6 lg:inline-flex flex flex-col lg:flex-row">
        <div className="pr-6 flex-col justify-start items-start inline-flex">
          <div
            className={`${dmmono.variable} font-mono self-stretch text-background text-[6rem] xl:text-[8rem] font-medium uppercase leading-[128px]`}
          >
            80%
          </div>
          <div className="self-stretch text-background text-xl font-normal leading-7">
            Law firms rank SEO as their top client acquisition tool
          </div>
        </div>
        <div className="pr-6 flex-col justify-start items-start inline-flex">
          <div
            className={`${dmmono.variable} self-stretch text-background text-[6rem] xl:text-[8rem] font-medium font-mono uppercase leading-[128px]`}
          >
            20%
          </div>
          <div className="self-stretch text-background text-xl font-normal leading-7">
            Increase in organic visitors for law firms that boost their SEO
          </div>
        </div>
        <div className="pr-6 flex-col justify-start items-start inline-flex">
          <div
            className={`${dmmono.variable} self-stretch text-background text-[6rem] xl:text-[8rem] font-medium font-mono uppercase leading-[128px]`}
          >
            84%
          </div>
          <div className="self-stretch text-background text-xl font-normal leading-7">
            Law firms generate new leads through organic social media reach
          </div>
        </div>
        <div className="pr-6 flex-col justify-start items-start inline-flex">
          <div
            className={`${dmmono.variable} self-stretch text-background text-[6rem] xl:text-[8rem] font-medium font-mono uppercase leading-[128px]`}
          >
            500%
          </div>
          <div className="self-stretch text-background text-xl font-normal leading-7">
            Potential ROI for law firms investing in SEO within three years
          </div>
        </div>
      </div>
    </div>
  );
}
