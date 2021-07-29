import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';

export default function Animation({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Chapter1')}>
        <Text>Chapter 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chapter2')}>
        <Text>Chapter 2</Text>
      </TouchableOpacity>
    </View>
  );
}
