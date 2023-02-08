import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const TodoHeader = () => {
const [todo, setTodo] = useState("");
const dispatch = useDispatch();

const onSubmit = () => {
  if(todo.trim().length === 0) {
    alert('Please enter a task!!');
    setTodo("");
    return;
  }
  dispatch(addTask({task: todo}));
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

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    padding: 10,
    margin: 10,
    width: '90%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    padding: 10,
    margin: 10,
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  buttonText: { 
    color: 'white', 
  },
});

export default TodoHeader;