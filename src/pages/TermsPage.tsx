import React from 'react';
import { FileText, ArrowLeft, ShieldCheck, Scale, AlertTriangle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface TermsPageProps {
  onNavigate: (page: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
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
              Terms & Conditions
            </h1>
            <p className="text-sm text-slate-600">
              Contractual Operating Standards & Statutory Terms · Himanshu Enterprises
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          <div className="space-y-2">
            <h2 className="font-display font-bold text-lg text-slate-900">
              1. Acceptance of Contractual Terms
            </h2>
            <p>
              By engaging Himanshu Enterprises for housekeeping, security guard deployment, bouncer protection, or facility manpower support, the client agrees to the operating guidelines, service level agreements (SLAs), and statutory compliance clauses set forth in formal written master service contracts.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-bold text-lg text-slate-900">
              2. PSARA & Statutory Licensing Compliance
            </h2>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1 text-xs">
              <strong className="block font-bold">Mandatory Statutory Statement:</strong>
              <p>
                All security personnel and security guarding services are deployed in strict compliance with the Private Security Agencies (Regulation) Act (PSARA) and relevant state notifications. Armed personnel are strictly provided subject to valid individual firearm licenses issued by competent licensing authorities. Himanshu Enterprises does not supply or represent unlicensed armed guards.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-bold text-lg text-slate-900">
              3. Labor Law Compliance & Minimum Wages
            </h2>
            <p>
              Himanshu Enterprises is strictly committed to ethical labor standards. All contractual employees receive wages in compliance with minimum wage orders issued by the Government of Uttar Pradesh / Central Government. The company ensures monthly deposit of statutory contributions including Employee Provident Fund (EPF), Employee State Insurance (ESIC), and bonus compliance.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-bold text-lg text-slate-900">
              4. Supervision & Absence Replacement
            </h2>
            <p>
              The company maintains dedicated supervisor hierarchies to conduct daily roll calls and surprise night checks. In the event of scheduled leave or unanticipated absence of assigned personnel, Himanshu Enterprises commits to deploying qualified replacement staff within agreed SLA response times.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-bold text-lg text-slate-900">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              All service contracts and legal disputes are governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Gautam Buddha Nagar (Noida), Uttar Pradesh.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
