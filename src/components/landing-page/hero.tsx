import Link from 'next/link';

export function Hero() {
  return (
    <div className='mx-auto max-w-[1728px] flex-col items-start justify-start px-5 py-10 xl:p-12'>
      <div className='flex flex-col items-start justify-start gap-4 self-stretch'>
        <div className='flex flex-col items-start justify-start self-stretch'>
          <div className='self-stretch text-h1Small uppercase text-white xl:text-h1Large'>
            hey law firm, your next{' '}
            <span className='text-primary'>big case</span> starts here
          </div>
        </div>
        <div className='self-stretch text-2xl font-normal leading-loose text-white xl:text-4xl xl:leading-10'>
          Winning cases is tough. Getting noticed online shouldn&rsquo;t be.
          <span className='hidden md:block' aria-hidden='true' />
          We turn your website into a{' '}
          <span className='text-primary'>magnet</span> 🧲 for the right{' '}
          <span className='text-primary'>clients </span>🚑.
          <span className='hidden md:block' aria-hidden='true' />
          With digital strategies sharper 🔪 than your best courtroom argument.
        </div>
      </div>
      <div className='size-full py-24'>
        <div className='group inline-flex h-20 w-full items-center justify-center gap-4 border-2 border-background bg-transparent px-12 py-6 hover:bg-primary hover:shadow-[-7px_7px_0_0] hover:shadow-background'>
          <Link
            href='/schedule-call'
            className='text-center text-xl font-extrabold uppercase leading-loose tracking-wide text-primary group-hover:text-foreground xl:text-2xl'
          >
            Let&rsquo;s Talk Strategy
          </Link>
        </div>
      </div>
    </div>
  );
}
