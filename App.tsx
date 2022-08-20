/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import TodoComponent from './src/components/Todo';
import TodoInput from './src/components/TodoInput';
import {Todo} from './src/types/Todo.types';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>('');

  const handleToggle = (id: number) => {
    setTodos((existingTodos: Todo[]) =>
      existingTodos.map(todo => {
        return todo.id === id ? {...todo, completed: !todo.completed} : todo;
      }),
    );
  };

  const handleRemove = (id: number) => {
    setTodos((existingTodos: Todo[]) =>
      existingTodos.filter((existingTodo: Todo) => {
        return existingTodo.id !== id;
      }),
    );
  };

  const handleAddNewTodo = () => {
    setText('');
    if (text.length > 0) {
      setTodos((existingTodos: Todo[]) => [
        ...existingTodos,
        {id: existingTodos.length + 1, title: text, completed: false},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.todoTitle}>Todos</Text>

      <TodoInput
        text={text}
        setText={setText}
        handleAddNewTodo={handleAddNewTodo}
      />
      <ScrollView>
        {todos.map(todo => (
          <TodoComponent
            todo={todo}
            handleToggle={handleToggle}
            handleRemove={handleRemove}
            key={todo.id}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70,
  },
  todoTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
