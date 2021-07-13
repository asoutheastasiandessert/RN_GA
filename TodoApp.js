import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import EditTodo from './EditTodo';

export default function TodoApp({navigation}) {
  const [todo, setTodo] = useState(['Glints', 'Office', 'Hour']);

  const [ketikan, setKetikan] = useState('Glints');

  const [onEditTodo, setOnEditTodo] = useState(null);

  const [editTodo, setEditTodo] = useState('');

  const handleSave = index => {
    let newTodo = [...todo];
    newTodo[index] = editTodo;
    setTodo(newTodo);
    setOnEditTodo(null);
    setEditTodo('');
  };

  return (
    <View>
      <TextInput
        placeholder="placeholder"
        value={ketikan}
        onChangeText={e => setKetikan(e)}
      />
      <TouchableOpacity
        onPress={() => {
          let newTodo = [...todo, ketikan];
          setTodo(newTodo);
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
      {todo.map((e, i) => (
        <View
          key={i}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 30,
          }}>
          <Text style={{}}>{e}</Text>
          <TouchableOpacity
            onPress={() => {
              let removeArray = todo.filter((item, index) => {
                return i !== index;
              });
              setTodo(removeArray);
            }}>
            <Text>Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOnEditTodo(i)}>
            <Text>Edit</Text>
          </TouchableOpacity>
          {onEditTodo === i && (
            <EditTodo
              editTodo={editTodo}
              handleEdit={e => setEditTodo(e)}
              handleSave={() => handleSave(i)}
            />
          )}
        </View>
      ))}

      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
}
