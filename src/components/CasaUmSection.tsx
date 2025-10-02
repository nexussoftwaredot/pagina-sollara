import React from 'react';

const CasaUmSection = () => {
  return (
    <section className="relative py-16 bg-book-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 space-y-10">
        {/* Primeira imagem */}
        <div className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
          <img
            src="/lovable-uploads/pagina1-casa.png"
            alt="Casa 1"
            className="w-full h-auto object-cover"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              const current = img.src;
              if (current.endsWith('.png')) {
                img.onerror = null;
                img.src = current.replace('.png', '.jpg');
                return;
              }
              if (current.endsWith('.jpg') || current.endsWith('.jpeg')) {
                img.onerror = null;
                img.src = current.replace(/\.jpe?g$/, '.png');
                return;
              }
              img.onerror = null;
              img.src = '/lovable-uploads/318e54c2-e94e-4b91-a4ed-5f6aeade3dbb.png';
            }}
          />
        </div>

        {/* Texto CASAS EXCLUSIVAS PARA PCD com ícone */}
        <div className="flex items-center justify-center gap-2 text-book-text">
          <span className="text-xl md:text-2xl font-bold">CASAS EXCLUSIVAS PARA PESSOAS COM DEFICIÊNCIA PCD</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 md:w-7 md:h-7 text-blue-600 fill-current">
            <path d="M192 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h-64l0 0H97.6c-19.6 0-35.1-17.9-31.3-37.1l18.1-92c3.5-17.8 19.1-30.9 37.3-30.9H304c17.7 0 32-14.3 32-32s-14.3-32-32-32H121.7C74.9 0 33.5 34.5 24.3 81L6.2 173C-10.6 233 35.5 288 97.6 288H160V352h16V224h64V384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H240z"/>
          </svg>
        </div>

        {/* Segunda imagem */}
        <div className="relative rounded-2xl overflow-hidden shadow-modern-lg border border-book-stone/40 bg-book-cream">
          <img
            src="/lovable-uploads/pagina2-casa.jpg"
            alt="Casa 2"
            className="w-full h-auto object-cover"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              const current = img.src;
              if (current.endsWith('.png')) {
                img.onerror = null;
                img.src = current.replace('.png', '.jpg');
                return;
              }
              if (current.endsWith('.jpg') || current.endsWith('.jpeg')) {
                img.onerror = null;
                img.src = current.replace(/\.jpe?g$/, '.png');
                return;
              }
              img.onerror = null;
              img.src = '/lovable-uploads/318e54c2-e94e-4b91-a4ed-5f6aeade3dbb.png';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CasaUmSection;

