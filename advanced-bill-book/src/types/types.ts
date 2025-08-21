export interface BusinessProfile {
  unitName: string;
  logo: string;
  address: string;
  contactNumbers: string[];
  email: string;
  gstNumber: string;
  bankAccount: string;
  ifscCode: string;
  pfmsVendorId: string;
}

export interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  taxRate: number;
}

export interface Invoice {
  id: string;
  clientId: string;
  items: Item[];
  total: number;
  dueDate: string;
  status: 'pending' | 'paid' | 'overdue';
}

export interface Subscription {
  id: string;
  clientId: string;
  plan: string;
  billingCycle: 'monthly' | 'quarterly' | 'yearly';
  startDate: string;
  endDate: string;
  proration: number;
}