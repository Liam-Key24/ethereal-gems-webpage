'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const showcaseItems = [
    {
        id: 1,
        title: 'Moon Earrings',
        price: '£80',
        image: '/Images/kateryna-hliznitsova-P6NiFTyI294-unsplash.jpg'
    },
    {
        id: 2,
        title: 'Pearl Necklace',
        price: '£120',
        image: '/Images/kateryna-hliznitsova-ceSCZzjTReg-unsplash.jpg'
    },
    {
        id: 3,
        title: 'Diamond Ring',
        price: '£250',
        image: '/Images/kateryna-hliznitsova-pjrPWwwYx1I-unsplash.jpg'
    }
]

export function ShowCase(){
    const [currentIndex, setCurrentIndex] = useState(0)

    return(
        <div className='bg-[#1a365d] py-12 px-6'>
            <p className='text-sm text-center text-white mb-8 max-w-md mx-auto italic'>
                Elegance is not about being noticed, it's about being remembered. Ethereal Gems leaves a lasting impression.
            </p>

            <div className='relative max-w-xl mx-auto'>
                <div className='overflow-hidden'>
                    <div className='flex transition-transform duration-500 ease-in-out'
                         style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {showcaseItems.map((item) => (
                            <div key={item.id} className='min-w-full'>
                                <div className='relative w-full h-[300px] rounded-lg overflow-hidden'>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <div className='mt-4 text-center'>
                                    <h3 className='text-white text-lg'>{item.title}</h3>
                                    <p className='text-gray-300'>{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex justify-center gap-2 mt-6'>
                    {showcaseItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}