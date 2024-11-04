import React, { useState } from 'react';
import { Todo } from './types';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Add a new to-do item
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(), // unique id based on timestamp
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle a to-do item's completion status
  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete a to-do item
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
