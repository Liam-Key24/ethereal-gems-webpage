'use client';

import React from 'react';
import Image from 'next/image';

export function  Hero(){
  return (




      <div className='w-auto h-[40em] md:h-[40em] grid md:grid-cols-2 md:gap-2 mx-2'>
        <div className='w-full h-[20em] md:h-[40em] rounded-lg'>
          <Image  
          src="/Images/jasmin-chew-WKD2vIe8Rb0-unsplash.jpg"
          width={1000}
          height={800}
          alt="Hero Image"
          className='w-full md:h-full object-cover rounded-l-lg'
          />
        </div>

        <div className='w-full h-[20em] md:h-[40em]'>
          <div className='bg-sage w-full h-full flex items-center justify-center p-6 rounded-r-lg'>
            <div className='relative'>
              <span className='text-yellow text-[16em] md:text-[20em] absolute bottom-11 right-5'>*</span>
            <h2 className='text-7xl md:text-8xl text-left font-serif text-drkblue'>
              Discover the allure of timeless <span>beauty</span> with Ethereal Gems.
            </h2>
            <span className='text-drkblue md:text-3xl italic font-serif absolute bottom-20 right-20'>02</span>

            </div>
          </div>
        </div>
      </div>

  );
}

