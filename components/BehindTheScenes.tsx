import React, { useRef, useEffect } from 'react';

// Interface mantida para compatibilidade interna
interface GalleryItem {
  id: number;
  videoUrl: string;
}

const InstagramPostFrame: React.FC<{ item: GalleryItem }> = ({ item }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="relative w-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-3 shadow-2xl transition-all duration-500 hover:border-[#ff4d00]/30 group">
      {/* Top Header Mockup - Mantido Identico */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full border border-[#ff4d00]/30 bg-gradient-to-tr from-[#ff4d00] to-orange-200 p-[1px]">
             <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-[5px] font-black text-[#ff4d00]">MALF</span>
             </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-white tracking-tight leading-none">malf_midia</span>
            <span className="text-[7px] text-white/40 leading-none mt-0.5">Backstage Access</span>
          </div>
        </div>
        <div className="flex gap-0.5">
          <div className="w-0.5 h-0.5 rounded-full bg-white/30"></div>
          <div className="w-0.5 h-0.5 rounded-full bg-white/30"></div>
          <div className="w-0.5 h-0.5 rounded-full bg-white/30"></div>
        </div>
      </div>

      {/* Main Content Container - Onde o Vídeo Entra */}
      <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black/40 border border-white/5">
        <video 
          ref={videoRef}
          src={item.videoUrl} 
          className="w-full h-full object-cover transition-all duration-700 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" 
          autoPlay 
          muted 
          loop 
          playsInline
        />
        
        {/* Play Icon Overlay - Mantido */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-0.5"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>

        {/* Brand Overlay - Mantido */}
        <div className="absolute bottom-4 left-4 pointer-events-none translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="block text-white font-black text-[10px] uppercase tracking-tighter leading-none mb-0.5">PRODUÇÃO</span>
          <span className="block text-[#ff4d00] font-black text-[8px] uppercase tracking-widest leading-none">MALF MIDIA</span>
        </div>
      </div>

      {/* Footer Interaction Bar - Mantido */}
      <div className="mt-3 px-1 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="text-white/60"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
          <button className="text-white/60"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
          <button className="text-white/60"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
        </div>
        <button className="text-white/60"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></button>
      </div>

      {/* Caption - Mantido */}
      <div className="mt-2.5 px-1">
        <div className="flex gap-2">
          <span className="text-[9px] font-black text-white">malf_midia</span>
          <span className="text-[9px] text-white/50 line-clamp-1">Por trás das câmeras: transformando visão em realidade.</span>
        </div>
      </div>
    </div>
  );
};

const BehindTheScenes: React.FC = () => {
  // Chamando seus vídeos renomeados aqui
  const videoItems = [
    { id: 1, videoUrl: '/videos/backstage01.mp4' },
    { id: 2, videoUrl: '/videos/backstage02.mp4' },
    { id: 3, videoUrl: '/videos/backstage03.mp4' },
    { id: 4, videoUrl: '/videos/backstage04.mp4' }
  ];

  return (
    <div className="relative bg-transparent overflow-hidden min-h-screen">
      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#ff4d00] text-xs uppercase tracking-widest mb-4 block font-bold font-mono">o processo invisível</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#eeeeee]">O NOSSO <span className="text-white/20">BACKSTAGE</span></h2>
        </div>
        
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 lg:gap-8 no-scrollbar snap-x snap-mandatory px-4 md:px-0">
          {videoItems.map((item, i) => (
            <div key={item.id} className="flex-shrink-0 w-[80vw] sm:w-[320px] lg:w-full snap-center">
              <InstagramPostFrame item={item} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default BehindTheScenes;