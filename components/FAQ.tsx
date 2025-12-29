
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggle = (index: number) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="relative bg-[#080808] overflow-hidden min-h-[60vh]">
      {/* SOFT BLOB DIVIDER */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none -translate-y-full">
         <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 100H1440V70C1440 70 1200 70 1080 70C960 70 880 0 720 0C560 0 480 70 360 70C240 70 0 70 0 70V100Z" fill="#080808"/>
            <path d="M714 30L720 36L726 30" stroke="#ff4d00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </div>

      <div className="container mx-auto px-6 max-w-4xl pt-16 md:pt-20 pb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center tracking-tighter uppercase text-[#eeeeee]">Perguntas <span className="text-[#ff4d00]">Frequentes</span></h2>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="glass-orange rounded-2xl overflow-hidden transition-all duration-300">
              <button onClick={() => toggle(index)} className="w-full p-6 text-left flex justify-between items-center gap-4 group">
                <span className="text-lg font-bold group-hover:text-[#ff4d00] transition-colors uppercase tracking-tight text-[#eeeeee]">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/10 transition-transform duration-500 ${activeIndex === index ? 'rotate-180 bg-[#ff4d00] border-[#ff4d00]' : ''}`}>
                  <svg className={`w-4 h-4 ${activeIndex === index ? 'text-white' : 'text-[#ff4d00]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-6 pt-0 text-white/50 leading-relaxed border-t border-white/5 font-light">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
