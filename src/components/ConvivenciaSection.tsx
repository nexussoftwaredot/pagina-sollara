import React from 'react';

const ConvivenciaSection = () => {
  return (
    <section className="relative py-16 bg-book-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-[#6b6361] text-5xl md:text-6xl font-extrabold tracking-tight text-center mb-10">CONVIVÊNCIA</h2>

        <div className="relative mt-6 rounded-2xl shadow-modern border border-book-stone/40">
          <div className="absolute -top-10 left-1/4 h-28 w-72 bg-book-stone/50 rounded hidden md:block" />
          <div className="absolute -right-6 top-20 h-2 w-32 bg-book-stone/50 rounded hidden md:block" />

          <div className="relative bg-[#6b6361] text-white rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-2xl leading-relaxed">
              Descubra uma área de lazer completa em um condomínio privado:
            </p>
            <p className="mt-6 text-base md:text-xl leading-relaxed">
              Piscina, quadras para beach tennis e esportes diversos, salão de festas integrado com playground, academia equipada – tudo planejado para oferecer diversão, descanso e bem-estar todos os dias.
            </p>
            <div className="absolute right-6 bottom-6 flex items-end gap-2">
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
      </div>
    </section>
  );
};

export default ConvivenciaSection;


