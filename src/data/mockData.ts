import { HousingListing, AssistanceProgram, TimelineEvent, Partner, RoadmapStep } from '../types';

export const WORKPLACES = [
  { id: 'baptist', name: 'Atrium Health Wake Forest Baptist', nameEs: 'Atrium Health Wake Forest Baptist' },
  { id: 'novant', name: 'Novant Health Forsyth Medical Center', nameEs: 'Novant Health Forsyth Medical Center' },
  { id: 'wsfcs', name: 'Winston-Salem/Forsyth County Schools', nameEs: 'Escuelas de Winston-Salem/Condado de Forsyth' },
  { id: 'downtown', name: 'Downtown (Innovation Quarter)', nameEs: 'Centro de la ciudad (Barrio de Innovación)' },
  { id: 'east-winston', name: 'East Winston Community Centers', nameEs: 'Centros Comunitarios de East Winston' }
];

export const HOUSING_LISTINGS: HousingListing[] = [
  {
    id: 'h1',
    title: 'Piedmont Heights Apartments',
    address: '1420 Martin Luther King Jr Dr, Winston-Salem, NC',
    neighborhood: 'East Winston-Salem',
    rent: 950,
    bedrooms: 2,
    bathrooms: 1,
    availableDate: 'Available Now',
    commuteTimeMap: {
      'baptist': 15,
      'novant': 18,
      'wsfcs': 12,
      'downtown': 6,
      'east-winston': 2
    },
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80',
    subsidyAccepted: true,
    transitAccess: 'Excellent',
    description: 'Affordable family housing in historic East Winston. Right next to public transit bus line 12. Freshly renovated interiors, energy-efficient appliances, and community playground.'
  },
  {
    id: 'h2',
    title: 'Twin City Civic Lofts',
    address: '610 N Liberty St, Winston-Salem, NC',
    neighborhood: 'Downtown Winston-Salem',
    rent: 1200,
    bedrooms: 1,
    bathrooms: 1,
    availableDate: 'July 1, 2026',
    commuteTimeMap: {
      'baptist': 8,
      'novant': 10,
      'wsfcs': 5,
      'downtown': 1,
      'east-winston': 8
    },
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    subsidyAccepted: false,
    transitAccess: 'Excellent',
    description: 'Modern lofts designed with working professionals in mind. Walking distance to downtown retail, libraries, and public libraries. Built-in work-desks and gigabit fiber internet.'
  },
  {
    id: 'h3',
    title: 'Waughtown Family Homes',
    address: '2810 Sprague St, Winston-Salem, NC',
    neighborhood: 'South Winston / Waughtown',
    rent: 1050,
    bedrooms: 3,
    bathrooms: 1.5,
    availableDate: 'Available Now',
    commuteTimeMap: {
      'baptist': 12,
      'novant': 14,
      'wsfcs': 10,
      'downtown': 11,
      'east-winston': 9
    },
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    subsidyAccepted: true,
    transitAccess: 'Good',
    description: 'Spacious three-bedroom townhome ideal for nursing assistants, teachers, and service workers. Private fenced patio, community gardens, and stellar local schools nearby.'
  },
  {
    id: 'h4',
    title: 'Forsyth Green Apartments',
    address: '115 Silas Creek Pkwy, Winston-Salem, NC',
    neighborhood: 'Silas Creek / West Winston',
    rent: 1100,
    bedrooms: 2,
    bathrooms: 2,
    availableDate: 'August 15, 2026',
    commuteTimeMap: {
      'baptist': 4,
      'novant': 3,
      'wsfcs': 8,
      'downtown': 9,
      'east-winston': 15
    },
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80',
    subsidyAccepted: true,
    transitAccess: 'Good',
    description: 'Perfect for healthcare workers at Atrium Wake Forest Baptist or Novant Forsyth Medical Center (under 5 minute commutes!). Quiet green spaces, pet-friendly, and pool facilities.'
  },
  {
    id: 'h5',
    title: 'Patterson Avenue Civic Housing',
    address: '3805 Patterson Ave, Winston-Salem, NC',
    neighborhood: 'North Winston',
    rent: 850,
    bedrooms: 2,
    bathrooms: 1,
    availableDate: 'Available Now',
    commuteTimeMap: {
      'baptist': 14,
      'novant': 16,
      'wsfcs': 8,
      'downtown': 9,
      'east-winston': 10
    },
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80',
    subsidyAccepted: true,
    transitAccess: 'Moderate',
    description: 'Highly affordable units backed by Winston-Salem local housing trust funds. Clean air conditioning, community laundry room, and plenty of local parking spaces.'
  },
  {
    id: 'h6',
    title: 'University Parkway Townhomes',
    address: '4750 University Pkwy, Winston-Salem, NC',
    neighborhood: 'North Winston / Wake Forest area',
    rent: 1300,
    bedrooms: 3,
    bathrooms: 2,
    availableDate: 'July 15, 2026',
    commuteTimeMap: {
      'baptist': 10,
      'novant': 12,
      'wsfcs': 6,
      'downtown': 11,
      'east-winston': 14
    },
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    subsidyAccepted: false,
    transitAccess: 'Good',
    description: 'Spacious townhome close to local high schools, parks, and retail outlets. Smart energy management systems resulting in lower utility rates.'
  }
];

