
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-luxury-brown-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/51ca6b6b-95b1-4314-bad6-7305c41b418e.png" 
                alt="Grupo Salha Logo"
                className="mx-auto h-32 md:h-40 w-auto"
              />
            </div>
            
            {/* Project Attribution */}
            <div className="mb-6">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-lg font-semibold mb-2">
                Grupo Salha Empreendimentos
              </p>
            </div>
            
            <div className="border-t border-white/20 pt-8 space-y-2">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Sollara Garden. Todos os direitos reservados.
              </p>
              <p className="text-white/60 text-xs">
                Desenvolvido por{' '}
                <a 
                  href="https://wa.me/5524992010616" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
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
