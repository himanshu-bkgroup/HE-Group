import { QuotationRequest, ContactEnquiry, CareerApplication, EnquiryStatus, JobStatus } from '../types';
import { INITIAL_QUOTATIONS, INITIAL_ENQUIRIES, INITIAL_CAREERS } from '../data/mockData';

const KEYS = {
  QUOTATIONS: 'he_quotations_v1',
  ENQUIRIES: 'he_enquiries_v1',
  CAREERS: 'he_careers_v1',
  ADMIN_AUTH: 'he_admin_auth_v1'
};

// Safe localStorage helper
function getStored<T>(key: string, defaultData: T): T {
  if (typeof window === 'undefined') return defaultData;
  try {
    const item = localStorage.getItem(key);
    if (!item) {
      localStorage.setItem(key, JSON.stringify(defaultData));
      return defaultData;
    }
    return JSON.parse(item) as T;
  } catch (e) {
    console.error('Storage parse error for', key, e);
    return defaultData;
  }
}

function setStored<T>(key: string, data: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Storage write error for', key, e);
  }
}

// ================= Quotations =================
export function getQuotations(): QuotationRequest[] {
  return getStored<QuotationRequest[]>(KEYS.QUOTATIONS, INITIAL_QUOTATIONS);
}

export function saveQuotation(quoteData: Omit<QuotationRequest, 'id' | 'createdAt' | 'status' | 'internalNotes'>): QuotationRequest {
  const existing = getQuotations();
  const counter = existing.length + 101;
  const newQuote: QuotationRequest = {
    ...quoteData,
    id: `HE-QUO-2026-${counter}`,
    createdAt: new Date().toISOString(),
    status: 'New',
    internalNotes: []
  };

  const updated = [newQuote, ...existing];
  setStored(KEYS.QUOTATIONS, updated);
  return newQuote;
}

export function updateQuotationStatus(id: string, status: EnquiryStatus): QuotationRequest[] {
  const existing = getQuotations();
  const updated = existing.map(q => q.id === id ? { ...q, status } : q);
  setStored(KEYS.QUOTATIONS, updated);
  return updated;
}

export function addQuotationNote(id: string, noteText: string): QuotationRequest[] {
  const existing = getQuotations();
  const timestamp = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const entry = `[${timestamp}] ${noteText}`;
  const updated = existing.map(q => {
    if (q.id === id) {
      return {
        ...q,
        internalNotes: [entry, ...(q.internalNotes || [])]
      };
    }
    return q;
  });
  setStored(KEYS.QUOTATIONS, updated);
  return updated;
}

// ================= Contact Enquiries =================
export function getEnquiries(): ContactEnquiry[] {
  return getStored<ContactEnquiry[]>(KEYS.ENQUIRIES, INITIAL_ENQUIRIES);
}

export function saveEnquiry(enquiryData: Omit<ContactEnquiry, 'id' | 'createdAt' | 'status' | 'internalNotes'>): ContactEnquiry {
  const existing = getEnquiries();
  const counter = existing.length + 201;
  const newEnquiry: ContactEnquiry = {
    ...enquiryData,
    id: `HE-ENQ-2026-${counter}`,
    createdAt: new Date().toISOString(),
    status: 'New',
    internalNotes: []
  };

  const updated = [newEnquiry, ...existing];
  setStored(KEYS.ENQUIRIES, updated);
  return newEnquiry;
}

export function updateEnquiryStatus(id: string, status: EnquiryStatus): ContactEnquiry[] {
  const existing = getEnquiries();
  const updated = existing.map(e => e.id === id ? { ...e, status } : e);
  setStored(KEYS.ENQUIRIES, updated);
  return updated;
}

export function addEnquiryNote(id: string, noteText: string): ContactEnquiry[] {
  const existing = getEnquiries();
  const timestamp = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const entry = `[${timestamp}] ${noteText}`;
  const updated = existing.map(e => {
    if (e.id === id) {
      return {
        ...e,
        internalNotes: [entry, ...(e.internalNotes || [])]
      };
    }
    return e;
  });
  setStored(KEYS.ENQUIRIES, updated);
  return updated;
}

// ================= Career Applications =================
export function getCareers(): CareerApplication[] {
  return getStored<CareerApplication[]>(KEYS.CAREERS, INITIAL_CAREERS);
}

export function saveCareerApplication(careerData: Omit<CareerApplication, 'id' | 'createdAt' | 'status' | 'internalNotes'>): CareerApplication {
  const existing = getCareers();
  const counter = existing.length + 301;
  const newApp: CareerApplication = {
    ...careerData,
    id: `HE-JOB-2026-${counter}`,
    createdAt: new Date().toISOString(),
    status: 'New',
    internalNotes: []
  };

  const updated = [newApp, ...existing];
  setStored(KEYS.CAREERS, updated);
  return newApp;
}

export function updateCareerStatus(id: string, status: JobStatus): CareerApplication[] {
  const existing = getCareers();
  const updated = existing.map(c => c.id === id ? { ...c, status } : c);
  setStored(KEYS.CAREERS, updated);
  return updated;
}

