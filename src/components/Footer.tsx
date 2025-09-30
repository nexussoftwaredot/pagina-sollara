
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-book-stone text-[color:#6b6361] py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/gs-grupo-salha.png" 
                alt="Grupo Salha Logo"
                className="mx-auto h-36 md:h-44 w-auto"
              />
            </div>
            
            {/* Project Attribution */}
            <div className="mb-6">
              <p className="text-[color:#6b6361] text-lg font-semibold mb-2">
                Grupo Salha Empreendimentos
              </p>
            </div>
            
            <div className="border-t border-[color:#6b6361]/20 pt-8 space-y-2">
              <p className="text-[color:#6b6361] text-sm">
                © {new Date().getFullYear()} Sollara Garden. Todos os direitos reservados.
              </p>
              <p className="text-[color:#6b6361] text-xs">
                Desenvolvido por{' '}
                <a 
                  href="https://wa.me/5524992010616" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[color:#6b6361] hover:opacity-80 transition-colors duration-200"
                >
                  Nexus Hub Software
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
