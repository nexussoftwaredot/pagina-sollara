import React from 'react';

const AcademiaSection = () => {
  return (
    <section className="relative py-16 bg-book-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-book-text text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-10">ACADEMIA COMPLETA</h2>

        <div className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
          <img
            src="/lovable-uploads/academia.png"
            alt="Academia completa"
            className="w-full h-auto object-cover"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.onerror = null;
              img.src = '/lovable-uploads/230d7ba0-f969-4982-91ec-6ad5f202cdcd.png';
            }}
          />

          {/* Faixa inferior estilo padrão do site */}
          <div className="absolute left-0 right-0 bottom-0 bg-[#6b6361]/95 text-white px-6 md:px-10 py-6 flex items-center justify-between gap-4">
            <div className="text-sm md:text-base opacity-80">imagens ilustrativas – sugestões de decoração.</div>
            <img
              src="/lovable-uploads/gs-grupo-salha.png"
              alt="GS Grupo Salha"
              className="h-12 md:h-16 w-auto opacity-90"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img.src.endsWith('/lovable-uploads/gs-grupo-salha.png')) {
                  img.onerror = null;
                  img.src = '/gs-grupo-salha.png';
                } else {
                  img.style.display = 'none';
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademiaSection;