export const ASSISTANCE_PROGRAMS: AssistanceProgram[] = [
  {
    id: 'p1',
    name: 'Winston-Salem Housing Choice Voucher Program (Section 8)',
    provider: 'Housing Authority of Winston-Salem (HAWS)',
    type: 'Rent',
    eligibilityDescription: 'Forsyth county families with household income at or below 50% of the Area Median Income (AMI). Priority given to essential municipal workers.',
    maxBenefit: 'Covers up to 70% of rent, tenant pays remaining 30%',
    applyUrl: 'https://www.haws.org/'
  },
  {
    id: 'p2',
    name: 'Forsyth County First-Time Homebuyer Assistance',
    provider: 'Forsyth County Community Development',
    type: 'Downpayment',
    eligibilityDescription: 'Household income under 80% AMI. Must be buying a primary residence in Forsyth County, NC and undergo a financial wellness course.',
    maxBenefit: 'Up to $15,000 in zero-interest forgivable loans for downpayment assistance',
    applyUrl: 'https://www.forsyth.cc/'
  },
  {
    id: 'p3',
    name: 'Piedmont Triad Working Family Transit Subsidy',
    provider: 'Part Transit / City of Winston-Salem',
    type: 'Transit',
    eligibilityDescription: 'Employed individuals residing in Forsyth County who use public buses or PART express lines for commuting to local health/educational institutions.',
    maxBenefit: 'Fully covers annual bus pass ($600 value) + 50% taxi emergency emergency vouchers',
    applyUrl: 'http://www.partnc.org/'
  },
  {
    id: 'p4',
    name: 'Civic Utility & Energy Assistance Fund',
    provider: 'Piedmont Federal / Winston-Salem Foundations',
    type: 'Utility',
    eligibilityDescription: 'Families dealing with critical energy cost burden (>8% total wages spent on electricity/gas).',
    maxBenefit: 'Up to $450 direct annual utility credit paid directly to provider',
    applyUrl: 'https://www.wsfoundation.org/'
  }
];

