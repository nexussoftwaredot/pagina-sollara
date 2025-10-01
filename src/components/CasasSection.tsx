import React from 'react';

const images = [
  '/lovable-uploads/pagina1-casa.jpg',
  '/lovable-uploads/pagina2-casa.jpg',
  '/lovable-uploads/pagina3-casa.jpg',
  '/lovable-uploads/pagina4-casa.jpg',
  '/lovable-uploads/pagina5-casa.jpg',
  '/lovable-uploads/pagina6-casa.jpg',
];

const fallback = '/lovable-uploads/318e54c2-e94e-4b91-a4ed-5f6aeade3dbb.png';

const CasasSection = () => {
  return (
    <section className="relative py-16 bg-book-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 space-y-10">
        {images.map((src) => (
          <div key={src} className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
            <img
              src={src}
              alt={src.split('/').pop() || 'Página casa'}
              className="w-full h-auto object-cover"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.onerror = null;
                img.src = fallback;
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasasSection;


