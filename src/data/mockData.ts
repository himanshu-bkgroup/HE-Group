import { LeaderProfile, ServiceItem, IndustryItem, QuotationRequest, ContactEnquiry, CareerApplication } from '../types';

export const COMPANY_INFO = {
  name: 'HIMANSHU ENTERPRISES',
  legalName: 'Himanshu Enterprises',
  tagline: 'Your Problem, Our Solution.',
  subTagline: 'Professional Housekeeping · Security Services · Contractual Manpower Solutions',
  headOffice: 'A-13, Graphix Tower 2, Near Electronic City Metro Station, Sector 62, Noida, Gautam Buddha Nagar, Uttar Pradesh – 201301, India.',
  phone: '+91 721-787-6220',
  phoneClean: '+917217876220',
  email: 'services.hegroup@gmail.com',
  website: 'he-group.netlify.app',
  whatsappNumber: '917217876220',
  operatingHours: '24/7 Operations & Control Room',
  serviceAreas: ['Noida', 'Greater Noida', 'Delhi NCR', 'Ghaziabad', 'Gurugram', 'Faridabad']
};

export const LEADERSHIP: LeaderProfile[] = [
  {
    id: 'bhavesh-mishra',
    name: 'Mr. Bhavesh Mishra',
    designation: 'Founder & Chairman',
    phone: '+91 701-112-4867',
    email: 'bhavesh.hefounder@gmail.com',
    bio: 'As the Founder & Chairman, Mr. Bhavesh Mishra represents the company\'s leadership, strategic direction and long-term vision. His focus is on building a reliable organization with professional service standards and strong business relationships.'
  },
  {
    id: 'kanak-mishra',
    name: 'Mrs. Kanak Mishra',
    designation: 'Director',
    phone: '+91 852-734-9247',
    email: 'kanak.hedirector@gmail.com',
    bio: 'As Director, Mrs. Kanak Mishra contributes to the company\'s organizational development, management coordination and business operations, supporting its commitment to professional service delivery.'
  },
  {
    id: 'himanshu-mishra',
    name: 'Mr. Himanshu Mishra',
    designation: 'Executive',
    phone: '+91 721-787-6220',
    email: 'himanshu.heceo@gmail.com',
    bio: 'As an Executive at Himanshu Enterprises, Mr. Himanshu Mishra contributes to business development, client coordination, operational planning and organizational growth.'
  }
];

