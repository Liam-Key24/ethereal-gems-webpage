'use client'

import React from 'react'


export function SocialSection() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 grid-cols-1 grid-rows-2">
      <h2 className="text-xl font-semibold mb-4 text-center">We're on Insta! @EtherealGems</h2>
      <div className="grid grid-cols-3 gap-2">
        <div className='border border-gray-100 w-[100px] h-[100px]'>b</div>
        <div className='border border-gray-100 w-[100px] h-[100px]'>b</div>
        <div className='border border-gray-100 w-[100px] h-[100px]'>b</div>
        <div className='border border-gray-100 w-[100px] h-[100px]'>b</div>
        <div className='border border-gray-100 w-[100px] h-[100px]'>b</div>
        <div className='border border-gray-100 w-[100px] h-[100px]'>b</div>
        <div className='border border-gray-100 w-[100px] h-[100px]'>b</div>
        <div className='border border-gray-100 w-[100px] h-[100px]'>b</div>
        <div className='border border-gray-100 w-[100px] h-[100px]'>b</div>
      </div>

      <div className='w-full mt-12 p-6 bg-gray-50 rounded-lg'>
        <h1 className='text-2xl font-semibold text-center mb-4'>Join Our Newsletter</h1>
        <p className='text-gray-600 text-center mb-6'>Stay updated with our latest collections and exclusive offers!</p>
        <form action="#" className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
            <input 
              type="email" 
              placeholder="Enter your email"
              className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              required
            />
            <button 
              type='submit'
              className='bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200'
            >
              Subscribe
            </button>
        </form>
      </div>
    </div>
  )
}


