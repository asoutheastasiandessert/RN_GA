import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import EditTodo from './EditTodo';

export default function App() {
  const [todo, setTodo] = useState(['Glints', 'Office', 'Hour']);

  const [ketikan, setKetikan] = useState('');

  const [onEditTodo, setOnEditTodo] = useState(null);

  const [editTodo, setEditTodo] = useState('');

  // //Ternary Operator
  // onEditTodo === 1
  //   ? console.log('a')
  //   : onEditTodo === 2
  //   ? console.log('b')
  //   : onEditTodo === 3
  //   ? console.log('c')
  //   : console.log('d');

  // //If else
  // if (onEditTodo === 1) {
  //   console.log('a');
  // } else if (onEditTodo === 2) {
  //   console.log('b');
  // } else if (onEditTodo === 3) {
  //   console.log('c');
  // } else {
  //   console.log('d');
  // }

  const handleSave = index => {
    let newTodo = [...todo];
    newTodo[index] = editTodo;
    setTodo(newTodo);
    setOnEditTodo(null);
    setEditTodo('');
  };

  return (
    <View>
      <Text>TODO APP</Text>
      <TextInput
        placeholder="placeholder"
        value={ketikan}
        onChangeText={e => setKetikan(e)}
        // multiline={true}
      />
      <Text>Isi ketikan user adalah : {ketikan}</Text>
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
    </View>
  );
}