export const HOUSEKEEPING_SERVICES: ServiceItem[] = [
  {
    id: 'hk-corp-office',
    title: 'Corporate Office Housekeeping',
    category: 'housekeeping',
    description: 'Systematic daily dusting, vacuuming, waste management, workstation sanitation, and glass cleaning tailored for high-productivity corporate offices.',
    suitableFor: 'MNCs, Corporate HQs, Software Companies & IT Parks',
    benefits: [
      'Pristine workspace hygiene boosting employee productivity',
      'Scheduled cleaning outside or during active work hours',
      'Use of non-toxic, eco-certified disinfectants'
    ],
    features: ['Floor scrubbing & buffing', 'Workstation sanitization', 'Pantry & cafeteria upkeep', 'Restroom hourly checks'],
    image: '/src/assets/images/service_housekeeping_commercial_1794072091913.jpg'
  },
  {
    id: 'hk-comm-building',
    title: 'Commercial Building Cleaning',
    category: 'housekeeping',
    description: 'Full-spectrum facility management for multi-tenant commercial towers, including common lobbies, stairwells, basements, and façade maintenance.',
    suitableFor: 'Commercial Towers, Real Estate Assets, Graphix Tower & Business Centers',
    benefits: [
      'Enhanced asset longevity and tenant satisfaction',
      'Dedicated on-site facility managers and shift supervisors',
      'Modern mechanized scrubbers and ride-on vacuum machines'
    ],
    features: ['High-traffic lobby maintenance', 'Elevator & glass sanitization', 'Basement & parking sweeping', 'Façade dust control'],
    image: '/src/assets/images/hero_corporate_facility_1794072091725.jpg'
  },
  {
    id: 'hk-educational',
    title: 'School & College Housekeeping',
    category: 'housekeeping',
    description: 'Child-safe, disciplined sanitation protocols designed for schools, colleges, and university campuses to maintain safe and hygienic learning spaces.',
    suitableFor: 'Private Schools, Universities, Coaching Centers & Hostels',
    benefits: [
      'Stringent hygiene mitigating seasonal viral contagions',
      'Background-verified staff with student-safe conduct',
      'Scheduled deep-cleaning during term breaks and weekends'
    ],
    features: ['Classroom desk sanitization', 'Laboratory & library maintenance', 'Sports complex cleaning', 'Cafeteria hygiene'],
    image: '/src/assets/images/service_housekeeping_commercial_1794072091913.jpg'
  },
  {
    id: 'hk-healthcare',
    title: 'Hospital & Healthcare Housekeeping',
    category: 'housekeeping',
    description: 'Specialized healthcare sanitation adhering to clinical infection control protocols, bio-medical waste segregator standards, and aseptic techniques.',
    suitableFor: 'Hospitals, Multi-speciality Clinics, Diagnostic Labs & Nursing Homes',
    benefits: [
      'Infection prevention with hospital-grade sanitizers',
      'Biomedical waste segregation per environmental rules',
      'Trained staff in cross-contamination prevention'
    ],
    features: ['OPD & Ward sanitation', 'Sterile zone protocols', 'Bio-waste handling', 'Terminal cleaning routines'],
    image: '/src/assets/images/service_housekeeping_commercial_1794072091913.jpg'
  },
  {
    id: 'hk-industrial',
    title: 'Industrial & Factory Housekeeping',
    category: 'housekeeping',
    description: 'Heavy-duty factory floor cleaning, oil spillage management, warehouse rack dusting, and industrial safety compliance.',
    suitableFor: 'Manufacturing Units, Automotive Plants, Warehouses & Logistics Hubs',
    benefits: [
      'Mitigates slip-and-fall industrial safety hazards',
      'Specialized degreasers and heavy industrial sweepers',
      'Round-the-clock shift coverage matching plant production cycles'
    ],
    features: ['Shop floor degreasing', 'Scrap & debris removal', 'Warehouse bay scrubbing', 'Overhead pipe dusting'],
    image: '/src/assets/images/industrial_facility_complex_1794072092632.jpg'
  },
  {
    id: 'hk-residential',
    title: 'Residential Society Housekeeping',
    category: 'housekeeping',
    description: 'Complete maintenance for high-rise residential complexes, gated townships, clubhouse facilities, gardens, and podiums.',
    suitableFor: 'Group Housing Societies, Townships & Condominium Boards',
    benefits: [
      'Pleasant and clean living environment for residents',
      'Doorstep waste collection coordination',
      'Daily upkeep of swimming pools, gyms, and community halls'
    ],
    features: ['Tower lobby mopping', 'Garbage chute clearance', 'Podium & park pathway upkeep', 'Clubhouse sanitization'],
    image: '/src/assets/images/hero_corporate_facility_1794072091725.jpg'
  },
  {
    id: 'hk-washroom',
    title: 'Washroom Cleaning & Maintenance',
    category: 'housekeeping',
    description: 'Hourly checklist-governed washroom hygiene protocols with automatic fragrance replenishment, scale removal, and continuous consumables stocking.',
    suitableFor: 'Corporate Offices, Malls, Transit Hubs & Food Courts',
    benefits: [
      '100% odor-free, impeccably sanitized restrooms',
      'Scheduled hourly inspection logs signed by supervisors',
      'Prompt restocking of handwash, towels, and sanitizer'
    ],
    features: ['Acid-free descaling', 'Mirror & fixture polishing', 'Air freshener dispensers', 'Anti-bacterial wipe-downs'],
    image: '/src/assets/images/service_housekeeping_commercial_1794072091913.jpg'
  },
  {
    id: 'hk-common-area',
    title: 'Common Area Maintenance',
    category: 'housekeeping',
    description: 'Sustained upkeep of corridors, stairwells, fire exits, parking aprons, and outdoor pathways for an uninterrupted clean environment.',
    suitableFor: 'Commercial complexes, institutional campuses and business parks',
    benefits: [
      'Maintains first-class presentation for visiting guests and inspectors',
      'Unobstructed fire escapes and hazard-free pedestrian paths',
      'Continuous daytime janitorial sweeps'
    ],
    features: ['Corridor buffing', 'Stairway handrail sanitizing', 'Perimeter litter management', 'Signage cleaning'],
    image: '/src/assets/images/industrial_facility_complex_1794072092632.jpg'
  },
  {
    id: 'hk-deep-cleaning',
    title: 'Periodic Deep Cleaning',
    category: 'housekeeping',
    description: 'Intensive restoration cleaning utilizing heavy mechanical scrubbing, carpet shampooing, upholstery steam-extraction, and glass restoration.',
    suitableFor: 'Post-fitout handovers, quarterly audits, festivals, and move-ins',
    benefits: [
      'Removes deep grime, stains, and construction residue',
      'Restores original shine of marble, granite, and vitrified tiles',
      'High-pressure water jetting for outdoor hardscapes'
    ],
    features: ['Carpet injection-extraction', 'Sofa & blind steam cleaning', 'Grout machine scrubbing', 'High-level window wash'],
    image: '/src/assets/images/service_housekeeping_commercial_1794072091913.jpg'
  },
  {
    id: 'hk-facility-support',
    title: 'General Facility Support Manpower',
    category: 'housekeeping',
    description: 'Dedicated contractual support workforce including pantry boys, office runners, dispatch assistants, lift attendants, and utility staff.',
    suitableFor: 'Corporate offices, administrative buildings and executive facilities',
    benefits: [
      'Relieves HR and management of day-to-day ancillary hiring burden',
      'Immediate backup and replacement for absent personnel',
      'Uniformed, polite, and well-trained support team'
    ],
    features: ['Pantry service & tea/coffee service', 'Internal mail & document distribution', 'Conference room prep', 'Material shifting help'],
    image: '/src/assets/images/service_housekeeping_commercial_1794072091913.jpg'
  }
];

