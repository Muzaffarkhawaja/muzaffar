import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import { BusinessProfile } from '../types/types';
import { db } from '../services/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

const ProfileScreen: React.FC = () => {
  const [profile, setProfile] = useState<BusinessProfile>({
    unitName: '',
    logo: '',
    address: '',
    contactNumbers: [],
    email: '',
    gstNumber: '',
    bankAccount: '',
    ifscCode: '',
    pfmsVendorId: '',
  });

  const handleSave = async () => {
    await setDoc(doc(db, 'profiles', 'business'), profile);
    alert('Profile saved!');
  };

  return (
    <View style={{ padding: 20 }}>
      <Image
        source={{ uri: profile.logo || require('../assets/images/logo-placeholder.png') }}
        style={{ width: 100, height: 100 }}
      />
      <TextInput
        value={profile.unitName}
        onChangeText={(text) => setProfile({ ...profile, unitName: text })}
        placeholder="Unit Name"
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
      />
      <TextInput
        value={profile.address}
        onChangeText={(text) => setProfile({ ...profile, address: text })}
        placeholder="Address"
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
      />
      <TextInput
        value={profile.email}
        onChangeText={(text) => setProfile({ ...profile, email: text })}
        placeholder="Email"
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
      />
      <Button title="Save Profile" onPress={handleSave} />
    </View>
  );
};

export default ProfileScreen;