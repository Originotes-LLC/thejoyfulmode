import BlurIn from '@/components/blur-in';
import { FadeText } from '@/components/fade-text';
import HyperText from '@/components/hyper-text';
import Link from 'next/link';

export function Hero() {
  return (
    <div className='mx-auto max-w-[1728px] flex-col items-start justify-start px-5 py-10 xl:p-12'>
      <div className='flex flex-col items-start justify-start gap-4 self-stretch'>
        <div className='flex flex-col items-start justify-start self-stretch'>
          <FadeText
            className='text-h1Small uppercase text-background xl:text-h1Large'
            direction='up'
            framerProps={{
              show: { transition: { delay: 0.3 } },
            }}
            text='hey law firm, your next'
          />
          <FadeText
            className='text-h1Small uppercase text-primary xl:text-h1Large'
            direction='left'
            framerProps={{
              show: { transition: { delay: 0.5 } },
            }}
            text='big case'
          />
          <FadeText
            className='text-h1Small uppercase text-background xl:text-h1Large'
            direction='down'
            framerProps={{
              show: { transition: { delay: 0.9 } },
            }}
            text='starts here'
          />
        </div>
        <BlurIn
          word={
            <div className='text-2xl font-normal leading-loose text-background xl:text-4xl xl:leading-10'>
              Winning cases is tough. Getting noticed online shouldn&rsquo;t be.
              <span className='hidden md:block' aria-hidden='true' />
              We turn your website into a{' '}
              <span className='text-primary'>magnet</span> 🧲 for the right{' '}
              <span className='text-primary'>clients </span>🚑.
              <span className='hidden md:block' aria-hidden='true' />
              With digital strategies sharper 🔪 than your best courtroom
              argument.
            </div>
          }
          className='text-2xl font-normal leading-loose text-background xl:text-4xl xl:leading-10'
        />
      </div>
      <div className='size-full py-24'>
        <div className='group inline-flex h-20 w-full items-center justify-center gap-4 border-2 border-background bg-transparent px-12 py-6 hover:bg-primary hover:shadow-[-7px_7px_0_0] hover:shadow-background'>
          <Link
            href='/schedule-call'
            className='text-center text-xl font-extrabold uppercase leading-loose tracking-wide text-primary group-hover:text-foreground xl:text-2xl'
          >
            <HyperText text='Let&rsquo;s Talk Strategy' />
          </Link>
        </div>
      </div>
    </div>
  );
}
