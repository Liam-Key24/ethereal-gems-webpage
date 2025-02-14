'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const collections = [
  {
    title: "Elegant Diamonds",
    image: "/Images/kateryna-hliznitsova-P6NiFTyI294-unsplash.jpg"
  },
  {
    title: "Precious Gems",
    image: "/Images/kateryna-hliznitsova-ceSCZzjTReg-unsplash.jpg"
  },
  {
    title: "Vintage Collection",
    image: "/Images/kateryna-hliznitsova-pjrPWwwYx1I-unsplash.jpg"
  },
  {
    title: "Modern Classics",
    image: "/Images/kateryna-hliznitsova-vbnxgxj6cJg-unsplash.jpg"
  },
  {
    title: "Timeless Beauty",
    image: "/Images/nataliya-melnychuk-5ngCICAXiH0-unsplash.jpg"
  }
];

const LatestCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % collections.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + collections.length) % collections.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-auto h-auto m-4 relative overflow-hidden border-2 border-yellow-200 py-12 ">
      <h2 className="md:text-9xl font-serif mx-4">Our Cores</h2>
      <div className="relative w-auto h-[500px] mx-2 rounded-lg">
        {collections.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-500 transform ${index === currentIndex ? 'opacity-100 translate-x-0' : 
              index < currentIndex ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`}
          >
            <div className="relative w-auto h-full m-2 rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover "
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-4xl font-serif">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {collections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;