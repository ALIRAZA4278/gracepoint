import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LeadershipSection from '@/components/LeadershipSection';
import ServicesSection from '@/components/ServicesSection';
import PartnerSection from '@/components/PartnerSection';
import CommunitySection from '@/components/CommunitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <LeadershipSection />
        <ServicesSection />
        <PartnerSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default page
