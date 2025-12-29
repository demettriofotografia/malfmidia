
import React, { useState } from 'react';

const QuoteForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', instagram: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.instagram.trim() || !formData.message.trim()) {
      alert("Por favor, preencha todos os campos (Nome, Instagram e Mensagem) para solicitar seu orçamento.");
      return;
    }
    setLoading(true);
    const phoneNumber = "5548999308899";
    const text = `Olá! Meu nome é *${formData.name}*.\nMeu Instagram é: *${formData.instagram}*\n\n*Minha ideia:* \n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    setTimeout(() => {
        setLoading(false);
        window.open(whatsappUrl, '_blank');
    }, 800);
  };

  const isFormValid = formData.name.trim() !== '' && formData.instagram.trim() !== '' && formData.message.trim() !== '';

  return (
    <div className="relative bg-transparent grid-pattern overflow-hidden min-h-[60vh] md:min-h-[70vh]">
      {/* DEEP ORGANIC DIP DIVIDER */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none -translate-y-[1px]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
           <path d="M0 0H1440V30C1440 30 1260 30 1100 30C940 30 840 110 720 110C600 110 500 30 340 30C180 30 0 30 0 30V0Z" fill="transparent"/>
           <path d="M714 35L720 41L726 35" stroke="#ff4d00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12 md:pb-20 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl w-full text-center mb-12 reveal">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none text-[#eeeeee]">VAMOS <span className="text-[#ff4d00]">PRODUZIR?</span></h2>
          <p className="text-white/40 text-xl font-light">Transforme sua visão em autoridade visual instantânea.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full max-w-2xl reveal space-y-6" noValidate>
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Seu Nome" className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl focus:outline-none focus:border-[#ff4d00] transition-all text-white placeholder:text-white/20" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            <input type="text" placeholder="@Instagram" className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl focus:outline-none focus:border-[#ff4d00] transition-all text-white placeholder:text-white/20" value={formData.instagram} onChange={e => setFormData({...formData, instagram: e.target.value})} />
          </div>
          <textarea rows={4} placeholder="Conte-nos sobre sua ideia ou projeto..." className="w-full bg-white/[0.03] border border-white/10 p-5 rounded-2xl focus:outline-none focus:border-[#ff4d00] transition-all text-white placeholder:text-white/20" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
          <button type="submit" className={`btn-premium w-full justify-center py-6 rounded-2xl shadow-[0_0_30px_rgba(255,77,0,0.2)] transition-all duration-500 ${!isFormValid ? 'opacity-50 grayscale cursor-not-allowed' : 'opacity-100 grayscale-0 cursor-pointer'}`} disabled={loading}>
            {loading ? 'PREPARANDO WHATSAPP...' : 'SOLICITAR ORÇAMENTO VIA WHATSAPP'}
          </button>
          <p className="text-center text-white/20 text-[10px] uppercase tracking-widest mono">{isFormValid ? 'Tudo pronto! Clique para enviar.' : 'Preencha todos os campos acima.'}</p>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
