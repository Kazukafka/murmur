import React, { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import UserItem from '../components/UserItem/UserItem';
import { User } from '../src/models';

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    DataStore.query(User).then(setUsers);
  }, []);

  // useEffect(() => {
  //   //query users
  //   const fetchUsers = async () => {
  //     const fetchUsers = await DataStore.query(User);
  //     setUsers(fetchUsers);
  //   };
  //   fetchUsers();
  // }, [])

  return (
    <View style={styles.page}>

      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem user={item} />}
        showsVerticalScrollIndicator={false}
      // ListHeaderComponent={() => <FlatList
      //   data={chatRoomsData}
      //   renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      //   showsVerticalScrollIndicator={false}
      //   horizontal
      // /> }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  }
})
