import React, { useState } from 'react';
import { FileText, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Clock, Users, Building, MessageSquare } from 'lucide-react';
import { saveQuotation } from '../services/storage';
import { COMPANY_INFO } from '../data/mockData';

interface QuotePageProps {
  onNavigate: (page: string) => void;
  preselectedService?: string;
}

export const QuotePage: React.FC<QuotePageProps> = ({ onNavigate, preselectedService }) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    phone: '',
    email: '',
    companyAddress: '',
    siteLocation: '',
    serviceType: (preselectedService?.toLowerCase().includes('secur') 
      ? 'Security Guards' 
      : preselectedService?.toLowerCase().includes('house') 
      ? 'Housekeeping' 
      : 'Complete Facility Support') as any,
    numberOfPersonnel: 8,
    workingHours: '12 Hours (Day/Night)' as any,
    weeklyWorkingDays: '6 Days/Week' as any,
    expectedStartDate: '2026-12-01',
    contractDuration: '12 Months' as any,
    additionalRequirements: ''
  });

  React.useEffect(() => {
    if (preselectedService) {
      const mapped = preselectedService.toLowerCase().includes('secur')
        ? 'Security Guards'
        : preselectedService.toLowerCase().includes('house')
        ? 'Housekeeping'
        : 'Complete Facility Support';
      setFormData(prev => ({ ...prev, serviceType: mapped as any }));
    }
  }, [preselectedService]);

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.organizationName.trim() || !formData.contactPerson.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.siteLocation.trim()) {
      setErrorMsg('Please fill all mandatory fields: Organization Name, Contact Person, Phone, Email, and Site Location.');
      return;
    }

    if (formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      try {
        const result = saveQuotation({
          organizationName: formData.organizationName.trim(),
          contactPerson: formData.contactPerson.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          companyAddress: formData.companyAddress.trim() || 'Provided upon site survey',
          siteLocation: formData.siteLocation.trim(),
          serviceType: formData.serviceType,
          numberOfPersonnel: Number(formData.numberOfPersonnel) || 1,
          workingHours: formData.workingHours,
          weeklyWorkingDays: formData.weeklyWorkingDays,
          expectedStartDate: formData.expectedStartDate,
          contractDuration: formData.contractDuration,
          additionalRequirements: formData.additionalRequirements.trim() || undefined
        });

        setSubmittedId(result.id);
        setIsSubmitting(false);
      } catch (err) {
        console.error(err);
        setErrorMsg('Unable to save quotation request. Please reach our Sector 62 desk directly.');
        setIsSubmitting(false);
      }
    }, 400);
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F5F7F6] pt-12 pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#FF7900]">
              <FileText className="w-3.5 h-3.5 text-[#FF7900]" />
              <span>Contractual Service Estimation</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Request a <span className="text-[#006B35]">Custom</span> <span className="text-[#FF7900]">Quote</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Tell us about your facility size, personnel strength, shift requirements, and site location. Our operations executive will formulate a transparent rate proposal tailored to your SLA.
            </p>
          </div>
        </div>
      </section>

      {/* Main Quote Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md">
          
          {submittedId ? (
            /* Successful Submission Confirmation */
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#006B35] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                  Quotation Request Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your customized service enquiry has been assigned to our facility planning team at Sector 62, Noida.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto">
                <span className="text-xs text-slate-500 font-medium block">Unique Quotation Reference ID:</span>
                <span className="font-mono text-xl font-bold text-[#006B35]">{submittedId}</span>
              </div>

              <div className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-amber-900">
                <span className="font-bold">Important Notice:</span> Formal pricing and manpower availability are confirmed after our site assessment and verification of statutory parameters. An executive will call you at <span className="font-semibold">{formData.phone}</span> within 2 to 4 business hours.
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedId(null);
                    setFormData({
                      organizationName: '',
                      contactPerson: '',
                      phone: '',
                      email: '',
                      companyAddress: '',
                      siteLocation: '',
                      serviceType: 'Complete Facility Support',
                      numberOfPersonnel: 8,
                      workingHours: '12 Hours (Day/Night)',
                      weeklyWorkingDays: '6 Days/Week',
                      expectedStartDate: '2026-12-01',
                      contractDuration: '12 Months',
                      additionalRequirements: ''
                    });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Submit Another Quote Request
                </button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Himanshu%20Enterprises,%20I%20have%20submitted%20Quotation%20Request%20ID:%20${submittedId}%20for%20${encodeURIComponent(formData.organizationName)}.%20Please%20connect.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#008C45] hover:bg-[#006B35] text-white text-xs font-bold transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Instantly via WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            /* Multi-Section Form */
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Form Header */}
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
                  Multi-Section Enquiry
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
                  Contractual Quotation Proposal Form
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Complete the details below to receive a formal commercial breakdown.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Section 1: Client & Organization Details */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider text-[#006B35]">
                  01. Client & Organization Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Organization / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organizationName}
                      onChange={e => setFormData({ ...formData, organizationName: e.target.value })}
                      placeholder="e.g. Candor Software Parks"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Person (Name & Designation) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="e.g. Rajesh Khurana (Admin Head)"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9812345678"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rajesh@candorparks.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Site / Facility Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.siteLocation}
                      onChange={e => setFormData({ ...formData, siteLocation: e.target.value })}
                      placeholder="e.g. Sector 62, Candor TechSpace, Noida"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company Registered Address
                    </label>
                    <input
                      type="text"
                      value={formData.companyAddress}
                      onChange={e => setFormData({ ...formData, companyAddress: e.target.value })}
                      placeholder="e.g. Candor Tower, Sector 62, Noida"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Deployment & Staffing Parameters */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider text-[#FF7900]">
                  02. Service & Staffing Parameters
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Required Primary Service *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={e => setFormData({ ...formData, serviceType: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35] bg-white"
                    >
                      <option value="Housekeeping">Housekeeping & Cleaning Services</option>
                      <option value="Security Guards">Security Guards (Static & Patrolling)</option>
                      <option value="Bouncers">Bouncers & Event Marshals</option>
                      <option value="Armed Security">Armed Security / Licensed Gunman</option>
                      <option value="Complete Facility Support">Complete Facility Support (Housekeeping + Security)</option>
                      <option value="Other">Other Specialized Manpower</option>
                    </select>
                  </div>

                  {/* Estimated Personnel */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Estimated Personnel Count
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={500}
                      value={formData.numberOfPersonnel}
                      onChange={e => setFormData({ ...formData, numberOfPersonnel: parseInt(e.target.value) || 1 })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                    />
                  </div>

                  {/* Working Hours / Shift */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Working Hours / Shift Rota
                    </label>
                    <select
                      value={formData.workingHours}
                      onChange={e => setFormData({ ...formData, workingHours: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35] bg-white"
                    >
                      <option value="8 Hours (Single Shift)">8 Hours (Single General Shift)</option>
                      <option value="12 Hours (Day/Night)">12 Hours (Day / Night Shifts)</option>
                      <option value="24 Hours (Rotational 3 Shifts)">24 Hours (3 Rotational 8-Hour Shifts)</option>
                    </select>
                  </div>

                  {/* Weekly Working Days */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Weekly Working Days
                    </label>
                    <select
                      value={formData.weeklyWorkingDays}
                      onChange={e => setFormData({ ...formData, weeklyWorkingDays: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35] bg-white"
                    >
                      <option value="6 Days/Week">6 Days / Week (Standard)</option>
                      <option value="7 Days/Week (24x7)">7 Days / Week (Continuous 24x7 with reliever)</option>
                    </select>
                  </div>

                  {/* Expected Start Date */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Expected Starting Date
                    </label>
                    <input
                      type="date"
                      value={formData.expectedStartDate}
                      onChange={e => setFormData({ ...formData, expectedStartDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35] bg-white"
                    />
                  </div>

                  {/* Contract Duration */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contract Duration
                    </label>
                    <select
                      value={formData.contractDuration}
                      onChange={e => setFormData({ ...formData, contractDuration: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35] bg-white"
                    >
                      <option value="Trial (3 Months)">Trial Period (3 Months)</option>
                      <option value="6 Months">6 Months</option>
                      <option value="12 Months">12 Months (Annual Standard)</option>
                      <option value="Multi-Year Long Term">Multi-Year Long Term Partnership</option>
                    </select>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Equipment or Service Specifications
                  </label>
                  <textarea
                    rows={3}
                    value={formData.additionalRequirements}
                    onChange={e => setFormData({ ...formData, additionalRequirements: e.target.value })}
                    placeholder="e.g. Require auto-scrubber machine on site, armed gunman for cash vault, biometric visitor logging..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-slate-500 max-w-sm">
                  Submissions are logged securely in our enterprise CRM. A unique enquiry ID will be generated upon submission.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FF7900] hover:bg-[#E06700] disabled:bg-slate-400 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>{isSubmitting ? 'Generating Quotation...' : 'Submit Quotation Request'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
};
