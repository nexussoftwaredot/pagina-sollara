import React from 'react';

const CasaUmSection = () => {
  return (
    <section className="relative py-16 bg-book-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 space-y-10">
        {/* Primeira imagem */}
        <div className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
          <img
            src="/lovable-uploads/pagina1-casa.png"
            alt="Casa 1"
            className="w-full h-auto object-cover"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              const current = img.src;
              if (current.endsWith('.png')) {
                img.onerror = null;
                img.src = current.replace('.png', '.jpg');
                return;
              }
              if (current.endsWith('.jpg') || current.endsWith('.jpeg')) {
                img.onerror = null;
                img.src = current.replace(/\.jpe?g$/, '.png');
                return;
              }
              img.onerror = null;
              img.src = '/lovable-uploads/318e54c2-e94e-4b91-a4ed-5f6aeade3dbb.png';
            }}
          />
        </div>

        {/* Texto CASAS EXCLUSIVAS PARA PCD */}
        <div className="flex items-center justify-center text-book-text">
          <span className="text-xl md:text-2xl font-bold">CASAS EXCLUSIVAS PARA PORTADORES DE DEFICIÊNCIA - PCD</span>
        </div>

        {/* Segunda imagem */}
        <div className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
          <img
            src="/lovable-uploads/pagina2-casa.jpg"
            alt="Casa 2"
            className="w-full h-auto object-cover"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              const current = img.src;
              if (current.endsWith('.png')) {
                img.onerror = null;
                img.src = current.replace('.png', '.jpg');
                return;
              }
              if (current.endsWith('.jpg') || current.endsWith('.jpeg')) {
                img.onerror = null;
                img.src = current.replace(/\.jpe?g$/, '.png');
                return;
              }
              img.onerror = null;
              img.src = '/lovable-uploads/318e54c2-e94e-4b91-a4ed-5f6aeade3dbb.png';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CasaUmSection;

