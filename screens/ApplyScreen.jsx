import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router-native'; // Replace with `react-router-dom` for web apps

export default function ApplyScreen() {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate(-1)}> {/* Navigate back */}
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>FAME</Text>
      </View>
      <Text style={styles.subTitle}>Verify Your Number</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputBox} placeholder="" />
        <TextInput style={styles.inputBox} placeholder="" />
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigate('/next')}>
        <Text style={styles.nextButtonText}>Next →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backArrow: {
    fontSize: 18,
    color: '#000',
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  inputBox: {
    flex: 1,
    height: 50,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f8f8ff',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  nextButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
