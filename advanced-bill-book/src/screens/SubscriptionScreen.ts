import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Subscription } from '../types/types';
import { db } from '../services/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const SubscriptionScreen: React.FC = () => {
  const [subscription, setSubscription] = useState<Partial<Subscription>>({
    clientId: '',
    plan: '',
    billingCycle: 'monthly',
    startDate: new Date().toISOString(),
    endDate: '',
    proration: 0,
  });

  const handleCreate = async () => {
    await addDoc(collection(db, 'subscriptions'), {
      ...subscription,
      id: Date.now().toString(),
    });
    alert('Subscription created!');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Create Subscription</Text>
      <TextInput
        value={subscription.clientId}
        onChangeText={(text) => setSubscription({ ...subscription, clientId: text })}
        placeholder="Client ID"
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
      />
      <TextInput
        value={subscription.plan}
        onChangeText={(text) => setSubscription({ ...subscription, plan: text })}
        placeholder="Plan Name"
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
      />
      <Button title="Create Subscription" onPress={handleCreate} />
    </View>
  );
};

export default SubscriptionScreen;