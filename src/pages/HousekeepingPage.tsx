import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Clock, Users, Wrench, Building } from 'lucide-react';
import { HOUSEKEEPING_SERVICES, COMPANY_INFO } from '../data/mockData';

interface HousekeepingPageProps {
  onNavigate: (page: string) => void;
  onSelectServiceForQuote?: (serviceName: string) => void;
}

export const HousekeepingPage: React.FC<HousekeepingPageProps> = ({ onNavigate, onSelectServiceForQuote }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<string | null>(null);

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#006B35]">
              <Sparkles className="w-3.5 h-3.5 text-[#008C45]" />
              <span>Facility Management & Hygiene Division</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Professional <span className="text-[#006B35]">Housekeeping</span> & Facility Support Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Tailored janitorial management, mechanized scrubbing, continuous washroom hygiene, and disciplined support manpower engineered for corporate, healthcare, educational, and commercial establishments in Noida and NCR.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('quote')}
                className="px-6 py-3 rounded-xl bg-[#FF7900] hover:bg-[#E06700] text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                Request Housekeeping Quotation
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Himanshu%20Enterprises,%20I%20am%20interested%20in%20your%20housekeeping%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs shadow-xs transition-colors"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customization & Shift Roster Explanation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            <div className="space-y-1">
              <h2 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#008C45]" />
                <span>Flexible Shift Rosters</span>
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Single shift (8-hr), dual-shift, or 24x7 rotas configured precisely around your business operating hours.
              </p>
            </div>

            <div className="space-y-1">
              <h2 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#FF7900]" />
                <span>Custom Manpower Strength</span>
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                From a small team of 2 janitors for a boutique clinic to 50+ staff across multi-tenant commercial towers.
              </p>
            </div>

            <div className="space-y-1">
              <h2 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[#008C45]" />
                <span>Mechanized Equipment & Consumables</span>
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Industrial auto-scrubbers, single-disc machines, HEPA vacuums, and eco-certified chemicals provided as required.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 10 Detailed Housekeeping Service Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
            Comprehensive Catalog
          </span>
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mt-1">
            Our 10 Housekeeping Service Disciplines
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Every service is backed by supervisor checklist audits and prompt replacement guarantees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOUSEKEEPING_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Scrim */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-[#006B35]">
                    0{index + 1}. {service.suitableFor.split(',')[0]}
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-display font-bold text-xl text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs">
                    <strong className="text-slate-900 block mb-1">Suitable For:</strong>
                    <span className="text-slate-600">{service.suitableFor}</span>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-1.5 pt-1">
                    <strong className="text-xs font-bold text-slate-900 block">Key Service Benefits:</strong>
                    {service.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#008C45] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features Tag List */}
                  <div className="pt-2">
                    <strong className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      Included Tasks & Checkpoints:
                    </strong>
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feat, fIdx) => (
                        <span key={fIdx} className="px-2.5 py-1 rounded-md bg-[#E8F5ED] text-[#006B35] text-[11px] font-medium">
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
                  Site-specific staffing plan
                </span>
                <button
                  onClick={() => handleRequestService(service.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#006B35] hover:bg-[#004D25] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#17251E] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-display font-bold text-2xl">
              Ready to Upgrade Your Facility Hygiene?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our Sector 62 operations team will survey your premises, calculate exact square footage requirements, and present an optimized manpower plan.
            </p>
          </div>
          <button
            onClick={() => onNavigate('quote')}
            className="px-6 py-3.5 rounded-xl bg-[#FF7900] hover:bg-[#E06700] text-white font-bold text-xs shadow-lg transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Get a Free Housekeeping Quote
          </button>
        </div>
      </section>

    </div>
  );
};
