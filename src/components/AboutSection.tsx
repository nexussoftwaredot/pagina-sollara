
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

        {/* Blocos adicionais conforme ordem dos anexos */}
        {[
          { title: 'CONVIVÊNCIA', img: '/lovable-uploads/617c932f-d57d-47d8-b749-99ddfe60c989.png', text: 'Descubra uma área de lazer completa em um condomínio privado: Piscina, quadras para beach tennis e esportes diversos, salão de festas integrado com playground, academia equipada – tudo planejado para oferecer diversão, descanso e bem-estar todos os dias.' },
          { title: 'INTERIOR', img: '/lovable-uploads/230d7ba0-f969-4982-91ec-6ad5f202cdcd.png', text: 'Pensar no futuro é também imaginar cada detalhe do lugar onde você vai viver os melhores momentos da sua vida.' },
          { title: 'ÁREA 38,25 m2', img: '/lovable-uploads/3e057a4c-5472-43d1-9559-aed684c23b2b.png' },
          { title: 'MÁXIMO EM CONFORTO E COMODIDADE', img: '/lovable-uploads/ef880c3a-6fab-4c98-8178-ef3430ef5ea9.png' },
          { title: 'ÁREA 65,70 m2', img: '/lovable-uploads/40772c9a-33d3-43d2-bc8a-b4cd636f28ae.png' },
          { title: 'INSTITUCIONAL', img: '/lovable-uploads/7e70fce2-fd47-4b88-937f-99b337b7e622.png' },
          { title: 'ÁREA 81,00 m2', img: '/lovable-uploads/d912767b-33c2-4fda-bc3a-e1a7d4c736f8.png' },
          { title: 'CASAS DE 3 QUARTOS', img: '/lovable-uploads/51ca6b6b-95b1-4314-bad6-7305c41b418e.png' },
          { title: 'CASAS DE 2 QUARTOS', img: '/lovable-uploads/ab0c69b5-1548-40f5-9283-148fe297f7f6.png' },
          { title: 'ACADEMIA COMPLETA', img: '/lovable-uploads/e56958fd-6361-49ff-85dc-d56fe92fb9fb.png' },
          { title: 'QUADRAS', img: '/lovable-uploads/6f379a2e-244d-4691-8766-fc92f3f7e0ad.png' },
          { title: 'INTERIORES', img: '/lovable-uploads/01ff5adb-8b94-4939-9f7e-69e308a4e950.png' },
          { title: 'SEU RESORT PARTICULAR', img: '/lovable-uploads/d67a1c57-1d4c-4edd-8dc6-4e624a75f761.png' },
          { title: 'ÁREA DE LAZER COMPLETA', img: '/lovable-uploads/de85cc7c-baa4-4c09-a3f4-be28b3ded2d2.png' },
          { title: 'SALÃO DE FESTAS / PLAYGROUND', img: '/lovable-uploads/daec1aa2-95fd-4d7d-ad79-83d3e641f7f2.png' },
        ].map((b, i) => (
          <div key={`attach-${i}`} className="mt-20">
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="rounded-2xl bg-book-text p-8 md:p-12 shadow-modern border border-book-stone/30">
                    <h2 className="text-book-cream text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{b.title}</h2>
                    {b.text && <p className="text-book-cream/90 text-lg leading-relaxed">{b.text}</p>}
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
                    <img src={b.img} alt={b.title} className="w-full h-auto object-cover" loading="lazy" />
                    <img
                      src="/lovable-uploads/gs-grupo-salha.png"
                      alt="GS Grupo Salha"
                      className="absolute right-4 bottom-4 h-10 w-auto opacity-80"
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
          </div>
        ))}
      </div>

      {/* Logotipo GS no canto inferior direito da seção */}
      <img
        src="/lovable-uploads/gs-grupo-salha.png"
        alt="GS Grupo Salha"
        className="absolute right-6 bottom-6 h-14 md:h-16 w-auto opacity-80"
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
            src="/lovable-uploads/230d7ba0-f969-4982-91ec-6ad5f202cdcd.png"
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
              className="h-12 md:h-14 w-auto opacity-80"
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
            <div className="absolute bottom-0 right-0 w-full rounded-2xl bg-book-stone p-6 shadow-modern flex items-center justify-center">
              <img
                src="/lovable-uploads/gs-grupo-salha.png"
                alt="GS Grupo Salha"
                className="h-14 w-auto opacity-80"
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

      {/* Seção: Imagem ampla com GS no canto inferior direito (1ª do novo par) */}
      <div className="mt-20 container mx-auto px-4 md:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
          <img
            src="/lovable-uploads/617c932f-d57d-47d8-b749-99ddfe60c989.png"
            alt="Sollara Garden - Vista Geral"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          {/* Decorações à direita */}
          <div className="hidden md:block absolute top-6 right-6 h-28 w-56 bg-book-text/80 rounded" />
          <div className="hidden md:block absolute top-40 right-6 h-1 w-40 bg-book-stone rounded-full" />
          {/* Bloco GS no rodapé */}
          <div className="absolute bottom-0 right-0 w-64 md:w-80 bg-book-text p-6 rounded-tl-2xl shadow-modern">
            <div className="flex flex-col items-end gap-3">
              <img
                src="/lovable-uploads/gs-grupo-salha.png"
                alt="GS Grupo Salha"
                className="h-10 md:h-12 w-auto opacity-80"
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
            <div className="absolute bottom-0 right-0 w-64 bg-book-stone p-5 rounded-tl-2xl shadow-modern flex items-center justify-center">
              <img
                src="/lovable-uploads/gs-grupo-salha.png"
                alt="GS Grupo Salha"
                className="h-10 md:h-12 w-auto opacity-80"
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
