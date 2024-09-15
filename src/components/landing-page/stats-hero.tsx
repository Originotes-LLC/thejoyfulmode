import { AnimatedNumber } from '@/components/animated-number';
import { dmmono } from '@/app/fonts';
export function StatsHero() {
  return (
    <div className='inline-flex w-full flex-col items-start justify-start overflow-hidden bg-foreground px-12 pt-32'>
      <div className='flex flex-col items-start justify-start gap-10 lg:inline-flex lg:flex-row lg:gap-6'>
        <div className='inline-flex flex-col items-start justify-start pr-6'>
          <div
            className={`${dmmono.variable} self-stretch font-mono text-[6rem] font-medium uppercase leading-[128px] text-background xl:text-[8rem]`}
          >
            <AnimatedNumber start={50} end={80} />%
          </div>
          <div className='self-stretch text-xl font-normal leading-7 text-background'>
            Law firms rank SEO as their top client acquisition tool
          </div>
        </div>
        <div className='inline-flex flex-col items-start justify-start pr-6'>
          <div
            className={`${dmmono.variable} self-stretch font-mono text-[6rem] font-medium uppercase leading-[128px] text-background xl:text-[8rem]`}
          >
            <AnimatedNumber start={0} end={20} />%
          </div>
          <div className='self-stretch text-xl font-normal leading-7 text-background'>
            Increase in organic visitors for law firms that boost their SEO
          </div>
        </div>
        <div className='inline-flex flex-col items-start justify-start pr-6'>
          <div
            className={`${dmmono.variable} self-stretch font-mono text-[6rem] font-medium uppercase leading-[128px] text-background xl:text-[8rem]`}
          >
            <AnimatedNumber start={24} end={84} />%
          </div>
          <div className='self-stretch text-xl font-normal leading-7 text-background'>
            Law firms generate new leads through organic social media reach
          </div>
        </div>
        <div className='inline-flex flex-col items-start justify-start pr-6'>
          <div
            className={`${dmmono.variable} self-stretch font-mono text-[6rem] font-medium uppercase leading-[128px] text-background xl:text-[8rem]`}
          >
            <AnimatedNumber start={100} end={500} />%
          </div>
          <div className='self-stretch text-xl font-normal leading-7 text-background'>
            Potential ROI for law firms investing in SEO within three years
          </div>
        </div>
      </div>
    </div>
  );
}
