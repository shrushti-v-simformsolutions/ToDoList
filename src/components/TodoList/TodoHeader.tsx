import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/reducers/taskSlice';
import styles from './TodoHeaderStyles';

const TodoHeader = ({ onChange }) => {
const [todo, setTodo] = useState("");
const dispatch = useDispatch();

const onSubmit = () => {
  if(todo.trim().length === 0) {
    alert('Please enter a task!!');
    setTodo("");
    return;
  }
  dispatch(addTask({id: todo, list: todo}));
  onChange(todo);
  setTodo("");
};

  return (
    <View>
      <Text style={styles.title}>
        Todo List
      </Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Add Todo"
          onChangeText={setTodo}
          value={todo}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
     </View>
  );
};

export default TodoHeader;