import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import credentials from "../credentials.json";

import { NavigationProp } from '@react-navigation/native';

export default function SignInScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateInput = () => {
    const usernameValid = username.length >= 5;
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!usernameValid) {
      Alert.alert('Error', 'Username must be at least 5 characters long.');
      return;
    }
    if (!passwordValid) {
      Alert.alert('Error', 'Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character.');
      return;
    }

    const user = credentials.users.find(user => user.username === username && user.password === password);
    if (user) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Invalid username or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput placeholder="Username" style={styles.input} onChangeText={setUsername} value={username} />
      <TextInput placeholder="Password" style={styles.input} onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="Sign In" onPress={validateInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center', textDecorationColor: 'white' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }
});
