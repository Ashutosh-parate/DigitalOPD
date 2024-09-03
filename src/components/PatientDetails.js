import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PatientDetails() {
  return (
    <View style={styles.container}>
      <Text>Patient: John Doe</Text>
      <Text>Age: 45</Text>
      <Text>Gender: Male</Text>
      <Text>History: Diabetes</Text>
      <Text>Symptoms: Frequent urination, excessive thirst</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: '#eee', marginBottom: 10 },
});
