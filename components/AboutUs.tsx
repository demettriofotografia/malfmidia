import React, { useState, useRef, useEffect } from 'react';

interface AboutUsProps {
  content: any;
}

const AboutUs: React.FC<AboutUsProps> = ({ content }) => {
  const [videoActive, setVideoActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => console.warn(err));
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(err => console.log(err));
          } else {
            videoRef.current.pause();
          }
        }
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const handleToggleVideo = () => {
    if (videoRef.current) {
      if (!videoActive) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        videoRef.current.play();
        setVideoActive(true);
      } else {
        videoRef.current.muted = true;
        setVideoActive(false);
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-[#020202] overflow-hidden py-12 md:py-24">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        <div className="absolute -right-[10%] top-[-10%] w-[80%] h-[120%] opacity-30 mix-blend-screen rotate-12 blur-[40px]">
          <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover scale-150"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl relative z-10 flex flex-col items-center">
        <div 
          className="relative w-full aspect-video md:aspect-[21/9] lg:aspect-[16/7] cursor-pointer group overflow-hidden rounded-none border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.9),0_0_40px_rgba(255,77,0,0.1)] bg-black"
          onClick={handleToggleVideo}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-50 bg-black">
              <div className="w-10 h-10 border-2 border-[#ff4d00]/10 border-t-[#ff4d00] rounded-full animate-spin"></div>
            </div>
          )}
          
          <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ${videoActive ? 'opacity-0' : 'opacity-100'}`}>
             <img 
              src={content.images.about_video_thumb || "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1920"} 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              alt="" 
             />
          </div>

          <video 
            ref={videoRef} 
            onCanPlay={() => setIsLoading(false)} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2500ms] ease-in-out ${videoActive ? 'grayscale-0 blur-0 scale-100 opacity-100' : 'grayscale blur-lg scale-110 opacity-30'}`}
          >
            {/* ATENÇÃO: Nome do arquivo atualizado aqui embaixo */}
            <source src="/videos/video-v2.mp4" type="video/mp4" />
          </video>

          <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent transition-opacity duration-1000 ${videoActive ? 'opacity-10' : 'opacity-50'}`}></div>
          
          <div className={`absolute inset-0 flex flex-col items-center justify-center z-20 transition-all duration-1000 ${videoActive ? 'opacity-0 pointer-events-none translate-y-10 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
            <div className="text-center px-6">
              <h2 className="text-4xl md:text-6xl lg:text-[6rem] font-black uppercase tracking-tighter leading-[0.85] text-white mb-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]">
                <span>{content.texts.about_h2_top || "IDEIAS"}</span>
                <br/>
                <span className="text-[#ff4d00] drop-shadow-[0_0_20px_rgba(255,77,0,0.4)]">
                  {content.texts.about_h2_bottom || "QUE VENDEM."}
                </span>
              </h2>
              
              <div className="relative inline-flex items-center justify-center group/play">
                <div className="absolute -inset-8 bg-[#ff4d00]/10 rounded-full blur-[30px] group-hover/play:bg-[#ff4d00]/30 transition-all duration-700"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-xl group-hover/play:scale-110 group-hover/play:border-[#ff4d00] transition-all duration-700">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1.5 transition-colors group-hover/play:text-[#ff4d00]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center reveal">
          <p className="text-white/60 text-sm md:text-lg lg:text-xl font-light leading-snug tracking-tight max-w-4xl mx-auto px-4">
            {content.texts.about_strip_text || "Combinamos análise estratégica com estética de cinema para criar campanhas que dominam a atenção. Na MALF MIDIA, seu projeto não apenas existe, ele CONVERTE."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
