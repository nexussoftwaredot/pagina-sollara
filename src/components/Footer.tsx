
import React from 'react';
import FooterParticles from './effects/FooterParticles';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white py-12 relative overflow-hidden">
      {/* Adicionando o efeito de partículas flutuantes esmaecido */}
      <div className="absolute inset-0">
        <FooterParticles />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
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
              <p className="text-white text-lg font-semibold mb-2">
                Grupo Salha Empreendimentos
              </p>
            </div>
            
            <div className="border-t border-white/20 pt-8 space-y-2">
              <p className="text-white/90 text-sm">
                © {new Date().getFullYear()} Sollara Garden. Todos os direitos reservados.
              </p>
              <p className="text-white/80 text-xs">
                Desenvolvido por{' '}
                <a 
                  href="https://www.instagram.com/nexussoftware___" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-colors duration-200"
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
