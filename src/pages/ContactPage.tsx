import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Clock, Send, CheckCircle2, AlertCircle, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { saveEnquiry } from '../services/storage';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobile: '',
    email: '',
    requiredService: 'Housekeeping',
    siteLocation: '',
    estimatedWorkforce: '5-10 personnel',
    contractDuration: '12 Months',
    message: ''
  });

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.mobile.trim() || !formData.siteLocation.trim()) {
      setErrorMsg('Please complete all required fields (Full Name, Company Name, Mobile, and Site Location).');
      return;
    }

    if (formData.mobile.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      try {
        const result = saveEnquiry({
          fullName: formData.fullName.trim(),
          companyName: formData.companyName.trim(),
          mobile: formData.mobile.trim(),
          email: formData.email.trim(),
          requiredService: formData.requiredService,
          siteLocation: formData.siteLocation.trim(),
          estimatedWorkforce: formData.estimatedWorkforce,
          contractDuration: formData.contractDuration,
          message: formData.message.trim() || 'General enquiry from website contact form'
        });

        setSubmittedId(result.id);
        setIsSubmitting(false);
      } catch (err) {
        console.error(err);
        setErrorMsg('An error occurred. Please try calling us directly.');
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
              <MapPin className="w-3.5 h-3.5 text-[#008C45]" />
              <span>Noida Corporate Headquarters</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Contact <span className="text-[#006B35]">Himanshu</span> <span className="text-[#FF7900]">Enterprises</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Connect with our facility and security operations command in Sector 62, Noida. We respond to corporate quotation and site audit inquiries within 2 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info + Enquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="font-display font-bold text-xl text-slate-900">
                Corporate Headquarters
              </h2>

              <div className="space-y-4 text-xs">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#006B35] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">Office Address:</strong>
                    <p className="text-slate-600 leading-relaxed mt-0.5">
                      {COMPANY_INFO.headOffice}
                    </p>
                    <span className="text-[11px] text-[#008C45] font-semibold mt-1 block">
                      Landmark: Next to Electronic City Metro Station (Blue Line)
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#FF7900] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">General Contact:</strong>
                    <a
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="text-slate-700 hover:text-[#006B35] font-semibold tabular-nums block mt-0.5 text-sm"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-[11px] text-slate-400">Available 24x7 for operational escalations</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#008C45] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">Business Email:</strong>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-slate-700 hover:text-[#006B35] font-medium block mt-0.5"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs">Operations Timing:</strong>
                    <p className="text-slate-600 mt-0.5">{COMPANY_INFO.operatingHours}</p>
                    <span className="text-[11px] text-slate-400">Office Administration: 9:30 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Himanshu%20Enterprises,%20I%20would%20like%20to%20discuss%20contractual%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#008C45] hover:bg-[#006B35] text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Us on WhatsApp (+91 7217876220)</span>
                </a>
              </div>

            </div>

            {/* Interactive Embedded Google Map Preview */}
            <div className="bg-white rounded-3xl p-4 border border-slate-200/90 shadow-sm overflow-hidden space-y-3">
              <div className="flex items-center justify-between px-2 pt-1">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#008C45]" />
                  <span>Graphix Tower 2, Sector 62 Location</span>
                </span>
                <span className="text-[11px] text-slate-400">Noida Electronic City</span>
              </div>
              
              <div className="w-full h-52 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative">
                <iframe
                  title="Himanshu Enterprises Office Location at Graphix Tower 2 Noida"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.502931210874!2d77.36224167528825!3d28.62891397566635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55106518cb9%3A0xcda6651859bf5444!2sGraphix%20Tower%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-[11px] text-slate-500 text-center px-2 pb-1">
                A-13, Graphix Tower 2, Sector 62, Noida (2 mins walking from Noida Electronic City Metro Station).
              </p>
            </div>

          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md">
              
              {submittedId ? (
                /* Success message */
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#006B35] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                      Enquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting Himanshu Enterprises. Your inquiry has been forwarded to our Sector 62 operations desk.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto">
                    <span className="text-xs text-slate-500 font-medium block">Your Enquiry Reference ID:</span>
                    <span className="font-mono text-lg font-bold text-[#006B35]">{submittedId}</span>
                  </div>

                  <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                    Our team will review your requirement for <strong className="text-slate-800">{formData.requiredService}</strong> and get back to you at <span className="font-medium text-slate-800">{formData.mobile}</span>.
                  </p>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedId(null);
                        setFormData({
                          fullName: '',
                          companyName: '',
                          mobile: '',
                          email: '',
                          requiredService: 'Housekeeping',
                          siteLocation: '',
                          estimatedWorkforce: '5-10 personnel',
                          contractDuration: '12 Months',
                          message: ''
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Himanshu%20Enterprises,%20I%20have%20submitted%20Enquiry%20ID:%20${submittedId}.%20Please%20review.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-[#008C45] hover:bg-[#006B35] text-white text-xs font-bold transition-colors"
                    >
                      Confirm via WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#006B35]">
                      Service Consultation
                    </span>
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
                      Send a Message to Our Team
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Fill the form below and our operations manager will contact you with service details and rate cards.
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
                        placeholder="e.g. Vikram Mehra"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company / Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Tech Solutions"
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
                        placeholder="e.g. 9811223344"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. vikram@acmetech.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                      />
                    </div>

                    {/* Required Service Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Required Service *
                      </label>
                      <select
                        value={formData.requiredService}
                        onChange={e => setFormData({ ...formData, requiredService: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35] bg-white"
                      >
                        <option value="Housekeeping">Housekeeping Services</option>
                        <option value="Security Guards">Security Guards</option>
                        <option value="Bouncers">Bouncers & Event Security</option>
                        <option value="Armed Security / Licensed Gunman">Armed Security / Licensed Gunman</option>
                        <option value="Complete Facility Support">Complete Facility Support (Both)</option>
                        <option value="Other">Other Manpower Requirements</option>
                      </select>
                    </div>

                    {/* Site Location */}
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

                    {/* Estimated Workforce */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Estimated Workforce Required
                      </label>
                      <select
                        value={formData.estimatedWorkforce}
                        onChange={e => setFormData({ ...formData, estimatedWorkforce: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35] bg-white"
                      >
                        <option value="1-4 personnel">1 - 4 personnel</option>
                        <option value="5-10 personnel">5 - 10 personnel</option>
                        <option value="11-25 personnel">11 - 25 personnel</option>
                        <option value="26-50 personnel">26 - 50 personnel</option>
                        <option value="50+ personnel">50+ personnel (Large facility)</option>
                      </select>
                    </div>

                    {/* Contract Duration */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Expected Contract Duration
                      </label>
                      <select
                        value={formData.contractDuration}
                        onChange={e => setFormData({ ...formData, contractDuration: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35] bg-white"
                      >
                        <option value="Trial (3 Months)">Trial (3 Months)</option>
                        <option value="6 Months">6 Months</option>
                        <option value="12 Months (Annual)">12 Months (Annual Contract)</option>
                        <option value="Multi-Year Long Term">Multi-Year Long Term</option>
                        <option value="Event Based (1-7 Days)">Event Based (1-7 Days)</option>
                      </select>
                    </div>

                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Brief Description of Requirements & Premises
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify building type, square footage, shifts, or any specific instructions..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#006B35] hover:bg-[#004D25] disabled:bg-slate-400 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Submitting Enquiry...' : 'Submit Contact Enquiry'}</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
