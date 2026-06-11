import React from 'react';
import { Landmark, Heart, Building2, School, MapPin } from 'lucide-react';
import { TRANSLATIONS, COMMUNITY_PARTNERS } from '../data/mockData';

interface FooterProps {
  lang: 'en' | 'es';
}

export default function Footer({ lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-blue-dark text-white pt-20 pb-10 border-t border-brand-blue/30 relative overflow-hidden" id="footer-widget">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* UPPER FOOTER LAYER: Partners requested block */}
        <div className="pb-16 border-b border-white/5 text-center">
          <span className="text-[10px] font-mono tracking-widest text-[#2ECC71] uppercase font-extrabold bg-[#2ECC71]/10 px-3.5 py-1 rounded-full border border-brand-green/20" id="partners-badge">
            {t.partnerTitle}
          </span>
          <h3 className="text-xl font-bold font-display mt-3 text-white">
            {t.partnerSubtitle}
          </h3>

          {/* Partners cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8" id="partners-grid">
            {COMMUNITY_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left flex flex-col justify-between hover:border-brand-green/30 transition-all duration-200 group"
                id={`partner-badge-${idx}`}
              >
                <div>
                  <div className={`p-2.5 rounded-lg border w-max mb-3 font-bold text-xs uppercase font-mono ${partner.logoColorClass}`}>
                    {partner.name.split(' ')[0]}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-green tracking-tight transition-colors">
                    {partner.name}
                  </h4>
                  <span className="text-[9px] font-mono text-gray-400 block mt-1 uppercase font-semibold">
                    {lang === 'en' ? partner.role : partner.roleEs}
                  </span>
                </div>
                
                <p className="text-[10px] text-gray-400 line-clamp-3 leading-normal mt-3 font-normal border-t border-white/5 pt-2">
                  {lang === 'en' ? partner.description : partner.descriptionEs}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE LAYER: Branding & navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16 text-left" id="footer-mid-layer">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleScroll('hero')}>
              <div className="p-2 bg-brand-green/15 text-brand-green rounded-xl border border-brand-green/20">
                <Landmark className="h-6 w-6" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">HomeLander <span className="text-brand-green">AI</span></span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm font-normal">
              {lang === 'en'
                ? 'Solving housing affordability challenges in Winston-Salem, Forsyth County, and the Piedmont Triad region of North Carolina through custom civic-tech workflows.'
                : 'Solucionando de raíz la crisis habitacional de Winston-Salem, el condado de Forsyth y todo el Piedmont Triad en Carolina del Norte.'}
            </p>

            <div className="flex items-center space-x-2.5 text-xs text-gray-400">
              <School className="h-4.5 w-4.5 text-brand-green" />
              <span className="font-semibold">{lang === 'en' ? 'Piedmont High School Innovation Entry' : 'Entrada del Concurso Escolar del Triad'}</span>
            </div>
          </div>

          {/* Quick jump paths Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs text-brand-blue-light uppercase tracking-widest font-extrabold">{lang === 'en' ? 'Quick Jump' : 'Navegación'}</h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs">
              <button onClick={() => handleScroll('challenge')} className="hover:text-brand-green hover:underline cursor-pointer text-gray-400 text-left">{t.navChallenge}</button>
              <button onClick={() => handleScroll('maria')} className="hover:text-brand-green hover:underline cursor-pointer text-gray-400 text-left">{t.navMaria}</button>
              <button onClick={() => handleScroll('how-it-works')} className="hover:text-brand-green hover:underline cursor-pointer text-gray-400 text-left">{t.navHow}</button>
              <button onClick={() => handleScroll('matchmaker-demo')} className="hover:text-brand-green hover:underline cursor-pointer text-gray-400 text-left">{t.navDemo}</button>
              <button onClick={() => handleScroll('community-impact')} className="hover:text-brand-green hover:underline cursor-pointer text-gray-400 text-left">{t.navImpact}</button>
            </div>
          </div>

          {/* Regional Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs text-brand-blue-light uppercase tracking-widest font-extrabold">{lang === 'en' ? 'Location Index' : 'Sede del Proyecto'}</h4>
            
            <div className="space-y-3 font-normal text-xs text-gray-400 leading-relaxed">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4.5 w-4.5 text-brand-green flex-shrink-0 mt-0.5" />
                <span>Winston-Salem Innovation Quarter<br />Forsyth County, NC, USA</span>
              </div>
              <p className="border-t border-white/5 pt-3 text-[11px] leading-normal italic text-gray-400">
                {lang === 'en'
                  ? 'All listed demo complexes represent actual parcels evaluated on public Forsyth GIS datasets.'
                  : 'Todo el inventario expuesto proviene de parcelas reales extraídas del catastro de Forsyth.'}
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM LAYER: Legal copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>© 2026 HomeLander AI. High School Innovation Division. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> for Winston-Salem communities
          </p>
        </div>

      </div>
    </footer>
  );
}
