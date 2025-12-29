
import React, { useEffect, useState, useMemo } from 'react';

const BRAND_NAMES = [
  "Realeza Folheados", "Pimenta Burguer", "ChilliBeans", "Pizzaria Pietro", 
  "Mec", "Kuerpo Jeans", "Bobs", "Dr Marino", "Magnólia", "Afettue", 
  "Aconchego dos pássaros", "Brechó cota", "Pimenta Pasteis", "UNYGÁS", 
  "Mart's Burguer", "Parma Sushi", "Padaria ferrari"
];

const BRAND_LINKS: Record<string, string> = {
  "Bobs": "https://www.instagram.com/p/DS0A1OsDhcK/",
  "ChilliBeans": "https://www.instagram.com/p/DSaw9K6EkBR/",
  "Padaria ferrari": "https://www.instagram.com/p/DSX59IcETbI/",
  "Magnólia": "https://www.instagram.com/p/DLSBhXGu_hU/",
  "Pimenta Burguer": "https://www.instagram.com/p/DIzilYgx_Em/",
  "Brechó cota": "https://www.instagram.com/p/DI7MB32xL2r/",
  "Pimenta Pasteis": "https://www.instagram.com/p/DG9II4vRDgf/",
  "UNYGÁS": "https://www.instagram.com/p/DFbVr9Ax6Mc/",
  "Mart's Burguer": "https://www.instagram.com/p/DCfCZPuReLa/",
  "Parma Sushi": "https://www.instagram.com/p/C8krT-8x8E_/",
  "Mec": "https://www.instagram.com/p/DMsPSR3say-/",
  "Realeza Folheados": "https://www.instagram.com/p/DSLPpX_Dimf/",
  "Dr Marino": "https://www.instagram.com/p/DRsTkb1EZ8Z/"
};

const BrandsCarousel: React.FC = () => {
  const [shuffledBrands, setShuffledBrands] = useState<string[]>([]);

  useEffect(() => {
    // Mantém a ordem solicitada ou embaralha se preferir, 
    // mas o usuário enviou uma lista específica, vou apenas usá-la.
    setShuffledBrands([...BRAND_NAMES]);
  }, []);

  // Duplicamos a lista para criar o efeito de scroll infinito sem saltos
  const listToRender = useMemo(() => [...shuffledBrands, ...shuffledBrands], [shuffledBrands]);

  if (shuffledBrands.length === 0) return null;

  return (
    <section className="relative py-10 bg-black border-y border-white/5 overflow-hidden group">
      {/* Título com fonte e tamanho idênticos ao badge 'POWER & INFLUENCE' */}
      <div className="container mx-auto px-6 mb-4 text-center relative z-20">
        <h2 className="mono text-white text-[10px] uppercase tracking-[0.4em] font-black mb-1 block opacity-80">
          MARCAS QUE JÁ TRABALHAMOS
        </h2>
        <div className="w-12 h-[1px] bg-[#ff4d00] mx-auto mt-4 opacity-40"></div>
      </div>

      {/* Máscaras de Gradiente Laterais para suavizar o carrossel */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

      {/* Ticker Container */}
      <div className="flex overflow-hidden select-none relative z-0">
        <div className="flex animate-marquee whitespace-nowrap py-6 items-center">
          {listToRender.map((brand, idx) => {
            const brandLink = BRAND_LINKS[brand];
            return (
              <React.Fragment key={`${brand}-${idx}`}>
                <div 
                  className="flex items-center justify-center px-6 md:px-10 transition-all duration-500"
                >
                  <div className="relative group/logo">
                    {brandLink ? (
                      <a 
                        href={brandLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-2xl md:text-4xl font-black text-white/10 uppercase tracking-tighter transition-all duration-700 cursor-pointer group-hover/logo:text-white group-hover/logo:scale-105 inline-block"
                        style={{ filter: 'drop-shadow(0 0 0px transparent)' }}
                      >
                        {brand}
                      </a>
                    ) : (
                      <span 
                        className="text-2xl md:text-4xl font-black text-white/10 uppercase tracking-tighter transition-all duration-700 cursor-default group-hover/logo:text-white group-hover/logo:scale-105 inline-block"
                        style={{ filter: 'drop-shadow(0 0 0px transparent)' }}
                      >
                        {brand}
                      </span>
                    )}
                    
                    {/* Destaque ao redor das letras via pseudo-elemento ou shadow inline */}
                    <style>{`
                      .group/logo:hover span, .group/logo:hover a {
                        filter: drop-shadow(0 0 8px rgba(255, 77, 0, 0.8)) drop-shadow(0 0 2px rgba(255, 77, 0, 1));
                      }
                    `}</style>
                  </div>
                </div>
                
                {/* Separador Laranja Desfocado */}
                <div className="text-[#ff4d00] font-light text-xl md:text-3xl opacity-30 blur-[1.5px] select-none">
                  |
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandsCarousel;
