import React, { useState, useEffect } from 'react';
import { 
  Lock, LogOut, Download, Search, Filter, CheckCircle2, 
  Clock, AlertCircle, FileText, Users, Briefcase, Phone, 
  Mail, MapPin, ChevronRight, MessageSquare, Plus, RefreshCw, 
  ShieldCheck, Eye, Sparkles, Building2, Check, X
} from 'lucide-react';
import { QuotationRequest, ContactEnquiry, CareerApplication, EnquiryStatus, JobStatus } from '../types';
import { 
  getQuotations, updateQuotationStatus, addQuotationNote, exportQuotationsCSV,
  getEnquiries, updateEnquiryStatus, addEnquiryNote, exportEnquiriesCSV,
  getCareers, updateCareerStatus, addCareerNote, exportCareersCSV,
  getStats, isAdminAuthenticated, adminLogin, adminLogout
} from '../services/storage';
import { COMPANY_INFO, LEADERSHIP } from '../data/mockData';

interface AdminDashboardPageProps {
  onNavigate: (page: string) => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ onNavigate }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<'quotes' | 'enquiries' | 'careers' | 'content' | 'settings'>('quotes');

  // Data states
  const [quotations, setQuotations] = useState<QuotationRequest[]>([]);
  const [enquiries, setEnquiries] = useState<ContactEnquiry[]>([]);
  const [careers, setCareers] = useState<CareerApplication[]>([]);
  const [stats, setStats] = useState(getStats());

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // Selected item modal
  const [selectedQuote, setSelectedQuote] = useState<QuotationRequest | null>(null);
  const [selectedEnquiry, setSelectedEnquiry] = useState<ContactEnquiry | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<CareerApplication | null>(null);

  // New Note state
  const [newNote, setNewNote] = useState('');

  // Check auth on mount
  useEffect(() => {
    setIsAuthenticated(isAdminAuthenticated());
    refreshData();
  }, []);

  const refreshData = () => {
    setQuotations(getQuotations());
    setEnquiries(getEnquiries());
    setCareers(getCareers());
    setStats(getStats());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(passcode)) {
      setIsAuthenticated(true);
      setLoginError(false);
      refreshData();
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    adminLogout();
    setIsAuthenticated(false);
    setPasscode('');
  };

  // Status Change Handlers
  const handleQuoteStatusChange = (id: string, newStatus: EnquiryStatus) => {
    const updated = updateQuotationStatus(id, newStatus);
    setQuotations(updated);
    if (selectedQuote && selectedQuote.id === id) {
      setSelectedQuote({ ...selectedQuote, status: newStatus });
    }
    setStats(getStats());
  };

  const handleEnquiryStatusChange = (id: string, newStatus: EnquiryStatus) => {
    const updated = updateEnquiryStatus(id, newStatus);
    setEnquiries(updated);
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
    }
    setStats(getStats());
  };

  const handleCareerStatusChange = (id: string, newStatus: JobStatus) => {
    const updated = updateCareerStatus(id, newStatus);
    setCareers(updated);
    if (selectedCareer && selectedCareer.id === id) {
      setSelectedCareer({ ...selectedCareer, status: newStatus });
    }
    setStats(getStats());
  };

  // Add Note Handlers
  const handleAddQuoteNote = () => {
    if (!selectedQuote || !newNote.trim()) return;
    const updated = addQuotationNote(selectedQuote.id, newNote.trim());
    setQuotations(updated);
    const refreshed = updated.find(q => q.id === selectedQuote.id);
    if (refreshed) setSelectedQuote(refreshed);
    setNewNote('');
  };

  const handleAddEnquiryNote = () => {
    if (!selectedEnquiry || !newNote.trim()) return;
    const updated = addEnquiryNote(selectedEnquiry.id, newNote.trim());
    setEnquiries(updated);
    const refreshed = updated.find(e => e.id === selectedEnquiry.id);
    if (refreshed) setSelectedEnquiry(refreshed);
    setNewNote('');
  };

  const handleAddCareerNote = () => {
    if (!selectedCareer || !newNote.trim()) return;
    const updated = addCareerNote(selectedCareer.id, newNote.trim());
    setCareers(updated);
    const refreshed = updated.find(c => c.id === selectedCareer.id);
    if (refreshed) setSelectedCareer(refreshed);
    setNewNote('');
  };

  // Filtered lists
  const filteredQuotes = quotations.filter(q => {
    const matchSearch = q.organizationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        q.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        q.phone.includes(searchQuery) ||
                        q.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = statusFilter === 'All' || q.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const filteredEnquiries = enquiries.filter(e => {
    const matchSearch = e.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        e.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        e.mobile.includes(searchQuery) ||
                        e.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = statusFilter === 'All' || e.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const filteredCareers = careers.filter(c => {
    const matchSearch = c.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        c.preferredPosition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        c.mobile.includes(searchQuery) ||
                        c.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  // Login Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-[#E8F5ED] text-[#006B35] flex items-center justify-center mx-auto mb-2 border border-[#008C45]/20">
              <Lock className="w-7 h-7 text-[#008C45]" />
            </div>
            <h1 className="font-display font-extrabold text-2xl text-slate-900">
              Authorized Admin Portal
            </h1>
            <p className="text-xs text-slate-500">
              Himanshu Enterprises · Internal Operations & Enquiries Console
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Admin Access Passcode
              </label>
              <input
                type="password"
                required
                value={passcode}
                onChange={e => setPasscode(e.target.value)}
                placeholder="Enter authorized passcode (e.g. admin2026)"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#006B35] focus:ring-1 focus:ring-[#006B35]"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Default authorization code: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700 font-mono">admin2026</code>
              </p>
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>Incorrect passcode. Please check authorization credentials.</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#006B35] hover:bg-[#004D25] text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
            >
              Sign In to Management Dashboard
            </button>
          </form>

          <div className="pt-2 text-center">
            <button
              onClick={() => onNavigate('home')}
              className="text-xs text-slate-500 hover:text-slate-800 underline"
            >
              Return to Website Public View
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* Top Admin Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#006B35] text-white flex items-center justify-center font-display font-black text-lg">
            HE
          </div>
          <div>
            <h1 className="font-display font-bold text-xl text-slate-900 leading-tight">
              Himanshu Enterprises — Admin Operations Console
            </h1>
            <p className="text-xs text-slate-500">
              Logged in as Authorized Administrator · Head Office Sector 62, Noida
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={refreshData}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/70 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            title="Refresh database records"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Sync</span>
          </button>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
          <span className="text-xs font-medium text-slate-500">Quotation Requests</span>
          <p className="font-display font-black text-2xl text-slate-900 tabular-nums">
            {stats.totalQuotes}
          </p>
          <span className="text-[11px] text-[#008C45] font-semibold">{stats.activeQuotes} active pipeline</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
          <span className="text-xs font-medium text-slate-500">Contact Inquiries</span>
          <p className="font-display font-black text-2xl text-slate-900 tabular-nums">
            {stats.totalEnquiries}
          </p>
          <span className="text-[11px] text-slate-400">Website lead forms</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
          <span className="text-xs font-medium text-slate-500">Job Applicants</span>
          <p className="font-display font-black text-2xl text-slate-900 tabular-nums">
            {stats.totalCareers}
          </p>
          <span className="text-[11px] text-[#FF7900] font-semibold">Security & Housekeeping</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
          <span className="text-xs font-medium text-slate-500">Personnel Requested</span>
          <p className="font-display font-black text-2xl text-[#006B35] tabular-nums">
            {stats.totalPersonnelRequested}
          </p>
          <span className="text-[11px] text-slate-400">Across pending quotes</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-1 col-span-2 sm:col-span-1">
          <span className="text-xs font-medium text-slate-500">Converted Clients</span>
          <p className="font-display font-black text-2xl text-[#FF7900] tabular-nums">
            {stats.convertedQuotes}
          </p>
          <span className="text-[11px] text-emerald-600 font-semibold">Signed SLAs</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1">
        <button
          onClick={() => { setActiveTab('quotes'); setStatusFilter('All'); }}
          className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'quotes'
              ? 'bg-white text-[#006B35] border-t-2 border-[#006B35] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Quotation Requests ({quotations.length})
        </button>

        <button
          onClick={() => { setActiveTab('enquiries'); setStatusFilter('All'); }}
          className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'enquiries'
              ? 'bg-white text-[#006B35] border-t-2 border-[#006B35] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Contact Enquiries ({enquiries.length})
        </button>

        <button
          onClick={() => { setActiveTab('careers'); setStatusFilter('All'); }}
          className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'careers'
              ? 'bg-white text-[#006B35] border-t-2 border-[#006B35] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Recruitment & Careers ({careers.length})
        </button>

        <button
          onClick={() => setActiveTab('content')}
          className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'content'
              ? 'bg-white text-[#006B35] border-t-2 border-[#006B35] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Website & Leadership Manager
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'settings'
              ? 'bg-white text-[#006B35] border-t-2 border-[#006B35] shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Admin Security & Roles
        </button>
      </div>

      {/* ================= TAB 1: QUOTATION REQUESTS ================= */}
      {activeTab === 'quotes' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-6">
          {/* Controls Bar: Search, Status Filter, CSV Export */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search by company, person, phone, or ID..."
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#006B35]"
                />
              </div>

              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none"
              >
                <option value="All">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Quotation Sent">Quotation Sent</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Converted">Converted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <button
              onClick={() => exportQuotationsCSV(quotations)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-[#006B35] text-[#006B35] hover:text-white border border-emerald-200 text-xs font-bold transition-colors cursor-pointer shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Quotations to CSV</span>
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200">
                <tr>
                  <th className="py-3 px-3">Quotation ID</th>
                  <th className="py-3 px-3">Organization</th>
                  <th className="py-3 px-3">Contact</th>
                  <th className="py-3 px-3">Service</th>
                  <th className="py-3 px-3">Personnel</th>
                  <th className="py-3 px-3">Shifts & Days</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredQuotes.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-slate-400">
                      No quotation requests found matching the current criteria.
                    </td>
                  </tr>
                ) : (
                  filteredQuotes.map((q) => (
                    <tr key={q.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3 font-mono font-bold text-[#006B35]">
                        {q.id}
                      </td>
                      <td className="py-3 px-3">
                        <strong className="text-slate-900 block font-semibold">{q.organizationName}</strong>
                        <span className="text-slate-500 text-[11px]">{q.siteLocation}</span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="text-slate-800 block">{q.contactPerson}</span>
                        <a href={`tel:${q.phone}`} className="text-slate-500 hover:text-[#006B35] tabular-nums text-[11px]">
                          {q.phone}
                        </a>
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                          {q.serviceType}
                        </span>
                      </td>
                      <td className="py-3 px-3 font-semibold text-slate-900 tabular-nums">
                        {q.numberOfPersonnel} Staff
                      </td>
                      <td className="py-3 px-3 text-slate-600 text-[11px]">
                        <div>{q.workingHours}</div>
                        <div className="text-slate-400">{q.weeklyWorkingDays}</div>
                      </td>
                      <td className="py-3 px-3">
                        <select
                          value={q.status}
                          onChange={e => handleQuoteStatusChange(q.id, e.target.value as EnquiryStatus)}
                          className={`px-2 py-1 rounded text-[11px] font-bold border focus:outline-none ${
                            q.status === 'New' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                            q.status === 'Contacted' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                            q.status === 'Quotation Sent' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                            q.status === 'Converted' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                            'bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Quotation Sent">Quotation Sent</option>
                          <option value="Follow-up">Follow-up</option>
                          <option value="Converted">Converted</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => setSelectedQuote(q)}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold transition-colors cursor-pointer"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= TAB 2: CONTACT ENQUIRIES ================= */}
      {activeTab === 'enquiries' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search enquiries by name, company, mobile..."
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#006B35]"
                />
              </div>

              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none"
              >
                <option value="All">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Quotation Sent">Quotation Sent</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Converted">Converted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <button
              onClick={() => exportEnquiriesCSV(enquiries)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-[#006B35] text-[#006B35] hover:text-white border border-emerald-200 text-xs font-bold transition-colors cursor-pointer shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Enquiries to CSV</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200">
                <tr>
                  <th className="py-3 px-3">Enquiry ID</th>
                  <th className="py-3 px-3">Client / Company</th>
                  <th className="py-3 px-3">Contact Details</th>
                  <th className="py-3 px-3">Service</th>
                  <th className="py-3 px-3">Location & Size</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-slate-400">
                      No contact enquiries found matching current filters.
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((e) => (
                    <tr key={e.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3 font-mono font-bold text-[#006B35]">
                        {e.id}
                      </td>
                      <td className="py-3 px-3">
                        <strong className="text-slate-900 block font-semibold">{e.fullName}</strong>
                        <span className="text-slate-500 text-[11px]">{e.companyName}</span>
                      </td>
                      <td className="py-3 px-3">
                        <a href={`tel:${e.mobile}`} className="text-slate-800 hover:text-[#006B35] tabular-nums block font-medium">
                          {e.mobile}
                        </a>
                        <span className="text-slate-400 text-[11px]">{e.email}</span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                          {e.requiredService}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-slate-600 text-[11px]">
                        <div>{e.siteLocation}</div>
                        <div className="text-slate-400">{e.estimatedWorkforce}</div>
                      </td>
                      <td className="py-3 px-3">
                        <select
                          value={e.status}
                          onChange={ev => handleEnquiryStatusChange(e.id, ev.target.value as EnquiryStatus)}
                          className="px-2 py-1 rounded text-[11px] font-bold border focus:outline-none bg-white"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Quotation Sent">Quotation Sent</option>
                          <option value="Follow-up">Follow-up</option>
                          <option value="Converted">Converted</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => setSelectedEnquiry(e)}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold transition-colors cursor-pointer"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= TAB 3: CAREER APPLICATIONS ================= */}
      {activeTab === 'careers' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search applicants by name, role, mobile..."
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#006B35]"
                />
              </div>

              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none"
              >
                <option value="All">All Applicant Statuses</option>
                <option value="New">New</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Interviewed">Interviewed</option>
                <option value="Hired">Hired</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <button
              onClick={() => exportCareersCSV(careers)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 hover:bg-[#FF7900] text-[#FF7900] hover:text-white border border-orange-200 text-xs font-bold transition-colors cursor-pointer shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Applicants to CSV</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200">
                <tr>
                  <th className="py-3 px-3">Applicant ID</th>
                  <th className="py-3 px-3">Candidate Name</th>
                  <th className="py-3 px-3">Mobile & Location</th>
                  <th className="py-3 px-3">Role Applied</th>
                  <th className="py-3 px-3">Experience</th>
                  <th className="py-3 px-3">Recruitment Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCareers.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-slate-400">
                      No career applications found matching current criteria.
                    </td>
                  </tr>
                ) : (
                  filteredCareers.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3 font-mono font-bold text-[#FF7900]">
                        {c.id}
                      </td>
                      <td className="py-3 px-3">
                        <strong className="text-slate-900 block font-semibold">{c.fullName}</strong>
                        <span className="text-slate-400 text-[11px] truncate">{c.email || 'No email provided'}</span>
                      </td>
                      <td className="py-3 px-3">
                        <a href={`tel:${c.mobile}`} className="text-slate-800 hover:text-[#006B35] tabular-nums block font-medium">
                          {c.mobile}
                        </a>
                        <span className="text-slate-500 text-[11px]">{c.preferredLocation}</span>
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-[#006B35]">
                          {c.preferredPosition}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-slate-600 text-[11px]">
                        {c.experience}
                      </td>
                      <td className="py-3 px-3">
                        <select
                          value={c.status}
                          onChange={ev => handleCareerStatusChange(c.id, ev.target.value as JobStatus)}
                          className="px-2 py-1 rounded text-[11px] font-bold border focus:outline-none bg-white"
                        >
                          <option value="New">New</option>
                          <option value="Shortlisted">Shortlisted</option>
                          <option value="Interviewed">Interviewed</option>
                          <option value="Hired">Hired</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => setSelectedCareer(c)}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold transition-colors cursor-pointer"
                        >
                          Review Dossier
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= TAB 4: WEBSITE & CONTENT MANAGEMENT ================= */}
      {activeTab === 'content' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-8">
          <div>
            <h2 className="font-display font-bold text-lg text-slate-900">
              Website Content & Master Information
            </h2>
            <p className="text-xs text-slate-500">
              Synchronized master corporate credentials displayed across the public portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-[#F5F7F6] border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#006B35]" />
                <span>Head Office & Contact Details</span>
              </h3>
              <p><strong>Entity Name:</strong> {COMPANY_INFO.name}</p>
              <p><strong>Tagline:</strong> "{COMPANY_INFO.tagline}"</p>
              <p><strong>Head Office:</strong> {COMPANY_INFO.headOffice}</p>
              <p><strong>Primary Phone:</strong> {COMPANY_INFO.phone}</p>
              <p><strong>Email:</strong> {COMPANY_INFO.email}</p>
              <p><strong>WhatsApp Hotline:</strong> +91 {COMPANY_INFO.whatsappNumber}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7F6] border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Users className="w-4 h-4 text-[#FF7900]" />
                <span>Executive Leadership Roster</span>
              </h3>
              {LEADERSHIP.map(l => (
                <div key={l.id} className="pt-1 border-t border-slate-200/60 first:border-none first:pt-0">
                  <p className="font-semibold text-slate-900">{l.name} — <span className="text-[#008C45]">{l.designation}</span></p>
                  <p className="text-slate-500">Phone: {l.phone} · Email: {l.email}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
            <strong className="block font-bold">Image Assets Verified:</strong>
            <p>• Logo Emblem: <code>/assets/aistudio/image_3f2de657.png</code></p>
            <p>• Corporate Facilities: <code>/src/assets/images/hero_corporate_facility_1794072091725.jpg</code></p>
            <p>• Commercial Housekeeping: <code>/src/assets/images/service_housekeeping_commercial_1794072091913.jpg</code></p>
            <p>• Security Guards: <code>/src/assets/images/service_security_guards_1794072093270.jpg</code></p>
            <p>• Industrial Manufacturing: <code>/src/assets/images/industrial_facility_complex_1794072092632.jpg</code></p>
          </div>
        </div>
      )}

      {/* ================= TAB 5: ADMIN SECURITY & ROLES ================= */}
      {activeTab === 'settings' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div>
            <h2 className="font-display font-bold text-lg text-slate-900">
              Admin User Management & Role-Based Access
            </h2>
            <p className="text-xs text-slate-500">
              Role permissions and session governance for internal Himanshu Enterprises staff.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Super Administrator (Founder / Director)</p>
                <p className="text-slate-500">Full access: Quotations, CSV Export, Status Management, Content, Hiring</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-100 text-[#006B35] font-bold text-[11px]">
                Active (Your Session)
              </span>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Operations Manager (Facility Supervision)</p>
                <p className="text-slate-500">Access: View and update quotation requests, assign site inspectors</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-medium text-[11px]">
                Configured
              </span>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">HR & Recruitment Officer</p>
                <p className="text-slate-500">Access: Career applicant review, police verification status, candidate call logs</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-medium text-[11px]">
                Configured
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: QUOTATION DETAIL ================= */}
      {selectedQuote && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#006B35]">{selectedQuote.id}</span>
                <h3 className="font-display font-bold text-xl text-slate-900">{selectedQuote.organizationName}</h3>
              </div>
              <button
                onClick={() => setSelectedQuote(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block">Contact Person:</span>
                <strong className="text-slate-800">{selectedQuote.contactPerson}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Mobile Phone:</span>
                <a href={`tel:${selectedQuote.phone}`} className="text-[#006B35] font-semibold underline">{selectedQuote.phone}</a>
              </div>
              <div>
                <span className="text-slate-400 block">Official Email:</span>
                <strong className="text-slate-800">{selectedQuote.email}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Site Location:</span>
                <strong className="text-slate-800">{selectedQuote.siteLocation}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Service Requested:</span>
                <strong className="text-[#008C45]">{selectedQuote.serviceType}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Personnel Count:</span>
                <strong className="text-slate-900">{selectedQuote.numberOfPersonnel} Staff</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Working Shift:</span>
                <span className="text-slate-700">{selectedQuote.workingHours}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Contract Duration:</span>
                <span className="text-slate-700">{selectedQuote.contractDuration} (Starts {selectedQuote.expectedStartDate})</span>
              </div>
            </div>

            {selectedQuote.additionalRequirements && (
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <span className="font-bold text-slate-900 block mb-1">Additional Requirements & Notes:</span>
                <p>{selectedQuote.additionalRequirements}</p>
              </div>
            )}

            {/* Status Selector */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">Update Lead Status:</span>
              <select
                value={selectedQuote.status}
                onChange={e => handleQuoteStatusChange(selectedQuote.id, e.target.value as EnquiryStatus)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-300 bg-white"
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Quotation Sent">Quotation Sent</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Converted">Converted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* Internal Notes Thread */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-slate-900 block">Internal Follow-Up Notes:</span>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newNote}
                  onChange={e => setNewNote(e.target.value)}
                  placeholder="Add an internal supervisor or rate note..."
                  className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006B35]"
                />
                <button
                  type="button"
                  onClick={handleAddQuoteNote}
                  className="px-3.5 py-2 rounded-xl bg-[#006B35] text-white text-xs font-bold hover:bg-[#004D25] cursor-pointer"
                >
                  Add Note
                </button>
              </div>

              <div className="max-h-40 overflow-y-auto space-y-1.5">
                {(selectedQuote.internalNotes || []).length === 0 ? (
                  <p className="text-xs text-slate-400">No internal notes added yet.</p>
                ) : (
                  selectedQuote.internalNotes?.map((note, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-slate-50 text-[11px] text-slate-700 border border-slate-100">
                      {note}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between">
              <a
                href={`https://wa.me/${selectedQuote.phone.replace(/[^+\d]/g, '')}?text=Hello%20${encodeURIComponent(selectedQuote.contactPerson)},%20this%20is%20Himanshu%20Enterprises%20regarding%20Quotation%20${selectedQuote.id}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#008C45] text-white text-xs font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact via WhatsApp</span>
              </a>
              <button
                onClick={() => setSelectedQuote(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: ENQUIRY DETAIL ================= */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#006B35]">{selectedEnquiry.id}</span>
                <h3 className="font-display font-bold text-xl text-slate-900">{selectedEnquiry.fullName}</h3>
                <p className="text-xs text-slate-500">{selectedEnquiry.companyName}</p>
              </div>
              <button onClick={() => setSelectedEnquiry(null)} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block">Phone:</span>
                <a href={`tel:${selectedEnquiry.mobile}`} className="text-[#006B35] font-semibold underline">{selectedEnquiry.mobile}</a>
              </div>
              <div>
                <span className="text-slate-400 block">Email:</span>
                <span className="text-slate-800">{selectedEnquiry.email}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Service:</span>
                <span className="text-slate-800 font-semibold">{selectedEnquiry.requiredService}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Location:</span>
                <span className="text-slate-800">{selectedEnquiry.siteLocation}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <span className="font-bold text-slate-900 block mb-1">Message / Requirements:</span>
              <p>{selectedEnquiry.message}</p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">Enquiry Status:</span>
              <select
                value={selectedEnquiry.status}
                onChange={e => handleEnquiryStatusChange(selectedEnquiry.id, e.target.value as EnquiryStatus)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-300 bg-white"
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Quotation Sent">Quotation Sent</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Converted">Converted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: CAREER DETAIL ================= */}
      {selectedCareer && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#FF7900]">{selectedCareer.id}</span>
                <h3 className="font-display font-bold text-xl text-slate-900">{selectedCareer.fullName}</h3>
                <p className="text-xs font-semibold text-[#006B35]">{selectedCareer.preferredPosition}</p>
              </div>
              <button onClick={() => setSelectedCareer(null)} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block">Mobile:</span>
                <a href={`tel:${selectedCareer.mobile}`} className="text-[#006B35] font-semibold underline">{selectedCareer.mobile}</a>
              </div>
              <div>
                <span className="text-slate-400 block">Email:</span>
                <span className="text-slate-800">{selectedCareer.email || 'N/A'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Experience:</span>
                <span className="text-slate-800">{selectedCareer.experience}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Preferred Area:</span>
                <span className="text-slate-800">{selectedCareer.preferredLocation}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <div>
                <strong className="text-slate-900 block">Address:</strong>
                <p>{selectedCareer.currentAddress}</p>
              </div>
              <div>
                <strong className="text-slate-900 block">Documents / Notes:</strong>
                <p>{selectedCareer.documentNote || 'ID documents submitted'}</p>
              </div>
              {selectedCareer.additionalInfo && (
                <div>
                  <strong className="text-slate-900 block">Additional Details:</strong>
                  <p>{selectedCareer.additionalInfo}</p>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">Recruitment Status:</span>
              <select
                value={selectedCareer.status}
                onChange={e => handleCareerStatusChange(selectedCareer.id, e.target.value as JobStatus)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-300 bg-white"
              >
                <option value="New">New</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Interviewed">Interviewed</option>
                <option value="Hired">Hired</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between">
              <a
                href={`tel:${selectedCareer.mobile}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#006B35] text-white text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Candidate</span>
              </a>
              <button
                onClick={() => setSelectedCareer(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