export const SECURITY_SERVICES: ServiceItem[] = [
  {
    id: 'sec-guards',
    title: 'Trained Security Guards',
    category: 'security',
    description: 'Disciplined, physically fit, and vigilantly trained static security guards deployed to secure gates, reception desks, perimeters, and parking entries.',
    suitableFor: 'Corporate Offices, Factories, Societies, Commercial Complexes & Warehouses',
    benefits: [
      '24/7 vigilant visitor logging and access control',
      'Regular drill-trained personnel with background verification',
      'Smart corporate uniforms with proper ID and security accoutrements'
    ],
    features: ['Gate entry & exit register management', 'Visitor badge issuance', 'Perimeter hourly patrolling', 'Vehicle inspection & parking check'],
    image: '/src/assets/images/service_security_guards_1794072093270.jpg'
  },
  {
    id: 'sec-armed-gunman',
    title: 'Armed Security / Licensed Gunmen',
    category: 'security',
    description: 'Highly trained armed security personnel with verified licenses and rigorous weapons handling compliance for cash transit, VIP escorts, and sensitive facilities.',
    suitableFor: 'Banks, Jewelry Showrooms, Cash Logistics, High-Value Asset Warehouses & VIPs',
    benefits: [
      'Strict adherence to Indian Arms Act and PSARA statutory regulations',
      'Rigorous background checks and verified valid individual gun licenses',
      'High deterrence capability against armed threats and intrusion'
    ],
    features: ['Licensed 12-bore / .32 pistol deployment', 'Cash vault security', 'Emergency response capability', 'Statutory police verification records'],
    image: '/src/assets/images/service_security_guards_1794072093270.jpg'
  },
  {
    id: 'sec-bouncers',
    title: 'Bouncers & Event Security Personnel',
    category: 'security',
    description: 'Physically imposing, tactical yet composed bouncers trained in conflict de-escalation, crowd management, and VIP hospitality protection.',
    suitableFor: 'Corporate AGMs, Celebrity Events, Exhibitions, High-end Clubs & Private Gatherings',
    benefits: [
      'Firm yet polite crowd control preventing unauthorized entry',
      'Trained in crisis intervention without unnecessary escalation',
      'Well-coordinated team with wireless communication equipment'
    ],
    features: ['Stage & VIP green-room cordoning', 'Queue management & frisking', 'Anti-nuisance monitoring', 'Emergency evacuation clearing'],
    image: '/src/assets/images/service_security_guards_1794072093270.jpg'
  },
  {
    id: 'sec-event-sec',
    title: 'Exhibition & Conference Security',
    category: 'security',
    description: 'Short-term and multi-day turnkey event security management covering venue perimeter, metal detectors, bag scanners, and parking flow.',
    suitableFor: 'Trade Expos, Tech Summits, Product Launches & Weddings',
    benefits: [
      'Seamless attendee flow without security bottlenecks',
      'Rapid deployment of 5 to 100+ guards on short notice',
      'Coordination with local traffic and emergency medical services'
    ],
    features: ['DFMD / HHMD metal detector screening', 'Bag scanning & frisking', 'Valet & traffic marshalling', 'Emergency exit monitoring'],
    image: '/src/assets/images/service_security_guards_1794072093270.jpg'
  },
  {
    id: 'sec-corporate-office',
    title: 'Corporate Office Security',
    category: 'security',
    description: 'Front-desk security liaisons combining corporate hospitality etiquette with strict NDA, asset tracking, and electronic access authorization.',
    suitableFor: 'IT Companies, Financial Institutions, Consulting Firms & MNCs',
    benefits: [
      'Polite reception interaction that reflects client brand professionalism',
      'Hardware and laptop gate-pass verification preventing theft',
      'CCTV room monitoring and fire alarm response'
    ],
    features: ['Access turnstile supervision', 'Material in/out register checks', 'CCTV monitoring assistance', 'Night lockup inspection'],
    image: '/src/assets/images/hero_corporate_facility_1794072091725.jpg'
  },
  {
    id: 'sec-industrial',
    title: 'Industrial & Manufacturing Plant Security',
    category: 'security',
    description: 'Industrial security personnel trained in labor dispute management, truck weighbridge verification, raw material theft prevention, and PPE compliance.',
    suitableFor: 'Automotive Factories, Chemical Units, Heavy Engineering & Warehouses',
    benefits: [
      'Drastic reduction in material shrinkage and inventory loss',
      'Strict truck weighbridge inspection and driver alcohol testing',
      'Trained in industrial fire fighting and evacuation'
    ],
    features: ['Raw material dispatch inspection', 'Workforce frisking at shift change', 'Patrolling perimeter fence line', 'Fire extinguisher checks'],
    image: '/src/assets/images/industrial_facility_complex_1794072092632.jpg'
  },
  {
    id: 'sec-residential',
    title: 'Residential Society & Township Security',
    category: 'security',
    description: 'Community-friendly yet vigilant security guards managing society entry gates, domestic staff biometric registers, and delivery vehicle verification.',
    suitableFor: 'Gated Townships, High-Rise Apartments & Villa Communities',
    benefits: [
      'Complete peace of mind for families, senior citizens, and children',
      'Integration with MyGate / Park+ society visitor apps',
      'Night-time roving patrols with baton and whistle checks'
    ],
    features: ['Visitor & delivery boy authentication', 'Domestic maid/driver entry logs', 'Child safety gate restrictions', 'Night patrolling checkpoints'],
    image: '/src/assets/images/hero_corporate_facility_1794072091725.jpg'
  },
  {
    id: 'sec-commercial-property',
    title: 'Commercial Property & Retail Mall Security',
    category: 'security',
    description: 'Comprehensive retail protection focusing on shoplifting mitigation, crowd dispersion, child lost-and-found, and basement parking surveillance.',
    suitableFor: 'Shopping Malls, Supermarket Chains, Showrooms & Commercial Hubs',
    benefits: [
      'Safe shopping environment encouraging high customer footfall',
      'Loss prevention protocols for retail tenants',
      'Basement safety escort for late-working mall staff'
    ],
    features: ['Entrance metal detection', 'Basement surveillance rounds', 'Lost & found child assistance', 'Emergency evacuation drills'],
    image: '/src/assets/images/service_security_guards_1794072093270.jpg'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'ind-corporate-mnc',
    title: 'Corporate & MNC Offices',
    description: 'High-touch housekeeping and smart corporate security tailored for Fortune 500 offices, IT campuses, and multinational headquarters in Sector 62 and NCR.',
    solutions: ['Ergonomic desk sanitation', 'VIP reception security', 'Asset gate-pass verification', 'Pantry & conference management'],
    iconName: 'Building2',
    tag: 'Enterprise'
  },
  {
    id: 'ind-tech-parks',
    title: 'IT & Technology Parks',
    description: 'Scalable manpower solutions for high-density tech parks operating 24x7 with continuous shift rotations and rigorous cybersecurity perimeter checks.',
    solutions: ['24/7 continuous janitorial rotas', 'Turnstile access monitoring', 'Basement traffic marshalling', 'Data center access control'],
    iconName: 'Laptop',
    tag: 'Technology'
  },
  {
    id: 'ind-hospitals',
    title: 'Hospitals & Healthcare',
    description: 'Aseptic cleaning protocols, bio-medical waste segregation, and quiet patient-friendly security guards for multi-specialty medical centers.',
    solutions: ['Sterile ward sanitization', 'ER & trauma crowd control', 'Biohazard compliance', 'Visitor pass regulation'],
    iconName: 'HeartPulse',
    tag: 'Healthcare'
  },
  {
    id: 'ind-educational',
    title: 'Schools & Universities',
    description: 'Safe, child-friendly housekeeping and background-checked security personnel safeguarding thousands of students and faculty members daily.',
    solutions: ['Classroom & lab sanitization', 'School bus boarding security', 'Visitor ID screening', 'Playground supervision'],
    iconName: 'GraduationCap',
    tag: 'Education'
  },
  {
    id: 'ind-factories',
    title: 'Factories & Manufacturing',
    description: 'Heavy-duty industrial cleaning, hazardous waste handling, and perimeter protection preventing material leakage and unauthorized entry.',
    solutions: ['Plant floor degreasing', 'Truck weighbridge checks', 'Worker shift frisking', 'Fire safety compliance'],
    iconName: 'Factory',
    tag: 'Manufacturing'
  },
  {
    id: 'ind-commercial-towers',
    title: 'Commercial Buildings & Plazas',
    description: 'Complete common-area maintenance, atrium glass cleaning, and parking management for premier office towers like Graphix Tower.',
    solutions: ['High-rise window wash', 'Lobby security concierges', 'Elevator sanitation', 'Tenant relation assistance'],
    iconName: 'Landmark',
    tag: 'Real Estate'
  },
  {
    id: 'ind-residential',
    title: 'Residential Societies & Townships',
    description: 'Reliable society guards, gatekeepers, and housekeeping teams maintaining high standards for high-rise apartment complexes.',
    solutions: ['Gate app verification', 'Clubhouse & pool maintenance', 'Night patrol check-ins', 'Doorstep garbage collection'],
    iconName: 'Home',
    tag: 'Residential'
  },
  {
    id: 'ind-shopping-malls',
    title: 'Shopping Malls & Retail Centers',
    description: 'Constant footfall floor polishing, restroom maintenance, and loss prevention security guards handling dense weekend crowds.',
    solutions: ['Ride-on floor scrubbers', 'Anti-shoplifting guards', 'Food court cleaning sweeps', 'Lost child assistance'],
    iconName: 'ShoppingBag',
    tag: 'Retail'
  },
  {
    id: 'ind-hotels',
    title: 'Hotels & Hospitality',
    description: 'Discreet back-of-house utility manpower, kitchen stewarding, and polite valet security augmenting guest satisfaction.',
    solutions: ['Public area detailing', 'Kitchen stewarding support', 'VIP escort guards', 'Valet flow control'],
    iconName: 'Hotel',
    tag: 'Hospitality'
  },
  {
    id: 'ind-warehouses',
    title: 'Warehouses & Logistics Hubs',
    description: 'High-cube warehouse sweeping, scrap management, and gate control for high-velocity logistics centers in Greater Noida and NCR.',
    solutions: ['Dock bay sweeping', 'Container seal inspection', 'Driver alcohol testing', 'CCTV monitoring'],
    iconName: 'Truck',
    tag: 'Logistics'
  },
  {
    id: 'ind-events',
    title: 'Events & Special Occasions',
    description: 'Turnkey crowd control bouncers, metal detector screening, and post-event cleanup for conferences, exhibitions, and corporate galas.',
    solutions: ['Bouncer security deployment', 'DFMD metal screening', 'VIP zone security', 'Rapid post-event sanitization'],
    iconName: 'Sparkles',
    tag: 'Events'
  }
];

