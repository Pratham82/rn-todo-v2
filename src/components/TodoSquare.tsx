import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TodoComponentProps} from '../types/Todo.types';

const TodoSquare = (props: TodoComponentProps) => {
  const {todo} = props;
  return (
    <View
      style={todo?.completed ? styles.todoSquareActive : styles.todoSquare}
    />
  );
};
export default TodoSquare;

const styles = StyleSheet.create({
  todoSquare: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    alignSelf: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  todoSquareActive: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    alignSelf: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: 'black',
  },
});
