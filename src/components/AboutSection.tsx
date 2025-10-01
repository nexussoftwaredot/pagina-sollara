
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
            <div className="h-64 w-full bg-book-stone/60 rounded shadow-modern p-6 flex flex-col justify-between items-end">
              <div className="text-right leading-tight">
                <p className="text-[color:#eeeae5] text-3xl font-extrabold">Seu lar</p>
                <p className="text-[color:#eeeae5] text-3xl font-extrabold">Seu espaço</p>
                <p className="text-[color:#eeeae5] text-3xl font-extrabold">Seu Lugar</p>
              </div>
              <p className="text-right text-[color:#591e1c] font-semibold tracking-wider">EM BARRA MANSA</p>
            </div>
          </div>
        </div>

        {/* Seções anexas removidas a pedido; mantendo apenas os blocos anteriores */}
      </div>

      {/* Logotipo GS no canto inferior direito da seção */}
      <img
        src="/lovable-uploads/gs-grupo-salha.png"
        alt="GS Grupo Salha"
        className="absolute right-6 bottom-6 h-28 md:h-32 w-auto opacity-80"
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
      {/* Seção abaixo com página do anexo (imagem enquadrada) */}
      <div className="mt-16 container mx-auto px-4 md:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
          <img
            src="/lovable-uploads/portaria.jpg"
            alt="Sollara Garden - Portaria"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          {/* Barra e assinatura no rodapé da imagem */}
          <div className="absolute right-6 bottom-6 flex flex-col items-end gap-3">
            <div className="h-1 w-56 bg-book-stone/80 rounded-full"></div>
              <img
                src="/lovable-uploads/gs-grupo-salha.png"
                alt="GS Grupo Salha"
                className="h-28 md:h-32 w-auto opacity-80"
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

      {/* Bloco "O LOCAL" conforme anexo */}
      <div className="mt-20 container mx-auto px-4 md:px-8">
        <div className="mb-10">
          <h2 className="text-book-text text-4xl md:text-5xl font-extrabold tracking-tight">O LOCAL</h2>
          <p className="mt-6 text-book-text text-xl md:text-2xl font-bold tracking-wide">
            300 METROS DA RODOVIA PRESIDENTE DUTRA.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-9">
            <div className="rounded-2xl bg-book-text p-8 md:p-12 shadow-modern">
              <p className="text-book-cream text-xl md:text-2xl leading-relaxed">
                Com uma excelente localização, em meio a natureza, o condomínio <span className="font-semibold">SOLLARA GARDEN</span> fica a 300m da via Dutra, no bairro nova esperança.
              </p>
              <div className="mt-6 h-1 w-56 bg-book-stone/80 rounded-full ml-auto"></div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-3 relative min-h-[220px]">
            <div className="h-1 w-40 bg-book-stone rounded-full absolute top-6 right-0" />
            <div className="h-24 w-full bg-book-stone/60 rounded absolute bottom-20 right-0" />
            <div className="absolute bottom-0 right-0 w-full rounded-2xl bg-[#6b6361] p-6 shadow-modern flex items-center justify-center">
              <img
                src="/lovable-uploads/gs-grupo-salha.png"
                alt="GS Grupo Salha"
                className="h-28 md:h-32 w-auto opacity-80"
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

        {/* CTA WhatsApp abaixo da seção O LOCAL */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/5524999385575"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 relative overflow-hidden bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold py-3 px-6 rounded-2xl text-base md:text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 border-2 border-[#25D366]/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.52 5.81L0 24l6.34-1.66A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.19-3.48-8.52zM12 21.82c-1.97 0-3.8-.58-5.33-1.58l-.38-.24-3.76.98.99-3.66-.25-.38A9.82 9.82 0 012.18 12C2.18 6.58 6.58 2.18 12 2.18c2.62 0 5.01 1.02 6.79 2.81A9.56 9.56 0 0121.82 12c0 5.42-4.4 9.82-9.82 9.82zm5.61-7.36c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/>
            </svg>
            FALE DIRETO COM A CONSTRUTORA
          </a>
        </div>
      </div>

      {/* Seção: Imagem ampla com GS no canto inferior direito (1ª do novo par) */}
      <div className="mt-20 container mx-auto px-4 md:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
          <img
            src="/lovable-uploads/rua.jpg"
            alt="Sollara Garden - Vista Geral"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          {/* Decoração superior direita removida conforme solicitação */}
          <div className="hidden md:block absolute top-40 right-6 h-1 w-40 bg-book-stone rounded-full" />
          {/* Bloco GS no rodapé */}
          <div className="absolute bottom-0 right-0 w-64 md:w-80 bg-book-text p-6 rounded-tl-2xl shadow-modern">
            <div className="flex flex-col items-end gap-3">
              <img
                src="/lovable-uploads/gs-grupo-salha.png"
                alt="GS Grupo Salha"
                className="h-28 md:h-32 w-auto opacity-80"
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

      {/* Seção: SOLLARA GARDEN texto em faixa escura (2ª do novo par) */}
      <div className="mt-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Faixa escura com conteúdo */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-book-text p-8 md:p-12 shadow-modern border border-book-stone/30">
              <h2 className="text-book-cream text-5xl font-extrabold mb-10 tracking-tight">SOLLARA GARDEN</h2>
              <div className="space-y-6 text-book-cream text-xl leading-relaxed">
                <p>
                  É o mais novo projeto do <span className="font-semibold">GS EMPREENDIMENTOS</span>.
                </p>
                <p>
                  Planejado em uma região de excelente localização de Barra Mansa, o <span className="font-semibold">SOLLARA GARDEN</span> é um condomínio residencial privado de casas não geminadas que apresenta em sua essência: Modernidade, conforto e bem-estar.
                </p>
                <p>
                  Definitivamente um novo marco para a cidade de Barra Mansa, uma estrutura diferenciada de moradia ao espaço urbano.
                </p>
              </div>
            </div>
          </div>
          {/* Coluna direita com elementos minimalistas e GS */}
          <div className="lg:col-span-4 relative min-h-[280px]">
            <div className="h-40 w-64 bg-book-text/80 rounded absolute top-6 right-0" />
            <div className="h-1 w-40 bg-book-stone rounded-full absolute top-48 right-0" />
            <div className="h-36 w-56 bg-book-stone/70 rounded absolute bottom-24 right-0" />
            <div className="absolute bottom-0 right-0 w-64 bg-[#6b6361] p-5 rounded-tl-2xl shadow-modern flex items-center justify-center">
              <img
                src="/lovable-uploads/gs-grupo-salha.png"
                alt="GS Grupo Salha"
                className="h-28 md:h-32 w-auto opacity-80"
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

export default AboutSection;
