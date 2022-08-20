export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoComponentProps {
  todo: Todo;
  handleToggle?: (id: number) => void;
  handleRemove?: (id: number) => void;
}

export interface TodoInputProps {
  text: string;
  setText: (text: string) => void;
  handleAddNewTodo: () => void;
}
