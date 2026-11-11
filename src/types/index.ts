export type EnquiryStatus = 
  | 'New'
  | 'Contacted'
  | 'Quotation Sent'
  | 'Follow-up'
  | 'Converted'
  | 'Rejected';

export type JobStatus = 
  | 'New'
  | 'Shortlisted'
  | 'Interviewed'
  | 'Hired'
  | 'Rejected';

export interface QuotationRequest {
  id: string;
  createdAt: string;
  organizationName: string;
  contactPerson: string;
  phone: string;
  email: string;
  companyAddress: string;
  siteLocation: string;
  serviceType: 'Housekeeping' | 'Security Guards' | 'Bouncers' | 'Armed Security' | 'Complete Facility Support' | 'Other';
  numberOfPersonnel: number;
  workingHours: '8 Hours (Single Shift)' | '12 Hours (Day/Night)' | '24 Hours (Rotational 3 Shifts)';
  weeklyWorkingDays: '6 Days/Week' | '7 Days/Week (24x7)';
  expectedStartDate: string;
  contractDuration: '6 Months' | '12 Months' | 'Multi-Year Long Term' | 'Trial (3 Months)';
  additionalRequirements?: string;
  status: EnquiryStatus;
  internalNotes?: string[];
}

export interface ContactEnquiry {
  id: string;
  createdAt: string;
  fullName: string;
  companyName: string;
  mobile: string;
  email: string;
  requiredService: string;
  siteLocation: string;
  estimatedWorkforce: string;
  contractDuration: string;
  message: string;
  status: EnquiryStatus;
  internalNotes?: string[];
}

export interface CareerApplication {
  id: string;
  createdAt: string;
  fullName: string;
  mobile: string;
  email?: string;
  currentAddress: string;
  preferredPosition: string;
  experience: string;
  preferredLocation: string;
  documentNote?: string;
  additionalInfo?: string;
  status: JobStatus;
  internalNotes?: string[];
}

export interface LeaderProfile {
  id: string;
  name: string;
  designation: string;
  phone: string;
  email: string;
  bio: string;
  image?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'housekeeping' | 'security' | 'manpower';
  description: string;
  suitableFor: string;
  benefits: string[];
  features: string[];
  image: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  solutions: string[];
  iconName: string;
  tag: string;
}
