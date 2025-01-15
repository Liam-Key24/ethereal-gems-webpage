'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Search } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-4 px-8 flex items-center justify-between"
    >
      <h1 className="text-2xl font-serif">Ethereal Gems</h1>
      <nav className="flex space-x-8">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <Link href="/products" className="hover:text-gray-600">Products</Link>
        <Link href="/services" className="hover:text-gray-600">Services</Link>
        <Link href="/company" className="hover:text-gray-600">Company</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 cursor-pointer" />
        <ShoppingBag className="w-5 h-5 cursor-pointer" />
      </div>
    </motion.header>
  );
};

export default Header;