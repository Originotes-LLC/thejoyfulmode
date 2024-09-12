import Image from 'next/image';
import studyLawyer from '@/assets/images/studying_lawyer.jpeg';

//
export function EmptyBlog() {
  return (
    <div className='relative min-h-screen px-6 py-96 sm:px-12 sm:py-40 lg:px-16'>
      <div className='absolute inset-0 overflow-hidden'>
        <Image
          alt='lawyer studying the best seo tips from the joyful mode law academy'
          src={studyLawyer}
          className='size-full object-cover xl:object-left'
        />
      </div>
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-gray-900 bg-opacity-50'
      />
      <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
        <h2 className='text-h1Small text-white xl:text-h1Large'>
          The Joyful Law Academy
        </h2>
        <p className='mt-5 text-2xl font-normal leading-loose text-white xl:mt-12 xl:text-4xl xl:leading-10'>
          We're working hard to bring you the best SEO tips, marketing
          strategies, and web design & development tailored for law firms that
          want to be noticed, not ignored. Stay tuned!
        </p>
      </div>
    </div>
  );
}
