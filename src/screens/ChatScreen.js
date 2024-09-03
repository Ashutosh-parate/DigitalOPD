import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import io from 'socket.io-client';
import ChatBox from './components/ChatBox';
import PatientDetails from '../components/PatientDetails';

const socket = io('http://localhost:5000');

export default function ChatScreen({ navigation }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, [messages]);

  const sendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <PatientDetails />
      <ChatBox messages={messages} />
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 },
});
