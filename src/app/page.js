import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LeadershipSection from '@/components/LeadershipSection';
import ServicesSection from '@/components/ServicesSection';

const page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <LeadershipSection />
        <ServicesSection />
      </main>
    </div>
  )
}

export default page
