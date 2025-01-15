'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80",
    name: "Dream Pendant",
    link: "Discover"
  },
  {
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80",
    name: "Linked Necklace",
    link: "Discover"
  },
  {
    image: "https://images.unsplash.com/photo-1599643478261-42fc3e235cd6?auto=format&fit=crop&q=80",
    name: "Linked Bracelet",
    link: "Discover"
  }
];

const LatestCollection = () => {
  return (
    <div className="px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-serif mb-12"
      >
        Latest Collection
      </motion.h2>
      <div className="grid grid-cols-3 gap-8">
        {collections.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden rounded-lg relative h-[400px]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-xl font-serif">{item.name}</h3>
            <Link href="#" className="text-sm text-gray-600 hover:text-black">{item.link}</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;