export const INITIAL_QUOTATIONS: QuotationRequest[] = [
  {
    id: 'HE-QUO-2026-101',
    createdAt: '2026-11-05T14:32:00Z',
    organizationName: 'OptiCore Technologies Pvt Ltd',
    contactPerson: 'Sandeep Sharma',
    phone: '+91 981-123-4567',
    email: 'sandeep.sharma@opticoretech.in',
    companyAddress: 'Tower B, Candor TechSpace, Sector 62',
    siteLocation: 'Noida, UP',
    serviceType: 'Complete Facility Support',
    numberOfPersonnel: 18,
    workingHours: '12 Hours (Day/Night)',
    weeklyWorkingDays: '6 Days/Week',
    expectedStartDate: '2026-12-01',
    contractDuration: '12 Months',
    additionalRequirements: 'Need 10 housekeeping personnel, 6 security guards (including 1 supervisor), and 2 pantry staff for new floor expansion.',
    status: 'Quotation Sent',
    internalNotes: [
      'Site visited on Nov 6 by Mr. Himanshu Mishra.',
      'Quotation rate card for Candor TechSpace sent via email. Follow-up meeting scheduled.'
    ]
  },
  {
    id: 'HE-QUO-2026-102',
    createdAt: '2026-11-06T10:15:00Z',
    organizationName: 'Apex Precision Engineering Works',
    contactPerson: 'Vikas Singhal',
    phone: '+91 987-654-3210',
    email: 'v.singhal@apexindustrial.co.in',
    companyAddress: 'Plot 45, Phase 2, Ecotech 3',
    siteLocation: 'Greater Noida, UP',
    serviceType: 'Security Guards',
    numberOfPersonnel: 12,
    workingHours: '24 Hours (Rotational 3 Shifts)',
    weeklyWorkingDays: '7 Days/Week (24x7)',
    expectedStartDate: '2026-11-20',
    contractDuration: 'Multi-Year Long Term',
    additionalRequirements: '24x7 security perimeter guards with 1 armed security gunman for main dispatch gate. PSARA compliance documentation requested.',
    status: 'Contacted',
    internalNotes: [
      'Client called regarding armed personnel licensing verification. Provided statutory details.'
    ]
  },
  {
    id: 'HE-QUO-2026-103',
    createdAt: '2026-11-07T08:45:00Z',
    organizationName: 'Greenwood Heights Condominium Board',
    contactPerson: 'Mrs. Neha Chawla',
    phone: '+91 991-002-3344',
    email: 'secretary@greenwoodnoida.org',
    companyAddress: 'Plot GH-02, Sector 137',
    siteLocation: 'Noida, UP',
    serviceType: 'Housekeeping',
    numberOfPersonnel: 14,
    workingHours: '8 Hours (Single Shift)',
    weeklyWorkingDays: '7 Days/Week (24x7)',
    expectedStartDate: '2026-12-15',
    contractDuration: '12 Months',
    additionalRequirements: 'Towers common lobbies, 4 elevators, club house, and basement scrubbers. Automated floor scrubber required.',
    status: 'New',
    internalNotes: []
  }
];

