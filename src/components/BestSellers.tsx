'use client';

import Image from 'next/image';

const BestSellers = () => {
  return (
    <div className="w-full">
      <div className='inline-flex w-full items-center p-3'>
        <h1 className='w-1/3 text-2xl italic'>Best Sellers</h1>
        <hr className='border border-green-300 w-2/3'/>
      </div>
      <div className='grid w-full min-h-auto grid-cols-2 grid-rows-2 gap-4 p-4'>
          <div className='w-full h-full'>
            <Image 
              width={300}
              height={300}
              src='/Images/sama-hosseini-6seIjO8gX2w-unsplash.jpg'
              className='object-contain rounded-lg'
              alt='img'
            />
            <div className='w-full inline-flex items-center justify-between'>
            <h2>Earings</h2>
            <p>£80</p>
            </div>
            <h3 className='my-2 italic'>Discover</h3>
          </div>
          <div className='w-full h-full'>
            <Image 
              width={300}
              height={300}
              src='/Images/sama-hosseini-6seIjO8gX2w-unsplash.jpg'
              className='object-contain rounded-lg'
              alt='img'
            />
            <div className='w-full inline-flex items-center justify-between'>
            <h2>Earings</h2>
            <p>£80</p>
            </div>
            <h3 className='my-2 italic'>Discover</h3>
          </div>
          <div className='w-full h-full'>
            <Image 
              width={300}
              height={300}
              src='/Images/sama-hosseini-6seIjO8gX2w-unsplash.jpg'
              className='object-contain rounded-lg'
              alt='img'
            />
            <div className='w-full inline-flex items-center justify-between'>
            <h2>Earings</h2>
            <p>£80</p>
            </div>
            <h3 className='my-2 italic'>Discover</h3>
          </div>
          <div className='w-full h-full'>
            <Image 
              width={300}
              height={300}
              src='/Images/sama-hosseini-6seIjO8gX2w-unsplash.jpg'
              className='object-contain rounded-lg'
              alt='img'
            />
            <div className='w-full inline-flex items-center justify-between'>
            <h2>Earings</h2>
            <p>£80</p>
            </div>
            <h3 className='my-2 italic'>Discover</h3>
          </div>
      </div>
    </div>
  );
};

export default BestSellers;