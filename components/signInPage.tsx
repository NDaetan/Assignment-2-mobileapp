import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, } from 'react-native';
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
      <TextInput
        placeholder="Username"
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={validateInput}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#0056D2',   // Background color
    borderWidth: 3,            // Border thickness
    borderColor: '#0056D2',       // Border color
    paddingVertical: 10,       // Adjust vertical padding for height
    paddingHorizontal: 20,     // Less horizontal padding for a tighter border
    borderRadius: 8,           // Rounded corners
    alignItems: 'center',      // Center the text
    justifyContent: 'center',
    shadowColor: '#000',       // Shadow for elevation effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,              // Elevation for shadow on Android
    alignSelf: 'center',       // Center the button itself
    minWidth: 100,             // Optional: Set a minimum width to ensure a good size
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