export function addCareerNote(id: string, noteText: string): CareerApplication[] {
  const existing = getCareers();
  const timestamp = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const entry = `[${timestamp}] ${noteText}`;
  const updated = existing.map(c => {
    if (c.id === id) {
      return {
        ...c,
        internalNotes: [entry, ...(c.internalNotes || [])]
      };
    }
    return c;
  });
  setStored(KEYS.CAREERS, updated);
  return updated;
}

// ================= CSV Export Utilities =================
export function exportQuotationsCSV(quotes: QuotationRequest[]): void {
  const headers = ['Quotation ID', 'Created Date', 'Organization', 'Contact Person', 'Phone', 'Email', 'Location', 'Service Type', 'Personnel Count', 'Working Hours', 'Days/Week', 'Duration', 'Start Date', 'Status', 'Notes'];
  const rows = quotes.map(q => [
    q.id,
    new Date(q.createdAt).toLocaleDateString('en-IN'),
    `"${q.organizationName.replace(/"/g, '""')}"`,
    `"${q.contactPerson.replace(/"/g, '""')}"`,
    `"${q.phone}"`,
    `"${q.email}"`,
    `"${q.siteLocation.replace(/"/g, '""')}"`,
    `"${q.serviceType}"`,
    q.numberOfPersonnel,
    `"${q.workingHours}"`,
    `"${q.weeklyWorkingDays}"`,
    `"${q.contractDuration}"`,
    q.expectedStartDate,
    q.status,
    `"${(q.internalNotes || []).join(' | ').replace(/"/g, '""')}"`
  ]);

  downloadCSV('himanshu_enterprises_quotations.csv', [headers.join(','), ...rows.map(r => r.join(','))].join('\n'));
}

export function exportEnquiriesCSV(enquiries: ContactEnquiry[]): void {
  const headers = ['Enquiry ID', 'Created Date', 'Name', 'Company', 'Mobile', 'Email', 'Service', 'Location', 'Workforce', 'Duration', 'Status', 'Message'];
  const rows = enquiries.map(e => [
    e.id,
    new Date(e.createdAt).toLocaleDateString('en-IN'),
    `"${e.fullName.replace(/"/g, '""')}"`,
    `"${e.companyName.replace(/"/g, '""')}"`,
    `"${e.mobile}"`,
    `"${e.email}"`,
    `"${e.requiredService}"`,
    `"${e.siteLocation.replace(/"/g, '""')}"`,
    `"${e.estimatedWorkforce}"`,
    `"${e.contractDuration}"`,
    e.status,
    `"${e.message.replace(/"/g, '""')}"`
  ]);

  downloadCSV('himanshu_enterprises_contact_enquiries.csv', [headers.join(','), ...rows.map(r => r.join(','))].join('\n'));
}

export function exportCareersCSV(careers: CareerApplication[]): void {
  const headers = ['Application ID', 'Date', 'Candidate Name', 'Mobile', 'Email', 'Preferred Position', 'Experience', 'Preferred Location', 'Address', 'Status', 'Documents Note'];
  const rows = careers.map(c => [
    c.id,
    new Date(c.createdAt).toLocaleDateString('en-IN'),
    `"${c.fullName.replace(/"/g, '""')}"`,
    `"${c.mobile}"`,
    `"${c.email || ''}"`,
    `"${c.preferredPosition}"`,
    `"${c.experience}"`,
    `"${c.preferredLocation}"`,
    `"${c.currentAddress.replace(/"/g, '""')}"`,
    c.status,
    `"${(c.documentNote || '').replace(/"/g, '""')}"`
  ]);

  downloadCSV('himanshu_enterprises_career_applications.csv', [headers.join(','), ...rows.map(r => r.join(','))].join('\n'));
}

function downloadCSV(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// ================= Statistics =================
export function getStats() {
  const quotes = getQuotations();
  const enquiries = getEnquiries();
  const careers = getCareers();

  const totalQuotes = quotes.length;
  const totalEnquiries = enquiries.length;
  const totalCareers = careers.length;

  const convertedQuotes = quotes.filter(q => q.status === 'Converted').length;
  const activeQuotes = quotes.filter(q => ['New', 'Contacted', 'Quotation Sent', 'Follow-up'].includes(q.status)).length;
  const totalPersonnelRequested = quotes.reduce((acc, curr) => acc + (Number(curr.numberOfPersonnel) || 0), 0);

  return {
    totalQuotes,
    totalEnquiries,
    totalCareers,
    convertedQuotes,
    activeQuotes,
    totalPersonnelRequested,
    totalLeads: totalQuotes + totalEnquiries
  };
}

// ================= Admin Auth =================
export function isAdminAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(KEYS.ADMIN_AUTH) === 'true';
}

export function adminLogin(passcode: string): boolean {
  // Demo passcode 'admin2026' or 'he2026'
  if (passcode === 'admin2026' || passcode === 'he2026' || passcode === 'hefounder') {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(KEYS.ADMIN_AUTH, 'true');
    }
    return true;
  }
  return false;
}

export function adminLogout(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(KEYS.ADMIN_AUTH);
  }
}
