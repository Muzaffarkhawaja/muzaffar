import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { Invoice } from '../types/types';
import { getInvoices } from '../services/billingService';
import InvoiceList from '../components/InvoiceList';

const BillingScreen: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const data = await getInvoices();
      setInvoices(data);
    };
    fetchInvoices();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Invoices</Text>
      <InvoiceList invoices={invoices} />
      <Button title="Create Invoice" onPress={() => alert('Create invoice')} />
    </View>
  );
};

export default BillingScreen;