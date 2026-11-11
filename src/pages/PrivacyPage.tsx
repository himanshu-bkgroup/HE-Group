import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface PrivacyPageProps {
  onNavigate: (page: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F5F7F6] pt-12 pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#006B35] mb-4 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Homepage</span>
          </button>
          <div className="max-w-3xl space-y-3">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-600">
              Last Updated: November 2026 · Himanshu Enterprises, Sector 62, Noida
            </p>
          </div>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          <div className="space-y-2">
            <h2 className="font-display font-bold text-lg text-slate-900">
              1. Overview & Commitment to Data Privacy
            </h2>
            <p>
              Himanshu Enterprises ("we", "our", or "the Company"), situated at A-13, Graphix Tower 2, Sector 62, Noida, Uttar Pradesh – 201301, operates this corporate website and associated facility manpower management systems. We respect the confidentiality and privacy rights of corporate clients, prospective enterprise partners, and job applicants.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-bold text-lg text-slate-900">
              2. Information We Collect
            </h2>
            <p>
              We collect information strictly necessary to process commercial service enquiries, execute facility surveys, and manage recruitment applications:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Corporate Inquiries:</strong> Organization name, contact person name, official phone number, email address, facility site location, and specific manpower requirements.</li>
              <li><strong>Job Applicants:</strong> Full name, mobile number, current address, preferred job role, past experience details, and reference documentation (e.g. Aadhaar details, police verification records).</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-bold text-lg text-slate-900">
              3. Protection of Applicant & Client Data
            </h2>
            <p>
              <strong>Strict Non-Publication Policy:</strong> In compliance with prompt guidelines and Indian data protection practices, Himanshu Enterprises never publishes, sells, trades, or discloses personal candidate information or client contract terms to third-party commercial advertisers. Candidate records are accessible solely to authorized recruitment and HR personnel for the express purpose of background screening and employment placement.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-bold text-lg text-slate-900">
              4. Statutory Police Verification & Compliance
            </h2>
            <p>
              Under PSARA (Private Security Agencies Regulation Act) and labor regulations, candidate details may be submitted to competent police authorities for mandatory character verification and statutory licensing records before static site posting.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-bold text-lg text-slate-900">
              5. Contact Us Regarding Your Data
            </h2>
            <p>
              For any questions regarding personal data access, rectification, or deletion, please contact our Data Governance Officer at:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <p className="font-semibold text-slate-900">Himanshu Enterprises</p>
              <p>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#006B35] underline">{COMPANY_INFO.email}</a></p>
              <p>Phone: {COMPANY_INFO.phone}</p>
              <p>Address: {COMPANY_INFO.headOffice}</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
