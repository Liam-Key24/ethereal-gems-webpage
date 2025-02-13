'use client'

import React from 'react'
import Image from 'next/image'


export function Banner(){
    return (
        <div className='w-full py-12 px-6 bg-green-50'>
            <div className='container mx-auto flex items-center justify-between'>
                <div className='max-w-md'>
                    <h2 className='text-2xl font-serif leading-relaxed text-gray-800'>
                        Artisan crafted from local reclaimed and sustainable sourced gemstones.
                    </h2>
                </div>
                <div className='relative'>
                    <div className='absolute -top-4 -right-4'>
                        <span className='text-4xl text-amber-400'>*</span>
                    </div>
                    <Image
                        width={200}
                        height={200}
                        src="/Images/kateryna-hliznitsova-P6NiFTyI294-unsplash.jpg"
                        alt="Aurora Necklace"
                        className='rounded-full object-cover'
                    />
                </div>
            </div>
        </div>
    );
};