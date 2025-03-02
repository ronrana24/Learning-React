import { useEffect, useState } from "react";
import { Todo, TodoProvider } from "./components/contexts/Context";
import CreateTodo from "./components/create/CreateTodo";
import ListItem from "./components/list-item/ListItem";

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const updateTodo = (id: number, updatedTodo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
      try {
        const todos: Todo[] = JSON.parse(storedTodos);
        if (Array.isArray(todos)) {
          setTodos(todos);
        }
      } catch (error) {
        console.error("Error parsing todos from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ addTodo, deleteTodo, todos, toggleCompleted, updateTodo }}
    >
      <h1>Manage your Todos</h1>
      <CreateTodo />
      {todos.map((todo: Todo, index: number) => (
        <ListItem key={index} {...todo} />
      ))}
    </TodoProvider>
  );
}
