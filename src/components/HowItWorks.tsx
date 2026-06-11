import React from 'react';
import { UserRoundCheck, Cpu, ClipboardCheck, ArrowRight, CornerRightDown, LayoutList } from 'lucide-react';
import { TRANSLATIONS } from '../data/mockData';

interface HowItWorksProps {
  lang: 'en' | 'es';
}

export default function HowItWorks({ lang }: HowItWorksProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="how-it-works" className="py-24 bg-brand-blue-dark text-white relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue via-brand-blue-dark to-black opacity-45 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-widest text-brand-green uppercase font-bold bg-[#2ECC71]/10 px-4 py-1.5 rounded-full border border-brand-green/20" id="how-badge">
            {lang === 'en' ? 'ENGINEERING PATHWAY' : 'VÍA DE INGENIERÍA'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-4" id="how-title">
            {t.howTitle}
          </h2>
          <p className="text-gray-300 text-lg mt-3 font-normal" id="how-subtitle">
            {t.howSubtitle}
          </p>
        </div>

        {/* Step-by-Step Graphical Process Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {/* Step 1: User Input */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-300 hover:border-brand-green/40 hover:bg-white/8 group" id="step-panel-1">
            <div className="absolute top-4 right-4 text-brand-green font-mono font-bold text-4xl opacity-30 select-none">01</div>
            
            <div className="space-y-6">
              {/* Icon Container */}
              <div className="inline-flex p-4 bg-brand-green/15 text-brand-green rounded-xl border border-brand-green/20 group-hover:bg-brand-green/20 group-hover:scale-105 transition-transform" id="step-icon-1">
                <UserRoundCheck className="h-7 w-7" />
              </div>

              <div className="text-left">
                <h3 className="text-xl font-bold tracking-tight text-white mb-2 font-display">{t.step1Title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">{t.step1Desc}</p>
              </div>

              {/* Graphical Parameter Tags preview */}
              <div className="bg-brand-blue-dark/50 border border-white/5 p-4 rounded-xl flex flex-wrap gap-2 text-[10px] font-mono text-gray-300 text-left">
                <span className="bg-white/5 px-2 py-1 rounded border border-white/10">Income: $32k / yr</span>
                <span className="bg-white/5 px-2 py-1 rounded border border-white/10">Winston-Salem Schools</span>
                <span className="bg-white/5 px-2 py-1 rounded border border-white/10">Childcare limits</span>
                <span className="bg-white/5 px-2 py-1 rounded border border-white/10">Max commute: 25m</span>
              </div>
            </div>

            {/* Step Connector indicators for large screens */}
            <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 text-brand-green animate-pulse">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>

          {/* Step 2: Algorithmic Search */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-300 hover:border-brand-green/40 hover:bg-white/8 group" id="step-panel-2">
            <div className="absolute top-4 right-4 text-brand-green font-mono font-bold text-4xl opacity-30 select-none">02</div>
            
            <div className="space-y-6">
              {/* Icon Container */}
              <div className="inline-flex p-4 bg-brand-blue-light/15 text-brand-blue-light rounded-xl border border-brand-blue-light/25 group-hover:bg-brand-blue-light/20 group-hover:scale-105 transition-transform" id="step-icon-2">
                <Cpu className="h-7 w-7 text-brand-green" />
              </div>

              <div className="text-left">
                <h3 className="text-xl font-bold tracking-tight text-white mb-2 font-display">{t.step2Title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">{t.step2Desc}</p>
              </div>

              {/* Live matching checklist preview */}
              <div className="bg-brand-blue-dark/50 border border-white/5 p-4 rounded-xl space-y-2 text-xs text-left">
                <div className="flex items-center space-x-2 text-brand-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>Rental Database Indexing (W-S Housing API)</span>
                </div>
                <div className="flex items-center space-x-2 text-brand-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>PART / City Transit Route Distance matrices</span>
                </div>
                <div className="flex items-center space-x-2 text-brand-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  <span>HAWS Eligibility guidelines mapping</span>
                </div>
              </div>
            </div>

            {/* Step Connector indicators for large screens */}
            <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 text-brand-green animate-pulse">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>

          {/* Step 3: Matches and Next Steps */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-300 hover:border-brand-green/40 hover:bg-white/8 group" id="step-panel-3">
            <div className="absolute top-4 right-4 text-brand-green font-mono font-bold text-4xl opacity-30 select-none">03</div>
            
            <div className="space-y-6">
              {/* Icon Container */}
              <div className="inline-flex p-4 bg-amber-500/10 text-amber-500 rounded-xl border border-amber-500/25 group-hover:bg-amber-500/15 group-hover:scale-105 transition-transform" id="step-icon-3">
                <ClipboardCheck className="h-7 w-7" />
              </div>

              <div className="text-left">
                <h3 className="text-xl font-bold tracking-tight text-white mb-2 font-display">{t.step3Title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">{t.step3Desc}</p>
              </div>

              {/* Recommendation outputs preview */}
              <div className="bg-brand-blue-dark/50 border border-white/5 p-4 rounded-xl space-y-2 text-[10px] font-mono text-left">
                <div className="flex items-center justify-between text-brand-green">
                  <span>Matched: 3 Rental Units</span>
                  <span className="bg-brand-green/10 px-1 py-0.5 rounded border border-brand-green/25">92% Affordability</span>
                </div>
                <div className="flex items-center justify-between text-[#487EB0]">
                  <span>Vouchers: HAWS Rental Relief</span>
                  <span className="bg-[#487EB0]/10 px-1 py-0.5 rounded border border-[#487EB0]/25">Eligible</span>
                </div>
                <div className="flex items-center justify-between text-amber-500">
                  <span>Commute Plan: Bus Line 12</span>
                  <span className="bg-amber-500/10 px-1 py-0.5 rounded border border-amber-500/25">Saves $45/mo</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Downward indicator to Interactive Demo */}
        <div className="mt-16 text-center flex flex-col items-center animate-bounce">
          <span className="text-xs font-mono tracking-widest text-[#2ECC71] uppercase font-bold mb-2">
            {lang === 'en' ? 'Scroll or click to trigger the Demo' : 'Toque abajo para probar el simulador'}
          </span>
          <CornerRightDown className="h-5 w-5 text-brand-green" />
        </div>

      </div>
    </section>
  );
}
