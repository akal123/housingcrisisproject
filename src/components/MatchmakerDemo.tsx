import React, { useState, useEffect } from 'react';
import { Sliders, Landmark, Check, AlertCircle, Sparkles, MapPin, Bus, Calendar, ChevronRight, HelpCircle, ArrowRight, Loader2, DollarSign } from 'lucide-react';
import { HOUSING_LISTINGS, WORKPLACES, ASSISTANCE_PROGRAMS, TRANSLATIONS } from '../data/mockData';
import { HousingListing, AssistanceProgram } from '../types';

interface MatchmakerDemoProps {
  lang: 'en' | 'es';
}

export default function MatchmakerDemo({ lang }: MatchmakerDemoProps) {
  const t = TRANSLATIONS[lang];

  // User input states
  const [income, setIncome] = useState<number>(34000);
  const [familySize, setFamilySize] = useState<number>(3);
  const [workplace, setWorkplace] = useState<string>('baptist');
  const [budget, setBudget] = useState<number>(1000);
  const [commute, setCommute] = useState<number>(20);

  // System states
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [filteredListings, setFilteredListings] = useState<HousingListing[]>([]);
  const [matchedPrograms, setMatchedPrograms] = useState<AssistanceProgram[]>([]);
  const [selectedListing, setSelectedListing] = useState<HousingListing | null>(null);

  // Calculation function
  const runMatchmaker = () => {
    setIsCalculating(true);
    
    // Simulate smart backend processing delay
    setTimeout(() => {
      // 1. Filter listings by commute and rent budget
      const matches = HOUSING_LISTINGS.filter(listing => {
        const commuteMinutes = listing.commuteTimeMap[workplace] || 30;
        // Keep matches close to constraints (+/- slight leeway for realistic experience)
        return commuteMinutes <= commute + 5 && listing.rent <= budget + 250;
      });

      // Sort matching units based on proximity and price alignment
      matches.sort((a, b) => {
        const commA = a.commuteTimeMap[workplace] || 30;
        const commB = b.commuteTimeMap[workplace] || 30;
        return (a.rent - b.rent) + (commA - commB);
      });

      setFilteredListings(matches);

      // 2. Identify qualified local assistance programs based on income & constraints
      const programs: AssistanceProgram[] = [];
      const grossMonthly = income / 12;

      // Section 8 Voucher qualifications
      if (income <= 42000) {
        const section8 = ASSISTANCE_PROGRAMS.find(p => p.id === 'p1');
        if (section8) programs.push(section8);
      }

      // First-time homebuyer eligibility
      if (familySize >= 2 && income <= 55000) {
        const homebuyer = ASSISTANCE_PROGRAMS.find(p => p.id === 'p2');
        if (homebuyer) programs.push(homebuyer);
      }

      // Transit voucher criteria
      const transitSub = ASSISTANCE_PROGRAMS.find(p => p.id === 'p3');
      if (transitSub) {
        programs.push(transitSub);
      }

      // Utility rescue funds
      if (budget / grossMonthly > 0.35) {
        const utilityHelp = ASSISTANCE_PROGRAMS.find(p => p.id === 'p4');
        if (utilityHelp) programs.push(utilityHelp);
      }

      setMatchedPrograms(programs);
      setIsCalculating(false);
    }, 850);
  };

  // Run calculation on Mount and on inputs changing is also possible, but letting the user explicitly click triggers high trust and feeling of AI computation
  useEffect(() => {
    runMatchmaker();
  }, [income, familySize, workplace, budget, commute]);

  // Utility to calculate dynamic overall affordability score
  const calculateAffordabilityScore = (listingRent: number) => {
    const monthlyGross = income / 12;
    const rentRatio = listingRent / monthlyGross;
    
    // Ideal is under 30%, which yields 100 points
    if (rentRatio <= 0.3) {
      return Math.round(98 - (rentRatio * 10));
    } else if (rentRatio <= 0.45) {
      // Safe zone with mild stress
      return Math.round(90 - (rentRatio - 0.3) * 150);
    } else {
      // High cost burden zone
      return Math.max(Math.round(65 - (rentRatio - 0.45) * 80), 40);
    }
  };

  const getWorkplaceName = (id: string) => {
    const wp = WORKPLACES.find(w => w.id === id);
    return lang === 'en' ? wp?.name : wp?.nameEs;
  };

  return (
    <section id="matchmaker-demo" className="py-24 bg-gray-50 text-gray-900 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-blue uppercase font-bold bg-[#0A3D62]/5 px-3.5 py-1.5 rounded-full border border-[#0A3D62]/10" id="matchmaker-badge">
            {lang === 'en' ? 'INTERACTIVE DEMO APPLICATION' : 'APLICACIÓN PILOTO INTERACTIVA'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue-dark tracking-tight mt-4" id="matchmaker-title">
            {t.trialWidgetTitle}
          </h2>
          <p className="text-gray-500 text-lg mt-3" id="matchmaker-subtitle">
            {t.trialWidgetSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Search Parameter Form Panel */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-xl text-left space-y-6" id="input-controls-card">
            <h3 className="text-lg font-bold text-brand-blue-dark font-display flex items-center space-x-2 border-b border-gray-100 pb-3">
              <Sliders className="h-5 w-5 text-brand-blue" />
              <span>{lang === 'en' ? 'Matcher Parameters' : 'Parámetros del Buscador'}</span>
            </h3>

            {/* Income Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-gray-700">{t.labelIncome}</label>
                <span className="font-mono font-bold text-brand-blue bg-brand-blue/5 px-2.5 py-1 rounded border border-brand-blue/10">
                  ${income.toLocaleString()} / {lang === 'en' ? 'yr' : 'año'}
                </span>
              </div>
              <input
                type="range"
                min="18000"
                max="85000"
                step="500"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                id="param-income"
              />
              <span className="text-[10px] text-gray-400 block justify-between flex">
                <span>$18k (Minimum wage)</span>
                <span>$85k (Median Family)</span>
              </span>
            </div>

            {/* Workplace Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">{t.labelWorkplace}</label>
              <select
                value={workplace}
                onChange={(e) => setWorkplace(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm text-brand-blue-dark font-medium"
                id="param-workplace"
              >
                {WORKPLACES.map((item) => (
                  <option key={item.id} value={item.id}>
                    {lang === 'en' ? item.name : item.nameEs}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Rental Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-gray-700">{t.labelBudget}</label>
                <span className="font-mono font-bold text-brand-green bg-brand-green/10 px-2.5 py-1 rounded border border-brand-green/20">
                  ${budget} / {lang === 'en' ? 'mo' : 'mes'}
                </span>
              </div>
              <input
                type="range"
                min="600"
                max="2200"
                step="50"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                id="param-budget"
              />
              <span className="text-[10px] text-gray-400 block justify-between flex">
                <span>$600 ({lang === 'en' ? 'Housing Voucher Base' : 'Base de Subsidio'})</span>
                <span>$2.2k ({lang === 'en' ? 'Market Rate Average' : 'Promedio de Mercado'})</span>
              </span>
            </div>

            {/* Commute limits */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-gray-700">{t.labelCommute}</label>
                <span className="font-mono font-bold text-brand-blue-light bg-brand-blue-light/5 px-2.5 py-1 rounded border border-brand-blue-light/25">
                  {commute} {lang === 'en' ? 'Minutes' : 'Minutos'}
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="45"
                step="5"
                value={commute}
                onChange={(e) => setCommute(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue-light"
                id="param-commute"
              />
              <span className="text-[10px] text-gray-400 block justify-between flex">
                <span>5m ({lang === 'en' ? 'Walk/Bike' : 'Caminando'})</span>
                <span>45m+ ({lang === 'en' ? 'Long Car Commute' : 'Viaje Interurbano'})</span>
              </span>
            </div>

            {/* Family Size selection */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">{t.labelFamilySize}</label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFamilySize(size)}
                    className={`py-2.5 px-3 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                      familySize === size
                        ? 'bg-brand-blue text-white border-brand-blue shadow-md'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                    }`}
                    id={`param-fsize-${size}`}
                  >
                    {size === 4 ? '4+' : size}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Statistics preview details */}
            <div className="bg-gray-50 border border-gray-150 p-4 rounded-xl text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">{lang === 'en' ? 'Gross Monthly Wages:' : 'Sueldo Mensual Bruto:'}</span>
                <span className="font-mono font-bold text-brand-blue-dark">${Math.round(income / 12).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0A3D62]">{lang === 'en' ? 'Federal 30% Threshold:' : 'Límite Federal del 30%:'}</span>
                <span className="font-mono font-bold text-[#0A3D62]">${Math.round((income / 12) * 0.3).toLocaleString()} / {lang === 'en' ? 'mo' : 'mes'}</span>
              </div>
              <div className="w-full bg-gray-200 h-px my-1" />
              <div className="text-[11px] text-gray-400 leading-normal italic text-center">
                {lang === 'en' 
                  ? 'Calculated matching indexes dynamically cross-evaluate public transit timetables against Winston-Salem county real-estate lists.'
                  : 'Los índices de coincidencia calculados cruzan dinámicamente horarios de tránsito real contra listados de Forsyth.'}
              </div>
            </div>

          </div>

          {/* Right Block: Dynamic AI Recommendation Dashboard Results */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Recommendation Header */}
            <div className="bg-brand-blue-dark text-white p-6 rounded-2xl shadow-xl border border-brand-blue/35 text-left relative overflow-hidden" id="matchmaker-results-dashboard">
              {/* Animated glow inside */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-brand-green/20 text-brand-green rounded-lg border border-brand-green/30">
                    <Landmark className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-display">{t.demoResultHeader}</h4>
                    <span className="text-[9px] font-mono tracking-wider text-gray-300 uppercase">Live Recommendation Matrix</span>
                  </div>
                </div>

                {isCalculating && (
                  <div className="flex items-center space-x-1.5 text-xs text-brand-green font-semibold">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    <span>{lang === 'en' ? 'Parsing...' : 'Calculando...'}</span>
                  </div>
                )}
              </div>

              {/* Dynamic feedback statistics overview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Result Stat 1: Match Count */}
                <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between">
                  <div className="text-left">
                    <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">{t.labelListingMatches}</span>
                    <span className="font-mono text-2xl font-extrabold text-white">
                      {isCalculating ? '...' : filteredListings.length} {lang === 'en' ? 'Homes' : 'Unidades'}
                    </span>
                  </div>
                  <span className="text-xs bg-brand-green/20 text-brand-green px-2.5 py-1 rounded-full font-bold border border-brand-green/25">
                    {lang === 'en' ? 'Verified' : 'Verificado'}
                  </span>
                </div>

                {/* Result Stat 2: Identified Subsidies */}
                <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between">
                  <div className="text-left">
                    <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">{lang === 'en' ? 'Qualified Assistance' : 'Préstamos y Subvenciones'}</span>
                    <span className="font-mono text-2xl font-extrabold text-brand-green">
                      {isCalculating ? '...' : matchedPrograms.length} {lang === 'en' ? 'Programs' : 'Ayudas'}
                    </span>
                  </div>
                  <span className="text-xs bg-brand-blue-light/25 text-brand-blue-light px-2.5 py-1 rounded-full font-bold border border-brand-blue-light/30">
                    {lang === 'en' ? 'Eligible' : 'Elegible'}
                  </span>
                </div>

              </div>
            </div>

            {/* Live listings results cards deck */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-brand-blue-dark tracking-wide text-left uppercase font-display border-b border-gray-150 pb-2">
                {lang === 'en' ? 'Housing Recommendations Near Your Workspace' : 'Viviendas Recomendadas Cerca de su Empleo'}
              </h4>

              {isCalculating ? (
                <div className="bg-white rounded-2xl border border-gray-155 p-12 text-center" id="loading-results-spinner">
                  <Loader2 className="h-10 w-10 animate-spin text-brand-green mx-auto mb-4" />
                  <p className="text-sm text-gray-500 font-semibold">{t.trialCalculating}</p>
                </div>
              ) : filteredListings.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-155 p-10 text-center space-y-4" id="empty-results-fallback">
                  <AlertCircle className="h-12 w-12 text-amber-500 mx-auto" />
                  <div>
                    <h5 className="font-bold text-brand-blue-dark">{lang === 'en' ? 'No perfect matches found' : 'No se hallaron coincidencias perfectas'}</h5>
                    <p className="text-xs text-gray-500 max-w-sm mx-auto mt-1 leading-normal">
                      {lang === 'en' 
                        ? 'Try expanding your targets! Increase your Target Monthly Budget slider or expand your Preferred Max Commute to discover Piedmont options.'
                        : 'Pruebe elevando el límite de Renta Mensual o ampliando el límite de viaje diario para encontrar hogares en Winston-Salem.'}
                    </p>
                  </div>
                  <button
                    onClick={() => { setBudget(1200); setCommute(30); }}
                    className="bg-brand-blue/5 text-brand-blue border border-brand-blue/15 hover:bg-brand-blue/10 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    id="expand-recommendations-btn"
                  >
                    {lang === 'en' ? 'Quick Expand Filters (Rent: $1,200, Commute: 30m)' : 'Ampliar límites rápidamente'}
                  </button>
                </div>
              ) : (
                <div className="space-y-4" id="listings-grid">
                  {filteredListings.slice(0, 3).map((listing) => {
                    const affordabilityRating = calculateAffordabilityScore(listing.rent);
                    const commuteMinutes = listing.commuteTimeMap[workplace] || 25;
                    const isHighBurden = listing.rent > (income / 12) * 0.35;

                    return (
                      <div
                        key={listing.id}
                        onClick={() => setSelectedListing(listing)}
                        className="bg-white rounded-2xl border border-gray-150 p-4 sm:p-5 flex flex-col sm:flex-row gap-5 shadow-md hover:shadow-xl hover:border-brand-green/20 hover:scale-101 cursor-pointer transition-all duration-200"
                        id={`listing-item-${listing.id}`}
                      >
                        {/* Listing Thumbnail Pic */}
                        <div className="sm:w-1/3 relative h-36 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0" id={`listing-pic-container-${listing.id}`}>
                          <img
                            src={listing.imageUrl}
                            alt={listing.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute top-2 left-2 bg-brand-blue-dark/85 backdrop-blur-sm text-brand-green px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider border border-white/10 uppercase">
                            {listing.neighborhood}
                          </span>
                        </div>

                        {/* Listing Texts details */}
                        <div className="flex-1 text-left flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-start">
                              <h5 className="font-bold text-brand-blue-dark leading-snug tracking-tight text-base hover:text-brand-blue group-hover:underline">
                                {listing.title}
                              </h5>
                              <span className="font-mono text-lg font-extrabold text-brand-blue leading-none">
                                ${listing.rent}
                                <span className="text-[10px] text-gray-400 font-sans block text-right">/ month</span>
                              </span>
                            </div>

                            <span className="text-xs text-gray-500 font-medium leading-none block">
                              {listing.address}
                            </span>

                            {/* Bullet Features */}
                            <div className="flex items-center space-x-3 text-xs text-gray-500 pt-1">
                              <span className="bg-gray-100 px-2 py-1 rounded font-semibold font-mono">
                                {listing.bedrooms} bed • {listing.bathrooms} bath
                              </span>
                              <span className="flex items-center space-x-1 text-brand-blue-light font-medium">
                                <Bus className="h-3.5 w-3.5 mr-0.5" />
                                <span>{commuteMinutes}m {lang === 'en' ? 'Commute' : 'Viaje'}</span>
                              </span>
                              <span className="text-[10px] text-gray-400 max-sm:hidden">
                                {listing.availableDate}
                              </span>
                            </div>
                          </div>

                          {/* Affordability Metrics Badge line */}
                          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-500 font-medium">
                                {t.scoreAffordabilityTitle}:
                              </span>
                              <div className="flex items-center space-x-1">
                                <span className={`font-mono font-extrabold px-1.5 py-0.5 rounded leading-none ${
                                  affordabilityRating >= 85 
                                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                                    : 'bg-amber-50 text-amber-800 border border-amber-200'
                                }`}>
                                  {affordabilityRating}%
                                </span>
                                <span className={`text-[9px] font-bold uppercase tracking-wider ${
                                  affordabilityRating >= 85 ? 'text-emerald-700' : 'text-amber-700'
                                }`}>
                                  {affordabilityRating >= 85 ? 'Excellent' : 'Moderate'}
                                </span>
                              </div>
                            </div>

                            {/* Badge listing condition */}
                            {listing.subsidyAccepted && (
                              <span className="bg-brand-green/10 text-brand-green-dark border border-brand-green/25 px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase">
                                {lang === 'en' ? 'Section 8 Okay' : 'Cupón Sección 8 ok'}
                              </span>
                            )}
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Assistance programs targeted dynamically (Full Width Layout) */}
        {!isCalculating && matchedPrograms.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-lg text-left mt-8" id="qualified-grants-deck">
            <h4 className="text-base font-bold text-brand-blue-dark tracking-wide uppercase font-display border-b border-gray-100 pb-3 mb-6 flex items-center space-x-2">
              <span className="block h-2.5 w-2.5 rounded-full bg-brand-green" />
              <span>{lang === 'en' ? 'Your Qualified Public Subsidies & Benefits (Housing Choice Vouchers & Grants)' : 'Sus Ayudas y Subvenciones Municipales Elegibles (Cupones y Subsidios de Vivienda)'}</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matchedPrograms.map((program) => (
                <div key={program.id} className="p-5 bg-[#FAFBFD] border border-gray-150 rounded-xl flex items-start space-x-4 group hover:border-[#0A3D62]/30 hover:shadow-md transition-all duration-200" id={`qualified-program-${program.id}`}>
                  <div className="flex-shrink-0 p-3 bg-brand-green/10 text-brand-green border border-brand-green/25 rounded-xl">
                    <Landmark className="h-5 w-5 text-brand-green-dark" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col space-y-3">
                      {/* 1. Title */}
                      <h5 className="font-extrabold text-[#0A3D62] text-sm sm:text-base leading-snug group-hover:text-brand-blue transition-colors">
                        {program.name}
                      </h5>

                      {/* 2. Benefit */}
                      <div className="bg-brand-green/10 text-brand-green-dark border border-brand-green/20 py-1.5 px-3 rounded-lg font-mono text-xs font-bold leading-normal break-words inline-block max-w-full select-all">
                        <span className="text-[9px] text-[#0A3D62] uppercase tracking-wider mr-1.5">
                          {lang === 'en' ? 'Benefit Value:' : 'Valor del Beneficio:'}
                        </span>
                        {program.maxBenefit}
                      </div>

                      {/* 3. Info */}
                      <div className="space-y-1 pt-1.5 border-t border-gray-100">
                        <p className="text-xs text-brand-blue-light font-bold">
                          {lang === 'en' ? 'Provided by' : 'Ofrecido por'}: <span className="text-gray-700 font-medium">{program.provider}</span>
                        </p>
                        <p className="text-xs text-gray-500 leading-relaxed font-normal">
                          {program.eligibilityDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Actions recommendations checklist (Full Width Layout) */}
        {!isCalculating && (
          <div className="bg-brand-green/10 border border-brand-green/25 p-6 sm:p-8 rounded-2xl text-left shadow-sm mt-6" id="recommendation-nextactions">
            <h4 className="text-sm font-bold text-brand-blue-dark tracking-wide uppercase font-display border-b border-brand-green/20 pb-3 mb-6 flex items-center space-x-2">
              <span className="block h-2 w-2 rounded-full bg-brand-green-dark" />
              <span>{t.labelNextActions}</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Action Step 1 */}
              <div className="flex gap-4 text-xs text-brand-blue-dark bg-white/50 p-4 rounded-xl border border-brand-green/15" id="action-step-card-1">
                <span className="font-mono bg-brand-green text-brand-blue-dark h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs block flex-shrink-0">1</span>
                <div>
                  <p className="font-extrabold text-sm">{lang === 'en' ? 'Pre-Qualify HAWS Voucher' : 'Precalificar cupón HAWS'}</p>
                  <p className="text-gray-600 mt-1 leading-relaxed font-normal">
                    {lang === 'en' 
                      ? 'Winston-Salem housing agency limits average queues by allowing online submissions.'
                      : 'La agencia municipal acelera colas al permitir entregas electrónicas.'}
                  </p>
                </div>
              </div>

              {/* Action Step 2 */}
              <div className="flex gap-4 text-xs text-brand-blue-dark bg-white/50 p-4 rounded-xl border border-brand-green/15" id="action-step-card-2">
                <span className="font-mono bg-brand-green text-brand-blue-dark h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs block flex-shrink-0">2</span>
                <div>
                  <p className="font-extrabold text-sm">{lang === 'en' ? 'Secure PART Bus Pass Pass' : 'Obtener Pase Regional PART'}</p>
                  <p className="text-gray-600 mt-1 leading-relaxed font-normal">
                    {lang === 'en' 
                      ? 'Activate local employer-sponsored monthly transit credits directly from our portal.'
                      : 'Active los pases mensuales subvencionados por su patrono directo de nuestro portal.'}
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Detailed Listing Modal (Revealed when a listing is clicked for high-fidelity interactive engagement) */}
        {selectedListing && (
          <div className="fixed inset-0 z-50 bg-brand-blue-dark/60 backdrop-blur-xs flex items-center justify-center p-4" id="listing-details-modal">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-150 max-w-lg w-full shadow-2xl relative text-left">
              
              {/* Photo Header */}
              <div className="h-48 relative">
                <img
                  src={selectedListing.imageUrl}
                  alt={selectedListing.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedListing(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 cursor-pointer"
                  id="close-modal-btn"
                >
                  ✕
                </button>
              </div>

              {/* Text Area */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-brand-green font-bold bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 rounded-full">
                    {selectedListing.neighborhood}
                  </span>
                  <h3 className="text-xl font-bold text-brand-blue-dark mt-2 font-display">{selectedListing.title}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{selectedListing.address}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 text-center font-mono">
                  <div className="p-2 bg-gray-50 rounded-xl">
                    <span className="block text-[9px] text-gray-400 uppercase font-bold font-sans">Rent / Renta</span>
                    <span className="text-base font-extrabold text-brand-blue-dark">${selectedListing.rent}</span>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-xl">
                    <span className="block text-[9px] text-gray-400 uppercase font-bold font-sans">Bedrooms</span>
                    <span className="text-base font-extrabold text-brand-blue-dark">{selectedListing.bedrooms} BR</span>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-xl">
                    <span className="block text-[9px] text-gray-400 uppercase font-bold font-sans">Transit</span>
                    <span className="text-base font-extrabold text-brand-green-dark">{selectedListing.transitAccess}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <h4 className="font-bold text-brand-blue-dark uppercase font-mono tracking-wider text-[10px]">{lang === 'en' ? 'Property Details' : 'Descripción Habitacional'}</h4>
                  <p className="text-gray-500 leading-relaxed font-normal">{selectedListing.description}</p>
                </div>

                <div className="bg-[#FAFBFD] p-3 rounded-xl border border-gray-150 space-y-1 text-xs">
                  <span className="block font-bold text-brand-blue-dark font-mono text-[10px] uppercase">{lang === 'en' ? 'ESTIMATED COMMUTE TIMES' : 'TIEMPOS DE VIAJE'} :</span>
                  <div className="grid grid-cols-2 gap-2 text-gray-600 font-medium">
                    <div>• Wake Forest Baptist: <span className="font-bold text-brand-blue-light">{selectedListing.commuteTimeMap['baptist']} mins</span></div>
                    <div>• Forsyth Medical: <span className="font-bold text-brand-blue-light">{selectedListing.commuteTimeMap['novant']} mins</span></div>
                    <div>• WSFC Schools: <span className="font-bold text-brand-blue-light">{selectedListing.commuteTimeMap['wsfcs']} mins</span></div>
                    <div>• Downtown Center: <span className="font-bold text-brand-blue-light">{selectedListing.commuteTimeMap['downtown']} mins</span></div>
                  </div>
                </div>

                {/* Submit application */}
                <button
                  onClick={() => {
                    alert(lang === 'en' 
                      ? 'Demo Mode: This connects users directly with property managers and housing assistants securely! Thank you.'
                      : 'Modo Demo: ¡Esta acción simula la entrega segura del formulario ante los comisionados y propietarios! Muchas gracias.'
                    );
                    setSelectedListing(null);
                  }}
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-brand-blue-dark font-extrabold py-3.5 rounded-xl transition-all text-center cursor-pointer text-sm tracking-wide flex items-center justify-center space-x-2"
                  id="modal-apply-btn"
                >
                  <span>{lang === 'en' ? 'Direct Matchmaker Application' : 'Solicitar Vivienda Mediante Matchmaker'}</span>
                  <ArrowRight className="h-4' w-4 inline" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
