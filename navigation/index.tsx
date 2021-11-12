import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import * as React from 'react';
import { ColorSchemeName, Pressable, Text, Image, View, useWindowDimensions } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen';
import { Feather } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        //実害なし
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen
        //実害なし
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{ headerTitle: ChatRoomHeader, headerBackTitleVisible: false }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
        padding: 10,
        alignItems: 'center',
      }}
    >
      <Image source={{ uri: "https://64.media.tumblr.com/2487b0271c60b5fea236ea0f463d0ba8/ad72ab4fa2ce5a29-ee/s1280x1920/88abb60ac5866c8e821002f83042f721514fb349.jpg" }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text style={{ flex: 1, textAlign: 'center', marginLeft: 10, fontWeight: 'bold' }}>Home</Text>
      <Feather name="camera" size={24} color="black" style={{ marginHorizontal: 10 }} />
      <Feather name="edit-2" size={24} color="black" style={{ marginHorizontal: 10 }} />
      <Feather />
    </View>
  )
};

const ChatRoomHeader = (props) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 20,
        marginLeft: 'auto',
        padding: 10,
        alignItems: 'center',
      }}
    >
      <Image source={{ uri: "https://64.media.tumblr.com/2487b0271c60b5fea236ea0f463d0ba8/ad72ab4fa2ce5a29-ee/s1280x1920/88abb60ac5866c8e821002f83042f721514fb349.jpg" }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text style={{ flex: 1, textAlign: 'center', marginLeft: 10, fontWeight: 'bold' }}>{props.children}</Text>
      <Feather name="camera" size={24} color="black" style={{ marginHorizontal: 10 }} />
      <Feather name="edit-2" size={24} color="black" style={{ marginHorizontal: 10 }} />
      <Feather />
    </View>
  )
};
