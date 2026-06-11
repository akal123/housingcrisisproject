import React, { useState } from 'react';
import { ArrowUp, ArrowDown, ShieldAlert, Navigation, Layers, Info, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../data/mockData';

interface ChallengeProps {
  lang: 'en' | 'es';
}

interface CountyData {
  name: string;
  rentersStruggling: string;
  costBurdened: string;
  status: string;
}

export default function Challenge({ lang }: ChallengeProps) {
  const t = TRANSLATIONS[lang];
  const [selectedCounty, setSelectedCounty] = useState<string>('Forsyth');

  const counties: { [key: string]: CountyData } = {
    Yadkin: { name: 'Yadkin County', rentersStruggling: '32%', costBurdened: '3,100', status: 'Expansion Zone' },
    Surry: { name: 'Surry County', rentersStruggling: '34%', costBurdened: '6,400', status: 'Expansion Zone' },
    Stokes: { name: 'Stokes County', rentersStruggling: '29%', costBurdened: '3,800', status: 'Expansion Zone' },
    Forsyth: { name: 'Forsyth County (Winston-Salem)', rentersStruggling: '47%', costBurdened: '43,140', status: 'Active Pilot Region' },
    Davidson: { name: 'Davidson County', rentersStruggling: '38%', costBurdened: '15,600', status: 'Expansion Zone' },
    Davie: { name: 'Davie County', rentersStruggling: '31%', costBurdened: '3,200', status: 'Expansion Zone' },
    Guilford: { name: 'Guilford County (Greensboro)', rentersStruggling: '45%', costBurdened: '51,400', status: 'Expansion Zone' },
    Randolph: { name: 'Randolph County', rentersStruggling: '36%', costBurdened: '12,900', status: 'Expansion Zone' }
  };

  return (
    <section id="challenge" className="py-24 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#0A3D62] uppercase font-bold bg-[#0A3D62]/5 px-3.5 py-1.5 rounded-full border border-[#0A3D62]/10" id="challenge-badge">
            {lang === 'en' ? 'LOCAL PROBLEM MATRIX' : 'MATRIZ DEL PROBLEMA LOCAL'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue-dark tracking-tight mt-4" id="challenge-title">
            {t.challengeTitle}
          </h2>
          <p className="text-gray-500 text-lg mt-3" id="challenge-subtitle">
            {t.challengeSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Key Pain Points Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <h3 className="text-xl font-bold text-brand-blue-dark border-b border-gray-100 pb-3 font-display">
              {lang === 'en' ? 'Systemic Root Causes' : 'Causas de la Crisis'}
            </h3>

            <div className="space-y-6">
              {/* Point 1 */}
              <div className="flex start space-x-4 group" id="pain-1">
                <div className="flex-shrink-0 mt-1 p-2 bg-[#0A3D62]/5 text-[#0A3D62] rounded-xl border border-[#0A3D62]/10 group-hover:bg-brand-green/10 group-hover:text-brand-green-dark group-hover:border-brand-green/20 transition-all">
                  <ArrowUp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-blue-dark group-hover:text-[#0A3D62] transition-colors">{t.issue1}</h4>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{t.issue1Detail}</p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex start space-x-4 group" id="pain-2">
                <div className="flex-shrink-0 mt-1 p-2 bg-[#0A3D62]/5 text-[#0A3D62] rounded-xl border border-[#0A3D62]/10 group-hover:bg-brand-green/10 group-hover:text-brand-green-dark group-hover:border-brand-green/20 transition-all">
                  <Navigation className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-blue-dark group-hover:text-[#0A3D62] transition-colors">{t.issue2}</h4>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{t.issue2Detail}</p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex start space-x-4 group" id="pain-3">
                <div className="flex-shrink-0 mt-1 p-2 bg-[#0A3D62]/5 text-[#0A3D62] rounded-xl border border-[#0A3D62]/10 group-hover:bg-brand-green/10 group-hover:text-brand-green-dark group-hover:border-brand-green/20 transition-all">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-blue-dark group-hover:text-[#0A3D62] transition-colors">{t.issue3}</h4>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{t.issue3Detail}</p>
                </div>
              </div>
            </div>

            {/* Trajectory Comparison Module */}
            <div className="bg-[#FAFBFD] border border-gray-100 p-6 rounded-2xl shadow-sm" id="comparison-block">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue-light mb-4">
                {t.compareTitle}
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* Cost */}
                <div className="text-center p-3.5 bg-rose-50 border border-rose-200/50 rounded-xl">
                  <span className="text-xs font-semibold text-rose-800">{t.compareRent}</span>
                  <div className="flex items-center justify-center space-x-1 mt-1 text-rose-600">
                    <ArrowUp className="h-4 w-4" />
                    <span className="font-mono font-bold text-lg leading-none">Rising</span>
                  </div>
                </div>

                {/* Wages */}
                <div className="text-center p-3.5 bg-amber-50 border border-amber-200/50 rounded-xl">
                  <span className="text-xs font-semibold text-amber-800">{t.compareWages}</span>
                  <div className="flex items-center justify-center space-x-1 mt-1 text-amber-600">
                    <ArrowUp className="h-4 w-4" />
                    <span className="font-mono font-bold text-sm leading-none">Slow</span>
                  </div>
                </div>

                {/* Available */}
                <div className="text-center p-3.5 bg-emerald-50 border border-emerald-200/50 rounded-xl col-span-1">
                  <span className="text-xs font-semibold text-emerald-800">{lang === 'en' ? 'Affordable Available' : 'Casas Asequibles'}</span>
                  <div className="flex items-center justify-center space-x-1 mt-1 text-emerald-600">
                    <ArrowDown className="h-4 w-4" />
                    <span className="font-mono font-bold text-lg leading-none">Down</span>
                  </div>
                </div>

                {/* Commute */}
                <div className="text-center p-3.5 bg-blue-50 border border-blue-200/50 rounded-xl col-span-1">
                  <span className="text-xs font-semibold text-blue-800">{lang === 'en' ? 'Commutes' : 'Viaje Laboral'}</span>
                  <div className="flex items-center justify-center space-x-1 mt-1 text-blue-600">
                    <ArrowUp className="h-4 w-4" />
                    <span className="font-mono font-bold text-lg leading-none">Longer</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Triad Map Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="bg-brand-blue-dark text-white p-6 rounded-2xl shadow-xl border border-brand-blue/30 relative">
              
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-brand-green/20 text-brand-green px-3 py-1 rounded-full text-xs font-semibold border border-brand-green/25 font-mono">
                {lang === 'en' ? 'Interactive Regional Map' : 'Mapa Regional Interactivo'}
              </div>

              {/* County Information Panel (displays active hovered/selected county details) */}
              <div className="mt-10 mb-6 bg-brand-blue-dark/50 border border-white/10 p-4 rounded-xl text-left" id="map-selection-panel">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white font-display flex items-center space-x-2">
                    <span className="block h-3 w-3 rounded-full bg-brand-green animate-pulse-subtle" />
                    <span>{counties[selectedCounty]?.name}</span>
                  </h4>
                  <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono font-bold border ${
                    counties[selectedCounty]?.status === 'Active Pilot Region'
                      ? 'bg-brand-green/10 text-brand-green border-brand-green/30'
                      : 'bg-white/5 text-gray-300 border-white/10'
                  }`}>
                    {counties[selectedCounty]?.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-white/10">
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 capitalize">Cost Burdened Households</span>
                    <span className="font-mono text-xl font-bold text-brand-green">{counties[selectedCounty]?.costBurdened}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 capitalize">Renters Struggling</span>
                    <span className="font-mono text-xl font-bold text-[#487EB0]">{counties[selectedCounty]?.rentersStruggling}</span>
                  </div>
                </div>
              </div>

              {/* Styled Vector SVG of Piedmont Triad */}
              <div className="w-full h-80 rounded-xl overflow-hidden bg-[#04192B] border border-white/5 flex items-center justify-center p-2 relative" id="vector-map-container">
                <svg viewBox="0 0 450 350" className="w-full h-full max-h-72 text-gray-400" id="county-svg-map">
                  {/* Surry County */}
                  <path
                    d="M 50,20 L 150,20 L 140,90 L 40,90 Z"
                    fill={selectedCounty === 'Surry' ? '#2ECC71' : '#0A3D62'}
                    stroke="#002244"
                    strokeWidth="2"
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#487EB0]"
                    onClick={() => setSelectedCounty('Surry')}
                    id="path-surry"
                  />
                  <text x="85" y="55" fill="#FFF" fontSize="10" className="font-bold pointer-events-none uppercase tracking-wider">Surry</text>

                  {/* Stokes County */}
                  <path
                    d="M 150,20 L 250,20 L 240,90 L 140,90 Z"
                    fill={selectedCounty === 'Stokes' ? '#2ECC71' : '#0A3D62'}
                    stroke="#002244"
                    strokeWidth="2"
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#487EB0]"
                    onClick={() => setSelectedCounty('Stokes')}
                    id="path-stokes"
                  />
                  <text x="180" y="55" fill="#FFF" fontSize="10" className="font-bold pointer-events-none uppercase tracking-wider">Stokes</text>

                  {/* Yadkin County */}
                  <path
                    d="M 40,90 L 140,90 L 130,160 L 30,160 Z"
                    fill={selectedCounty === 'Yadkin' ? '#2ECC71' : '#0A3D62'}
                    stroke="#002244"
                    strokeWidth="2"
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#487EB0]"
                    onClick={() => setSelectedCounty('Yadkin')}
                    id="path-yadkin"
                  />
                  <text x="75" y="125" fill="#FFF" fontSize="10" className="font-bold pointer-events-none uppercase tracking-wider">Yadkin</text>

                  {/* Forsyth County (Our Pilot Highlight) */}
                  <path
                    d="M 140,90 L 240,90 L 230,170 L 130,160 Z"
                    fill={selectedCounty === 'Forsyth' ? '#2ECC71' : '#145A86'}
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    className="cursor-pointer transition-all duration-200 hover:fill-brand-green filter drop-shadow-lg"
                    onClick={() => setSelectedCounty('Forsyth')}
                    id="path-forsyth"
                  />
                  <text x="165" y="125" fill="#FFF" fontSize="11" className="font-extrabold pointer-events-none uppercase tracking-widest bg-black">FORSYTH</text>

                  {/* Davidson County */}
                  <path
                    d="M 130,160 L 230,170 L 220,250 L 120,240 Z"
                    fill={selectedCounty === 'Davidson' ? '#2ECC71' : '#0A3D62'}
                    stroke="#002244"
                    strokeWidth="2"
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#487EB0]"
                    onClick={() => setSelectedCounty('Davidson')}
                    id="path-davidson"
                  />
                  <text x="160" y="205" fill="#FFF" fontSize="10" className="font-bold pointer-events-none uppercase tracking-wider">Davidson</text>

                  {/* Davie County */}
                  <path
                    d="M 30,160 L 130,160 L 120,240 L 20,240 Z"
                    fill={selectedCounty === 'Davie' ? '#2ECC71' : '#0A3D62'}
                    stroke="#002244"
                    strokeWidth="2"
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#487EB0]"
                    onClick={() => setSelectedCounty('Davie')}
                    id="path-davie"
                  />
                  <text x="65" y="205" fill="#FFF" fontSize="10" className="font-bold pointer-events-none uppercase tracking-wider">Davie</text>

                  {/* Guilford County */}
                  <path
                    d="M 240,90 L 370,90 L 370,200 L 230,170 Z"
                    fill={selectedCounty === 'Guilford' ? '#2ECC71' : '#0A3D62'}
                    stroke="#002244"
                    strokeWidth="2"
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#487EB0]"
                    onClick={() => setSelectedCounty('Guilford')}
                    id="path-guilford"
                  />
                  <text x="285" y="135" fill="#FFF" fontSize="10" className="font-bold pointer-events-none uppercase tracking-wider">Guilford</text>

                  {/* Randolph County */}
                  <path
                    d="M 230,170 L 370,200 L 350,290 L 220,250 Z"
                    fill={selectedCounty === 'Randolph' ? '#2ECC71' : '#0A3D62'}
                    stroke="#002244"
                    strokeWidth="2"
                    className="cursor-pointer transition-colors duration-200 hover:fill-[#487EB0]"
                    onClick={() => setSelectedCounty('Randolph')}
                    id="path-randolph"
                  />
                  <text x="275" y="235" fill="#FFF" fontSize="10" className="font-bold pointer-events-none uppercase tracking-wider">Randolph</text>
                </svg>

                {/* Help guide floating overlay */}
                <div className="absolute bottom-2, right-2 bg-black/50 px-2 py-1 rounded text-[9px] text-gray-300 pointer-events-none flex items-center space-x-1">
                  <Info className="h-3 w-3 text-brand-green" />
                  <span>Click counties to review data</span>
                </div>
              </div>

              {/* Extra insight below the map */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="h-3 w-5 text-brand-green inline" />
                  <span>Highlighting Winston-Salem Hub (Forsyth)</span>
                </span>
                <span className="font-mono text-brand-green">43,140 Families Burdened</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