export const MARIA_TIMELINE: TimelineEvent[] = [
  {
    time: '5:15 AM',
    activity: 'Wake up & pack school lunches',
    activityEs: 'Despertar y preparar almuerzos escolares',
    impact: 'Struggle: Exhaustion from sleeping late after performing online searches.',
    impactEs: 'Impacto: Agotamiento por quedarse despierta buscando vivienda.',
    iconName: 'Sun'
  },
  {
    time: '6:45 AM',
    activity: 'Begin first of three bus transfers to Atrium Health Wake Forest',
    activityEs: 'Comenzar la primera de tres conexiones en autobús',
    impact: 'No direct route from East Winston to medical complexes. Adding 90 mins daily.',
    impactEs: 'Sin ruta directa de East Winston al hospital. Suma 90 minutos diarios.',
    iconName: 'Bus'
  },
  {
    time: '7:30 AM',
    activity: 'Arrive at work as Nursing Assistant',
    activityEs: 'Llegar al trabajo como Asistente de Enfermería',
    impact: 'Caring for community elderly under immense pressure, while worried about own housing.',
    impactEs: 'Cuidando a ancianos bajo presión, preocupándose por su propia renta.',
    iconName: 'ShieldPlus'
  },
  {
    time: '5:30 PM',
    activity: 'Pick up son from after-school program',
    activityEs: 'Recoger a su hijo del programa extraescolar',
    impact: 'Late pickups mean additional fees of $15 per 15 minutes, adding financial stress.',
    impactEs: 'Las tardanzas en recoger conllevan multas de $15, sumando estrés.',
    iconName: 'Clock'
  },
  {
    time: '8:30 PM',
    activity: 'Review bills at dining table',
    activityEs: 'Revisar facturas en la mesa del comedor',
    impact: 'Rent takes up nearly 48% of monthly income. Left with barely enough for groceries.',
    impactEs: 'La renta consume el 48% de sus ingresos. Queda poco para los víveres.',
    iconName: 'FileText'
  },
  {
    time: '9:00 PM',
    activity: 'Search housing websites & waitlists',
    activityEs: 'Buscar portales de vivienda y listas de espera',
    impact: 'Frustrated by broken links, outdated prices, and fragmented nonprofit portals.',
    impactEs: 'Decepcionada por enlaces caídos y portales obsoletos y fragmentados.',
    iconName: 'Search'
  },
  {
    time: '10:00 PM',
    activity: 'Sleep',
    activityEs: 'Dormir',
    impact: 'Anxious rest before repeating the cycle tomorrow.',
    impactEs: 'Descanso ansioso antes de repetir el ciclo mañana.',
    iconName: 'Moon'
  }
];

export const COMMUNITY_PARTNERS: Partner[] = [
  {
    name: 'Habitat for Humanity Forsyth',
    role: 'Affordable Builders',
    roleEs: 'Constructores Asequibles',
    logoColorClass: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    description: 'Providing cooperative building resources and long-term homeownership support in Winston-Salem.',
    descriptionEs: 'Brindando recursos cooperativos de construcción y asistencia para compra de viviendas en Winston-Salem.'
  },
  {
    name: 'Twin City Housing Capital',
    role: 'Financier & Developer',
    roleEs: 'Financiamiento y Desarrollo',
    logoColorClass: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    description: 'Investing millions into redevelopment projects creating 400+ designated low-income units in Piedmont Triad.',
    descriptionEs: 'Invirtiendo millones en proyectos de renovación creando más de 400 viviendas de bajos ingresos.'
  },
  {
    name: 'Atrium Health Wake Forest',
    role: 'Major Employer Partner',
    roleEs: 'Socio Empleador Mayoritario',
    logoColorClass: 'text-teal-600 bg-teal-50 border-teal-200',
    description: 'Interested in providing worker housing stipends and local transit incentives near local clinics.',
    descriptionEs: 'Interesado en proveer subsidios de vivienda y facilidades de transporte a empleados de salud.'
  },
  {
    name: 'Novant Health Forsyth',
    role: 'Health & Civic Partner',
    roleEs: 'Salud y Bienestar Cívico',
    logoColorClass: 'text-blue-600 bg-blue-50 border-blue-200',
    description: 'Advocating to bridge the gap between stable premium housing and long-term health outcomes.',
    descriptionEs: 'Abogando por la relación de la vivienda estable y la salud preventiva de las familias.'
  },
  {
    name: 'Winston-Salem Forsyth Schools',
    role: 'Education Advocates',
    roleEs: 'Defensores de la Educación',
    logoColorClass: 'text-amber-600 bg-amber-50 border-amber-200',
    description: 'Supporting affordable housing for local schoolteachers and essential educational service teams.',
    descriptionEs: 'Apoyando viviendas asequibles para nuestros profesores y personal de servicios escolares.'
  },
  {
    name: 'Forsyth County Government',
    role: 'Civic Data Provider',
    roleEs: 'Proveedor de Datos Públicos',
    logoColorClass: 'text-pink-600 bg-pink-50 border-pink-200',
    description: 'Integrating county parcel maps, zoning indices, and public assistance programs database with HomeLander API.',
    descriptionEs: 'Integrando mapas catastrales, zonificación municipal y programas públicos de ayuda en nuestra API.'
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    period: 'Year 1 (Launched)',
    periodEs: 'Año 1 (Lanzamiento)',
    title: 'Forsyth County Blueprint',
    titleEs: 'Piloto del Condado de Forsyth',
    description: 'Deploy HomeLander platform focusing on essential municipal employees and health workers within Winston-Salem.',
    descriptionEs: 'Desplegar la plataforma enfocándose en empleados municipales clave y de salud dentro de Winston-Salem.',
    milestones: [
      'Interactive Matchmaking Algorithm launch',
      'Unified assistance database integration',
      'Targeted pilot with Atrium/Novant health networks representing 400 families'
    ],
    milestonesEs: [
      'Lanzamiento del algoritmo dinámico de emparejamiento',
      'Integración unificada de base de datos de subsidios',
      'Proyecto piloto con personal de salud Atrium/Novant para 400 familias'
    ]
  },
  {
    period: 'Year 2',
    periodEs: 'Año 2',
    title: 'Triad Regional Link-Up',
    titleEs: 'Expansión Regional del Triad',
    description: 'Expand our digital parsing ecosystem into neighboring High Point and Greensboro municipalities to bridge region-wide commutes.',
    descriptionEs: 'Expandir el ecosistema digital de búsqueda a las municipalidades vecinas de High Point y Greensboro.',
    milestones: [
      'Spanish translation roll-out across all search systems',
      'PART Triad Transit live scheduling API integration',
      'Employer housing stipend widget partnerships'
    ],
    milestonesEs: [
      'Traducción al español de todo el sistema de búsqueda',
      'Integración de la API de rutas de autobús regional de PART',
      'Alianzas para el widget de subsidios patronales de alquiler'
    ]
  },
  {
    period: 'Year 3',
    periodEs: 'Año 3',
    title: '10k Families Housed',
    titleEs: 'Meta de 10k Familias',
    description: 'Grow regional scale, becoming the key municipal tool utilized directly by housing departments across North Carolina.',
    descriptionEs: 'Alcanzar el nivel estatal, convirtiéndose en el portal oficial de vivienda en Carolina del Norte.',
    milestones: [
      'Interactive transit scoring dashboard',
      'Mobile notification engine for waitlist openings',
      'Predictive analytics dashboard detailing future zoning needs to county commissioners'
    ],
    milestonesEs: [
      'Control interactivo de transporte integrado',
      'Notificaciones móviles de apertura de listas de espera de vivienda',
      'Análisis predictivos de zonificación para comisionados del condado'
    ]
  }
];