export const INITIAL_ENQUIRIES: ContactEnquiry[] = [
  {
    id: 'HE-ENQ-2026-201',
    createdAt: '2026-11-06T16:20:00Z',
    fullName: 'Rajesh Malhotra',
    companyName: 'Malhotra Logistics Hub',
    mobile: '+91 989-988-7766',
    email: 'malhotra.hub@gmail.com',
    requiredService: 'Security Guards',
    siteLocation: 'Surajpur Industrial Area, Greater Noida',
    estimatedWorkforce: '8-10 personnel',
    contractDuration: '12 Months',
    message: 'Need disciplined security guards for warehouse perimeter and truck weighbridge operations.',
    status: 'Contacted',
    internalNotes: ['Spoke with Rajesh. Site visit proposed for Monday.']
  },
  {
    id: 'HE-ENQ-2026-202',
    createdAt: '2026-11-07T09:10:00Z',
    fullName: 'Dr. Ananya Roy',
    companyName: 'Noida City Diagnostics & Clinic',
    mobile: '+91 971-122-3344',
    email: 'dr.ananya@noidadiagnostics.com',
    requiredService: 'Housekeeping',
    siteLocation: 'Sector 50, Noida',
    estimatedWorkforce: '4-6 personnel',
    contractDuration: '12 Months',
    message: 'Looking for trained hospital/clinic housekeeping staff experienced in sanitization and sterile handling.',
    status: 'New',
    internalNotes: []
  }
];

