
import React from 'react';

interface TeamEquityProps {
  content: any;
}

const FloatingElement: React.FC<{ children: React.ReactNode; className: string; style?: React.CSSProperties }> = ({ children, className, style }) => (
  <div className={`absolute pointer-events-none select-none opacity-[0.25] mix-blend-screen filter blur-[1.5px] ${className}`} style={style}>
    {children}
  </div>
);

const TeamEquity: React.FC<TeamEquityProps> = ({ content }) => {
  const stats = [
    { label: 'Seguidores', value: '16.9M', sub: 'de malfs por ai', key: 'stat1' },
    { label: 'Impressões', value: '47.3M', sub: 'ultimos 30 dias', key: 'stat2' },
    { label: 'Likes', value: '4.7M', sub: 'engajamento real', key: 'stat3' },
    { label: 'Projetos', value: '500+', sub: 'realizados', key: 'stat4' },
  ];

  const ageData = [
    { range: '18 - 24', val: '44,3%', width: 'w-[44.3%]' },
    { range: '25 - 34', val: '39,7%', width: 'w-[39.7%]' },
    { range: '35 - 44', val: '8,6%', width: 'w-[8.6%]' },
    { range: '13 - 17', val: '4,0%', width: 'w-[4.0%]' },
  ];

  return (
    <section id="team" className="relative bg-transparent min-h-screen flex flex-col justify-center overflow-hidden py-16 lg:py-24">
      {/* DECORATIVE LIGHTING - Reduced opacity to let background show */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff4d00]/5 rounded-full blur-[150px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col h-full gap-2 lg:gap-4">
        
        {/* HEADER COMPACT - Removed the orange box background */}
        <div className="text-center reveal relative">
          <span className="mono text-[#ff4d00] text-[10px] uppercase tracking-[0.4em] font-black mb-2 block">
            {content.texts.team_badge || "POWER & INFLUENCE"}
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-white relative inline-flex flex-wrap items-center justify-center gap-x-4">
            <span className="py-2">
              {content.texts.team_h2_main || "ESTRATÉGIA"}
            </span>
            <span className="text-[#ff4d00] drop-shadow-[0_0_20px_rgba(255,77,0,0.4)] py-2">
              {content.texts.team_h2_sub || "& INFLUÊNCIA"}
            </span>
          </h2>
        </div>

        {/* MAIN COMPOSITION */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[450px] lg:min-h-[550px]">
          
          {/* DEMOGRAPHICS WIDGET */}
          <div className="hidden lg:flex absolute right-[-5%] top-[25%] -translate-y-1/2 z-40 w-72 flex-col p-2 reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="mb-6">
              <h4 className="text-[#ff4d00]/70 uppercase text-[10px] tracking-[0.2em] font-black mb-3">Gênero:</h4>
              <div className="flex items-center gap-6">
                <div className="relative w-14 h-14 rounded-full border-[5px] border-[#ff4d00]/20 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[5px] border-[#ff4d00] border-t-transparent border-l-transparent rotate-[140deg]"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-white text-[10px] font-bold">Feminino</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-white text-[8px] font-bold">72,3%</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-white/40 text-[10px] font-bold">Masculino</span>
                    <span className="bg-[#ff4d00]/20 px-2 py-0.5 rounded text-[#ff4d00] text-[8px] font-bold">27,7%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-[#ff4d00]/70 uppercase text-[10px] tracking-[0.2em] font-black mb-3">Faixa Etária:</h4>
              <div className="space-y-2">
                {ageData.map((age, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-white text-[8px] font-black w-10">{age.range}</span>
                    <div className="flex-1 h-2.5 bg-white/5 rounded-sm overflow-hidden relative">
                      <div className={`absolute left-0 top-0 h-full bg-white transition-all duration-1000 ${age.width}`}></div>
                    </div>
                    <span className="text-white text-[8px] font-bold">{age.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[#ff4d00]/70 uppercase text-[10px] tracking-[0.2em] font-black mb-2">Principais Localizações:</h4>
              <p className="text-white font-bold text-xs leading-relaxed">
                Rio de Janeiro, São Paulo, Brasília, Fortaleza e Goiânia.
              </p>
            </div>
          </div>

          <div className="relative group reveal z-20 w-full max-w-lg lg:max-w-3xl flex flex-col items-center justify-center h-full">
            
            {/* Names */}
            <div className="absolute bottom-[5%] left-[-2%] md:left-[-8%] lg:left-[-12%] z-40 pointer-events-none flex flex-col items-start transition-all duration-500">
              <span className="marker text-2xl lg:text-4xl text-white drop-shadow-[0_0_30px_rgba(0,0,0,1)]">
                {content.texts.team_name_left || "Jackson"}
              </span>
              <span className="mono text-[8px] lg:text-[10px] text-[#ff4d00] uppercase tracking-[0.2em] font-black mt-1 ml-1">
                {content.texts.team_role_left || "Fotógrafo e VideoMaker"}
              </span>
            </div>
            
            <div className="absolute bottom-[5%] right-[-2%] md:right-[-8%] lg:right-[-12%] z-40 pointer-events-none text-right flex flex-col items-end transition-all duration-500">
              <span className="marker text-2xl lg:text-4xl text-white drop-shadow-[0_0_30px_rgba(0,0,0,1)]">
                {content.texts.team_name_right || "Jessica"}
              </span>
              <span className="mono text-[8px] lg:text-[10px] text-[#ff4d00] uppercase tracking-[0.2em] font-black mt-1 mr-1">
                {content.texts.team_role_right || "Influêncer e maquiadora"}
              </span>
            </div>

            {/* MAIN IMAGE CONTAINER */}
            <div className="relative w-full h-full flex items-center justify-center transition-all duration-700 group-hover:scale-[1.02]">
              <img 
                src={content.images.team_jackson || "https://influency.me/wp-content/uploads/2024/06/ime-influencer-1.png"} 
                className="w-full max-h-[450px] lg:max-h-[550px] transition-all duration-700 object-contain relative z-10 drop-shadow-[0_20px_100px_rgba(255,77,0,0.4)] block"
                alt="Equipe Principal"
                style={{ filter: 'none' }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-[#ff4d00]/5 blur-[120px] rounded-full z-0 opacity-60"></div>
            </div>
          </div>
        </div>

        {/* DATA WIDGETS BASE */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 reveal px-4 max-w-6xl mx-auto w-full mt-2">
          {stats.map((stat, i) => (
            <div key={i} className="relative group overflow-hidden">
               <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/5 group-hover:bg-[#ff4d00]/5 group-hover:border-[#ff4d00]/30 transition-all duration-500"></div>
               <div className="relative p-5 lg:p-7 text-center lg:text-left">
                  <span className="mono text-[8px] text-white/30 uppercase tracking-[0.2em] block mb-1">
                    {content.texts[`${stat.key}_label`] || stat.label}
                  </span>
                  <div className="flex items-baseline justify-center lg:justify-start gap-2">
                    <div className="text-2xl lg:text-4xl font-black text-white group-hover:text-[#ff4d00] transition-colors">
                      {content.texts[`${stat.key}_value`] || stat.value}
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d00] animate-pulse"></div>
                  </div>
                  <p className="text-white/20 text-[9px] uppercase tracking-tighter mt-1 font-bold">
                    {content.texts[`${stat.key}_sub`] || stat.sub}
                  </p>
               </div>
            </div>
          ))}
        </div>

        {/* FOOTER QUOTE MINIMAL */}
        <div className="text-center reveal mt-4 pb-4">
          <p className="handwritten text-white/40 text-xl lg:text-3xl italic tracking-wide">
            "Não criamos apenas conteúdo. Construímos <span className="text-white/70">Equity Visual</span>."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamEquity;
