
import React from 'react';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ConvivenciaSection from '@/components/ConvivenciaSection';
import AcademiaSection from '@/components/AcademiaSection';
import AcademiaMelhorSection from '@/components/AcademiaMelhorSection';
import CasaUmSection from '@/components/CasaUmSection';
import CasaDoisSection from '@/components/CasaDoisSection';
import CasaTresSection from '@/components/CasaTresSection';
import AboutSection from '@/components/AboutSection';
import ImageCarousel from '@/components/ImageCarousel';
import FinancingSection from '@/components/FinancingSection';
import CompanySection from '@/components/CompanySection';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/effects/ScrollIndicator';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollIndicator />
      <HeroSection />
      <Separator className="h-px bg-gray-300 w-11/12 mx-auto my-0" />
      <VideoSection />
      <Separator className="h-px bg-gray-300 w-11/12 mx-auto my-0" />
      <AboutSection />
      <Separator className="h-px bg-gray-300 w-11/12 mx-auto my-0" />
      <ConvivenciaSection />
      <Separator className="h-px bg-gray-300 w-11/12 mx-auto my-0" />
      <CasaUmSection />
      <Separator className="h-px bg-gray-300 w-11/12 mx-auto my-0" />
      <CasaDoisSection />
      <Separator className="h-px bg-gray-300 w-11/12 mx-auto my-0" />
      <CasaTresSection />
      <Separator className="h-px bg-gray-300 w-11/12 mx-auto my-0" />
      <FinancingSection />
      <Separator className="h-px bg-gray-300 w-11/12 mx-auto my-0" />
      <ImageCarousel />
      <Separator className="h-px bg-gray-300 w-11/12 mx-auto my-0" />
      <CompanySection />
      <Footer />
    </div>
  );
};

export default Index;