export const INITIAL_CAREERS: CareerApplication[] = [
  {
    id: 'HE-JOB-2026-301',
    createdAt: '2026-11-05T11:00:00Z',
    fullName: 'Amit Kumar Yadav',
    mobile: '+91 965-011-2233',
    email: 'amit.yadav92@gmail.com',
    currentAddress: 'Village Khora, Near Sector 62, Noida',
    preferredPosition: 'Security Guard',
    experience: '3-5 years (Ex-SIS security experience in Candor TechSpace)',
    preferredLocation: 'Noida Sector 62 / 63',
    documentNote: 'Aadhar Card and Police Verification verified',
    additionalInfo: 'Height 5ft 10in, matriculate pass, non-smoker.',
    status: 'Shortlisted',
    internalNotes: ['Good physique and clean police verification. Invited for interview at Graphix Tower office.']
  },
  {
    id: 'HE-JOB-2026-302',
    createdAt: '2026-11-06T15:40:00Z',
    fullName: 'Sunita Devi',
    mobile: '+91 880-044-5566',
    currentAddress: 'Sector 12, Noida',
    preferredPosition: 'Housekeeping Staff',
    experience: '1-2 years in corporate office pantry and floor maintenance',
    preferredLocation: 'Noida Sector 62 / 59',
    documentNote: 'Aadhar Card submitted',
    additionalInfo: 'Hardworking, punctual, looking for daytime shift.',
    status: 'Interviewed',
    internalNotes: ['Interviewed on Nov 7. Approved by supervisor for deployment at Sector 62 client.']
  },
  {
    id: 'HE-JOB-2026-303',
    createdAt: '2026-11-07T07:30:00Z',
    fullName: 'Vikram Singh Chauhan',
    mobile: '+91 971-888-9900',
    email: 'vikram.singh.exarm@rediffmail.com',
    currentAddress: 'Bisrakh, Greater Noida West',
    preferredPosition: 'Licensed Armed Security Personnel',
    experience: '5+ years (Ex-Serviceman Indian Army, Gun License valid pan-UP)',
    preferredLocation: 'Noida or Greater Noida',
    documentNote: 'Armed License copy, Discharge Book, and Police Verification ready',
    additionalInfo: 'Double-barrel 12-bore license in order. Physically active.',
    status: 'New',
    internalNotes: []
  }
];
