import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LatestCollection from '@/components/LatestCollection';
import BestSellers from '@/components/BestSellers';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LatestCollection />
      <BestSellers />
      <Newsletter />
      <Footer />
    </div>
  );
}