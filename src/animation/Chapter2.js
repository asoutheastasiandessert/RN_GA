import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {Animated, Easing} from 'react-native';

export default function Chapter2() {
  const translation = useRef(new Animated.Value(0)).current;
  const translation2 = useRef(new Animated.Value(0)).current;
  const translation3 = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const translation4 = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const firstOpacity = useRef(new Animated.Value(0)).current;
  const secondOpacity = useRef(new Animated.Value(0)).current;
  const thirdOpacity = useRef(new Animated.Value(0)).current;
  const forthOpacity = useRef(new Animated.Value(0)).current;

  const [trigger1, setTrigger1] = useState(false);
  const [trigger2, setTrigger2] = useState(false);
  const [trigger3, setTrigger3] = useState(false);
  const [trigger4, setTrigger4] = useState(false);

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      delay: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View>
      <Text>Chapter 2</Text>
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
            toValue: !trigger1 ? Dimensions.get('screen').width - 100 : 0,
            easing: Easing.bounce,
            useNativeDriver: true,
            duration: 1000,
          }).start();
          setTrigger1(!trigger1);
        }}>
        <Text>Bounce Animation</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          transform: [{translateX: translation2}],
        }}
      />
      <TouchableOpacity
        onPress={() => {
          Animated.sequence([
            Animated.timing(translation3.x, {
              toValue: !trigger2 ? 100 : 0,
              useNativeDriver: true,
              duration: 200,
            }),
            Animated.timing(translation3.y, {
              toValue: !trigger2 ? 100 : 0,
              useNativeDriver: true,
              duration: 200,
            }),
          ]).start();
          setTrigger2(!trigger2);
        }}>
        <Text>Sequence Animation</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          transform: [
            {translateX: translation3.x},
            {translateY: translation3.y},
          ],
        }}
      />
      <TouchableOpacity
        onPress={() => {
          Animated.sequence([
            Animated.timing(translation4.x, {
              toValue: !trigger3 ? 100 : 0,
              useNativeDriver: true,
              duration: 200,
            }),
            Animated.parallel([
              Animated.timing(translation4.x, {
                toValue: !trigger3 ? 200 : 0,
                useNativeDriver: true,
                duration: 200,
              }),
              Animated.timing(translation4.y, {
                toValue: !trigger3 ? -100 : 0,
                useNativeDriver: true,
                duration: 200,
              }),
            ]),
          ]).start();
          setTrigger3(!trigger3);
        }}>
        <Text>Parallel Animation</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green',
          transform: [
            {translateX: translation4.x},
            {translateY: translation4.y},
          ],
        }}
      />
      <TouchableOpacity
        onPress={() => {
          Animated.stagger(150, [
            Animated.timing(firstOpacity, {
              toValue: !trigger4 ? 1 : 0,
              useNativeDriver: true,
            }),
            Animated.timing(secondOpacity, {
              toValue: !trigger4 ? 1 : 0,
              useNativeDriver: true,
            }),
            Animated.timing(thirdOpacity, {
              toValue: !trigger4 ? 1 : 0,
              useNativeDriver: true,
            }),
            Animated.timing(forthOpacity, {
              toValue: !trigger4 ? 1 : 0,
              useNativeDriver: true,
            }),
          ]).start();
          setTrigger4(!trigger4);
        }}>
        <Text>Stagger</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'pink',
            marginBottom: 10,
            opacity: firstOpacity,
          }}
        />

        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'brown',
            marginBottom: 10,
            opacity: secondOpacity,
          }}
        />

        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'yellow',
            opacity: thirdOpacity,
          }}
        />

        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'cyan',
            opacity: forthOpacity,
          }}
        />
      </View>
    </View>
  );
}
