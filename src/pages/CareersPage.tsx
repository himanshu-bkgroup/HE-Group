import React, { useState } from 'react';
import { Briefcase, CheckCircle2, ShieldCheck, ArrowRight, Upload, Phone, AlertCircle, FileCheck } from 'lucide-react';
import { saveCareerApplication } from '../services/storage';
import { COMPANY_INFO } from '../data/mockData';

interface CareersPageProps {
  onNavigate: (page: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    currentAddress: '',
    preferredPosition: 'Security Guard',
    experience: '1-2 Years',
    preferredLocation: 'Noida Sector 62 / 63',
    documentNote: '',
    additionalInfo: '',
    consent: false
  });

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobPositions = [
    { title: 'Security Guard', count: '15+ Vacancies', desc: 'Day & night shifts at corporate towers and IT parks in Sector 62, Noida. Smart uniform provided.' },
    { title: 'Housekeeping Staff', count: '20+ Vacancies', desc: 'Pantry, desk dusting, and floor scrubber operations for commercial offices and hospitals.' },
    { title: 'Housekeeping Supervisor', count: '4 Vacancies', desc: 'Inspects washrooms, manages chemical dilution, conducts daily attendance audits.' },
    { title: 'Licensed Armed Security Personnel', count: '3 Vacancies', desc: 'Must possess valid All-UP/All-India Gun License and clear police record. Ex-Servicemen preferred.' },
    { title: 'Bouncers / Event Marshals', count: '8 Vacancies', desc: 'Corporate exhibitions, high-profile summits, and VIP escort duties across NCR.' },
    { title: 'Site Supervisor / Field Officer', count: '5 Vacancies', desc: 'Conducts day/night roster checks, client coordinate visits, and surprise inspections.' },
    { title: 'Area Manager', count: '2 Vacancies', desc: 'Senior facility operations manager supervising multiple client sites and billing SLAs.' },
    { title: 'Operations & HR Staff', count: '2 Vacancies', desc: 'Recruitment coordination, attendance processing, and customer support at Graphix Tower office.' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullName.trim() || !formData.mobile.trim() || !formData.currentAddress.trim()) {
      setErrorMsg('Please enter your Full Name, Mobile Number, and Current Address.');
      return;
    }

    if (formData.mobile.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!formData.consent) {
      setErrorMsg('Please agree to the personal data consent checkbox to proceed.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      try {
        const result = saveCareerApplication({
          fullName: formData.fullName.trim(),
          mobile: formData.mobile.trim(),
          email: formData.email.trim() || undefined,
          currentAddress: formData.currentAddress.trim(),
          preferredPosition: formData.preferredPosition,
          experience: formData.experience,
          preferredLocation: formData.preferredLocation,
          documentNote: formData.documentNote.trim() || 'Aadhaar / ID verification submitted',
          additionalInfo: formData.additionalInfo.trim() || undefined
        });

        setSubmittedId(result.id);
        setIsSubmitting(false);
      } catch (err) {
        console.error(err);
        setErrorMsg('An error occurred while saving your application. Please call our HR team.');
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#006B35]">
              <Briefcase className="w-3.5 h-3.5 text-[#008C45]" />
              <span>Career Opportunities at Himanshu Enterprises</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Build Your Future With <span className="text-[#006B35]">Himanshu</span> <span className="text-[#FF7900]">Enterprises</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Join a disciplined, ethical, and respected organization providing on-time salary, statutory benefits (EPF / ESIC), professional uniform, and continuous career growth in Noida and NCR.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
            Immediate Openings
          </span>
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mt-1">
            Current Vacancies in Noida & NCR
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Select a position below or fill the application form directly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobPositions.map((job, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#008C45] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-[#006B35]">
                    {job.count}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-slate-900">
                  {job.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {job.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, preferredPosition: job.title }));
                    const formElement = document.getElementById('career-application-form');
                    formElement?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-[#006B35] hover:text-[#004D25] flex items-center gap-1 cursor-pointer"
                >
                  <span>Apply for this Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Section */}
      <section id="career-application-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md">
          
          {submittedId ? (
            /* Success confirmation screen */
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#006B35] flex items-center justify-center mx-auto">
                <FileCheck className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                  Application Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for applying to Himanshu Enterprises. Your application has been logged securely in our recruitment database.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto">
                <span className="text-xs text-slate-500 font-medium block">Your Application Reference ID:</span>
                <span className="font-mono text-lg font-bold text-[#006B35]">{submittedId}</span>
              </div>

              <div className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                Our HR recruitment department will review your details and contact you via phone (<span className="font-medium text-slate-700">{formData.mobile}</span>) for interview scheduling at our Sector 62 office.
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedId(null);
                    setFormData({
                      fullName: '',
                      mobile: '',
                      email: '',
                      currentAddress: '',
                      preferredPosition: 'Security Guard',
                      experience: '1-2 Years',
                      preferredLocation: 'Noida Sector 62 / 63',
                      documentNote: '',
                      additionalInfo: '',
                      consent: false
                    });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Submit Another Application
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="px-5 py-2.5 rounded-xl bg-[#006B35] hover:bg-[#004D25] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          ) : (
            /* Application Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
                  Online Recruitment Portal
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
                  Candidate Application Form
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Please fill your correct information. Background verification and police records are mandatory for all hired candidates.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                  />
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ramesh@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                  />
                </div>

                {/* Preferred Position */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Job Position *
                  </label>
                  <select
                    value={formData.preferredPosition}
                    onChange={e => setFormData({ ...formData, preferredPosition: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35] bg-white"
                  >
                    <option value="Security Guard">Security Guard</option>
                    <option value="Housekeeping Staff">Housekeeping Staff</option>
                    <option value="Housekeeping Supervisor">Housekeeping Supervisor</option>
                    <option value="Bouncer">Bouncer</option>
                    <option value="Licensed Armed Security Personnel">Licensed Armed Security Personnel</option>
                    <option value="Site Supervisor">Site Supervisor</option>
                    <option value="Area Manager">Area Manager</option>
                    <option value="Operations Staff">Operations Staff</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Total Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={e => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35] bg-white"
                  >
                    <option value="Fresher (Willing to learn)">Fresher (Willing to learn)</option>
                    <option value="1-2 Years">1-2 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                    <option value="Ex-Serviceman / Defense">Ex-Serviceman / Defense</option>
                  </select>
                </div>

                {/* Preferred Location */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Work Location
                  </label>
                  <select
                    value={formData.preferredLocation}
                    onChange={e => setFormData({ ...formData, preferredLocation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35] bg-white"
                  >
                    <option value="Noida Sector 62 / 63">Noida Sector 62 / 63</option>
                    <option value="Noida Expressway / Sector 137 / 142">Noida Expressway / Sector 137 / 142</option>
                    <option value="Greater Noida (Ecotech / Knowledge Park)">Greater Noida (Ecotech / Knowledge Park)</option>
                    <option value="Ghaziabad (Sahibabad / Indirapuram)">Ghaziabad (Sahibabad / Indirapuram)</option>
                    <option value="Delhi NCR Any">Delhi NCR (Any Location)</option>
                  </select>
                </div>

              </div>

              {/* Current Address */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current Residential Address & City *
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.currentAddress}
                  onChange={e => setFormData({ ...formData, currentAddress: e.target.value })}
                  placeholder="Street address, Village/Colony, City, Pin Code"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                />
              </div>

              {/* Documents & Resume Note */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ID Documents / Resume Details
                </label>
                <input
                  type="text"
                  value={formData.documentNote}
                  onChange={e => setFormData({ ...formData, documentNote: e.target.value })}
                  placeholder="e.g. Aadhaar Card, PAN Card, Gun License No. (if armed), or Resume uploaded at interview"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Physical copies of documents are verified in person at our Graphix Tower 2 office during the interview.
                </p>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Information (Height, past security agency, certifications, shift preference)
                </label>
                <textarea
                  rows={2}
                  value={formData.additionalInfo}
                  onChange={e => setFormData({ ...formData, additionalInfo: e.target.value })}
                  placeholder="Any details you would like our HR department to know..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-[#006B35] focus:ring-[#006B35]"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I consent to submitting my personal details to Himanshu Enterprises for recruitment, police background verification, and employment communication. I understand that applicants' information is kept strictly private and never publicly published.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#006B35] hover:bg-[#004D25] disabled:bg-slate-400 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* Recruitment Office Walk-In Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1">
          <p className="font-bold text-slate-900">Direct Recruitment Desk & Walk-In Address:</p>
          <p>
            Himanshu Enterprises, A-13, Graphix Tower 2, Near Electronic City Metro Station, Sector 62, Noida, Gautam Buddha Nagar, Uttar Pradesh – 201301.
          </p>
          <p className="pt-1">
            <strong>Recruitment Helpline:</strong> <a href="tel:+917217876220" className="text-[#006B35] font-semibold underline">+91 721-787-6220</a> (Mon – Sat, 10:00 AM – 6:00 PM)
          </p>
        </div>
      </section>

    </div>
  );
};
