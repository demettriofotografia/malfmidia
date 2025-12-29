
import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface NavbarProps {
  tabs: Tab[];
  activeTabs: Record<string, boolean>;
  currentSection: string | null;
  onTabClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ tabs, activeTabs, currentSection, onTabClick }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 h-16 flex items-center ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center h-full">
        <div className="text-xl font-black tracking-tighter uppercase text-white shrink-0">
          MALF<span className="text-[#ff4d00]">MIDIA</span>
        </div>
        
        {/* Container das Guias no lugar do menu antigo */}
        <div className="flex items-center gap-1 md:gap-2 h-full pt-1">
          {tabs.map((tab) => {
            const isActive = currentSection === tab.id;
            const isVisible = activeTabs[tab.id];

            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={(e) => onTabClick(e, tab.id)}
                className={`
                  h-10 px-2 md:px-6 rounded-b-xl border-x border-b backdrop-blur-xl transition-all duration-500 ease-in-out relative flex items-center justify-center
                  ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
                  ${isActive 
                    ? 'border-[#ff4d00]/50 text-[#ff4d00] bg-[#ff4d00]/10 shadow-[0_5px_15px_rgba(255,77,0,0.15)]' 
                    : 'border-white/10 text-white/40 bg-white/5 hover:text-white/60 hover:bg-white/10'
                  }
                `}
              >
                <span className={`mono text-[7px] md:text-[9px] font-black tracking-widest uppercase truncate`}>
                  {tab.label}
                </span>
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#ff4d00] rounded-full blur-[2px] animate-pulse"></div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
