import React, { useState } from 'react';
import { 
  ArrowRight, ShieldCheck, Sparkles, Building2, CheckCircle2, 
  Phone, Users, Clock, Award, ChevronRight, FileText, 
  Briefcase, MessageSquare, MapPin, Mail, Eye, Sliders, Check,
  Zap, Wrench, Shield, Compass, Star, UserCheck
} from 'lucide-react';
import { COMPANY_INFO, LEADERSHIP, HOUSEKEEPING_SERVICES, SECURITY_SERVICES, INDUSTRIES } from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: string, serviceTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Interactive Hero Manpower Planner State
  const [plannerService, setPlannerService] = useState<'Housekeeping' | 'Security Guards' | 'Complete Facility Support'>('Complete Facility Support');
  const [plannerStaff, setPlannerStaff] = useState<number>(12);
  const [plannerShift, setPlannerShift] = useState<'8hr' | '12hr' | '24x7'>('12hr');
  const [plannerLocation, setPlannerLocation] = useState<string>('Noida Sector 62 / NCR');

  // Interactive Sector Explorer State
  const [activeSectorIndex, setActiveSectorIndex] = useState<number>(0);

  const featuredSectors = [
    {
      id: 'corp-it',
      name: 'Corporate Offices & IT Parks',
      tag: 'Enterprise High-Tech',
      description: 'Zero-disruption janitorial sweeps during business hours, turnstile security concierges, and hardware asset gate-pass controls.',
      metrics: {
        cleaningFreq: 'Continuous Hourly Restroom Sweeps',
        securityPost: 'Turnstile, CCTV Room & Reception',
        supervisorRatio: '1 Dedicated Site Officer per 12 Staff',
        equipment: 'Silent HEPA Vacuums, Microfiber Color-Codes'
      },
      image: '/src/assets/images/hero_corporate_facility_1794072091725.jpg'
    },
    {
      id: 'hospitals',
      name: 'Hospitals & Medical Centers',
      tag: 'Clinical Hygiene',
      description: 'Bio-medical waste segregation, OT/ICU terminal sanitization, and quiet patient-assist guards for multi-specialty healthcare institutions.',
      metrics: {
        cleaningFreq: 'Aseptic Disinfection every 2 Hours',
        securityPost: 'Emergency ER Access, Parking, Ward Gates',
        supervisorRatio: '1 Infection-Control Certified Supervisor',
        equipment: 'Hospital-Grade Virucidal Sprayers, Steam Extractors'
      },
      image: '/src/assets/images/service_housekeeping_commercial_1794072091913.jpg'
    },
    {
      id: 'industrial-plants',
      name: 'Factories & Industrial Plants',
      tag: 'Manufacturing & Heavy Plant',
      description: 'Heavy-duty degreasing for production bays, truck weighbridge verification, driver alcohol tests, and perimeter patrol rounds.',
      metrics: {
        cleaningFreq: 'Post-Shift Machine & Floor Scrubbing',
        securityPost: 'Main Material In/Out Gate & Weighbridge',
        supervisorRatio: '24x7 Shift Field Officers',
        equipment: 'Ride-On Floor Scrubbers, Metal Detectors'
      },
      image: '/src/assets/images/industrial_facility_complex_1794072092632.jpg'
    },
    {
      id: 'commercial-towers',
      name: 'Commercial Towers & Malls',
      tag: 'High-Footfall Real Estate',
      description: 'Atrium glass maintenance, parking valet marshals, basement surveillance, and loss-prevention retail guarding.',
      metrics: {
        cleaningFreq: 'Continuous Lobby Mopping & Façade Wash',
        securityPost: 'Entrance Frisking, Basement Parking Patrol',
        supervisorRatio: 'Senior Facility Manager On-Site',
        equipment: 'High-Pressure Water Jets, Walkie-Talkie Network'
      },
      image: '/src/assets/images/service_security_guards_1794072093270.jpg'
    }
  ];

  const handleLaunchQuoteFromPlanner = () => {
    onNavigate('quote', plannerService);
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      
      {/* ================= SECTION 1: EXECUTIVE HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-8 md:pt-14 bg-corporate-grid">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-0 right-10 -z-10 w-[500px] h-[500px] bg-[#006B35]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-48 left-0 -z-10 w-[450px] h-[450px] bg-[#FF7900]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Value Prop & Live Planner */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200/90 shadow-2xs text-xs font-semibold text-[#006B35]">
                <span className="w-2 h-2 rounded-full bg-[#008C45] animate-pulse"></span>
                <span>Noida & NCR’s Premier Contractual Manpower Partner</span>
                <span className="text-slate-300">|</span>
                <span className="text-[#FF7900] font-bold">Sector 62 Head Office</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.12] text-balance">
                Professional <span className="text-[#006B35] drop-shadow-xs">Housekeeping</span> & <span className="text-[#FF7900] drop-shadow-xs">Security Solutions</span> for Every Business.
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Your trusted partner for professional housekeeping, security personnel and contractual manpower services. We help businesses maintain clean, safe and efficiently managed environments.
              </p>

              {/* Interactive Quick Deployment Calculator Card */}
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-lg card-glow-green space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#008C45]" />
                    <span className="font-display font-bold text-xs uppercase tracking-wider text-slate-900">
                      Live Manpower & Deployment Planner
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#FF7900] bg-orange-50 px-2 py-0.5 rounded-md">
                    Instant SLA Estimation
                  </span>
                </div>

                {/* Service Selector Tabs */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPlannerService('Housekeeping')}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                      plannerService === 'Housekeeping'
                        ? 'bg-[#006B35] text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                    }`}
                  >
                    Housekeeping
                  </button>

                  <button
                    type="button"
                    onClick={() => setPlannerService('Security Guards')}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                      plannerService === 'Security Guards'
                        ? 'bg-[#006B35] text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                    }`}
                  >
                    Security Guards
                  </button>

                  <button
                    type="button"
                    onClick={() => setPlannerService('Complete Facility Support')}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                      plannerService === 'Complete Facility Support'
                        ? 'bg-[#FF7900] text-white shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                    }`}
                  >
                    Integrated Both
                  </button>
                </div>

                {/* Sliders & Parameters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {/* Staff count slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600 font-medium">Workforce Strength:</span>
                      <strong className="text-slate-900 font-bold tabular-nums font-mono text-sm text-[#006B35]">
                        {plannerStaff} Personnel
                      </strong>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={50}
                      step={1}
                      value={plannerStaff}
                      onChange={e => setPlannerStaff(parseInt(e.target.value))}
                      className="w-full accent-[#006B35] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>2 Staff</span>
                      <span>25 Staff</span>
                      <span>50+ Staff</span>
                    </div>
                  </div>

                  {/* Shift Selection */}
                  <div className="space-y-1.5">
                    <span className="text-xs text-slate-600 font-medium block">Shift Configuration:</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setPlannerShift('8hr')}
                        className={`py-1.5 text-[11px] font-semibold rounded-lg border transition-colors cursor-pointer ${
                          plannerShift === '8hr'
                            ? 'bg-[#E8F5ED] text-[#006B35] border-[#008C45]'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        8h General
                      </button>
                      <button
                        type="button"
                        onClick={() => setPlannerShift('12hr')}
                        className={`py-1.5 text-[11px] font-semibold rounded-lg border transition-colors cursor-pointer ${
                          plannerShift === '12hr'
                            ? 'bg-[#E8F5ED] text-[#006B35] border-[#008C45]'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        12h Day/Night
                      </button>
                      <button
                        type="button"
                        onClick={() => setPlannerShift('24x7')}
                        className={`py-1.5 text-[11px] font-semibold rounded-lg border transition-colors cursor-pointer ${
                          plannerShift === '24x7'
                            ? 'bg-orange-50 text-[#FF7900] border-[#FF7900]'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        24x7 Rota
                      </button>
                    </div>
                  </div>
                </div>

                {/* Computed Benefits Output Bar */}
                <div className="p-3 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#008C45]" />
                    <span className="text-slate-700">
                      <strong>{Math.max(1, Math.floor(plannerStaff / 10))} Dedicated Supervisor(s)</strong> Assigned
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#FF7900]" />
                    <span className="text-slate-700">
                      Onboarding: <strong>24–48 Hours</strong>
                    </span>
                  </div>
                </div>

                {/* Primary CTA from planner */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                  <button
                    onClick={handleLaunchQuoteFromPlanner}
                    className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#FF7900] to-[#E06700] hover:from-[#E06700] hover:to-[#C85C00] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Lock In Deployment Plan & Get Official Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Himanshu%20Enterprises,%20I%20used%20your%20planner%20for%20${plannerStaff}%20${plannerService}%20staff%20(${plannerShift}%20shifts).%20Please%20send%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 px-4 rounded-xl bg-[#008C45] hover:bg-[#006B35] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Proposal</span>
                  </a>
                </div>

              </div>

              {/* Trust statement */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#008C45] shrink-0" />
                <span>Professional People. Reliable Services. Long-Term Partnerships.</span>
              </div>

            </div>

            {/* Right Column: Hero Visual with Multi-Layered Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Visual Backdrop Frame */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#006B35]/20 via-[#008C45]/15 to-[#FF7900]/20 rounded-3xl blur-xl transform -rotate-1" />

                {/* Main Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white">
                  <img
                    src="/src/assets/images/hero_corporate_facility_1794072091725.jpg"
                    alt="Corporate facilities managed by Himanshu Enterprises"
                    className="w-full h-88 sm:h-96 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                  {/* Top Floating Logo Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 px-3.5 shadow-lg flex items-center gap-3 border border-white/60">
                    <img
                      src="/assets/aistudio/image_3f2de657.png"
                      alt="Himanshu Enterprises Logo"
                      className="w-10 h-10 object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-xs font-black text-[#006B35] leading-tight">HIMANSHU ENTERPRISES</p>
                      <p className="text-[10px] text-slate-500 font-medium">Head Office: Sector 62, Noida</p>
                    </div>
                  </div>

                  {/* Top Right Live Tag */}
                  <div className="absolute top-4 right-4 bg-[#0D1912]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>24x7 Control Room</span>
                  </div>

                  {/* Bottom Information Card Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="bg-[#0D1912]/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-xl space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>PSARA & Statutory Compliant</span>
                        </span>
                        <span className="text-[#FF7900] font-bold">Zero-Downtime Guarantee</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Graphix Tower 2, Sector 62 · Dedicated facility supervisors, police-verified security guards, and mechanized corporate cleaning crews.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* 4-Column Proof & Key Metrics Strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-6 bg-white rounded-3xl shadow-sm border border-slate-200/90 card-glow-green">
            <div className="flex items-center gap-3.5 p-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#006B35] flex items-center justify-center shrink-0 border border-emerald-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Statutory</p>
                <p className="text-sm font-bold text-slate-900">100% PSARA & Labor Law</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF7900] flex items-center justify-center shrink-0 border border-orange-100">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Vetting</p>
                <p className="text-sm font-bold text-slate-900">Police Background Checked</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#008C45] flex items-center justify-center shrink-0 border border-emerald-100">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Supervision</p>
                <p className="text-sm font-bold text-slate-900">24/7 Night Patrol Officers</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 border border-slate-200">
                <Award className="w-6 h-6 text-[#006B35]" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Relief Buffer</p>
                <p className="text-sm font-bold text-slate-900">Zero Absence Downtime</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: COMPANY INTRODUCTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
                Corporate Introduction
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Building Cleaner, Safer & Better Workplaces.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Himanshu Enterprises is a premier contractual service provider offering customized housekeeping, professional security and contractual manpower solutions for businesses, institutions and residential communities.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe that reliable facility management is the foundation of every successful organization. By managing essential support operations with disciplined personnel and dedicated supervision, we enable our corporate clients to focus entirely on their core business activities.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#006B35] hover:bg-[#004D25] rounded-xl transition-colors cursor-pointer"
                >
                  <span>Discover Our Company</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('leadership')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/70 rounded-xl transition-colors cursor-pointer"
                >
                  <span>Executive Founders</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 hover:border-[#008C45] transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#008C45] mb-2" />
                <h3 className="font-display font-bold text-sm text-slate-900 mb-1">Professional Workforce</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screened, police-verified and rigorously trained staff for your workplace.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 hover:border-[#FF7900] transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#FF7900] mb-2" />
                <h3 className="font-display font-bold text-sm text-slate-900 mb-1">Dedicated Supervision</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  On-site field officers and regular shift surprise inspections ensuring protocol.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 hover:border-[#008C45] transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#008C45] mb-2" />
                <h3 className="font-display font-bold text-sm text-slate-900 mb-1">Site-Specific Deployment</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Workforce tailored to the unique geometry, timings and traffic of your facility.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 hover:border-[#FF7900] transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#FF7900] mb-2" />
                <h3 className="font-display font-bold text-sm text-slate-900 mb-1">Flexible Contracts</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Customizable terms, scalable personnel strength and transparent SLA parameters.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 hover:border-[#008C45] transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#008C45] mb-2" />
                <h3 className="font-display font-bold text-sm text-slate-900 mb-1">Quality Monitoring</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Daily audit registers, washroom checklists and periodic performance reviews.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 hover:border-[#FF7900] transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#FF7900] mb-2" />
                <h3 className="font-display font-bold text-sm text-slate-900 mb-1">Client-Focused Approach</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct leadership access and prompt operational replacement for absences.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CORE SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
            Our Core Competencies
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-1">
            Enterprise Facility & Protection Divisions
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Two specialized operational divisions engineered to provide enterprise-grade facility hygiene and rigorous perimeter protection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CARD 1 — HOUSEKEEPING SERVICES */}
          <div className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between card-glow-green">
            <div>
              {/* Media Header with Scrim */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/src/assets/images/service_housekeeping_commercial_1794072091913.jpg"
                  alt="Corporate Housekeeping Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Division 01 · Mechanized & Janitorial Care
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Housekeeping & Cleaning Services
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Professional cleaning and housekeeping solutions designed to maintain hygienic, organized and presentable workplaces.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008C45]"></span>
                    <span>Office housekeeping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008C45]"></span>
                    <span>Commercial cleaning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008C45]"></span>
                    <span>Corporate building cleaning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008C45]"></span>
                    <span>School & college housekeeping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008C45]"></span>
                    <span>Hospital housekeeping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008C45]"></span>
                    <span>Industrial housekeeping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008C45]"></span>
                    <span>Washroom maintenance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008C45]"></span>
                    <span>Common-area cleaning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008C45]"></span>
                    <span>Deep cleaning services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008C45]"></span>
                    <span>Facility support manpower</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <button
                onClick={() => onNavigate('housekeeping')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-50 hover:bg-[#006B35] text-[#006B35] hover:text-white font-bold text-xs transition-colors cursor-pointer"
              >
                <span>Explore All 10 Housekeeping Disciplines</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CARD 2 — SECURITY SERVICES */}
          <div className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between card-glow-orange">
            <div>
              {/* Media Header with Scrim */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/src/assets/images/service_security_guards_1794072093270.jpg"
                  alt="Professional Security Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-300">
                    Division 02 · PSARA Guarding & Protection
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Security & Guarding Services
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Professional security personnel and deployment solutions designed to help protect people, properties and business premises.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]"></span>
                    <span>Trained Security Guards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]"></span>
                    <span>Armed Security / Gunmen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]"></span>
                    <span>Professional Bouncers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]"></span>
                    <span>Event Security Teams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]"></span>
                    <span>Commercial Building Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]"></span>
                    <span>Corporate Office Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]"></span>
                    <span>Industrial Plant Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]"></span>
                    <span>Residential Society Security</span>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]"></span>
                    <span>School & Institutional Security</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-orange-50/80 border border-orange-200/80 text-[11px] text-slate-700">
                  <span className="font-bold text-orange-900">PSARA & Arms Law Compliance:</span> Armed personnel strictly deployed subject to valid individual firearm licenses and statutory clearances.
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <button
                onClick={() => onNavigate('security')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-50 hover:bg-[#FF7900] text-[#FF7900] hover:text-white font-bold text-xs transition-colors cursor-pointer"
              >
                <span>Explore Security & Guarding Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: INTERACTIVE SECTOR SOLUTIONS EXPLORER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D1912] text-white rounded-3xl p-8 sm:p-12 lg:p-16 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900]">
                Tailored Sector Architectures
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-1">
                Sectors We Protect & Maintain
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                Explore customized operational SOPs, guard ratios, and hygiene frequencies designed for specific facility types in Noida and NCR.
              </p>
            </div>

            {/* Interactive Sector Switcher Buttons */}
            <div className="flex flex-wrap gap-2">
              {featuredSectors.map((sector, idx) => (
                <button
                  key={sector.id}
                  onClick={() => setActiveSectorIndex(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeSectorIndex === idx
                      ? 'bg-[#008C45] text-white shadow-md'
                      : 'bg-white/10 hover:bg-white/15 text-slate-300'
                  }`}
                >
                  {sector.name.split('&')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Sector Spotlight Card */}
          {(() => {
            const current = featuredSectors[activeSectorIndex];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
                <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7900]">
                      {current.tag}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white">
                      {current.name}
                    </h3>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-5">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-slate-400 font-medium block">Hygiene & Cleaning Frequency:</span>
                      <strong className="text-emerald-400">{current.metrics.cleaningFreq}</strong>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-slate-400 font-medium block">Security Post Assignments:</span>
                      <strong className="text-[#FF7900]">{current.metrics.securityPost}</strong>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-slate-400 font-medium block">Supervisory Command:</span>
                      <strong className="text-white">{current.metrics.supervisorRatio}</strong>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-slate-400 font-medium block">Specialized Equipment Deployed:</span>
                      <strong className="text-white">{current.metrics.equipment}</strong>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => onNavigate('quote', current.name)}
                      className="px-5 py-2.5 rounded-xl bg-[#FF7900] hover:bg-[#E06700] text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                    >
                      Request Proposal for {current.name.split('&')[0]}
                    </button>
                    <button
                      onClick={() => onNavigate('industries')}
                      className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors cursor-pointer"
                    >
                      View All 11 Sectors
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ================= SECTION 5: WHY CHOOSE HIMANSHU ENTERPRISES? ================= */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
              Enterprise Value
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-1">
              Why Corporate Leaders Choose Us
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Six foundational pillars driving service reliability and contract compliance across Noida and NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 space-y-3 card-glow-green">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#006B35] flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">Professional Workforce</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every individual guard and housekeeping staff undergoes strict police background verification, address scrutiny, and specialized grooming before site posting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 space-y-3 card-glow-orange">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF7900] flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">Reliable Service Delivery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Punctual attendance monitoring and zero-lag replacement pool guarantee that your gates, lobbies, and workspaces are never unattended.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 space-y-3 card-glow-green">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#008C45] flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">Dedicated Supervision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Senior operational supervisors conduct scheduled day inspections and surprise night patrols to maintain strict adherence to facility SOPs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 space-y-3 card-glow-orange">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF7900] flex items-center justify-center font-bold text-lg">
                04
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">Flexible Contract Solutions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tailored service agreements ranging from trial periods to long-term multi-year contractual manpower partnerships scaled to your budget.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 space-y-3 card-glow-green">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#006B35] flex items-center justify-center font-bold text-lg">
                05
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">Client-Focused Approach</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Immediate responsiveness with dedicated account executives. You will never deal with bureaucratic call centers—our leadership is accessible.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 space-y-3 card-glow-orange">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF7900] flex items-center justify-center font-bold text-lg">
                06
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">Quality & Performance Monitoring</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Checklist-based sanitation audits, visitor logbook inspections, and monthly client satisfaction surveys to proactively address service needs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 6: OUR WORK PROCESS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
            Operational Framework
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-1">
            Our 4-Step Deployment Process
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A structured roadmap ensuring seamless on-boarding, thorough vetting, and sustained service excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="relative p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#008C45] transition-all card-glow-green">
            <span className="font-mono text-3xl font-extrabold text-[#006B35] block mb-3">
              01
            </span>
            <h3 className="font-display font-bold text-base text-slate-900 mb-2">
              Understand Requirements
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We conduct an on-site audit of your facility, evaluating square footage, perimeter hazards, footfall, and specific shift coverage needs.
            </p>
          </div>

          <div className="relative p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#FF7900] transition-all card-glow-orange">
            <span className="font-mono text-3xl font-extrabold text-[#FF7900] block mb-3">
              02
            </span>
            <h3 className="font-display font-bold text-base text-slate-900 mb-2">
              Plan Workforce & Deployment
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Design custom duty rosters, define shift rotas, verify background credentials, and tailor site-specific operating checklists.
            </p>
          </div>

          <div className="relative p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#008C45] transition-all card-glow-green">
            <span className="font-mono text-3xl font-extrabold text-[#006B35] block mb-3">
              03
            </span>
            <h3 className="font-display font-bold text-base text-slate-900 mb-2">
              Deploy Professional Personnel
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Punctual on-site reporting with smart company uniforms, identity cards, hygiene equipment, or security accoutrements.
            </p>
          </div>

          <div className="relative p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#FF7900] transition-all card-glow-orange">
            <span className="font-mono text-3xl font-extrabold text-[#FF7900] block mb-3">
              04
            </span>
            <h3 className="font-display font-bold text-base text-slate-900 mb-2">
              Supervise & Maintain Quality
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Continuous field officer visits, night patrol inspections, client feedback loops, and immediate reserve backup for absences.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 7: EXECUTIVE LEADERSHIP ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
              Executive Management
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-1">
              Meet Our Leadership Team
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              Accessible leadership committed to transparency, operational integrity, and responsive client partnership.
            </p>
          </div>
          <button
            onClick={() => onNavigate('leadership')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#006B35] hover:text-[#004D25] cursor-pointer shrink-0"
          >
            <span>View Full Leadership Profiles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP.map((leader, index) => {
            const initials = leader.name.replace('Mr. ', '').replace('Mrs. ', '').split(' ').map(n => n[0]).join('');
            const isFounder = index === 0;

            return (
              <div
                key={leader.id}
                className={`bg-white rounded-3xl p-8 border ${
                  isFounder ? 'border-[#008C45]/50 shadow-md ring-1 ring-[#008C45]/20' : 'border-slate-200/90 shadow-sm'
                } hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Brand Stripe */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    isFounder
                      ? 'bg-gradient-to-r from-[#006B35] to-[#FF7900]'
                      : index === 1
                      ? 'bg-[#008C45]'
                      : 'bg-[#FF7900]'
                  }`}
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E8F5ED] to-slate-100 text-[#006B35] flex items-center justify-center font-display font-bold text-2xl border border-[#008C45]/20">
                      {initials}
                    </div>
                    {isFounder && (
                      <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#006B35] text-[11px] font-bold">
                        Founder & Chairman
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-bold text-[#008C45] mt-0.5">
                      {leader.designation}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col space-y-2 text-xs">
                  <a
                    href={`tel:${leader.phone.replace(/[^+\d]/g, '')}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-[#006B35] transition-colors tabular-nums font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#008C45]" />
                    <span>{leader.phone}</span>
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-[#006B35] transition-colors truncate font-medium"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#FF7900]" />
                    <span className="truncate">{leader.email}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= SECTION 8: CALL TO ACTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#006B35] via-[#008C45] to-[#FF7900] p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          
          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-200">
              Immediate Contract Deployment
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Looking for a Reliable Housekeeping or Security Partner?
            </h2>
            <p className="text-base text-emerald-50 leading-relaxed">
              Let us understand your requirements and provide a professional contractual service solution for your organization. Contact our Sector 62 Noida operations team today.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('quote')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all cursor-pointer active:scale-98"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#006B35]" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-black/20 hover:bg-black/30 border border-white/20 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Our Team</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Himanshu%20Enterprises,%20I%20am%20interested%20in%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-950 bg-emerald-100 hover:bg-white rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#008C45]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-emerald-100 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>A-13, Graphix Tower 2, Sector 62, Noida, Gautam Buddha Nagar, UP – 201301</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
