import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { Teachers } from 'next/font/google';
import './globals.css';

const teachers = Teachers({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ethereal Gems - Timeless Beauty',
  description: 'Discover the allure of timeless beauty with Ethereal Gems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={teachers.className} >{children}</body>
    </html>
  );
}