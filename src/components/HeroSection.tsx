import React, { useRef, useEffect, useState } from 'react';
import FloatingParticles from './effects/FloatingParticles';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const scrollToVideoSection = () => {
    document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Video autoplay with intersection observer
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isVideoLoaded) {
            video.play().catch(console.log);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isVideoLoaded]);

  return (
    <section 
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-book-cream"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Minimal, luxurious dual background using brand palette */}
        <div className="absolute inset-0 bg-book-cream" />
        <div className="absolute inset-0 bg-gradient-to-b from-book-cream via-book-cream/70 to-book-stone" />
      </div>

      <FloatingParticles />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8 md:space-y-12">
          {/* Logo - Optimized for all screen sizes */}
          <div className="mb-4 md:mb-6">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/c67509dc-b8fd-4b63-a711-7737584ea409.png" 
                alt="Sollara Garden Logo"
                className="mx-auto h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] w-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Title with brand colors, minimal and luxurious */}
          <div className="space-y-4 px-4 sm:px-6 md:px-8">
            <div className="relative">
              <h1 className="font-sf-pro text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-book-text text-center">
                CONFORTO, MODERNIDADE, SEGURANÇA E LAZER COMPLETO AO SEU ALCANCE
              </h1>
            </div>
            
            {/* CTA Button in brand palette */}
            <div className="flex justify-center mt-6">
              <button
                onClick={scrollToVideoSection}
                className="relative overflow-hidden bg-[#591e1c] hover:bg-[#591e1c]/90 text-book-cream font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl text-base sm:text-lg md:text-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 border-2 border-[#591e1c]/40"
              >
                <span className="relative z-10">APRESENTAÇÃO EXCLUSIVA</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
