import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatBox({ messages }) {
  return (
    <View style={styles.chatBox}>
      {messages.map((msg, index) => (
        <Text key={index} style={styles.message}>{msg}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  chatBox: { flex: 1, borderWidth: 1, borderColor: '#ddd', padding: 10 },
  message: { marginBottom: 5, padding: 8, backgroundColor: '#f1f1f1' },
});
