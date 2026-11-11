import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Sparkles, MapPin, Mail, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'housekeeping', label: 'Housekeeping' },
    { id: 'security', label: 'Security' },
    { id: 'industries', label: 'Industries' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 transition-all">
      {/* Executive Announcement Strip */}
      <div className="bg-[#0D1912] text-slate-300 text-[11px] font-medium border-b border-emerald-950/80 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3 h-3 text-[#FF7900]" />
              <span>A-13, Graphix Tower 2, Sector 62, Noida (Near Electronic City Metro)</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3 h-3" />
              <span>PSARA & Labor Law Compliant</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-slate-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-slate-600 hidden lg:inline">|</span>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span className="tabular-nums">24/7 Helpline: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4 lg:gap-8">
            
            {/* Zone 1: Brand Wordmark with Uploaded Logo Emblem */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
              aria-label="Himanshu Enterprises Home"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-xs flex items-center justify-center p-0.5 group-hover:border-[#008C45] group-hover:shadow-md transition-all">
                <img
                  src="/assets/aistudio/image_3f2de657.png"
                  alt="Himanshu Enterprises Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-lg sm:text-xl tracking-tight text-[#006B35] leading-tight">
                    HIMANSHU
                  </span>
                  <span className="font-display font-black text-lg sm:text-xl tracking-tight text-[#FF7900] leading-tight">
                    ENTERPRISES
                  </span>
                </div>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500">
                  Your Problem, Our Solution.
                </span>
              </div>
            </button>

            {/* Zone 2: Navigation Links (single-line, whitespace-nowrap) */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 text-sm font-medium text-slate-700">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors focus:outline-none cursor-pointer ${
                      isActive
                        ? 'text-[#006B35] font-bold'
                        : 'hover:text-[#006B35] text-slate-600'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#006B35] to-[#008C45] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Actions (Phone + Free Quote Button with Shimmer) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#006B35] bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-xl transition-colors whitespace-nowrap shrink-0"
                title="Call Himanshu Enterprises"
              >
                <Phone className="w-3.5 h-3.5 text-[#008C45]" />
                <span className="tabular-nums">{COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={() => handleNavClick('quote')}
                className="relative overflow-hidden inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#FF7900] to-[#E06700] hover:from-[#E06700] hover:to-[#C85C00] active:scale-98 rounded-xl shadow-md hover:shadow-lg transition-all whitespace-nowrap shrink-0 cursor-pointer group"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 animate-shimmer pointer-events-none" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={() => handleNavClick('quote')}
                className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-[#FF7900] rounded-lg shadow-xs"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#006B35] hover:bg-slate-100 rounded-lg focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-[#006B35] font-bold border-l-2 border-[#008C45]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <div className="text-[11px] text-slate-500 px-1">
              Sector 62, Noida · PSARA & Labor Law Compliant
            </div>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 rounded-xl"
            >
              <Phone className="w-4 h-4 text-[#008C45]" />
              <span>Call Us: {COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={() => handleNavClick('quote')}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-white bg-[#FF7900] hover:bg-[#E06700] rounded-xl shadow-md"
            >
              <span>Request a Free Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
