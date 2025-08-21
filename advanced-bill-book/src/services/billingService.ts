import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { Invoice, Item } from '../types/types';
import { calculateInvoiceTotal } from '../utils/helpers';

export const createInvoice = async (clientId: string, items: Item[]) => {
  const invoice: Invoice = {
    id: Date.now().toString(),
    clientId,
    items,
    total: calculateInvoiceTotal(items),
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'pending',
  };
  await addDoc(collection(db, 'invoices'), invoice);
  return invoice;
};

export const getInvoices = async (): Promise<Invoice[]> => {
  const querySnapshot = await getDocs(collection(db, 'invoices'));
  return querySnapshot.docs.map(doc => doc.data() as Invoice);
};