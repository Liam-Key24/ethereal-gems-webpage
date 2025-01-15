'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    name: "Dreamweaver Pendant",
    price: "£45",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80"
  },
  {
    name: "Love Ring",
    price: "£45",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80"
  },
  {
    name: "Celestial Rings",
    price: "£60",
    image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&q=80"
  },
  {
    name: "Sapphire Gem Earrings",
    price: "£90",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80"
  }
];

const BestSellers = () => {
  return (
    <div className="px-8 py-16 bg-blue-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-serif mb-12"
      >
        Best Sellers
      </motion.h2>
      <div className="grid grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="overflow-hidden rounded-lg mb-4 relative h-[300px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-serif">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 text-sm text-blue-900 hover:text-blue-700">
              Add to cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;