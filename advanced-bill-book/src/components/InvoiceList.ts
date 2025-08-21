import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Invoice } from '../types/types';
import { formatDate } from '../utils/helpers';
import PaymentQRCode from './PaymentQRCode';

interface InvoiceListProps {
  invoices: Invoice[];
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices }) => {
  return (
    <FlatList
      data={invoices}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text>Invoice ID: {item.id}</Text>
          <Text>Total: {item.total} {CURRENCY}</Text>
          <Text>Due: {formatDate(item.dueDate)}</Text>
          <Text>Status: {item.status}</Text>
          <PaymentQRCode invoiceId={item.id} amount={item.total} />
        </View>
      )}
    />
  );
};

export default InvoiceList;