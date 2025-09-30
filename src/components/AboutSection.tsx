
import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative py-16 bg-book-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Grid principal do layout anexado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bloco escuro à esquerda com textos */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-book-text p-8 md:p-12 shadow-modern border border-book-stone/30">
              <div className="space-y-6">
                <h2 className="font-sf-pro text-4xl md:text-5xl font-extrabold leading-tight text-book-cream">
                  UM NOVO
                  <br />
                  JEITO DE VIVER
                </h2>
                <p className="uppercase tracking-wider text-book-cream/70 font-semibold">
                  EM <span className="text-book-cream">BARRA MANSA</span>
                </p>
                <div className="space-y-5 text-book-cream/90 text-lg leading-relaxed">
                  <p>
                    Imagine viver em um lugar onde tem tudo que você e sua família precisam. Perto de tudo, perto do novo, do moderno e do bem estar.
                  </p>
                  <p>
                    Agora imagine um imóvel super valorizado pela proximidade com comércios e serviços.
                  </p>
                  <p>
                    Casas modernas, não geminadas, área de lazer completa pensada para você aproveitar lindos momentos em família.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Área direita com barras minimalistas (decor) */}
          <div className="lg:col-span-4 flex flex-col gap-10 items-end pt-4">
            <div className="h-1 w-40 bg-book-stone rounded-full"></div>
            <div className="h-64 w-full bg-book-stone/60 rounded shadow-modern"></div>
          </div>
        </div>
      </div>

      {/* Logotipo GS no canto inferior direito da seção */}
      <img
        src="/lovable-uploads/gs-grupo-salha.png"
        alt="GS Grupo Salha"
        className="absolute right-6 bottom-6 h-14 md:h-16 w-auto opacity-80"
        loading="lazy"
      />
    </section>
  );
};

export default AboutSection;
