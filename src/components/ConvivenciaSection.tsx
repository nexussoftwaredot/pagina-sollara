import React from 'react';

const ConvivenciaSection = () => {
  return (
    <section className="relative py-16 bg-book-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-book-text text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-10">Resort Particular</h2>

        <div className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
          <img
            src="/lovable-uploads/area-de-lazer-completa.jpg"
            alt="Área de lazer completa"
            className="w-full h-auto object-cover"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              // fallback para uma imagem existente no projeto caso o arquivo não esteja disponível ainda
              img.onerror = null;
              img.src = '/lovable-uploads/617c932f-d57d-47d8-b749-99ddfe60c989.png';
            }}
          />

          {/* Faixa de conteúdo sobreposta */}
          <div className="absolute left-0 right-0 bottom-0 bg-[#6b6361]/95 text-white px-6 md:px-10 py-8">
            <p className="text-lg md:text-2xl leading-relaxed">
              Descubra uma área de lazer completa em um condomínio privado:
            </p>
            <p className="mt-4 text-base md:text-xl leading-relaxed">
              Piscina, quadras para beach tennis e esportes diversos, salão de festas integrado com playground, academia equipada – tudo planejado para oferecer diversão, descanso e bem-estar todos os dias.
            </p>
            <div className="mt-4 flex justify-end">
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


