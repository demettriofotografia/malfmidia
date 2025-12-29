
import React from 'react';

const BackgroundTexture: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#020202]">
      {/* Camada de Gride Técnica */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      {/* Textos de Marketing & Métricas - Espalhados */}
      <div className="absolute top-[5%] left-[2%] text-[12vw] font-black text-white/[0.03] leading-none uppercase select-none">
        MARKETING
      </div>
      <div className="absolute top-[35%] right-[-2%] text-[10vw] font-black text-[#ff4d00]/[0.04] -rotate-3 leading-none uppercase">
        ENGAGEMENT
      </div>
      <div className="absolute bottom-[15%] left-[-1%] text-[15vw] font-black text-white/[0.02] rotate-1 leading-none uppercase">
        VIRAL
      </div>

      {/* Elementos de Redes Sociais e Métricas (SVG) */}
      <div className="absolute top-[20%] right-[10%] opacity-20">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="0.5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      </div>
      
      <div className="absolute bottom-[40%] left-[5%] opacity-10 rotate-12">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
        </svg>
      </div>

      {/* Gráficos de Crescimento (Métricas) */}
      <svg className="absolute top-[50%] left-0 w-full h-96 opacity-10" viewBox="0 0 1440 400">
        <path 
          d="M0 350 L200 300 L400 320 L600 200 L800 250 L1000 100 L1200 150 L1440 50" 
          stroke="#ff4d00" 
          strokeWidth="2" 
          fill="none" 
          strokeDasharray="10,10"
          className="metric-line"
        />
        <circle cx="1000" cy="100" r="8" fill="#ff4d00" className="animate-pulse" />
        <text x="1020" y="95" fill="#ff4d00" fontSize="24" className="mono font-bold">+1.2M VIEWS</text>
      </svg>

      {/* Elementos de Fotografia (Apenas Regra dos Terços, sem bordas confusas) */}
      <div className="absolute inset-0 opacity-10">
        {/* Regra dos terços */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-white/10"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-white/10"></div>
        <div className="absolute left-1/3 top-0 h-full w-px bg-white/10"></div>
        <div className="absolute left-2/3 top-0 h-full w-px bg-white/10"></div>
      </div>

      {/* Luzes de Atmosfera (Light Leaks) */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#ff4d00]/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/[0.05] blur-[150px] rounded-full"></div>

      <style>{`
        .metric-line {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: drawMetric 15s ease-in-out infinite;
        }
        @keyframes drawMetric {
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -2000; }
        }
      `}</style>
    </div>
  );
};

export default BackgroundTexture;
