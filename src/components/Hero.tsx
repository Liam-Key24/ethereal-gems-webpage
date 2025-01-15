'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-8 px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="relative h-[600px]"
      >
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80"
          alt="Jewelry Model"
          fill
          className="object-cover rounded-lg"
        />
        <p className="absolute bottom-4 left-4 text-sm text-white z-10">Whispering Willow Set</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col justify-center bg-sage-100 rounded-lg p-12"
      >
        <h2 className="text-5xl font-serif mb-6">
          Discover the allure of timeless beauty with
        </h2>
        <p className="text-4xl font-serif text-gray-700">Ethereal Gems.</p>
      </motion.div>
    </div>
  );
};

export default Hero;