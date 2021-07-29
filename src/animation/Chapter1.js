import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {View, Text, Animated, TouchableOpacity, Dimensions} from 'react-native';

export default function Chapter1() {
  const translation = useRef(new Animated.Value(0)).current;
  const translation2 = useRef(new Animated.Value(0)).current;
  const [lebar, setLebar] = useState(100);
  console.log('screen ', Dimensions.get('screen').width);
  console.log('window ', Dimensions.get('window').width);

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 50,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View>
      <Text>Chapter 1</Text>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          transform: [{translateX: translation}],
        }}
      />
      <TouchableOpacity
        onPress={() => {
          Animated.timing(translation2, {
            toValue: Dimensions.get('screen').width - 100,
            useNativeDriver: true,
          }).start();
        }}>
        <Text>Animated</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          width: lebar,
          height: 100,
          backgroundColor: 'orange',
          transform: [{translateX: translation2}],
        }}>
        <View style={{width: lebar, height: 50, backgroundColor: 'red'}}></View>
      </Animated.View>
    </View>
  );
}
