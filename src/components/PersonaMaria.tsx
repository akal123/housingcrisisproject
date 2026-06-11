import React, { useState } from 'react';
import { Clock, Quote, Heart, MapPin, Sparkles, User, Sun, Bus, ShieldPlus, BadgeAlert, FilePieChart, Moon, Search } from 'lucide-react';
import { TRANSLATIONS, MARIA_TIMELINE } from '../data/mockData';

interface PersonaMariaProps {
  lang: 'en' | 'es';
}

export default function PersonaMaria({ lang }: PersonaMariaProps) {
  const t = TRANSLATIONS[lang];
  const [hoveredHour, setHoveredHour] = useState<number | null>(null);

  // Return matching iconic elements for Maria's routine
  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="h-5 w-5" />;
      case 'Bus': return <Bus className="h-5 w-5" />;
      case 'ShieldPlus': return <ShieldPlus className="h-5 w-5" />;
      case 'Clock': return <Clock className="h-5 w-5" />;
      case 'FileText': return <FilePieChart className="h-5 w-5" />;
      case 'Search': return <Search className="h-5 w-5" />;
      case 'Moon': return <Moon className="h-5 w-5" />;
      default: return <Clock className="h-5 w-5" />;
    }
  };

  return (
    <section id="maria" className="py-24 bg-gray-50 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-blue uppercase font-bold bg-brand-blue/5 px-3.5 py-1.5 rounded-full border border-brand-blue/10" id="maria-badge">
            {lang === 'en' ? 'HUMAN CENTRIC IMPACT' : 'IMPACTO HUMANO CENTRAL'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue-dark tracking-tight mt-4" id="maria-title">
            {t.storyTitle}
          </h2>
          <p className="text-gray-500 text-lg mt-3" id="maria-subtitle">
            {t.storySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Maria Demographic Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-150 shadow-xl overflow-hidden" id="maria-profile-card">
              
              {/* Header Profile Info */}
              <div className="bg-brand-blue-dark p-6 text-white relative">
                <div className="absolute top-4 right-4 bg-brand-green/20 text-brand-green border border-brand-green/30 text-[10px] uppercase font-mono px-2.5 py-1 rounded-full font-bold">
                  {lang === 'en' ? 'ESSENTIAL WORKER' : 'EMPLEADA ESENCIAL'}
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-[#1A4B75] border-2 border-brand-green flex items-center justify-center text-brand-green relative overflow-hidden" id="maria-avatar">
                    <User className="h-9 w-9 text-brand-green" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold tracking-tight">Maria Johnson</h3>
                    <p className="text-brand-blue-light text-xs font-mono font-semibold">Age 32 • Single Mother</p>
                  </div>
                </div>
              </div>

              {/* Bio Details */}
              <div className="p-6 text-left space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="block text-[10px] font-mono text-gray-400 uppercase font-semibold">Occupation</span>
                    <span className="font-sans font-bold text-sm text-brand-blue-dark">Nursing Assistant</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="block text-[10px] font-mono text-gray-400 uppercase font-semibold">Current Area</span>
                    <span className="font-sans font-bold text-sm text-brand-blue-dark">East Winston-Salem</span>
                  </div>
                </div>

                <div className="bg-rose-50/70 border border-rose-100 p-4 rounded-xl flex items-start space-x-3">
                  <BadgeAlert className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wide">
                      {lang === 'en' ? 'Critical Rent Burden: 48%' : 'Gasto Crítico en Renta: 48%'}
                    </h4>
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                      {lang === 'en' 
                        ? 'Maria pays $1,250/mo out of her limited $2,600 nursing assistant wages, leaving extremely narrow margins for healthy nutrition, childcare, and basic transit costs.'
                        : 'María paga $1,250/mes de su salario mensual neto de $2,600, dejándola casi sin recursos para comida, cuidado de niños y gasolina.'}
                    </p>
                  </div>
                </div>

                {/* Micro metrics */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Commute Time / Viajes</span>
                    <span className="font-bold text-rose-650">90 mins / day</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-rose-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>

                  <div className="flex justify-between text-xs pt-1">
                    <span className="text-gray-500">{lang === 'en' ? 'Savings Capability' : 'Capacidad de Ahorro'}</span>
                    <span className="font-bold text-rose-600">$0 / mo</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-rose-500 h-1.5 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>

              {/* HomeLanders AI promise statement */}
              <div className="bg-brand-green/10 border-t border-brand-green/20 p-4 flex items-center justify-between text-xs font-medium">
                <span className="text-brand-blue-dark flex items-center space-x-1">
                  <Sparkles className="h-4 w-4 text-brand-green mr-1 inline" />
                  <span>{lang === 'en' ? 'Matched with HomeLander AI' : 'Bajo el plan de HomeLander AI'}</span>
                </span>
                <span className="text-brand-green-dark font-bold font-mono">Rent drops to 28%</span>
              </div>

            </div>

            {/* Quote Block */}
            <div className="relative bg-brand-blue text-white p-6 rounded-2xl shadow-md overflow-hidden text-left" id="maria-quote-block">
              <Quote className="absolute -bottom-4 -right-4 h-24 w-24 text-white/5 pointer-events-none" />
              <p className="text-white italic text-base relative z-10 leading-relaxed font-medium">
                {t.storyQuote}
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <Heart className="h-4 w-4 text-brand-green" />
                <span className="text-xs font-mono text-brand-blue-light uppercase font-bold">Winston-Salem Resident advocacy</span>
              </div>
            </div>

          </div>

          {/* Interactive Timeline */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-xl text-left" id="timeline-interactive-deck">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-brand-blue-dark font-display flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-brand-blue" />
                  <span>{t.storyRoutine}</span>
                </h3>
                <span className="text-[10px] font-mono text-gray-400 bg-gray-50 border border-gray-100 py-1 px-3 rounded-full">
                  {lang === 'en' ? 'Click row to see AI correction' : 'Toque una fila para ver el impacto AI'}
                </span>
              </div>

              {/* Timeline Container */}
              <div className="space-y-3 relative before:absolute before:inset-y-0 before:left-6 before:w-0.5 before:bg-gray-100">
                
                {MARIA_TIMELINE.map((step, idx) => {
                  const isHoveredOrClicked = hoveredHour === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setHoveredHour(isHoveredOrClicked ? null : idx)}
                      onMouseEnter={() => setHoveredHour(idx)}
                      onMouseLeave={() => setHoveredHour(null)}
                      className={`relative z-10 flex items-start space-x-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isHoveredOrClicked
                          ? 'bg-brand-blue-dark text-white border-brand-blue-dark shadow-md scale-102 translate-x-1'
                          : 'bg-[#FCFDFE] hover:bg-gray-50 border-gray-100 hover:border-gray-200 shadow-xs'
                      }`}
                      id={`timeline-row-${idx}`}
                    >
                      {/* Timeline Dot/Icon */}
                      <div className={`p-2 rounded-xl border flex-shrink-0 transition-colors ${
                        isHoveredOrClicked
                          ? 'bg-brand-green text-brand-blue-dark border-brand-green'
                          : 'bg-white text-brand-blue border-gray-200'
                      }`}>
                        {getTimelineIcon(step.iconName)}
                      </div>

                      {/* Timeline text content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <span className={`font-mono text-xs font-bold ${
                            isHoveredOrClicked ? 'text-brand-green' : 'text-brand-blue-light'
                          }`}>
                            {step.time}
                          </span>
                          <span className={`text-[9px] uppercase tracking-wider font-bold ${
                            isHoveredOrClicked ? 'text-gray-300' : 'text-gray-400'
                          }`}>
                            {isHoveredOrClicked ? 'AI OPTIMIZED EFFECT' : 'DAILY CHORE'}
                          </span>
                        </div>
                        
                        <h4 className="text-sm font-bold mt-1 tracking-tight">
                          {lang === 'en' ? step.activity : step.activityEs}
                        </h4>
                        
                        <p className={`text-xs mt-1.5 leading-relaxed ${
                          isHoveredOrClicked ? 'text-gray-200' : 'text-gray-500'
                        }`}>
                          {lang === 'en' ? step.impact : step.impactEs}
                        </p>

                        {/* Extra HomeLander AI Solution Box (revealed when selected) */}
                        {isHoveredOrClicked && (
                          <div className="mt-3 p-3 bg-[#031C31] border border-brand-green/20 rounded-lg text-xs text-left text-brand-green animate-float" id="ai-solution-row-popup">
                            <span className="font-bold uppercase font-mono tracking-wider text-[10px] block mb-1">
                              {lang === 'en' ? 'How HomeLander AI Fixes This:' : 'Cómo lo soluciona HomeLander AI:'}
                            </span>
                            <span>
                              {idx === 0 && (lang === 'en' 
                                ? 'Peace of mind. By reducing her searches to minutes, Maria gets quality restorative sleep and reduces chronic insomnia.' 
                                : 'Tranquilidad. Al reducir el tiempo de búsqueda a minutos, María recupera horas valiosas de descanso reparador.')}
                              {idx === 1 && (lang === 'en' 
                                ? 'Identifies transit-oriented affordable rentals near Atrium Health. Trims commuting transfers to just 1 bus, saving 40 min daily.' 
                                : 'Identifica alquileres asequibles cerca de Atrium Health. Reduce la ruta a un solo autobús, ahorrando 40 minutos diarios.')}
                              {idx === 2 && (lang === 'en' 
                                ? 'Work focus. Stable, secure nearby housing lets Maria work efficiently, eliminating ambient anxiety about sudden evictions.' 
                                : 'Enfoque laboral. Una vivienda estable y segura le permite rendir al máximo sin miedo persistente al desalojo.')}
                              {idx === 3 && (lang === 'en' 
                                ? 'Being closer to school allows Maria to catch her son on time. No late pickup fines, giving her more parent-child bonding.' 
                                : 'Estar cerca facilita recoger a su hijo a tiempo. Olvida multas por tardanzas y gana tiempo de calidad con él.')}
                              {idx === 4 && (lang === 'en' 
                                ? 'Unveils public rental voucher opportunities. Connects her with county utility credits worth $450/year.' 
                                : 'Descubre opciones de subsidio de fianza y la conecta con créditos anuales de luz de $450.')}
                              {idx === 5 && (lang === 'en' 
                                ? 'Instead of fragmented, broken platforms, our single unified matchmaker outputs valid listings ready to lease.' 
                                : 'En lugar de webs caídas, nuestro matchmaker unificado arroja ofertas validadas listas para habitar.')}
                              {idx === 6 && (lang === 'en' 
                                ? 'Restful, confident sleep. Security of home foundations is the ultimate predictor of healthy outcomes.' 
                                : 'Descanso tranquilo. La seguridad habitacional disminuye drásticamente la presión arterial y aumenta el bienestar.')}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
