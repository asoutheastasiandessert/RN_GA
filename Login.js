import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const e = await AsyncStorage.getItem('username');
    // .then(e => {
    if (e === 'glints') {
      navigation.replace('Dashboard');
    } else {
      setLoading(false);
    }
    // });
  }, []);

  if (loading) {
    return (
      <Text>
        <ActivityIndicator color="blue" />
      </Text>
    );
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="username"
        value={username}
        onChangeText={e => setUsername(e)}
        style={{borderWidth: 1, width: '50%'}}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
        style={{borderWidth: 1, width: '50%', marginVertical: 10}}
      />
      <TouchableOpacity
        onPress={async () => {
          if (username === 'glints' && password === 'academy') {
            await AsyncStorage.setItem('username', username);
            navigation.replace('Dashboard');
          } else {
            Alert.alert('Wrong password');
          }
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
