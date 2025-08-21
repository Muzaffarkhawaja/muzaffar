import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { CURRENCY } from '../utils/constants';

interface PaymentQRCodeProps {
  invoiceId: string;
  amount: number;
}

const PaymentQRCode: React.FC<PaymentQRCodeProps> = ({ invoiceId, amount }) => {
  const paymentUrl = `https://payment.example.com/invoice/${invoiceId}?amount=${amount}&currency=${CURRENCY}`;
  return (
    <View>
      <QRCode value={paymentUrl} size={100} />
    </View>
  );
};

export default PaymentQRCode;