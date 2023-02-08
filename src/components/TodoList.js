import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.tasks);

  const onDelete = (id) => {
    dispatch(deleteTask({ id: id }));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item?.list}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}
        >
          <Ionicons name={'trash'} size={26} color={'red'} />
        </TouchableOpacity>
      </View>
    )
  };

  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item?.id}
        renderItem={renderItem}
      />
     </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e9e9e9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  delete: {
    fontSize: 24,
    color: 'red',
  },
});

export default TodoList;