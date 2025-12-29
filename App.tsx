
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsCarousel from './components/BrandsCarousel';
import TeamEquity from './components/TeamEquity';
import WorksCarousel from './components/WorksCarousel';
import BehindTheScenes from './components/BehindTheScenes';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import BackgroundTexture from './components/BackgroundTexture';

const App: React.FC = () => {
  const [content] = useState(() => {
    const saved = localStorage.getItem('malf_site_content');
    return saved ? JSON.parse(saved) : {
      images: {},
      texts: {}
    };
  });

  const [activeTabs, setActiveTabs] = useState<Record<string, boolean>>({
    team: false,
    works: false,
    about: false,
    backstage: false,
    quote: false,
    faq: false,
  });

  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const handleScroll = () => {
      const trigger = 120; // Sincronizado com o offset de scroll
      const sections = ['team', 'works', 'about', 'backstage', 'quote', 'faq'];
      const newState: Record<string, boolean> = {};
      let lastActive = null;
      
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // newState marca se a seção já "entrou" na visão
          newState[id] = rect.top <= window.innerHeight * 0.8;
          
          // Identifica qual é a seção atual para o realce da guia
          if (rect.top <= trigger + 50) {
            lastActive = id;
          }
        }
      });
      
      setCurrentSection(lastActive);
      setActiveTabs(prev => {
        const hasChanged = sections.some(id => prev[id] !== newState[id]);
        return hasChanged ? { ...prev, ...newState } : prev;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Ajustado para a altura da navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, []);

  const tabs = useMemo(() => [
    { id: 'team', label: 'SOBRE NÓS' },
    { id: 'works', label: 'NOSSO MÉTODO' },
    { id: 'about', label: 'APRESENTAÇÃO' },
    { id: 'backstage', label: 'BACKSTAGE' },
    { id: 'quote', label: 'ORÇAMENTO' },
    { id: 'faq', label: 'FAQ' },
  ], []);

  return (
    <main className="relative min-h-screen">
      <BackgroundTexture />
      
      <Navbar 
        tabs={tabs} 
        activeTabs={activeTabs} 
        currentSection={currentSection} 
        onTabClick={handleTabClick} 
      />
      
      <div className="relative z-10">
        <Hero content={content} />
        
        <BrandsCarousel />

        <div className="flex flex-col relative bg-transparent">
          <section id="team" className="relative z-[7] bg-transparent">
            <TeamEquity content={content} />
          </section>

          <section id="works" className="relative z-10 bg-transparent">
            <WorksCarousel content={content} />
          </section>

          <section id="about" className="relative z-20 bg-transparent">
            <AboutUs content={content} />
          </section>

          <section id="backstage" className="relative z-[25] bg-transparent">
            <BehindTheScenes />
          </section>

          <section id="quote" className="relative z-30 bg-transparent">
            <QuoteForm />
          </section>

          <section id="faq" className="relative z-50 bg-transparent">
            <FAQ />
            <Footer />
          </section>
        </div>
      </div>
      
      <div className="fixed inset-0 pointer-events-none z-[200] opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </main>
  );
};

export default App;
