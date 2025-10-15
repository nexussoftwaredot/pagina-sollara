import React, { useRef, useEffect, useState } from 'react';

const VideoSection = () => {
  // 🔹 Substituímos o link dinâmico pelo vídeo fixo desejado
  const heroVideoUrl = "https://www.youtube.com/watch?v=FSpJ0Xp3pPg";
  const heroVideoType = "youtube";

  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = '';

    if (url.includes('youtube.com/shorts/')) {
      const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
      videoId = match ? match[1] : '';
    } else if (url.includes('youtu.be/')) {
      const match = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
      videoId = match ? match[1] : '';
    } else if (url.includes('youtube.com/watch')) {
      const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
      videoId = match ? match[1] : '';
    }

    if (videoId) {
      return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1`;
    }

    return url;
  };

  // Intersection Observer for auto play/pause
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);

          if (heroVideoType === 'file' && videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(console.log);
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [heroVideoType]);

  if (!heroVideoUrl) return null;

  return (
    <section
      id="video-section"
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-16 relative overflow-hidden bg-book-cream"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-book-cream via-book-cream/70 to-book-stone" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="relative bg-book-stone rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <div className="aspect-video relative">
                {heroVideoType === 'youtube' ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src={getYouTubeEmbedUrl(heroVideoUrl)}
                      className="w-full h-full rounded-xl sm:rounded-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      frameBorder="0"
                      title="Sollara Garden - Apresentação"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      src={heroVideoUrl}
                      className="w-full h-full object-cover rounded-2xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Botão WhatsApp abaixo do vídeo */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5524999385575&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm.029 18.88a7.947 7.947 0 0 1-3.82-.97l-4.239 1.11 1.131-4.13a7.908 7.908 0 0 1-1.068-3.969c0-4.37 3.582-7.93 8.006-7.93 4.423 0 8.005 3.56 8.005 7.93 0 4.37-3.582 7.93-8.005 7.93z" fillRule="evenodd" clipRule="evenodd" />
              </svg>
              FALE DIRETO COM A CONSTRUTORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
