import React, { useState } from 'react';
import { 
  Building2, Laptop, HeartPulse, GraduationCap, Factory, 
  Landmark, Home, ShoppingBag, Hotel, Truck, Sparkles, 
  ArrowRight, CheckCircle2, Phone, MessageSquare 
} from 'lucide-react';
import { INDUSTRIES, COMPANY_INFO } from '../data/mockData';

interface IndustriesPageProps {
  onNavigate: (page: string) => void;
  onSelectIndustryForQuote?: (industryTitle: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onSelectIndustryForQuote }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Enterprise', 'Technology', 'Healthcare', 'Education', 'Manufacturing', 'Real Estate', 'Residential', 'Retail', 'Logistics', 'Events'];

  const filteredIndustries = activeFilter === 'All'
    ? INDUSTRIES
    : INDUSTRIES.filter(i => i.tag.toLowerCase() === activeFilter.toLowerCase());

  const handleEnquire = (industryTitle: string) => {
    if (onSelectIndustryForQuote) {
      onSelectIndustryForQuote(industryTitle);
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
              <Building2 className="w-3.5 h-3.5 text-[#008C45]" />
              <span>Multi-Sector Facility Experience</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Industries <span className="text-[#006B35]">We Serve</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every facility environment has unique operational vulnerabilities, footfalls, and hygiene standards. Discover how Himanshu Enterprises engineers site-specific solutions across Noida and NCR.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#006B35] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Industries Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIndustries.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F5ED] text-[#006B35] flex items-center justify-center font-bold">
                    <Building2 className="w-6 h-6 text-[#008C45]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-semibold text-slate-600">
                    {ind.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 leading-snug">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Customized Solutions:
                  </p>
                  <div className="space-y-1.5">
                    {ind.solutions.map((sol, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#008C45] shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400">
                  Custom SLA & Shift Rotas
                </span>
                <button
                  onClick={() => handleEnquire(ind.title)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-50 hover:bg-[#FF7900] text-[#FF7900] hover:text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Industrial Facilities Feature Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-5 relative h-64 lg:h-auto">
            <img
              src="/src/assets/images/industrial_facility_complex_1794072092632.jpg"
              alt="Industrial manufacturing and logistics park facility management"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 space-y-5 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
              Enterprise Scale Deployment
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
              Manufacturing & Logistics Hubs in Greater Noida & Ghaziabad
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We deploy disciplined industrial security guards, weighbridge attendants, and heavy-duty shop floor scrubbing teams across Ecotech, Surajpur, Sahibabad, and Kasna industrial areas. Fully compliant with factory labor acts, statutory minimum wages, and safety standards.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('quote')}
                className="px-6 py-3 rounded-xl bg-[#006B35] hover:bg-[#004D25] text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Request Industrial Proposal
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Himanshu%20Enterprises,%20we%20need%20manpower%20and%20security%20for%20our%20factory.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200/70 text-slate-800 font-semibold text-xs transition-colors"
              >
                Chat with Industrial Head
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
