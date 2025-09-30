import React from 'react';

const CasaDoisSection = () => {
  return (
    <section className="relative py-16 bg-book-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 space-y-10">
        {["/lovable-uploads/pagina3-casa.png", "/lovable-uploads/pagina4-casa.png"].map((src) => (
          <div key={src} className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
            <img
              src={src}
              alt={src.split('/').pop() || 'Casa 2'}
              className="w-full h-auto object-cover"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.onerror = null;
                img.src = '/lovable-uploads/318e54c2-e94e-4b91-a4ed-5f6aeade3dbb.png';
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasaDoisSection;


