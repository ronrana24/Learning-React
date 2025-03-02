import { createContext, useContext } from "react";

export interface Todo {
  id: number;
  message: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (id: number, updatedTodo: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleCompleted: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

export const TodoProvider = TodoContext.Provider;
