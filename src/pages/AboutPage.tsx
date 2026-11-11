import React from 'react';
import { ShieldCheck, Target, Compass, Award, CheckCircle2, ArrowRight, Building2, Users, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, LEADERSHIP } from '../data/mockData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    { title: 'Integrity', desc: 'Uncompromising honesty in statutory compliance, police verifications, and client dealings.' },
    { title: 'Professionalism', desc: 'Disciplined uniforms, courteous conduct, punctuality, and adherence to enterprise SOPs.' },
    { title: 'Accountability', desc: 'Clear lines of supervision, documented checklists, and measurable service level agreements.' },
    { title: 'Reliability', desc: 'Guaranteed uninterrupted deployment with dedicated reserve manpower for unexpected absences.' },
    { title: 'Discipline', desc: 'Strict training routines, shift adherence, and prompt supervision protocols day and night.' },
    { title: 'Client Satisfaction', desc: 'Accessible leadership, proactive problem-solving, and tailored contract flexibility.' }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white to-[#F5F7F6] pt-12 pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#006B35]">
              <span>Corporate Profile</span>
              <span aria-hidden="true">·</span>
              <span>Noida Sector 62 Head Office</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
              About <span className="text-[#006B35]">Himanshu</span> <span className="text-[#FF7900]">Enterprises</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              "Your Problem, Our Solution." Delivering disciplined contractual housekeeping, security personnel and manpower management across northern India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Company Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
              Our Company
            </h2>
            <p>
              <strong>Himanshu Enterprises</strong> is a Noida-based contractual services company providing professional housekeeping, security and manpower solutions to commercial, institutional and industrial clients.
            </p>
            <p>
              Our focus is on delivering reliable workforce deployment, professional service management and long-term client relationships.
            </p>
            <p>
              We aim to support organizations by managing essential operational services so they can concentrate on their core business activities. Operating out of our corporate head office in Graphix Tower 2, Sector 62, Noida, we have structured our operations to cater to high-density commercial towers, educational institutes, technology campuses, hospitals, and manufacturing complexes across Noida, Greater Noida, Ghaziabad, and the wider Delhi NCR territory.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigate('quote')}
                className="px-6 py-3 rounded-xl bg-[#FF7900] hover:bg-[#E06700] text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                Request a Free Quotation
              </button>
              <button
                onClick={() => onNavigate('leadership')}
                className="px-6 py-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs shadow-xs transition-colors cursor-pointer"
              >
                Meet Our Leadership
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 relative bg-white">
              <img
                src="/src/assets/images/hero_corporate_facility_1794072091725.jpg"
                alt="Graphix Tower 2 and corporate enterprise facilities"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-white space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#006B35] flex items-center justify-center font-bold">
                    HE
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-sm">Himanshu Enterprises</h3>
                    <p className="text-xs text-slate-500">Corporate Head Office, Noida</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A-13, Graphix Tower 2, Near Electronic City Metro Station, Sector 62, Noida, Gautam Buddha Nagar, Uttar Pradesh – 201301.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#006B35] flex items-center justify-center">
              <Compass className="w-6 h-6 text-[#008C45]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
              Strategic Outlook
            </span>
            <h2 className="font-display font-extrabold text-2xl text-slate-900">
              Our Vision
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              "To become a trusted and recognized name in India's contractual manpower, housekeeping and security services industry."
            </p>
            <p className="text-xs text-slate-500 leading-relaxed pt-2">
              We strive to set benchmarks in ethical workforce deployment, employee dignity, transparent billing, and technological supervision across the facility management sector.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF7900] flex items-center justify-center">
              <Target className="w-6 h-6 text-[#FF7900]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900]">
              Operational Mandate
            </span>
            <h2 className="font-display font-extrabold text-2xl text-slate-900">
              Our Mission
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              "To deliver dependable, professional and efficient service solutions through responsible workforce management, operational discipline and customer-focused execution."
            </p>
            <p className="text-xs text-slate-500 leading-relaxed pt-2">
              Every facility contract we take on is backed by continuous field supervision, prompt emergency replacements, and uncompromising statutory compliance.
            </p>
          </div>

        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
              Ethical Standards
            </span>
            <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mt-1">
              Our Core Values
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Guiding every staff deployment, client consultation, and supervisor interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F5F7F6] border border-slate-200/70 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008C45]" />
                  <h3 className="font-display font-bold text-base text-slate-900">{v.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach to Workforce Management & Service Commitment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17251E] text-white rounded-3xl p-8 sm:p-12 lg:p-16 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900]">
              Operational Quality Assurance
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Our Approach to Workforce Management
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Managing manpower demands far more than basic recruitment. At Himanshu Enterprises, we institute a complete 4-tier lifecycle for every personnel deployed at client sites:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-300">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[#008C45] font-bold text-sm block">01. Vetting & Verification</span>
              <p>Mandatory police character verification, permanent address checks, previous employer references, and Aadhaar authentication.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[#FF7900] font-bold text-sm block">02. Grooming & Uniformity</span>
              <p>Standardized, smart company uniforms, identity cards, hygiene grooming standards, and basic fire safety/first aid orientation.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[#008C45] font-bold text-sm block">03. Roster Management</span>
              <p>Strict shift rostering ensuring zero staff fatigue, full biometric or register sign-ins, and automated leave replacement buffers.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[#FF7900] font-bold text-sm block">04. Night & Day Supervision</span>
              <p>Regular roving inspections by area managers to ensure guards remain alert and janitorial staff maintain scheduled cleaning logs.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Need site-specific workforce planning for your building or facility?
            </div>
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-2.5 rounded-xl bg-[#FF7900] hover:bg-[#E06700] text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Consult With Our Operations Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
