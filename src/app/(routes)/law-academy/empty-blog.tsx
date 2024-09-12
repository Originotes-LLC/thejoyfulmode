import Image from 'next/image';
import studyLawyer from '@/assets/images/two_people.jpeg';

//
export function EmptyBlog() {
  return (
    <div className='relative px-6 py-32 sm:px-12 sm:py-40 lg:px-16 xl:py-96'>
      <div className='absolute inset-0 overflow-hidden'>
        <Image
          alt='lawyer studying the best seo tips from the joyful mode law academy'
          src={studyLawyer}
          className='size-full object-cover'
        />
      </div>
      <div aria-hidden='true' className='absolute inset-0 bg-foreground/50' />
      <div className='relative flex flex-col items-start xl:flex-row'>
        <h2 className='text-h1Small text-white xl:text-h1Large'>
          The Joyful Law Academy
        </h2>
        <p className='mt-5 text-2xl font-normal leading-loose text-white xl:mt-32 xl:text-4xl xl:leading-10'>
          We're working hard to bring you the best SEO tips, marketing
          strategies, and web design & development tailored for law firms that
          want to be noticed, not ignored. Stay tuned!
        </p>
      </div>
    </div>
  );
}
