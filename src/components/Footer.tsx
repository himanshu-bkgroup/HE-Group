import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowRight, ShieldCheck, Lock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#17251E] text-slate-300 border-t border-slate-800">
      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#006B35] via-[#008C45] to-[#FF7900]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border border-slate-700 shadow-md flex items-center justify-center shrink-0">
                <img
                  src="/assets/aistudio/image_3f2de657.png"
                  alt="Himanshu Enterprises"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-tight text-white block">
                  HIMANSHU <span className="text-[#FF7900]">ENTERPRISES</span>
                </span>
                <span className="text-xs font-semibold text-[#008C45] tracking-wide">
                  "Your Problem, Our Solution."
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md pt-2">
              Premier contractual service partner providing corporate housekeeping, trained security personnel, bouncers, armed gunmen, and facility manpower solutions across Noida, Greater Noida, and Delhi NCR.
            </p>

            {/* Quick Contact Badges */}
            <div className="pt-2 flex flex-col space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#FF7900] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.headOffice}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-[#008C45] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white transition-colors tabular-nums">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#FF7900] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Housekeeping Solutions */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Housekeeping
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('housekeeping')} className="hover:text-[#008C45] transition-colors text-left">
                  Corporate Offices
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('housekeeping')} className="hover:text-[#008C45] transition-colors text-left">
                  Commercial Towers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('housekeeping')} className="hover:text-[#008C45] transition-colors text-left">
                  Industrial & Warehouses
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('housekeeping')} className="hover:text-[#008C45] transition-colors text-left">
                  Hospitals & Clinics
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('housekeeping')} className="hover:text-[#008C45] transition-colors text-left">
                  Washroom Sanitization
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('housekeeping')} className="hover:text-[#008C45] transition-colors text-left">
                  Periodic Deep Cleaning
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Security Solutions */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Security Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('security')} className="hover:text-[#008C45] transition-colors text-left">
                  Static Security Guards
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('security')} className="hover:text-[#008C45] transition-colors text-left">
                  Licensed Armed Security
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('security')} className="hover:text-[#008C45] transition-colors text-left">
                  Bouncers & Event Security
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('security')} className="hover:text-[#008C45] transition-colors text-left">
                  Industrial Perimeter Security
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('security')} className="hover:text-[#008C45] transition-colors text-left">
                  Residential Townships
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('security')} className="hover:text-[#008C45] transition-colors text-left">
                  Access Control Management
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Governance */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Company & Portals
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#008C45] transition-colors text-left">
                  About Himanshu Enterprises
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('leadership')} className="hover:text-[#008C45] transition-colors text-left">
                  Leadership & Founders
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-[#008C45] transition-colors text-left">
                  Industries We Serve
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-[#008C45] transition-colors text-left">
                  Careers & Recruitment
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('quote')} className="text-[#FF7900] hover:underline transition-colors text-left font-medium">
                  Request a Free Quote
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-slate-300 transition-colors text-left text-xs">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('terms')} className="hover:text-slate-300 transition-colors text-left text-xs">
                  Terms & Conditions
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleNav('admin')}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <Lock className="w-3 h-3 text-[#FF7900]" />
                  <span>Admin Dashboard</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Compliance & Regulatory Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-xs text-slate-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="leading-relaxed text-center md:text-left max-w-3xl">
              <strong className="text-slate-300">Regulatory & Statutory Compliance Notice:</strong> All security services and deployment of security personnel are provided in accordance with the Private Security Agencies (Regulation) Act (PSARA) and applicable local Indian laws. Armed personnel are strictly deployed with verified individual firearms licenses, background verification, and statutory authorities.
            </p>
            <div className="shrink-0 flex items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Himanshu%20Enterprises,%20I%20would%20like%20to%20discuss%20contractual%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#008C45] text-white hover:bg-[#006B35] transition-colors text-xs font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {currentYear} Himanshu Enterprises. All Rights Reserved. Noida, Uttar Pradesh, India.</p>
          <p className="flex items-center gap-2">
            <span>Corporate Head Office: Sector 62, Noida</span>
            <span aria-hidden="true">·</span>
            <span>he-group.netlify.app</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
