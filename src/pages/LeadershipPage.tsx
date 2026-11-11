import React from 'react';
import { Phone, Mail, ShieldCheck, ArrowRight, Building2, UserCheck, MessageSquare } from 'lucide-react';
import { LEADERSHIP, COMPANY_INFO } from '../data/mockData';

interface LeadershipPageProps {
  onNavigate: (page: string) => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F5F7F6] pt-12 pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#006B35]">
              <UserCheck className="w-3.5 h-3.5 text-[#008C45]" />
              <span>Corporate Governance</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Meet the People Behind <span className="text-[#006B35]">Himanshu</span> <span className="text-[#FF7900]">Enterprises</span>
            </h1>
            <p className="text-lg text-slate-600 font-medium">
              Leadership, Responsibility & Commitment.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
              Our leadership team brings active oversight, operational discipline, and direct accessibility to corporate clients across Noida, Greater Noida, and Delhi NCR.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LEADERSHIP.map((leader, index) => {
            const initials = leader.name.replace('Mr. ', '').replace('Mrs. ', '').split(' ').map(n => n[0]).join('');
            const isFounder = index === 0;

            return (
              <div
                key={leader.id}
                className={`group rounded-3xl bg-white border ${
                  isFounder ? 'border-[#008C45]/40 shadow-md ring-1 ring-[#008C45]/20' : 'border-slate-200/90 shadow-sm'
                } p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Top Subtle Brand Stripe */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    isFounder
                      ? 'bg-gradient-to-r from-[#006B35] to-[#FF7900]'
                      : index === 1
                      ? 'bg-[#008C45]'
                      : 'bg-[#FF7900]'
                  }`}
                />

                <div className="space-y-6">
                  {/* Portrait Placeholder Avatar */}
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E8F5ED] to-slate-100 border border-slate-200 flex items-center justify-center text-[#006B35] font-display font-black text-2xl shadow-inner group-hover:scale-105 transition-transform">
                        {initials}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#008C45] border-2 border-white flex items-center justify-center text-white text-[10px]">
                        ✓
                      </div>
                    </div>
                    {isFounder && (
                      <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#006B35] text-[11px] font-bold">
                        Founder & Chairman
                      </span>
                    )}
                  </div>

                  {/* Name & Designation */}
                  <div>
                    <h2 className="font-display font-extrabold text-2xl text-slate-900 leading-tight">
                      {leader.name}
                    </h2>
                    <p className="text-sm font-bold text-[#008C45] mt-1">
                      {leader.designation}
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Himanshu Enterprises · Head Office Noida
                    </p>
                  </div>

                  {/* Official Introduction */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {leader.bio}
                  </p>
                </div>

                {/* Direct Action Contacts */}
                <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Direct Leadership Access:
                  </div>

                  {/* WhatsApp Direct Action */}
                  <a
                    href={`https://wa.me/${leader.phone.replace(/[^+\d]/g, '')}?text=Hello%20${encodeURIComponent(leader.name)},%20I%20would%20like%20to%20discuss%20a%20facility%20or%20manpower%20contract.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 hover:bg-[#008C45] text-[#006B35] hover:text-white border border-emerald-200/80 transition-colors group/item"
                    title={`WhatsApp ${leader.name}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center shadow-2xs text-[#008C45]">
                        <MessageSquare className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold">Direct WhatsApp</span>
                    </div>
                    <span className="text-[11px] font-medium opacity-80 group-hover/item:opacity-100">
                      Message Now
                    </span>
                  </a>

                  {/* Phone Call Button */}
                  <a
                    href={`tel:${leader.phone.replace(/[^+\d]/g, '')}`}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-[#E8F5ED] text-slate-800 hover:text-[#006B35] border border-slate-200/80 transition-colors group/item"
                    title={`Call ${leader.name}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center shadow-2xs text-[#008C45]">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold tabular-nums">{leader.phone}</span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 group-hover/item:text-[#006B35]">
                      Call Direct
                    </span>
                  </a>

                  {/* Email Button */}
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-orange-50 text-slate-800 hover:text-[#FF7900] border border-slate-200/80 transition-colors group/item"
                    title={`Email ${leader.name}`}
                  >
                    <div className="flex items-center gap-2 truncate mr-2">
                      <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center shadow-2xs text-[#FF7900] shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold truncate">{leader.email}</span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 group-hover/item:text-[#FF7900] shrink-0">
                      Send Email
                    </span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership Philosophy & Direct Engagement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#17251E] text-white p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900]">
                Executive Availability
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Direct Dialogue with Enterprise Decision-Makers
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                At Himanshu Enterprises, our leadership believes in accessible operational governance. When you enter a contract with us for housekeeping or security deployment, our directors and executives remain directly reachable to review service quality, attend site reviews, and address unique facility requirements.
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Head Office: A-13, Graphix Tower 2, Sector 62, Noida · Operations Team Available 24/7</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onNavigate('quote')}
                className="w-full py-3.5 px-6 rounded-xl bg-[#FF7900] hover:bg-[#E06700] text-white font-bold text-xs shadow-md transition-colors text-center cursor-pointer"
              >
                Schedule Executive Consultation
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Mr.%20Himanshu%20Mishra,%20I%20would%20like%20to%20discuss%20a%20facility%20contract.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Connect with Executive Desk</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
