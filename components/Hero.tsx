
import React from 'react';

interface HeroProps {
  content: any;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('works');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/5548999308899?text=Vim%20pelo%20site%20MALF%2C%20gostaria%20de%20um%20or%C3%A7amento...";

  // Garante que se a imagem do conteúdo for inválida ou vazia, use le o fallback corretamente sem exibir "broken image"
  const heroBg = content.images.hero_bg && content.images.hero_bg.length > 5 
    ? content.images.hero_bg 
    : "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920";

  return (
    <section className="relative h-screen flex flex-col bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10 pointer-events-none"></div>
        <img 
          src={heroBg} 
          className="w-full h-full object-cover grayscale opacity-50" 
          alt="" 
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920";
          }}
        />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] glow-orange opacity-20 -translate-y-1/2 pointer-events-none"></div>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-20 flex-1 container mx-auto px-6 md:px-10 flex flex-col justify-center">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-20">
          
          <div className="md:col-span-8 flex flex-col items-start reveal">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-8 hover:bg-white/10 hover:border-[#ff4d00]/50 transition-all group pointer-events-auto cursor-pointer"
            >
              <div className="w-2 h-2 bg-[#ff4d00] rounded-full animate-pulse group-hover:scale-125 transition-transform"></div>
              <span className="mono text-[10px] uppercase tracking-widest font-bold text-[#eeeeee]">
                {content.texts.hero_badge || "Iniciar meu projeto"}
              </span>
            </a>

            <h1 className="uppercase tracking-tighter leading-[0.85] w-full">
              <span className="block mb-4 text-white/90 font-light text-xl md:text-[1.6rem] lg:text-[1.8rem] tracking-normal normal-case">
                {content.texts.hero_h1_top || "Produção de conteúdo"}
              </span>
              
              <div className="flex flex-col font-black text-[2.8rem] md:text-[4.5rem] lg:text-[6rem]">
                <span className="text-white/40 block mb-1 text-[0.8em]">
                  {content.texts.hero_line_1 || "focada em"}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-[#ff4d00] block mb-1 drop-shadow-[0_0_20px_rgba(255,77,0,0.2)]">
                  {content.texts.hero_line_3 || "criatividade"}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-[#ff4d00] block drop-shadow-[0_0_20px_rgba(255,77,0,0.2)]">
                  {content.texts.hero_line_4 || "e qualidade"}
                </span>
              </div>
            </h1>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end md:text-right reveal" style={{ transitionDelay: '0.2s' }}>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-sm mb-10 leading-relaxed">
              {content.texts.hero_desc || "Vídeo, fotografia, social media e presença humana para marcas que precisam se diferenciar nas redes sociais."}
            </p>

            <button 
              onClick={scrollToNext}
              className="group relative flex items-center gap-4 bg-[#ff4d00] hover:bg-[#e63e00] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-2xl hover:shadow-[#ff4d00]/40"
            >
              <span className="tracking-widest text-sm uppercase">VER MAIS</span>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none z-30 opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,77,0,0.06),rgba(0,255,0,0.02),rgba(255,77,0,0.06))] bg-[length:100%_2px,3px_100%]"></div>
    </section>
  );
};

export default Hero;
