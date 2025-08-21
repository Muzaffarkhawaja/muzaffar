import { TAX_RATES } from './constants';
import { Item } from '../types/types';

export const calculateInvoiceTotal = (items: Item[]): number => {
  return items.reduce((total, item) => {
    const itemTotal = item.price * item.quantity;
    const tax = itemTotal * (item.taxRate || TAX_RATES.GST);
    return total + itemTotal + tax;
  }, 0);
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-IN');
};