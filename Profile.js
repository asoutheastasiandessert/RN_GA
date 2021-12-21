import React from 'react';
import {Linking, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';

export default function Profile({navigation}) {
  const user = useSelector(state => state.user.name);
  const [processing, setProcessing] = useState(true);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      const initialUrl = await Linking.getInitialURL();
      // let a = e.url.split('=');
      console.log('initial ', initialUrl);

      // The setTimeout is just for testing purpose
      setTimeout(() => {
        setUrl(initialUrl);
        setProcessing(false);
      }, 1000);
    };

    Linking.addEventListener('url', e => {
      let a = e.url.split('=');
      console.log('e ', a[1]);
    });

    getUrlAsync();
  }, []);

  return (
    <View>
      <Text>Profile name: {user} </Text>
      <Text>
        {processing
          ? `Processing the initial url from a deep link`
          : `The deep link is: ${url || 'None'}`}
      </Text>
      <TouchableOpacity
        onPress={async () => {
          var FormData = require('form-data');
          var data = new FormData();
          data.append('content', 'haeee44');
          data.append('interest', 'Sports');
          data.append('location', 'Medan');
          data.append('date', '2021-09-22T21:12:21.415Z');
          data.append('title', 'yeeeess');
          data.append('address', 'Jl. Laksana no.25');

          var config = {
            method: 'post',
            url: 'https://crowdfinder.gabatch13.my.id/api/post/event',
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiNjEyMzYzNjkxODg1ZmY4ZTE3NWZlY2FlIiwiaWF0IjoxNjMxMDAzNzcwLCJleHAiOjE2MzE2MDg1NzB9.C1JEvDdA5xb2HSjwkKfcr6KAfIQC5aVgIsuFkEP3_xY',
              'Content-Type': 'multipart/form-data',
            },
            data: data,
          };

          axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
          // await AsyncStorage.removeItem('username');
          // navigation.replace('Login');
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
