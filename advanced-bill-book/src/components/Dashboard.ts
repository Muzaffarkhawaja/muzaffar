import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Invoice } from '../types/types';
import { getInvoices } from '../services/billingService';

const Dashboard: React.FC = () => {
  const [totalReceivables, setTotalReceivables] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const invoices = await getInvoices();
      const total = invoices
        .filter((inv) => inv.status !== 'paid')
        .reduce((sum, inv) => sum + inv.total, 0);
      setTotalReceivables(total);
    };
    fetchData();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Financial Dashboard</Text>
      <Text>Accounts Receivable: {totalReceivables} {CURRENCY}</Text>
    </View>
  );
};

export default Dashboard;