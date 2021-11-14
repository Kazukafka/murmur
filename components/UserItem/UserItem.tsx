import React from 'react'
import { Text, Pressable, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';
// import { DataStore } from '@aws-amplify/datastore';
// ↑ではなく下のaws=amplifyからImport　自動Importには注意
import { Auth, DataStore } from 'aws-amplify';
import { ChatRoom, User, ChatRoomUser } from '../../src/models';

export default function UserItem({ user }) {
  const navigation = useNavigation();

  const onPress = async () => {
    // Create a chat room
    const newChatRoom = await DataStore.save(new ChatRoom({ newMessages: 0 }));

    // Connect authenticated user with the chat room
    const authUser = await Auth.currentAuthenticatedUser();
    //下のエラー謎すぎる、undefinedになるので、AuthUserだけをChatRoomUserにする
    //const dbUser = await DataStore.query(User, authUser.attributes.sub);
    await DataStore.save(new ChatRoomUser({
      user: authUser,
      chatroom: newChatRoom
    }))

    // Connect Clicked user with the chat room
    await DataStore.save(new ChatRoomUser({
      user,
      chatroom: newChatRoom
    }))

    navigation.navigate('ChatRoom', { id: ChatRoom.id })
  }
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{ uri: user.imageUri }}
        style={styles.image}
      />
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>

        </View>
        <Text
          numberOfLines={1}
          ellipsizeMode="middle"
          style={styles.text}
        >

        </Text>
      </View>
    </Pressable>
  )
}



