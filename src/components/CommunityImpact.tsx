import React, { useState } from 'react';
import { Award, Zap, CheckCircle2, Sliders, Hourglass, Landmark, HelpCircle, ArrowUpRight } from 'lucide-react';
import { TRANSLATIONS } from '../data/mockData';

interface CommunityImpactProps {
  lang: 'en' | 'es';
}

export default function CommunityImpact({ lang }: CommunityImpactProps) {
  const t = TRANSLATIONS[lang];

  // Calculator states for judge interaction
  const [familiesServed, setFamiliesServed] = useState<number>(550);
  const [fuelSavings, setFuelSavings] = useState<number>(45);
  const [timeSaved, setTimeSaved] = useState<number>(10);

  // Constants
  const HOURLY_WORKER_WAGE = 18; // Average nursing assistant / essential worker local rate

  // Math components
  const commuterAnnualValue = familiesServed * fuelSavings * 12;
  const timeSavedAnnualValue = familiesServed * timeSaved * HOURLY_WORKER_WAGE;
  const subsidyUnlockingBonus = familiesServed * 250; // Administrative efficiency index
  
  const totalImpactVal = commuterAnnualValue + timeSavedAnnualValue + subsidyUnlockingBonus;

  return (
    <section id="community-impact" className="py-24 bg-brand-blue-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-green uppercase font-bold bg-[#2ECC71]/10 px-4 py-1.5 rounded-full border border-brand-green/20" id="impact-badge">
            {lang === 'en' ? 'LOCAL VALUE PROJECTION' : 'RETORNO DE INVERSIÓN LOCAL'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-4" id="impact-title">
            {t.impactTitle}
          </h2>
          <p className="text-gray-300 text-lg mt-3" id="impact-subtitle">
            {t.impactSubtitle}
          </p>
        </div>

        {/* Master Impact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Large Static Outcomes Section (Key metrics) */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8" id="outcome-metrics-panel">
            <span className="text-xs font-mono text-brand-green-dark bg-brand-green/10 border border-brand-green/25 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider text-center block w-max mx-auto">
              {lang === 'en' ? 'PROJECTED ACCLAIM' : 'PRONÓSTICO DESTACADO'}
            </span>
            
            <div className="space-y-6">
              {/* Outcome 1 */}
              <div className="text-center space-y-1">
                <span className="block text-gray-400 text-xs font-mono uppercase font-semibold">{t.metricServed}</span>
                <span className="block font-mono text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{t.valServed}</span>
              </div>

              {/* Outcome 2 */}
              <div className="text-center space-y-1 border-t border-white/5 pt-4">
                <span className="block text-gray-400 text-xs font-mono uppercase font-semibold">{t.metricHours}</span>
                <span className="block font-mono text-4xl sm:text-5xl font-extrabold text-brand-blue-light tracking-tight">{t.valHours}</span>
              </div>

              {/* Outcome 3 */}
              <div className="text-center space-y-1 border-t border-white/5 pt-4">
                <span className="block text-gray-400 text-xs font-mono uppercase font-semibold">{t.metricValue}</span>
                <span className="block font-mono text-4xl sm:text-5xl font-extrabold text-brand-green tracking-tight">{t.valValue}</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 p-4 rounded-xl text-center text-xs text-gray-300">
              <Award className="h-5 w-5 text-brand-green mx-auto mb-2" />
              <span>{lang === 'en' ? 'Targeting high-efficiency administrative metrics for local council budgets.' : 'Enfocado en las eficiencias del presupuesto público.'}</span>
            </div>
          </div>

          {/* Interactive Calculator Model Card for Judges (This is elite UI) */}
          <div className="lg:col-span-8 bg-[#09223A] border border-brand-blue/35 rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between" id="financial-calculator-card">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-brand-green/15 text-brand-green rounded-xl border border-brand-green/20">
                    <Sliders className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-display text-white">{lang === 'en' ? 'Interactive Impact Calculator for Judges' : 'Calculadora de Retorno de Inversión (Jurados)'}</h4>
                    <span className="text-[9px] font-mono tracking-widest text-[#487EB0] uppercase">Tweak the variables below to simulate outcomes</span>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
                
                {/* Families Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-450">
                    <span className="font-semibold">{lang === 'en' ? 'Families Served' : 'Familias Servidas'}</span>
                    <span className="font-mono text-brand-green font-bold bg-white/5 px-2 py-0.5 rounded">{familiesServed}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1500"
                    step="50"
                    value={familiesServed}
                    onChange={(e) => setFamiliesServed(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <span className="text-[9px] text-gray-400 block text-right mt-1">100 to 1,500</span>
                </div>

                {/* Commute Savings Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-450">
                    <span className="font-semibold">{lang === 'en' ? 'Monthly Transit Saved' : 'Combustible Ahorrado'}</span>
                    <span className="font-mono text-brand-green font-bold bg-white/5 px-2 py-0.5 rounded">${fuelSavings}</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="100"
                    step="5"
                    value={fuelSavings}
                    onChange={(e) => setFuelSavings(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <span className="text-[9px] text-gray-400 block text-right mt-1">$15 to $100 / mo</span>
                </div>

                {/* Hours Saved Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-450">
                    <span className="font-semibold">{lang === 'en' ? 'Hours Saved / Worker' : 'Horas de Búsqueda'}</span>
                    <span className="font-mono text-brand-green font-bold bg-white/5 px-2 py-0.5 rounded">{timeSaved}h</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="35"
                    step="5"
                    value={timeSaved}
                    onChange={(e) => setTimeSaved(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <span className="text-[9px] text-gray-400 block text-right mt-1">5h to 35h</span>
                </div>

              </div>

              {/* Math Explainer breakdown display box */}
              <div className="bg-black/40 border border-white/5 p-4 rounded-xl text-left space-y-3">
                <span className="block text-[10px] font-mono text-brand-blue-light uppercase tracking-wider">{t.metricDetailTitle}</span>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-normal">
                  <div className="space-y-1">
                    <div className="text-gray-400 flex items-center space-x-1">
                      <Hourglass className="h-3.5 w-3.5 inline text-brand-green" />
                      <span>{lang === 'en' ? 'Administrative Hours Saved:' : 'Tiempo de Búsqueda:'}</span>
                    </div>
                    <span className="font-mono text-white font-bold block">${timeSavedAnnualValue.toLocaleString()} ({familiesServed * timeSaved} hrs)</span>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-gray-400 flex items-center space-x-1">
                      <Zap className="h-3.5 w-3.5 inline text-[#487EB0]" />
                      <span>{lang === 'en' ? 'Transit Fuel Value:' : 'Gasolina / Autobús Saved:'}</span>
                    </div>
                    <span className="font-mono text-white font-bold block">${commuterAnnualValue.toLocaleString()} / year</span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-gray-400 flex items-center space-x-1">
                      <Landmark className="h-3.5 w-3.5 inline text-brand-green" />
                      <span>{lang === 'en' ? 'Qualified Grants Released:' : 'Subvenciones Liberadas:'}</span>
                    </div>
                    <span className="font-mono text-white font-bold block">${subsidyUnlockingBonus.toLocaleString()} / year</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live Master Calculation Output Header */}
            <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left w-full sm:w-auto">
                <span className="text-[10px] font-mono text-gray-400 block tracking-wider uppercase font-semibold">ESTIMATED COMBINED CIVIC VALUE CREATED:</span>
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-brand-green select-all block mt-0.5" id="dynamic-annual-impact-val">
                  ${totalImpactVal.toLocaleString()}
                </span>
              </div>
              <span className="bg-brand-green/10 text-brand-green border border-brand-green/30 text-xs px-4 py-2 rounded-xl font-bold flex items-center space-x-1 max-sm:w-full text-center justify-center">
                <span>{lang === 'en' ? '92% Administrative Efficiency' : '92% Eficiencia Pública'}</span>
              </span>
            </div>

          </div>

        </div>

        {/* Value card deck bullet descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-start space-x-3" id="calc-bullet-1">
            <CheckCircle2 className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-300 leading-relaxed">{t.itemCalc1}</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-start space-x-3" id="calc-bullet-2">
            <CheckCircle2 className="h-5 w-5 text-[#487EB0] mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-300 leading-relaxed">{t.itemCalc2}</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex items-start space-x-3" id="calc-bullet-3">
            <CheckCircle2 className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-300 leading-relaxed">{t.itemCalc3}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
