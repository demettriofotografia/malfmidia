
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-black border-t border-white/5 relative">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-3xl font-bold tracking-tighter text-[#eeeeee]">
            MALF<span className="text-[#615c5a]">MIDIA</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="hover:text-[#ff4d00] transition-colors text-white/60">Instagram</a>
            <a href="#" className="hover:text-[#ff4d00] transition-colors text-white/60">Vimeo</a>
            <a href="#" className="hover:text-[#ff4d00] transition-colors text-white/60">LinkedIn</a>
            <a href="#" className="hover:text-[#ff4d00] transition-colors text-white/60">YouTube</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
          <p>© 2024 MALF MIDIA. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
