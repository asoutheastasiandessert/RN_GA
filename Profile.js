import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

export default function Profile({navigation}) {
  const user = useSelector(state => state.user.name);

  return (
    <View>
      <Text>Profile name: {user} </Text>
      <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.removeItem('username');
          navigation.replace('Login');
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
