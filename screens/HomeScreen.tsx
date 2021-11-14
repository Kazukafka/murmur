import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import { Auth, DataStore } from 'aws-amplify';
import { ChatRoom, ChatRoomUser } from '../src/models';

export default function TabOneScreen() {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  useEffect(() => {
    const fetchCharRooms = async () => {
      const userData = await Auth.currentAuthenticatedUser();

      const chatRooms = (await DataStore.query(ChatRoomUser))
        // .filter(chatRoomUser => chatRoomUser.user.id === userData.attributes.sub);
        .map(chatRoomUser => chatRoomUser.chatroom);
      // console.log(chatRooms);

      setChatRooms(chatRooms);
    }
    fetchCharRooms();
  }, []);

  const logOut = () => {
    Auth.signOut();
  }
  return (
    <View style={styles.page}>

      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      // ListHeaderComponent={() => <FlatList
      //   data={chatRoomsData}
      //   renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      //   showsVerticalScrollIndicator={false}
      //   horizontal
      // /> }
      />
      {/* <Pressable
        onPress={logOut}
        style={{ backgroundColor: 'red', height: 50, margin: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Logout</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  }
})
