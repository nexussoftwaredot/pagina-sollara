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
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => console.log('Error loading video')}
        >
          <source src="https://drive.google.com/uc?export=download&id=14jFcXML2KS1bawZ2P9V2_j7uoHNHrayp" type="video/mp4" />
        </video>
        
        {/* Overlay with gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/30 via-black/50 to-luxury-gold/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      <FloatingParticles />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8 md:space-y-12">
          {/* Logo - Significantly increased size for mobile */}
          <div className="mb-6 md:mb-8">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/c67509dc-b8fd-4b63-a711-7737584ea409.png" 
                alt="Sollara Garden Logo"
                className="mx-auto h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] w-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Title with golden gradient - aligned as phrase */}
          <div className="space-y-4">
            <div className="relative">
              <h1 className="font-sf-pro text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
                CONFORTO, MODERNIDADE, SEGURANÇA E LAZER COMPLETO AO SEU ALCANCE
              </h1>
            </div>
            
            {/* CTA Button with golden theme */}
            <button
              onClick={scrollToVideoSection}
              className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-2xl text-lg md:text-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 border-2 border-yellow-500/50"
            >
              <span className="relative z-10">APRESENTAÇÃO EXCLUSIVA</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
