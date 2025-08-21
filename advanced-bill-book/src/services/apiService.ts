import { Invoice } from '../types/types';

export const processPayment = async (invoice: Invoice, paymentMethod: string): Promise<boolean> => {
  // Simulate payment processing with Stripe/PayPal
  const response = await fetch('https://api.stripe.com/v1/charges', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: invoice.total * 100,
      currency: 'INR',
      source: paymentMethod,
      description: `Payment for invoice ${invoice.id}`,
    }),
  });
  return response.ok;
};