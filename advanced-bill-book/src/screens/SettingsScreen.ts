import React from 'react';
import { View, Text, Button } from 'react-native';
import { logout } from '../services/authService';

const SettingsScreen: React.FC = () => {
  const handleLogout = async () => {
    await logout();
    alert('Logged out!');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Settings</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default SettingsScreen;