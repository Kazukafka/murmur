import * as React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import UserItem from '../components/UserItem/UserItem';
import Users from '../assets/dummy-data/Users';

export default function UsersScreen() {


  return (
    <View style={styles.page}>

      <FlatList
        data={Users}
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