export const CHAT_Q_AND_A = [
  {
    q: 'How does the Matchmaker calculate affordability?',
    qEs: '¿Cómo calcula la asequibilidad el Matchmaker?',
    a: 'We use the federal Affordability Index limit: housing costs should not exceed 30% of gross household income. Our algorithm evaluates list prices, potential housing vouchers, utilities, and commute fuel cost, giving an overall "Combined Life Affordability Index."',
    aEs: 'Utilizamos la regla federal: los costos de vivienda no deben exceder el 30% del ingreso familiar bruto. El algoritmo evalúa el alquiler, vales de despensa, electricidad y transporte escolar para dar una puntuación combinada residencial real.'
  },
  {
    q: 'Is HomeLander AI a landlord or housing provider?',
    qEs: '¿Es HomeLander una agencia inmobiliaria en sí?',
    a: 'No. HomeLander AI is an open civic technology platform. We curate data from nonprofits, municipal databases, transit records, and landlords, streamlining the search and application processes into a single elegant portal.',
    aEs: 'No. HomeLander es un portal cívico tecnológico abierto. Consolidamos listados de organizaciones benéficas, municipios y propietarios, simplificando la búsqueda y solicitud de ayuda.'
  },
  {
    q: 'Can Section 8 voucher holders use this?',
    qEs: '¿Pueden usarlo beneficiarios del cupón de la Sección 8?',
    a: 'Absolutely. HomeLander explicitly flags properties accepting municipal vouchers (Section 8) and prioritizes listings with excellent transit scores so working families skip triple bus transfers.',
    aEs: 'Sí. HomeLander destaca propiedades que aceptan cupones municipales (Sección 8) y prioriza listados con excelente transporte.'
  },
  {
    q: 'How can our high school project partner with local groups?',
    qEs: '¿Cómo puede colaborar nuestro proyecto escolar con grupos locales?',
    a: 'We welcome partnership! City councils and local non-profits can pilot our open API. Contact our innovation team to sponsor localized dashboards, making Forsyth County a better place for everyone.',
    aEs: '¡Nos encanta colaborar! Alcaldías y asociaciones comunitarias pueden pilotear nuestra API. Escríbanos para patrocinar tableros locales de impacto.'
  }
];

