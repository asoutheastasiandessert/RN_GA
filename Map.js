import React, {useEffect, useState} from 'react';
import {View, Text, Alert, TouchableOpacity, TextInput} from 'react-native';
import messaging from '@react-native-firebase/messaging';

export default function Map() {
  useEffect(async () => {
    // Register background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', remoteMessage);
      navigation.navigate('profile');
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <TextInput value="rangga@gmail.com" />
      <TextInput value="1234567" />
      <TouchableOpacity
        onPress={async () => {
          const token = await messaging().getToken();
          let keyServer =
            'AAAAUWsLq5s:APA91bFQUcAxW8lWwM0r-hEaSPA7QjAVU-fba2pvuTDlvIg2QO-zJ4nzdrghss60Fna9th3W2JvBOFJbfsepvM-6luS_qnBYwbPLtp__9nZ1gUh8JZHM567ovZXGDabRHsgtFSDQl4u7';
          let b = await fetch('https://fcm.googleapis.com/fcm/send', {
            method: 'post',
            body: JSON.stringify({
              to: token,
              notification: {
                title: 'New event posted',
                body: 'Check it now!',
              },
            }),
            headers: {
              'Content-type': 'application/json',
              Authorization: `key=${keyServer}`,
            },
          });
          console.log('b ', b);
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
