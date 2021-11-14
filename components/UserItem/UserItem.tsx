import React from 'react'
import { Text, Pressable, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';

export default function UserItem({ user }) {

  const navigation = useNavigation();
  const onPress = () => {
    // Create a chat room
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


