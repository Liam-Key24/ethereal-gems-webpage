'use client';

import React from 'react';
import Image from 'next/image';

export function  Hero(){
  return (




      <div className='w-auto h-[794px] grid md:grid-cols-2 gap-2 mx-2'>
        <div className='w-full h-[794px] rounded-lg'>
          <Image  
          src="/Images/jasmin-chew-WKD2vIe8Rb0-unsplash.jpg"
          width={1000}
          height={800}
          alt="Hero Image"
          className='w-full h-full object-cover rounded-lg'
          />
        </div>

        <div className='w-full h-[794px]'>
          <div className='bg-blue-300 w-full h-full flex items-center justify-center p-6 rounded-lg'>
            <h2 className='text-3xl md:text-5xl text-center'>
              Discover the allure of timeless <span>beauty</span> with Ethereal Gems.
            </h2>
          </div>
        </div>
      </div>

  );
}

