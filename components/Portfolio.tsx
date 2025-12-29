
import React, { useRef, useState } from 'react';
import { VIDEO_WORKS } from '../constants';

const Portfolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div>
            <span className="mono text-[#ff4d00] text-xs uppercase tracking-[0.4em] font-black mb-4 block">
              PORTFÓLIO SELECIONADO
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
              NOSSOS <span className="text-white/20">TRABALHOS</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-[#ff4d00] transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-[#ff4d00] transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-[10%] no-scrollbar snap-x snap-mandatory pb-12"
      >
        {VIDEO_WORKS.map((work) => (
          <div 
            key={work.id}
            className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-center group relative"
            onMouseEnter={() => setHoveredId(work.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#111] border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-[#ff4d00]/30 group-hover:scale-[1.02]">
              {/* Background Video or Thumbnail */}
              {hoveredId === work.id ? (
                <video 
                  src={work.videoUrl} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover transition-opacity duration-1000 opacity-100"
                />
              ) : (
                <img 
                  src={work.thumbnail} 
                  alt={work.title}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                />
              )}

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="mono text-[#ff4d00] text-[10px] font-black tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-all delay-100">
                  {work.category}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight group-hover:text-white transition-colors">
                  {work.title}
                </h3>
              </div>

              {/* Play Button Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
        ))}
        
        {/* Placeholder para CTA de novos projetos */}
        <div className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-center">
          <div className="h-full aspect-video rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center p-8 text-center hover:border-[#ff4d00]/50 transition-colors group cursor-pointer"
               onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#ff4d00]/10 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="group-hover:text-[#ff4d00]"><path d="M12 5v14M5 12h14"/></svg>
            </div>
            <h4 className="text-white font-bold uppercase tracking-tight">Sua marca aqui</h4>
            <p className="text-white/40 text-xs mt-2">Clique para iniciar seu projeto</p>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Portfolio;
