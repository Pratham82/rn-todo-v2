import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

import {TodoComponentProps} from '../types/Todo.types';
import TodoSquare from './TodoSquare';

const TodoComponent = (props: TodoComponentProps) => {
  const {todo, handleToggle = () => {}, handleRemove = () => {}} = props;
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity
        key={todo?.id}
        activeOpacity={0.5}
        onPress={() => handleToggle(todo?.id)}
        style={styles.todoBtn}>
        <TodoSquare todo={todo} />
      </TouchableOpacity>
      <Text style={todo?.completed ? styles.todoActive : styles.todo}>
        {todo.title}
      </Text>

      <TouchableOpacity
        key={todo?.id}
        activeOpacity={0.5}
        onPress={() => handleRemove(todo?.id)}
        style={styles.removeStyles}>
        <Text>❌</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  todo: {
    fontSize: 20,
    marginLeft: 2,
  },
  todoActive: {
    fontSize: 20,
    marginLeft: 2,
  },
  todoBtn: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  removeStyles: {
    marginLeft: 'auto',
  },
});

export default TodoComponent;
