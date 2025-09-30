
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-book-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
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

          {/* Lado direito com logo e elementos minimalistas */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-24">
              <div className="flex flex-col items-center gap-10">
                {/* Logo */}
                <img
                  src="/lovable-uploads/51ca6b6b-95b1-4314-bad6-7305c41b418e.png"
                  alt="Sollara Garden Logo"
                  className="h-40 md:h-48 w-auto"
                />

                {/* Barra minimalista */}
                <div className="h-1 w-40 bg-book-stone rounded-full" />

                {/* Marca GS (imagem) */}
                <div className="text-center">
                  <img
                    src="/lovable-uploads/gs-grupo-salha.png"
                    alt="GS Grupo Salha"
                    className="h-16 md:h-20 w-auto opacity-80"
                    loading="lazy"
                  />
                </div>

                {/* Barra inferior */}
                <div className="h-1 w-48 bg-book-stone/70 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Segundo bloco visual conforme anexo */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Faixa esquerda com logo em fundo escuro */}
          <div className="lg:col-span-3">
            <div className="h-full rounded-2xl bg-book-text flex items-start justify-center py-10 px-6">
              <img
                src="/lovable-uploads/51ca6b6b-95b1-4314-bad6-7305c41b418e.png"
                alt="Sollara Garden Logo"
                className="h-28 md:h-36 w-auto"
              />
            </div>
          </div>

          {/* Imagem grande com moldura sobre fundo brand */}
          <div className="lg:col-span-9 relative">
            <div className="rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
              <img
                src="/lovable-uploads/230d7ba0-f969-4982-91ec-6ad5f202cdcd.png"
                alt="Portaria Sollara Garden"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Shapes inferiores e assinatura GS */}
            <div className="mt-8 grid grid-cols-12 items-end gap-6">
              <div className="col-span-4 h-28 bg-book-stone/70 rounded"></div>
              <div className="col-span-3 h-24 bg-book-stone rounded"></div>
              <div className="col-span-5 flex flex-col items-end gap-4">
                <div className="h-1 w-56 bg-book-stone rounded-full"></div>
                <img
                  src="/lovable-uploads/gs-grupo-salha.png"
                  alt="GS Grupo Salha"
                  className="h-12 md:h-14 w-auto opacity-80"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
