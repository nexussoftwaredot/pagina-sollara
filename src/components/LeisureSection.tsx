import React from 'react';

const LeisureSection = () => {
  return (
    <section className="mt-20 container mx-auto px-4 md:px-8">
      <div className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
        <img
          src="/lovable-uploads/318e54c2-e94e-4b91-a4ed-5f6aeade3dbb.png"
          alt="Área de lazer completa"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        {/* Faixa inferior com título e assinatura */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#6b6361]/95 text-white px-6 md:px-10 py-6 flex items-center justify-between gap-4">
          <div className="text-2xl md:text-4xl font-extrabold tracking-tight">
            ÁREA DE LAZER COMPLETA
          </div>
          <div className="flex items-end gap-2">
            <img
              src="/lovable-uploads/gs-grupo-salha.png"
              alt="GS Grupo Salha"
              className="h-16 md:h-20 w-auto opacity-90"
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

export default LeisureSection;


