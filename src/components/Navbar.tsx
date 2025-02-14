'use client'

import React, { useState } from 'react'
import { Menu, X, Heart, ShoppingCart } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['Shop', 'Collection', 'About', 'Contact']

  return (
    <>
      <div className='flex justify-between items-center w-full my-4 px-4'>
        <div className='relative w-full h-auto'>
          <span className='absolute top-0 left-2 text-3xl text-yellow'>*</span>
        <h1 className='font-serif text-3xl pl-6 '>Ethereal <span className='italic'>Gems</span></h1>
        </div>
        
        <div className='flex items-center gap-4'>
          <nav className='hidden md:block'>
            <ul className='flex gap-6'>
              {menuItems.map((item, index) => (
                  <li key={index} className='hover:opacity-85 transition-transform duration-300 ease-in-out hover:translate-y-[-2px]'>{item}</li>
              ))}
              <div className="flex items-center gap-4">
  <button className="hover:opacity-85 transition-transform duration-300 ease-in-out hover:translate-y-[-2px]">
    <Heart size={16} />
  </button>
  <button className="hover:opacity-85 transition-transform duration-300 ease-in-out hover:translate-y-[-2px]">
    <ShoppingCart size={16} />
  </button>
</div>
            </ul>

          </nav>
          
          <button 
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div 
        className={`fixed top-0 left-0 w-full bg-drkblue text-sage transform 
        transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } shadow-lg md:hidden`}
      >
        <div className='p-4 border-b border-sage'>
        <div className='relative w-full h-auto'>
          <span className='absolute top-0 left-2 text-3xl text-yellow'>*</span>
        <h1 className='font-serif text-3xl pl-6'>Ethereal <span className='italic'>Gems</span></h1>
        </div>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4"
        >
          <X size={26} />
        </button>
        </div>
        
        <div className='p-6 mt-12 hover:opa'>
          <ul className='space-y-6 text-lg'>
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}