import React from 'react';
import {View, Text} from 'react-native';

export default function Button() {
  return (
    <View>
      <TextInput
        placeholder="Edit Todo"
        value={editTodo}
        onChangeText={e => setEditTodo(e)}
      />
      <TouchableOpacity
        onPress={() => {
          let newTodo = [...todo];
          newTodo[i] = editTodo;
          setTodo(newTodo);
          setOnEditTodo(null);
          setEditTodo('');
        }}>
        <Text>Save changes!</Text>
      </TouchableOpacity>
    </View>
  );
}
