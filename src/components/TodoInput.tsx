import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import {TodoInputProps} from '../types/Todo.types';
const TodoInput = (props: TodoInputProps) => {
  const {text = '', setText = () => {}, handleAddNewTodo = () => {}} = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Add New Todo"
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity onPress={handleAddNewTodo} style={styles.buttonStyles}>
        <Text style={styles.buttonText}>✔️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  inputStyle: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 22,
    flex: 2,
  },
  buttonStyles: {
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  buttonText: {
    fontSize: 22,
  },
});

export default TodoInput;
