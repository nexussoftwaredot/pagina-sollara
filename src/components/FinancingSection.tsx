
import React from 'react';

const FinancingSection = () => {
  return (
    <section className="py-12 bg-book-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-extrabold text-book-text mb-2 tracking-tight">
              PREÇO PROMOCIONAL DE PRÉ LANÇAMENTO
            </h2>
            <p className="text-3xl md:text-4xl text-book-text font-extrabold">
              PRIMEIRAS UNIDADES A PARTIR DE <span className="text-green-600">R$ 299 MIL</span>
            </p>
            <p className="text-3xl md:text-4xl text-book-text font-extrabold">
              COM PARCELAS A PARTIR DE <span className="text-green-600">R$ 1.600,00</span>
            </p>
            <div className="w-32 h-1 bg-book-stone mx-auto my-6"></div>
            <p className="text-3xl md:text-4xl text-book-text font-extrabold">
              ENTRADA PARCELADA DIRETO COM A CONSTRUTORA
            </p>
          </div>

          <div className="animate-fade-in max-w-4xl mx-auto">
            {/* Financiamento Caixa */}
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-extrabold text-book-text mb-2">
                FINANCIAMENTO CAIXA ECONOMICA FEDERAL
              </h3>
              <p className="text-3xl md:text-4xl text-book-text font-extrabold">
                TAXAS E CONDIÇOES EXCLUSIVAS
              </p>
            </div>

            {/* Separador */}
            <div className="flex justify-center my-6">
              <div className="w-16 h-0.5 bg-book-stone"></div>
            </div>

            {/* FGTS */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-book-text mb-2">
                UTILIZE SEU FGTS NO FINANCIAMENTO
              </h3>
              {/* CTA WhatsApp */}
              <div className="mt-6">
                <a
                  href="https://wa.me/5524999385575"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 relative overflow-hidden bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold py-3 px-6 rounded-2xl text-base md:text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 border-2 border-[#25D366]/50"
                >
                  {/* WhatsApp icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.52 5.81L0 24l6.34-1.66A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.19-3.48-8.52zM12 21.82c-1.97 0-3.8-.58-5.33-1.58l-.38-.24-3.76.98.99-3.66-.25-.38A9.82 9.82 0 012.18 12C2.18 6.58 6.58 2.18 12 2.18c2.62 0 5.01 1.02 6.79 2.81A9.56 9.56 0 0121.82 12c0 5.42-4.4 9.82-9.82 9.82zm5.61-7.36c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/>
                  </svg>
                  FALE DIRETO COM A CONSTRUTORA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;
