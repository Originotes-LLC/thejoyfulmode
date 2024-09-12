'use client';

import Link from 'next/link';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export function ThankYou() {
  useEffect(() => {
    const handleClick = () => {
      const end = Date.now() + 3 * 1000; // 3 seconds
      const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];

      const frame = () => {
        if (Date.now() > end) return;

        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          startVelocity: 60,
          origin: { x: 0, y: 0.5 },
          colors: colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          startVelocity: 60,
          origin: { x: 1, y: 0.5 },
          colors: colors,
        });

        requestAnimationFrame(frame);
      };

      frame();
    };

    handleClick();
  }, []);
  return (
    <>
      <main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <h1 className='mt-4 text-h1Small uppercase text-background xl:text-h1Large'>
            Thank you
          </h1>
          <p className='mt-6 self-stretch text-xl font-normal leading-loose text-white xl:text-3xl xl:leading-[43.92px]'>
            We got your message and will get back to you as soon as possible.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              href='/'
              className='group inline-flex h-20 w-full items-center justify-center gap-4 border-2 border-background bg-transparent px-12 py-6 text-xl font-extrabold leading-loose tracking-wide text-primary hover:bg-primary hover:text-foreground hover:shadow-[-7px_7px_0_0] hover:shadow-background xl:text-2xl'
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
