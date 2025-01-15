'use client';

import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="px-8 py-16 bg-amber-400"
    >
      <div className="max-w-md">
        <h2 className="text-4xl font-serif mb-4">Join our Newsletter</h2>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-l focus:outline-none"
          />
          <button className="px-6 py-2 bg-blue-900 text-white rounded-r hover:bg-blue-800">
            Submit
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;