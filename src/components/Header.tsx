import React, { useState } from 'react';
import { Shield, Languages, Menu, X, Landmark } from 'lucide-react';
import { TRANSLATIONS } from '../data/mockData';

interface HeaderProps {
  lang: 'en' | 'es';
  setLang: (lang: 'en' | 'es') => void;
  activeSection: string;
}

export default function Header({ lang, setLang, activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  const menuItems = [
    { id: 'challenge', label: t.navChallenge },
    { id: 'how-it-works', label: t.navHow },
    { id: 'matchmaker-demo', label: t.navDemo },
    { id: 'community-impact', label: t.navImpact },
    { id: 'ethics', label: t.navEthics },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-brand-blue-dark/95 backdrop-blur-md text-white border-b border-brand-blue/35 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleScroll('hero')} id="logo-nav">
            <div className="p-2.5 bg-brand-green/15 text-brand-green rounded-xl border border-brand-green/30">
              <Landmark className="h-6 w-6" id="logo-icon" />
            </div>
            <div>
              <span className="font-display text-xl font-bold tracking-tight block">HomeLander <span className="text-brand-green">AI</span></span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-brand-blue-light block -mt-1 font-semibold">Forsyth Civic Hub</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2 md:space-x-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-brand-green bg-brand-blue/35 border border-brand-blue-light/20 shadow-inner'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Control Actions (Lang Toggle + Demo Button) */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Selection */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border border-brand-blue-light/30 bg-brand-blue-dark hover:bg-brand-blue/40 transition-colors text-xs font-mono font-bold text-brand-green cursor-pointer"
              title="Toggle Language / Cambiar Idioma"
              id="lang-toggle-btn"
            >
              <Languages className="h-4 w-4" />
              <span>{lang === 'en' ? 'ES' : 'EN'}</span>
            </button>

            <button
              onClick={() => handleScroll('matchmaker-demo')}
              className="bg-brand-green hover:bg-brand-green-dark text-brand-blue-dark text-xs font-mono uppercase tracking-wider font-bold px-4 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-green/20 border border-brand-green/30 transform hover:-translate-y-0.5 cursor-pointer"
              id="header-cta-btn"
            >
              {t.btnTryDemo}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg border border-brand-blue-light/30 bg-brand-blue-dark text-xs font-mono font-bold text-brand-green cursor-pointer"
              id="lang-toggle-mobile"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none cursor-pointer"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-blue-dark border-t border-brand-blue/30 px-4 pt-2 pb-6 space-y-2 shadow-2xl transition-all" id="mobile-menu-drawer">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold ${
                activeSection === item.id
                  ? 'bg-brand-blue text-brand-green border-l-4 border-brand-green'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
              id={`mobile-nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-brand-blue/40 flex flex-col space-y-3">
            <button
              onClick={() => handleScroll('matchmaker-demo')}
              className="w-full bg-brand-green text-brand-blue-dark text-center font-bold py-3 rounded-xl hover:bg-brand-green-dark cursor-pointer shadow-lg"
              id="mobile-header-cta"
            >
              {t.btnTryDemo}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
