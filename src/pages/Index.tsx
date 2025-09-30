
import React from 'react';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import ImageCarousel from '@/components/ImageCarousel';
import FinancingSection from '@/components/FinancingSection';
import CompanySection from '@/components/CompanySection';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/effects/ScrollIndicator';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollIndicator />
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <ImageCarousel />
      <FinancingSection />
      <CompanySection />
      <Footer />
    </div>
  );
};

export default Index;
