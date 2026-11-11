import React from 'react';
import { ShieldCheck, Lock, AlertTriangle, ArrowRight, CheckCircle2, Clock, Eye, Phone, Building } from 'lucide-react';
import { SECURITY_SERVICES, COMPANY_INFO } from '../data/mockData';

interface SecurityPageProps {
  onNavigate: (page: string) => void;
  onSelectServiceForQuote?: (serviceName: string) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onNavigate, onSelectServiceForQuote }) => {
  const handleRequestService = (serviceTitle: string) => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(serviceTitle);
    }
    onNavigate('quote');
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F5F7F6] pt-12 pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#FF7900]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF7900]" />
              <span>Disciplined Guarding & Asset Protection</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Professional <span className="text-[#006B35]">Security</span> & Protection Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Vetted security guards, corporate front-desk concierges, event bouncers, and licensed armed personnel deployed with rigorous operational discipline and round-the-clock supervisor oversight.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('quote')}
                className="px-6 py-3 rounded-xl bg-[#FF7900] hover:bg-[#E06700] text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                Discuss Your Security Requirements
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="px-5 py-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs shadow-xs transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#008C45]" />
                <span>Call Security Desk: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Statutory PSARA & Arms Compliance Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-amber-50 border border-amber-200 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-xs text-amber-900 leading-relaxed">
              <h3 className="font-display font-bold text-sm text-amber-950">
                Important Compliance & Statutory Licensing Requirement
              </h3>
              <p>
                All security services provided by Himanshu Enterprises are strictly subject to applicable Indian laws and licensing requirements, including the <strong>Private Security Agencies (Regulation) Act (PSARA)</strong> where applicable.
              </p>
              <p>
                <strong>Armed Security Policy:</strong> Armed personnel (licensed gunmen) are deployed exclusively with verified valid individual firearms licenses issued by authorized licensing authorities, clear police verification records, and complete statutory documentation. We do not under any circumstances deploy unlicensed armed personnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment & Supervision Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
            Operational Command
          </span>
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mt-1">
            How We Manage Site Security
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A 6-pillar governance model ensuring full transparency and zero security lapse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
            <Clock className="w-5 h-5 text-[#008C45]" />
            <h3 className="font-display font-bold text-base text-slate-900">Duty Scheduling & Rosters</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standardized 8-hour or 12-hour shifts designed to avoid security guard fatigue. Biometric or register check-in logs submitted monthly to client HR.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
            <Building className="w-5 h-5 text-[#FF7900]" />
            <h3 className="font-display font-bold text-base text-slate-900">Site-Specific Security Planning</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Detailed perimeter assessment identifying blind spots, access points, visitor parking queues, and fire exits for tactical post assignments.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
            <Eye className="w-5 h-5 text-[#008C45]" />
            <h3 className="font-display font-bold text-base text-slate-900">Supervisor Coordination & Night Checks</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Roving area field officers make surprise day visits and midnight patrols to check guard vigilance, alertness, and register accuracy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
            <CheckCircle2 className="w-5 h-5 text-[#FF7900]" />
            <h3 className="font-display font-bold text-base text-slate-900">Attendance & Duty Monitoring</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Daily headcounts with immediate reserve deployment from our Sector 62 buffer pool in case of sudden illness or leaves.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
            <Lock className="w-5 h-5 text-[#008C45]" />
            <h3 className="font-display font-bold text-base text-slate-900">Access Control & Material Tracking</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Rigorous visitor badge issuance, delivery vehicle logs, laptop gate passes, and inventory outward checking to mitigate theft.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
            <ShieldCheck className="w-5 h-5 text-[#FF7900]" />
            <h3 className="font-display font-bold text-base text-slate-900">Client Coordination Desk</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated single point of contact with direct escalation channels to our executive leadership team for prompt issue resolution.
            </p>
          </div>
        </div>
      </section>

      {/* Security Service Offerings Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
            Service Specializations
          </span>
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mt-1">
            Our Security Personnel & Guarding Solutions
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Disciplined physical security customized for commercial, residential, event, and industrial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SECURITY_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Media banner */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-[#FF7900]">
                    0{index + 1}. {service.suitableFor.split(',')[0]}
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-display font-bold text-xl text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs">
                    <strong className="text-slate-900 block mb-1">Suitable Facilities:</strong>
                    <span className="text-slate-600">{service.suitableFor}</span>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-1.5 pt-1">
                    <strong className="text-xs font-bold text-slate-900 block">Guard Competencies & Standards:</strong>
                    {service.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#008C45] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Operational Duties */}
                  <div className="pt-2">
                    <strong className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      Key Post Duties:
                    </strong>
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feat, fIdx) => (
                        <span key={fIdx} className="px-2.5 py-1 rounded-md bg-orange-50 text-[#FF7900] text-[11px] font-medium border border-orange-100">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 flex items-center justify-between gap-4 mt-4">
                <span className="text-xs text-slate-500 font-medium">
                  Site security audit included
                </span>
                <button
                  onClick={() => handleRequestService(service.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#006B35] hover:bg-[#004D25] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Discuss Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Prominent CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#006B35] to-[#008C45] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-display font-bold text-2xl sm:text-3xl">
              Discuss Your Security Requirements
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100">
              Speak directly with our security planners to review gate access points, guard strength, shift timings, and PSARA documentation.
            </p>
          </div>
          <button
            onClick={() => onNavigate('quote')}
            className="px-6 py-3.5 rounded-xl bg-[#FF7900] hover:bg-[#E06700] text-white font-bold text-xs shadow-lg transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-98"
          >
            Request Security Personnel Quote
          </button>
        </div>
      </section>

    </div>
  );
};
