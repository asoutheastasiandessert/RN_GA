import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export default function EditTodo({
  editTodo,
  handleEdit,
  todo,
  index,
  setEditTodo,
  setOnEditTodo,
  setTodo,
  handleSave,
}) {
  //   console.log('props ', props);
  //   const {editTodo} = props
  return (
    <View>
      <TextInput
        placeholder="Edit Todo"
        value={editTodo}
        onChangeText={item => handleEdit(item)}
      />
      <TouchableOpacity
        onPress={() => {
          handleSave();
        }}>
        <Text>Save changes!</Text>
      </TouchableOpacity>
    </View>
  );
}
