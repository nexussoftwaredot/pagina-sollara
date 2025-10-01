import React from 'react';

const AcademiaMelhorSection = () => {
  return (
    <section className="relative py-16 bg-book-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-[#6b6361] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 md:p-10">
            <h2 className="lg:col-span-7 text-3xl md:text-5xl font-extrabold tracking-tight">EQUIPADA COM O MELHOR PARA VOCÊ</h2>
            <div className="lg:col-span-5 flex items-start justify-end">
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

            {/* Galeria de 3 imagens */}
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden bg-book-cream">
                <img
                  src="/lovable-uploads/academia1.png"
                  alt="Academia 1"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.onerror = null;
                    img.src = '/lovable-uploads/617c932f-d57d-47d8-b749-99ddfe60c989.png';
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-book-cream">
                <img
                  src="/lovable-uploads/academia2.png"
                  alt="Academia 2"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.onerror = null;
                    img.src = '/lovable-uploads/617c932f-d57d-47d8-b749-99ddfe60c989.png';
                  }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-book-cream">
                <img
                  src="/lovable-uploads/academia3.png"
                  alt="Academia 3"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.onerror = null;
                    img.src = '/lovable-uploads/617c932f-d57d-47d8-b749-99ddfe60c989.png';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademiaMelhorSection;


