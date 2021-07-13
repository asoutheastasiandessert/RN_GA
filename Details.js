import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StackActions} from '@react-navigation/native';

export default function Details({navigation, route}) {
  console.log('r ', route.key);
  return (
    <View>
      <Text>This is details</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.dispatch({
            ...StackActions.replace('TodoApp'),
            source: route.key,
            target: navigation.dangerouslyGetState().key,
          })
        }>
        <Text>Save change!</Text>
      </TouchableOpacity>
    </View>
  );
}
