import React, { useRef, useEffect, useState } from 'react';

interface GalleryItem {
  id: number;
  videoUrl: string;
}

const InstagramPostFrame: React.FC<{ 
  item: GalleryItem, 
  activeId: number | null, 
  setActiveId: (id: number | null) => void 
}> = ({ item, activeId, setActiveId }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isCurrentActive = activeId === item.id;

  useEffect(() => {
    if (videoRef.current) {
      if (isCurrentActive) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.muted = true;
      }
    }
  }, [isCurrentActive]);

  const handleTogglePlay = () => {
    if (isCurrentActive) {
      setActiveId(null);
    } else {
      setActiveId(item.id);
    }
  };

  return (
    <div className="relative w-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-3 shadow-2xl transition-all duration-500 hover:border-[#ff4d00]/30 group">
      {/* Top Header - Nome do arquivo dinâmico */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full border border-[#ff4d00]/30 bg-gradient-to-tr from-[#ff4d00] to-orange-200 p-[1px]">
             <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-[5px] font-black text-[#ff4d00]">MALF</span>
             </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-white tracking-tight leading-none">
              {item.videoUrl.split('/').pop()?.replace('.mp4', '')}
            </span>
            <span className="text-[7px] text-white/40 leading-none mt-0.5">Backstage Access</span>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div 
        className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black/40 border border-white/5 cursor-pointer"
        onClick={handleTogglePlay}
      >
        <video 
          ref={videoRef}
          src={item.videoUrl} 
          className={`w-full h-full object-cover transition-all duration-700 ${
            isCurrentActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-60'
          }`}
          loop 
          playsInline
          muted 
        />
        
        {/* Play Icon Overlay - Só aparece quando pausado */}
        {!isCurrentActive && (
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
        )}
      </div>

      {/* Footer Interaction Bar */}
      <div className="mt-3 px-1 flex items-center justify-between opacity-60">
        <div className="flex items-center gap-3">
          <button className="text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
          <button className="text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
        </div>
      </div>

      {/* Caption Mimicry */}
      <div className="mt-2.5 px-1">
        <div className="flex gap-2">
          <span className="text-[9px] font-black text-white">malf_midia</span>
          <span className="text-[9px] text-white/50 line-clamp-1">Transformando visão em realidade através do backstage.</span>
        </div>
      </div>
    </div>
  );
};

const BehindTheScenes: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const videoItems = [
    { id: 1, videoUrl: '/videos/backstage01.mp4' },
    { id: 2, videoUrl: '/videos/backstage02.mp4' },
    { id: 3, videoUrl: '/videos/backstage03.mp4' },
    { id: 4, videoUrl: '/videos/backstage04.mp4' }
  ];

  return (
    <div className="relative bg-transparent overflow-hidden min-h-screen py-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#ff4d00] text-xs uppercase tracking-widest mb-4 block font-bold font-mono">o processo invisível</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#eeeeee]">O NOSSO <span className="text-white/20">BACKSTAGE</span></h2>
        </div>
        
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 no-scrollbar snap-x snap-mandatory px-4 md:px-0">
          {videoItems.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[85vw] sm:w-[320px] lg:w-full snap-center">
              <InstagramPostFrame 
                item={item} 
                activeId={activeId} 
                setActiveId={setActiveId} 
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
};

export default BehindTheScenes;