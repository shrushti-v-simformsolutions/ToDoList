import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteTask, editTask, taskListState } from '../redux/taskSlice';
import TodoHeader from './TodoHeader';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos: any = useSelector<RootState, taskListState>((state: any) => state.tasks);
  const [updatedValue, setUpdatedValue] = useState<any>();
  const [value, setValue] = useState<any>(updatedValue);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [edited, setEdited] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  const onDelete = (id) => {
    dispatch(deleteTask({ id: id }));
  };

  const renderItem = ({ item }) => {

    return (
      <View style={styles.item}>
        <TextInput
          style={styles.title}
          onChangeText={(value1) => {
            setValue(value1);
          }}
          placeholder={item.list}
          editable={isEdit}
          value={selected === item.id ? value : ''}
        />
        <View
          style={styles.container}
        >
          {edited && selected === item.id ?
            <TouchableOpacity
              style={styles.edit}
              onPress={() => {
                setEdited(false);
                setIsEdit(false);
                selected === item.id && dispatch(editTask({ id: item.id, list: value }));
                setValue('');
              }}
            >
              <Ionicons name={'checkmark-done'} size={26} color={'green'} />
            </TouchableOpacity>
            : <TouchableOpacity
              style={styles.edit}
              onPress={() => {
                var result = todos.find(i => i.id === item.id);
                setSelected(result.id);
                setIsEdit(true);
                setEdited(true);
              }}
            >
              <Icons name={'square-edit-outline'} size={26} color={'red'} />
            </TouchableOpacity>}
          <TouchableOpacity
            onPress={() => onDelete(item.id)}
          >
            <Ionicons name={'trash'} size={26} color={'red'} />
          </TouchableOpacity>
        </View>
      </View>
    )
  };

  return (
    <View>
      <TodoHeader onChange={setUpdatedValue} />
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  edit: {
    marginRight: 10
  },
});

export default TodoList;