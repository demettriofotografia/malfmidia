import React from 'react';

const Maintenance: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white flex items-center">
      
      {/* VÍDEO DE FUNDO (trocaremos já já) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/public/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* CONTEÚDO */}
      <div className="relative z-20 max-w-2xl px-10">
        <span className="text-orange-500 uppercase tracking-widest text-sm block mb-6">
          Produção de conteúdo
        </span>

        <h1 className="text-5xl font-extrabold leading-tight">
          focada em <br />
          <span className="text-orange-500">criatividade</span><br />
          e qualidade
        </h1>

        <p className="mt-6 text-lg opacity-80">
          Vídeo, fotografia, social media e presença humana para marcas
          que precisam se diferenciar nas redes sociais.
        </p>

        <a
          href="https://wa.me/5541999999999"
          target="_blank"
          className="inline-block mt-10 px-8 py-4 bg-orange-500 text-black font-bold rounded-full"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Maintenance;
