import {Header} from '@/components/Navbar';
import {Hero} from '@/components/Hero';
import { Banner } from '@/components/Banner';
import LatestCollection from '@/components/LatestCollection';
import BestSellers from '@/components/BestSellers';

import Footer from '@/components/Footer';
import { ShowCase } from '@/components/ShowCase';
import {SocialSection} from '@/components/SocialSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LatestCollection />
      <ShowCase />
      <BestSellers />
      <Banner />
      <SocialSection />
      <Footer />
    </div>
  )
}
