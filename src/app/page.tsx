import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import DPDPASpotlight from '@/components/sections/DPDPASpotlight';
import CoreServices from '@/components/sections/CoreServices';
import Differentiation from '@/components/sections/Differentiation';
import Audience from '@/components/sections/Audience';
import TrustCredibility from '@/components/sections/TrustCredibility';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <DPDPASpotlight />
        <CoreServices />
        <Differentiation />
        <Audience />
        <TrustCredibility />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
