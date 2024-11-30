import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter as Router, Route, Routes } from 'react-router-native';
import Home from '../screens/Home'
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/apply" element={<ApplyScreen />} />
        <Route path="/status" element={<StatusScreen />} />
        <Route path="/login" element={<LoginScreen />} /> */}
      </Routes>
    </Router>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});