export const TRANSLATIONS = {
  en: {
    navTitle: 'HomeLander AI',
    navHero: 'Home',
    navChallenge: 'The Crisis',
    navMaria: 'User Story',
    navHow: 'Methodology',
    navDemo: 'AI Matchmaker',
    navImpact: 'Community Impact',
    navEthics: 'Ethics',
    navJudge: 'Pitch Deck',
    
    heroTitle: 'Affordable Housing.',
    heroSubTitle1: 'Smarter Matching.',
    heroSubTitle2: 'Stronger Communities.',
    heroSub: 'HomeLander AI helps essential workers and working families find affordable housing, assistance programs, and transportation options that fit their lives.',
    btnTryDemo: 'Try the AI Matchmaker',
    btnChallenge: 'Learn About the Housing Crisis',
    
    statHeader: 'A Communities Struggle',
    statCostFamilies: 'cost-burdened households in Forsyth County',
    statAffected: 'residents affected in the local Triad',
    statRentersStruggle: 'of renters struggle with monthly housing costs',
    
    challengeTitle: 'The Triad Housing Challenge',
    challengeSubtitle: 'Why Winston-Salem needs a modern approach to housing stability',
    challengeLead: 'As Winston-Salem flourishes, the gap between housing costs and worker compensation is reaching an all-time high.',
    issue1: 'Wages Lag Behind Inflation',
    issue1Detail: 'Essential workers like teaching assistants, grocery clerks, and hospital personnel are priced out of Winston-Salem districts.',
    issue2: 'Critical Workspace Commutes',
    issue2Detail: 'Workers are forced to live far away in distant counties, adding 2+ hours daily in stressful commutes and high gasoline costs.',
    issue3: 'Silo-ed Community Resources',
    issue3Detail: 'Available housing subsidies, transit plans, and listing opportunities are scattered across 20+ static nonprofit web pages.',
    compareTitle: 'The Housing Trajectory',
    compareRent: 'Housing Costs',
    compareWages: 'Wages (slower)',
    compareHousing: 'Available Affordable Housing',
    compareCommute: 'Commute Times',
    
    storyTitle: 'Local Impact: Meet Maria',
    storySubtitle: 'Behind the numbers is a human story. See how transportation and housing costs compound daily stress.',
    storyNursing: 'Nursing Assistant, Single mother, 32 Years Old',
    storyHome: 'Lives in East Winston, works at Wake Forest Medical Area',
    storyQuote: '"I want to live closer to work and spend more time with my family, but finding affordable housing feels impossible."',
    storyRoutine: 'Maria\'s Daily Timeline',
    
    howTitle: 'How HomeLander AI Works',
    howSubtitle: 'Bridging the civic space between transit data, real estate parcels, and county assistance.',
    step1Title: '1. Seamless Input',
    step1Desc: 'Enter wages, family size, typical workspace, desired commute time, and shelter requirements.',
    step2Title: '2. Algorithmic Matching',
    step2Desc: 'Integrates local rental databases, PART transport pathways, and county eligibility criteria in milliseconds.',
    step3Title: '3. Actionable Roadmap',
    step3Desc: 'Receive verified matches, downpayment grants, travel vouchers, and direct links to apply securely.',
    
    trialWidgetTitle: 'Interactive AI Matchmaker Demo',
    trialWidgetSubtitle: 'Input live parameters below to experience our dynamic Winston-Salem matcher in action.',
    labelIncome: 'Annual Household Income',
    labelFamilySize: 'Family Size (Dependents)',
    labelWorkplace: 'Principal Workplace Location',
    labelBudget: 'Target Monthly Rent Budget',
    labelCommute: 'Preferred Max Commute',
    trialCalculating: 'AI Heuristics analyzing region...',
    btnCalculate: 'Calculate Real-Time Recommendations',
    
    demoResultHeader: 'AI Matchmaker Recommendation Engine',
    scoreAffordability: 'Combined Affordability Score',
    scoreAffordabilityTitle: 'Affordability Rating',
    scoreAffordabilityDesc: 'Calculated using income, rental, public transportation cost index and essential expenses.',
    labelListingMatches: 'Matching Affordable Listings',
    labelNearbyAssist: 'Identified Civic Programs',
    labelCommuteEstimate: 'Transit Commute',
    labelTransitGood: 'Transit friendly',
    labelAcceptSection8: 'Accepts Section 8 Vouchers',
    labelNextActions: 'Recommended Next Civic Steps',
    
    impactTitle: 'Projected Civic Outcomes',
    impactSubtitle: 'Our technology yields measurable financial improvements for the Winston-Salem municipal web.',
    metricServed: 'First-Year Users Served',
    metricHours: 'Hours Saved Per Family',
    metricValue: 'Direct Community Value Created',
    valServed: '500 - 1,000+',
    valHours: '10 hrs',
    valValue: '$340,000+',
    metricDetailTitle: 'How we calculate $340,000+ in local value:',
    itemCalc1: 'Saving 10+ research hours per household reduces administrative application backlogs',
    itemCalc2: 'Faster transit matching saves an estimated average of $45 monthly in fuel per tri-county worker',
    itemCalc3: 'Connecting users directly with unclaimed municipal grant funds boosts localized spending power',
    
    partnerTitle: 'Community & Coalition Ecosystem',
    partnerSubtitle: 'Empowering Winston-Salem through cross-discipline teamwork.',
    
    ethicsTitle: 'Ethics and Equity First',
    ethicsSubtitle: 'Designing municipal AI with civic oversight and citizen human rights.',
    ethics1: 'Absolute Privacy Control',
    ethics1Detail: 'A complete end-to-end local framework. We never warehouse personal biometric or identifying information. You remain anonymous.',
    ethics2: 'Bilingual & Simplified Access',
    ethics2Detail: 'The platform is completely translateable into Spanish, featuring clean language levels and high contrast for visual accessibility.',
    ethics3: 'Anti-Bias Housing Delivery',
    ethics3Detail: 'Strict oversight rules prevent algorithms from targeting, reinforcing local redlining patterns, or suppressing voucher-holders.',
    ethics4: 'Completely Explainable Matches',
    ethics4Detail: 'No black boxes. Every calculation explicitly states which parameters triggered the recommendation, keeping public workers informed.',
    
    futureTitle: 'HomeLander Roadmap & Vision',
    futureSubtitle: 'Launching pilot solutions in Winston-Salem and scaling statewide.',
    learnAIBot: 'HomeLander Chatbot Intern',
    learnBotSubtitle: 'Click any query to ask our interactive helper about affordable housing concepts.',
    placeholderAnswerText: 'Click any question to get an instant explanation from our HomeLander assistant.',
    
    judgeTitle: 'Judge Presentation Deck',
    judgeSubtitle: 'The high school innovation pitch summarizing our Forsyth County solution.',
    pitchProblem: 'The Crisis',
    pitchProblemText: '43,140 cost-burdened households in Forsyth County face fragmented housing search silos and extremely heavy commute barriers.',
    pitchSolution: 'The Innovation',
    pitchSolutionText: 'HomeLander AI unifies regional rental lists, PART public transit, and civic subsidies into a smart, accessible matchmaker.',
    pitchValue: 'The Value',
    pitchValueText: 'Saves families 10+ search hours, trims transportation spend, and generates upwards of $340,000 in local community value.',
    pitchVision: 'The Legacy',
    pitchVisionText: 'A reproducible, high-contrast, bilingual tool designed with ethical safeguards to build regional equity in the Piedmont Triad.',
    pitchCta: 'Join Us in Building a More Affordable Future.'
  },
  es: {
    navTitle: 'HomeLander AI',
    navHero: 'Inicio',
    navChallenge: 'La Crisis',
    navMaria: 'Caso de Estudio',
    navHow: 'Metodología',
    navDemo: 'AI Matchmaker',
    navImpact: 'Impacto Comunitario',
    navEthics: 'Ética y Equidad',
    navJudge: 'Pitch Deck',
    
    heroTitle: 'Vivienda Asequible.',
    heroSubTitle1: 'Emparejamiento Inteligente.',
    heroSubTitle2: 'Comunidades Fuertes.',
    heroSub: 'HomeLander AI ayuda a los trabajadores esenciales y a las familias de Winston-Salem a encontrar viviendas, subvenciones y transporte apropiados para su vida.',
    btnTryDemo: 'Prueba el AI Matchmaker',
    btnChallenge: 'Aprenda sobre la crisis',
    
    statHeader: 'La lucha de nuestra gente',
    statCostFamilies: 'familias con sobrecoste de vivienda en Forsyth',
    statAffected: 'residentes afectados en la región del Triad',
    statRentersStruggle: 'de inquilinos luchan por pagar el alquiler',
    
    challengeTitle: 'La Crisis del Triad',
    challengeSubtitle: 'Por qué Winston-Salem necesita un enfoque digital moderno para la vivienda',
    challengeLead: 'Mientras la ciudad crece, la diferencia entre los precios de vivienda y el sueldo de los trabajadores esenciales alcanza máximos preocupantes.',
    issue1: 'Sueldos Rezagados de la Inflación',
    issue1Detail: 'Trabajadores como asistentes de enfermería, dependientes y personal de colegios no pueden vivir en Winston-Salem.',
    issue2: 'Viajes de Trabajo Agobiantes',
    issue2Detail: 'Los empleados viven cada vez más lejos, sumando 2 horas al día en viajes con alto coste de gasolina.',
    issue3: 'Recursos Fragmentados',
    issue3Detail: 'Ayudas públicas de renta y rutas de transporte se encuentran dispersas en más de 20 páginas web del gobierno desactualizadas.',
    compareTitle: 'Trayectoria del Problema',
    compareRent: 'Costo de Vivienda',
    compareWages: 'Sueldo (slower)',
    compareHousing: 'Vivienda Asequible Disponible',
    compareCommute: 'Tiempo de Viaje',
    
    storyTitle: 'Impacto Real: Conoce a María',
    storySubtitle: 'Detrás de las cifras hay rostros humanos. Vea el impacto del transporte y vivienda en la vida de María.',
    storyNursing: 'Asistente de Enfermería, Madre Soltera, 32 Años',
    storyHome: 'Vive en East Winston, trabaja en el Hospital Wake Forest',
    storyQuote: '"Quiero vivir más cerca de mi trabajo y pasar tiempo con mi hijo, pero hallar algo asequible parece de fantasía."',
    storyRoutine: 'Rutina Diaria de María',
    
    howTitle: 'Cómo funciona HomeLander AI',
    howSubtitle: 'Uniéndonos para conectar el transporte, el catastro municipal y programas de fomento.',
    step1Title: '1. Perfil Inteligente',
    step1Desc: 'Ingrese su salario, tamaño familiar, centro de trabajo y límites de viaje deseados de manera anónima.',
    step2Title: '2. Filtros AI Avanzados',
    step2Desc: 'Cruza en tiempo real las bolsas de vivienda, tarifas de autobuses PART y criterios estatales en un segundo.',
    step3Title: '3. Plan de Vivienda Listo',
    step3Desc: 'Reciba opciones de casas viables, enlaces para becas de alquiler, pases de autobús gratis y pasos a seguir.',
    
    trialWidgetTitle: 'Simulador del AI Matchmaker',
    trialWidgetSubtitle: 'Cambie los valores abajo para probar en tiempo real la lógica de búsqueda urbana.',
    labelIncome: 'Ingresos Anuales del Hogar',
    labelFamilySize: 'Dependientes Familiares',
    labelWorkplace: 'Ubicación Centro Laboral',
    labelBudget: 'Límite de Renta Mensual',
    labelCommute: 'Límite de Viaje Diario',
    trialCalculating: 'Algoritmo HomeLander calculando...',
    btnCalculate: 'Calcular Opciones Disponibles',
    
    demoResultHeader: 'Resultados Generados por HomeLander AI',
    scoreAffordability: 'Puntuación de Asequibilidad Combinada',
    scoreAffordabilityTitle: 'Índice de Asequibilidad',
    scoreAffordabilityDesc: 'Medido en base a renta, gasolina, necesidades familiares y reglas federales de ahorro.',
    labelListingMatches: 'Casas Asequibles Encontradas',
    labelNearbyAssist: 'Ayudas Sociales Coadyuvantes',
    labelCommuteEstimate: 'Tiempo en Ruta',
    labelTransitGood: 'Especial para transporte público',
    labelAcceptSection8: 'Acepta vales de Sección 8',
    labelNextActions: 'Siguientes Pasos Cívicos Recomendados',
    
    impactTitle: 'Resultados Cívicos Estimados',
    impactSubtitle: 'Nuestra tecnología genera beneficios tangibles en el tejido social del condado.',
    metricServed: 'Primer Año - Familias Unidas',
    metricHours: 'Horas Ahorradas por Familia',
    metricValue: 'Retorno Monetario Local Directo',
    valServed: '500 - 1,000+',
    valHours: '10 horas',
    valValue: '$340,000+',
    metricDetailTitle: 'De dónde provienen los $340,000+ de valor:',
    itemCalc1: 'Ahorrar 10 horas de frustración alivia la cola administrativa en dependencias del condado',
    itemCalc2: 'Hacer coincidir vivienda y buses ahorra un promedio de $45 en combustible mensual para las familias',
    itemCalc3: 'Aumentamos el cobro de subvenciones sin reclamar de los fondos municipales, activando el comercio local',
    
    partnerTitle: 'Nuestra Coalición de Apoyo',
    partnerSubtitle: 'Fortaleciendo Winston-Salem junto a prestigiosas asociaciones locales.',
    
    ethicsTitle: 'Ética y Equidad como Ejes',
    ethicsSubtitle: 'Creando algoritmos cívicos con transparencia humana.',
    ethics1: 'Completa Privacidad',
    ethics1Detail: 'Estructura local de consulta. No vendemos sus datos, ni almacenamos biometría confidencial de los ciudadanos.',
    ethics2: 'Inclusión Plural',
    ethics2Detail: 'Soporte total en español, texto comprensible e interfaces simples optimizadas para teléfonos móviles.',
    ethics3: 'Entrega sin Prejuicios',
    ethics3Detail: 'La lógica impide segmentar por barrios protegidos o discriminar a familias con cupones Section 8.',
    ethics4: 'Resultados Explicables',
    ethics4Detail: 'Sin cajas negras. Detallamos cada cálculo y recomendación, rindiendo cuentas ante el municipio.',
    
    futureTitle: 'Proyecto y Agenda Futura',
    futureSubtitle: 'Iniciando en Forsyth y expandiendo el impacto en toda Carolina del Norte.',
    learnAIBot: 'Asistente Digital HomeLander',
    learnBotSubtitle: 'Toque cualquier pregunta típica para recibir una respuesta educativa inmediata de nuestra IA.',
    placeholderAnswerText: 'Toque cualquiera de los temas de arriba para ver su explicación en español de forma interactiva.',
    
    judgeTitle: 'Presentación para Jurados',
    judgeSubtitle: 'El resumen de nuestro proyecto creador de impacto municipal en Forsyth.',
    pitchProblem: 'La Amenaza',
    pitchProblemText: '43,140 hogares exhaustos en Forsyth gastan casi la mitad de su sueldo en renta, agobiados por largas distancias.',
    pitchSolution: 'La Solución',
    pitchSolutionText: 'Una plataforma que une inventario, subsidios activos y planificación inteligente de transporte público PART.',
    pitchValue: 'Inversión y Retorno',
    pitchValueText: 'Ahorra 10 horas críticas por buscador y genera más de $340,000 en retorno e inclusión financiera regional el año 1.',
    pitchVision: 'El Legado',
    pitchVisionText: 'Una plantilla replicable, bilingüe y accesible construida con equidad para fortalecer el Piedmont Triad.',
    pitchCta: 'Únase al futuro de la equidad en vivienda de Winston-Salem.'
  }
};
