
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-book-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Painel esquerdo escuro com conteúdo */}
          <div className="lg:col-span-8">
            <div className="bg-book-text rounded-2xl p-8 md:p-12 shadow-modern border border-book-stone/30">
              <div className="space-y-6 md:space-y-8">
                <h2 className="font-sf-pro text-4xl md:text-5xl font-extrabold leading-tight text-book-cream">
                  UM NOVO
                  <br />
                  JEITO DE VIVER
                </h2>

                <p className="uppercase tracking-widest text-book-cream/70 font-semibold">
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

          {/* Coluna direita removida (deixar apenas logo flutuante no canto) */}
          <div className="lg:col-span-4"></div>

          {/* Logo GS no canto inferior direito deste bloco */}
          <img
            src="/lovable-uploads/gs-grupo-salha.png"
            alt="GS Grupo Salha"
            className="absolute bottom-4 right-4 h-12 md:h-14 w-auto opacity-80"
            loading="lazy"
          />
        </div>

        {/* Segundo bloco visual conforme anexo */}
        <div className="mt-16 relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Imagem grande com moldura sobre fundo brand */}
          <div className="lg:col-span-12 relative">
            <div className="rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
              <img
                src="/lovable-uploads/230d7ba0-f969-4982-91ec-6ad5f202cdcd.png"
                alt="Portaria Sollara Garden"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Logo GS no canto inferior direito deste bloco */}
            <img
              src="/lovable-uploads/gs-grupo-salha.png"
              alt="GS Grupo Salha"
              className="absolute -bottom-4 right-4 h-12 md:h-14 w-auto opacity-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
