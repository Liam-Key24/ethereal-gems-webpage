import { Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="px-8 py-12 bg-sage-50">
      <div className="grid grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="font-serif text-2xl mb-4">Ethereal Gems</h3>
          <p className="text-sm text-gray-600">Established 2020</p>
          <p className="text-sm text-gray-600">Etherealegems.com</p>
        </div>
        <div>
          <h4 className="font-medium mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#" className="hover:text-black">Women</Link></li>
            <li><Link href="#" className="hover:text-black">Men</Link></li>
            <li><Link href="#" className="hover:text-black">Gifts</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">About</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#" className="hover:text-black">Materials</Link></li>
            <li><Link href="#" className="hover:text-black">Collection</Link></li>
            <li><Link href="#" className="hover:text-black">Sustainability</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">Help</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#" className="hover:text-black">Stores</Link></li>
            <li><Link href="#" className="hover:text-black">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between pt-8 border-t">
        <p className="text-sm text-gray-600">© 2024 Ethereal Gems. All rights reserved.</p>
        <Link href="#" className="text-gray-600 hover:text-black">
          <Instagram className="w-5 h-5" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;