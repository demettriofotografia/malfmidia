
import React, { useState } from 'react';

interface WorksCarouselProps {
  content: any;
}

const WorksCarousel: React.FC<WorksCarouselProps> = ({ content }) => {
  // hoveredIndex como null significa que nenhuma guia da direita está aberta.
  // Nesse estado, a guia da esquerda (Método) fica aberta por padrão.
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const defaultSteps = [
    {
      number: "01",
      title: 'Briefing',
      description: 'Tradução de objetivos em um roteiro estratégico e visual claro. Definimos a narrativa que irá conduzir toda a produção.',
      details: 'Roteirização, Storyboarding, Alinhamento Estratégico.',
      key: 'step_briefing'
    },
    {
      number: "02",
      title: 'Criação',
      description: 'Execução de alto impacto. Captura técnica com equipamentos de cinema e direção de cena profissional.',
      details: 'Produção Audiovisual, Fotografia Still, Direção Técnica.',
      key: 'step_criacao'
    },
    {
      number: "03",
      title: 'Edição',
      description: 'Refino estético e rítmico. Color grading avançado e sound design que cria uma experiência sensorial imersiva.',
      details: 'Montagem Dinâmica, Color Grading, Sound FX.',
      key: 'step_edicao'
    },
    {
      number: "04",
      title: 'Entrega',
      description: 'Material finalizado e otimizado. Suporte estratégico para o lançamento e escala do conteúdo.',
      details: 'Exportação Multi-Formato, Estratégia, Análise de Dados.',
      key: 'step_entrega'
    },
  ];

  return (
    <section className="relative bg-transparent overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none -translate-y-[1px]">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0H1440V20C1440 20 1260 20 1100 20C940 20 860 80 720 80C580 80 500 20 340 20C180 20 0 20 0 20V0Z" fill="black"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-16">
        <div className="flex flex-col items-center text-center mb-12 reveal">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none text-[#eeeeee]">
            NOSSO <span className="text-[#ff4d00]">MÉTODO</span>
          </h2>
        </div>
      </div>

      <div 
        className="relative w-full h-[700px] md:h-[720px] flex flex-col md:flex-row border-y border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        
        {/* GUIA DO MÉTODO (Abre se hoveredIndex for null, fecha se houver um hover na direita) */}
        <div 
          className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] border-r border-white/10 overflow-hidden ${
            hoveredIndex === null ? 'flex-[10] md:flex-[20] bg-[#0a0a0a]' : 'flex-[1] md:flex-[2.5] bg-[#050505]'
          }`}
        >
          {/* ESTADO FECHADO (Vertical - Exibido quando uma guia da direita está aberta) */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 z-10 ${hoveredIndex !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="rotate-180 [writing-mode:vertical-lr] whitespace-nowrap">
              <h3 className="uppercase font-black text-white/30 tracking-[0.2em] text-3xl md:text-4xl lg:text-5xl">MÉTODO</h3>
            </div>
          </div>

          {/* ESTADO ABERTO (Horizontal - Exibido por padrão) */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-700 z-20 ${hoveredIndex === null ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-[#ff4d00]/50"></div>
            <h3 className="text-white font-black uppercase text-xl md:text-3xl lg:text-4xl tracking-tighter leading-tight text-center relative z-10">
              Conheça nosso <br/>
              <span className="text-[#ff4d00]">método de criação</span> <br/>
              de conteúdo
            </h3>
            <div className="mt-12 opacity-30 flex items-center gap-4">
               <div className="w-12 h-[1px] bg-white/50"></div>
               <span className="mono text-[10px] tracking-[0.5em] text-white">EXPLORE</span>
               <div className="w-12 h-[1px] bg-white/50"></div>
            </div>
          </div>
        </div>

        {/* GUIAS INTERATIVAS À DIREITA */}
        <div className="flex-[30] flex flex-col md:flex-row h-full overflow-hidden">
          {defaultSteps.map((step, i) => {
            const isHovered = hoveredIndex === i;
            const imgKey = `works_${step.number}`;
            const imgUrls = [
              "https://images.unsplash.com/photo-1512314889357-e157c22f938d", 
              "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4", 
              "https://images.unsplash.com/photo-1536240478700-b869070f9279", 
              "https://images.unsplash.com/photo-1551503766-ac63dfa6401c"
            ];
            const currentImg = content.images[imgKey] || `${imgUrls[i]}?auto=format&fit=crop&q=80&w=1200`;
            
            return (
              <div 
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                className={`relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden cursor-pointer border-white/5 ${
                  isHovered ? 'flex-[10] md:flex-[20]' : 'flex-[1] md:flex-[2.5] border-r'
                } h-full group`}
              >
                {/* ESTADO FECHADO (Horizontal no Mobile, Vertical no Desktop) */}
                <div className={`absolute inset-0 flex flex-row md:flex-col items-center justify-between px-8 py-0 md:py-12 transition-opacity duration-500 z-10 ${isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <div className="absolute inset-0 z-0">
                    <img src={currentImg} className="w-full h-full object-cover grayscale opacity-10" alt="" />
                    <div className="absolute inset-0 bg-black/60"></div>
                  </div>
                  <div className="relative z-10 flex flex-row md:flex-col items-center h-full justify-between w-full">
                    {/* Número à esquerda no mobile */}
                    <span className="mono text-white/10 md:text-white/5 font-black text-4xl md:text-8xl tracking-tighter select-none">{step.number}</span>
                    
                    {/* Título na horizontal no mobile, vertical no desktop */}
                    <div className="md:rotate-180 md:[writing-mode:vertical-lr] whitespace-nowrap md:mb-12">
                      <h3 className="uppercase font-black text-white/30 tracking-[0.1em] text-lg md:text-4xl lg:text-5xl">
                        {content.texts[`${step.key}_title`] || step.title}
                      </h3>
                    </div>
                    
                    {/* Divisor apenas no desktop */}
                    <div className="hidden md:block w-[1px] h-16 bg-white/20"></div>
                  </div>
                </div>

                {/* ESTADO ABERTO (Horizontal/Detalhado) */}
                <div className={`absolute inset-0 flex flex-row h-full w-full transition-all duration-700 ease-out z-20 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  
                  {/* IMAGEM À ESQUERDA (Vertical no Mobile, Central no Desktop via Order) */}
                  <div className="w-[45%] md:w-[35%] h-full relative overflow-hidden bg-black border-r md:border-x border-white/5 order-1 md:order-2">
                    <img src={currentImg} className={`w-full h-full object-cover transition-transform duration-[4000ms] ${isHovered ? 'scale-100' : 'scale-125'}`} alt={step.title} />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                  </div>

                  {/* CONTAINER DE TEXTO À DIREITA NO MOBILE / DIVIDIDO NO DESKTOP */}
                  <div className="w-[55%] md:w-[65%] h-full flex flex-col md:flex-row order-2 md:order-none">
                    
                    {/* PARTE BRANCA (Título - Em cima no Mobile, Esquerda no Desktop) */}
                    <div className="w-full md:w-[30.7%] h-[30%] md:h-full bg-[#eeeeee] flex flex-col items-center justify-center text-black relative order-1 md:order-1">
                      <div className="absolute top-2 md:top-16">
                         <span className="mono text-[8px] md:text-[10px] text-[#ff4d00] font-bold tracking-[0.4em] uppercase">Passo {step.number}</span>
                      </div>
                      <div className="md:rotate-180 md:[writing-mode:vertical-lr] whitespace-nowrap py-2 md:py-12">
                        <h3 className="text-xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-center">
                          {content.texts[`${step.key}_title`] || step.title}
                        </h3>
                      </div>
                    </div>

                    {/* PARTE PRETA (DESCRIÇÃO - Embaixo no Mobile, Direita no Desktop) */}
                    <div className="w-full md:w-[69.3%] h-[70%] md:h-full bg-[#030303] flex flex-col justify-center px-6 md:px-16 lg:px-20 text-[#eeeeee] overflow-hidden order-2 md:order-3">
                      <div className="space-y-3 md:space-y-8">
                        <p className="text-white/70 text-[10px] md:text-base lg:text-lg leading-relaxed font-light max-w-lg line-clamp-5 md:line-clamp-none">
                          {content.texts[`${step.key}_desc`] || step.description}
                        </p>
                        <div className="pt-2 md:pt-8 border-t border-white/10">
                          <p className="text-[8px] lg:text-[14px] uppercase tracking-[0.2em] text-[#ff4d00] font-black leading-tight">
                            {content.texts[`${step.key}_details`] || step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorksCarousel;
