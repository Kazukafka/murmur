import React, { useState, useEffect } from 'react'
import { Text, Pressable, Image, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { DataStore } from '@aws-amplify/datastore';
import { ChatRoomUser, User } from '../../src/models';
import styles from './styles';
import { Auth } from 'aws-amplify';

export default function ChatRoomItem({ chatRoom }) {
  // const [users, setUsers] = useState<User[]>([]); // all users in this chatroom
  const [user, setUser] = useState<User | null>(null); // display user

  const navigation = useNavigation();

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = (await DataStore.query(ChatRoomUser))
        //filterなくても問題なし
        .filter(chatRoomUser => chatRoomUser.chatroom.id == chatRoom.id)
        .map(chatRoomUser => chatRoomUser.user);

      // setUsers(fetchedUsers);

      const authUser = await Auth.currentAuthenticatedUser();
      setUser(fetchedUsers.find(user => user.id !== authUser.attributes.aub) || null);
    };
    fetchUsers();
  }, []);

  const onPress = () => {
    // console.warn('pressed', user.name)
    //↓この呼び出しに一致するオーバーロードはありません。しかし実害はない
    navigation.navigate('ChatRoom', { id: chatRoom.id });
  }

  if (!user) {
    return <ActivityIndicator />
  }

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{ uri: user.imageUri }}
        style={styles.image}
      />

      {!!chatRoom.newMessages &&
        <View style={styles.badgeContainer} >
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      }

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage?.createdAt}</Text>
        </View>
        <Text
          numberOfLines={1}
          ellipsizeMode="middle"
          style={styles.text}
        >
          {chatRoom.lastMessage?.content}
        </Text>
      </View>
    </Pressable>
  )
}


