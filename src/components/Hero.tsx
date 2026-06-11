import React from 'react';
import { Home, Users, FlameKindling, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { TRANSLATIONS } from '../data/mockData';
import heroImg from '../assets/images/winston_salem_skyline_1781205165570.jpg';

interface HeroProps {
  lang: 'en' | 'es';
}

export default function Hero({ lang }: HeroProps) {
  const t = TRANSLATIONS[lang];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-radial from-brand-blue-dark via-[#041E34] to-[#010D18] text-white pt-10 pb-16 overflow-hidden">
      {/* Decorative Grid Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-brand-blue-light/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-green/15 text-brand-green border border-brand-green/35 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase" id="hero-badge">
              <Sparkles className="h-3.5 w-3.5 animate-pulse-subtle" />
              <span>{lang === 'en' ? 'Piedmont Triad Innovation Nominee' : 'Nominado a la Innovación del Piedmont Triad'}</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight" id="hero-headline">
              <span className="block text-white mb-2">{t.heroTitle}</span>
              <span className="block text-brand-green mb-2">{t.heroSubTitle1}</span>
              <span className="block text-brand-blue-light">{t.heroSubTitle2}</span>
            </h1>

            {/* Subheadline description */}
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal" id="hero-subheadline">
              {t.heroSub}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={() => handleScroll('matchmaker-demo')}
                className="group flex items-center justify-center space-x-2 bg-brand-green hover:bg-brand-green-dark text-brand-blue-dark font-extrabold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-brand-green/10 hover:shadow-brand-green/20 transform hover:-translate-y-0.5 cursor-pointer"
                id="hero-primary-btn"
              >
                <span>{t.btnTryDemo}</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button
                onClick={() => handleScroll('challenge')}
                className="group flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/30 font-semibold text-base px-6 py-4 rounded-xl transition-all duration-200 cursor-pointer"
                id="hero-secondary-btn"
              >
                <BookOpen className="h-5 w-5 text-brand-blue-light" />
                <span>{t.btnChallenge}</span>
              </button>
            </div>
          </div>

          {/* Hero Right Banner Art */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-green/50 to-brand-blue-light/50 rounded-2xl blur-xl opacity-70 animate-pulse-subtle" />
              
              {/* Master generated image container */}
              <div className="relative bg-brand-blue-dark rounded-2xl border border-white/10 shadow-2xl overflow-hidden aspect-4/3">
                <img
                  src={heroImg}
                  alt="Winston-Salem Skyline and Affordable Housing Housing Communities - HomeLander AI"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  id="hero-banner-image"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Live Region Metadata Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-blue-dark/85 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-center justify-between" id="image-overlay-card">
                  <div className="text-left">
                    <span className="text-[10px] font-mono tracking-widest text-brand-green uppercase font-semibold">PILOT AREA MAP</span>
                    <h4 className="text-sm font-bold text-white">Forsyth County, NC</h4>
                  </div>
                  <span className="text-xs bg-brand-green/20 text-brand-green py-1 px-2.5 rounded-full font-semibold border border-brand-green/30">
                    Live Demo State
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Floating statistics sections */}
        <div className="mt-20 border-t border-white/10 pt-12">
          <div className="text-center mb-8">
            <span className="text-xs font-mono tracking-widest text-brand-green uppercase font-bold">{t.statHeader}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Stat Card 1 */}
            <div className="bg-brand-blue-dark/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:border-brand-green/30 hover:-translate-y-1 group" id="stat-card-1">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brand-green/10 text-brand-green rounded-xl border border-brand-green/20 group-hover:bg-brand-green/15 transition-colors">
                  <Home className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <span className="block font-mono text-3xl font-extrabold text-white tracking-tight">43,140</span>
                  <p className="text-gray-300 text-sm font-medium leading-snug mt-0.5">
                    {t.statCostFamilies}
                  </p>
                </div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-brand-blue-dark/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:border-brand-green/30 hover:-translate-y-1 group" id="stat-card-2">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brand-blue-light/10 text-brand-blue-light rounded-xl border border-brand-blue-light/25 group-hover:bg-brand-blue-light/15 transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <span className="block font-mono text-3xl font-extrabold text-white tracking-tight">100,000+</span>
                  <p className="text-gray-300 text-sm font-medium leading-snug mt-0.5">
                    {t.statAffected}
                  </p>
                </div>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-brand-blue-dark/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:border-brand-green/30 hover:-translate-y-1 group" id="stat-card-3">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl border border-amber-500/25 group-hover:bg-amber-500/15 transition-colors">
                  <FlameKindling className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <span className="block font-mono text-3xl font-extrabold text-white tracking-tight">47%</span>
                  <p className="text-gray-300 text-sm font-medium leading-snug mt-0.5">
                    {t.statRentersStruggle}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
