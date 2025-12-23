'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LeadershipSection from '@/components/LeadershipSection';
import ServicesSection from '@/components/ServicesSection';
import PartnerSection from '@/components/PartnerSection';
import CommunitySection from '@/components/CommunitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CareerModal from '@/components/CareerModal';
import FindStaffModal from '@/components/FindStaffModal';

const page = () => {
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
  const [isFindStaffModalOpen, setIsFindStaffModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onOpenCareerModal={() => setIsCareerModalOpen(true)}
        onOpenFindStaffModal={() => setIsFindStaffModalOpen(true)}
      />
      <main className="grow">
        <HeroSection
          onOpenCareerModal={() => setIsCareerModalOpen(true)}
          onOpenFindStaffModal={() => setIsFindStaffModalOpen(true)}
        />
        <AboutSection />
        <LeadershipSection
          onOpenCareerModal={() => setIsCareerModalOpen(true)}
          onOpenFindStaffModal={() => setIsFindStaffModalOpen(true)}
        />
        <ServicesSection
          onOpenCareerModal={() => setIsCareerModalOpen(true)}
          onOpenFindStaffModal={() => setIsFindStaffModalOpen(true)}
        />
        <PartnerSection
          onOpenFindStaffModal={() => setIsFindStaffModalOpen(true)}
        />
        <CommunitySection
          onOpenCareerModal={() => setIsCareerModalOpen(true)}
          onOpenFindStaffModal={() => setIsFindStaffModalOpen(true)}
        />
        <ContactSection />
      </main>
      <Footer />

      {/* Modals */}
      <CareerModal isOpen={isCareerModalOpen} onClose={() => setIsCareerModalOpen(false)} />
      <FindStaffModal isOpen={isFindStaffModalOpen} onClose={() => setIsFindStaffModalOpen(false)} />
    </div>
  )
}

export default page
