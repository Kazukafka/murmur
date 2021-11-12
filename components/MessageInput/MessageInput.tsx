import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  Image,
  View,
  FlatList,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';

function MessageInput() {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.warn("sending: ", message);
  }

  const onPlusClicked = () => {
    console.warn("On Plus Clicked")
  }

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  }

  return (
    <KeyboardAvoidingView
      //↓これをしないと十分にキーボードで入力部分が隠れてしまう
      keyboardVerticalOffset={100}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.root}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons name="emotsmile" size={24} color="#595959" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={message}
          // onChangeText={(newMessage) => setMessage(newMessage)}
          onChangeText={setMessage}
          placeholder="new message..."
        />
        <Feather name='camera' size={24} color='#595959' style={styles.icon} />
        <MaterialCommunityIcons name='microphone-outline' size={24} color='#595959' style={styles.icon} />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? <Ionicons name="send" size={18} color="white" /> : <AntDesign name='plus' size={24} color='white' />}
      </Pressable>
    </KeyboardAvoidingView >
  )
}

export default MessageInput

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
  },
  inputContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    alignItems: 'center',
    borderColor: '#dedede',
    flexDirection: 'row',
    padding: 5,
  },
  input: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#9400d3',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 35,
  },
});

