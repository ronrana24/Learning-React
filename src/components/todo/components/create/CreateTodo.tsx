import { useState } from "react";
import "./style.css";
import { useTodo, Todo } from "../contexts/Context";

export default function CreateTodo() {
  const [todoText, setTodoText] = useState<string>("");

  const { addTodo } = useTodo();

  const handleCreateTodo = () => {
    if (todoText.length === 0) {
      alert("Cannot add!");
      return;
    }
    const todo: Todo = {
      id: new Date().getTime(),
      completed: false,
      message: todoText,
    };
    addTodo(todo);
    setTodoText("");
  };

  return (
    <div className="create-todo-container">
      <input
        className="create-todo-input"
        type="text"
        placeholder="Write here..."
        name="todo"
        value={todoText}
        onChange={(e) => setTodoText(e.currentTarget.value)}
      />
      <button className="create-todo-button" onClick={handleCreateTodo}>
        Add
      </button>
    </div>
  );
}
