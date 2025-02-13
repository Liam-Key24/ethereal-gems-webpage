'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['Shop', 'Collection \'24', 'About', 'Contact']

  return (
    <>
      <div className='flex justify-between items-center w-full my-4 px-4'>
        <h1>Ethereal <span className='italic'>Gems</span></h1>
        
        <div className='flex items-center gap-4'>
          <nav className='hidden md:block'>
            <ul className='flex gap-6'>
              {menuItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
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
        className={`fixed top-0 left-0 w-full bg-white transform 
        transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } shadow-lg md:hidden`}
      >
        <h1 className="absolute top-4 left-4">Ethereal <span className="italic">Gems</span></h1>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4"
        >
          <X size={24} />
        </button>
        
        <div className='p-6 mt-12'>
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