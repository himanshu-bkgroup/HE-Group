import React from 'react';
import { Sparkles, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, Users, Clock, Award, Building2 } from 'lucide-react';
import { HOUSEKEEPING_SERVICES, SECURITY_SERVICES, COMPANY_INFO } from '../data/mockData';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F5F7F6] pt-12 pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#006B35]">
              <span>Turnkey Contractual Operations</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Our Core <span className="text-[#006B35]">Services</span> & Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Himanshu Enterprises provides end-to-end contractual facility management, professional housekeeping, and PSARA-compliant guarding personnel tailored for corporate enterprises across Noida and NCR.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('quote')}
                className="px-6 py-3 rounded-xl bg-[#FF7900] hover:bg-[#E06700] text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                Request Custom Quotation
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs shadow-xs transition-colors cursor-pointer"
              >
                Schedule Site Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Two Flagship Division Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Housekeeping Division */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-8 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#006B35] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#008C45]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
                Division 01
              </span>
              <h2 className="font-display font-extrabold text-3xl text-slate-900">
                Housekeeping & Facility Hygiene
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Complete janitorial care, mechanized scrubbing, high-traffic lobby upkeep, and hospital-grade sanitization. We supply uniformed staff, modern cleaning machines, and eco-certified chemicals.
              </p>

              <div className="pt-2 space-y-2">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Featured Capabilities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008C45]" />
                    <span>Corporate Office Cleaning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008C45]" />
                    <span>Commercial Towers & Malls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008C45]" />
                    <span>Hospital Sterile Sanitization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008C45]" />
                    <span>Washroom Hourly Audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008C45]" />
                    <span>Industrial Floor Degreasing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008C45]" />
                    <span>Pantry & Support Manpower</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate('housekeeping')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#006B35] hover:bg-[#004D25] text-white font-bold text-xs transition-colors cursor-pointer"
              >
                <span>View All 10 Housekeeping Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Security Division */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-8 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF7900] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#FF7900]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900]">
                Division 02
              </span>
              <h2 className="font-display font-extrabold text-3xl text-slate-900">
                Security & Guarding Services
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Vigilant physical security guards, bouncers, access gate marshals, and licensed armed gunmen operating in strict compliance with PSARA and applicable Indian laws.
              </p>

              <div className="pt-2 space-y-2">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Featured Capabilities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7900]" />
                    <span>Static Security Guards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7900]" />
                    <span>Armed Security Personnel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7900]" />
                    <span>Bouncers & Event Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7900]" />
                    <span>Gate Access & Turnstiles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7900]" />
                    <span>Industrial Plant Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7900]" />
                    <span>24x7 Night Patrol Officers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate('security')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FF7900] hover:bg-[#E06700] text-white font-bold text-xs transition-colors cursor-pointer"
              >
                <span>View All Security Services & PSARA Standards</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Contractual Manpower Management Division */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17251E] text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900]">
              Division 03
            </span>
            <h2 className="font-display font-extrabold text-3xl text-white">
              Contractual Manpower Solutions
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Beyond standard housekeeping and guarding, Himanshu Enterprises provides end-to-end contractual staffing solutions. We manage complete payroll compliance, EPF/ESIC statutory documentation, labor law adherence, and on-site supervisory structures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-300 pt-2">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-bold text-white block">Pantry & Utility Staff</span>
              <p>Experienced cafeteria and beverage attendants for executive corporate floors.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-bold text-white block">Office Runners & Helpers</span>
              <p>Dispatch, documentation, and conference logistics support assistants.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-bold text-white block">Warehouse Loaders</span>
              <p>Material handlers and inventory assistants for logistics hubs in Ecotech and NCR.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="font-bold text-white block">Site Supervisors</span>
              <p>Experienced field officers managing shift rotas, registers, and staff discipline.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
