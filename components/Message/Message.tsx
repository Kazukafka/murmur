import React from 'react'
import { Text, StyleSheet, Image, View } from 'react-native';

const purple = '#9400d3';
const grey = 'lightgrey';

const myId = 'u1';

const Message = ({ message }) => {

  const isMyself = message.user.id === myId;
  return (
    <View
      style={[
        styles.container, isMyself ? styles.rightContainer : styles.leftContainer
      ]}
    >
      <Text style={{ color: isMyself ? 'black' : 'white' }}>{message.content}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  rightContainer: {
    backgroundColor: grey,
    marginLeft: 'auto',
    marginRight: 10,
  },
  leftContainer: {
    backgroundColor: purple,
    marginLeft: 10,
    marginRight: 'auto',
  },
});
