import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Home() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Text style={styles.title}>JOMS</Text>
    <Image source={require('../assets/images/logo.png')} style={styles.logo} />
    <TouchableOpacity 
        style={styles.buttonPrimary} 
        // onPress={() => navigation.navigate('ApplyScreen')} // Navigate to the Membership screen
      >
        <Text style={styles.buttonPrimaryText}>Apply for membership</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.buttonSecondary} 
        // onPress={() => navigation.navigate('StatusScreen')} // Navigate to the Application Status screen
      >
        <Text style={styles.buttonSecondaryText}>Check Application Status</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        // onPress={() => navigation.navigate('Login')} // Navigate to the Login screen
      >
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
    resizeMode: 'contain',
    borderRadius: 50,
    overflow: 'hidden',
  },
  
  buttonPrimary: {
    backgroundColor: '#000',
    paddingVertical: 10,
    width: 250,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonPrimaryText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonSecondary: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
    width: 250, // Fixed width for equal size
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonSecondaryText: {
    color: '#000',
    fontSize: 16,
  },
  loginText: {
    color: '#000',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});
