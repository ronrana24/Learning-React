import { ImCross } from "react-icons/im";
import { HiPencilSquare } from "react-icons/hi2";
import { FaRegSave } from "react-icons/fa";
import "./style.css";
import { Todo, useTodo } from "../contexts/Context";
import { useEffect, useState } from "react";

export default function ListItem({ completed, id, message }: Todo) {
  const [edit, setEdit] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

  const handleUpdateButton = () => {
    if (edit) {
      const updatedTodo: Todo = {
        id,
        message: text,
        completed: false,
      };

      updateTodo(id, updatedTodo);
    }
    setEdit(!edit);
  };

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  useEffect(() => {
    setText(message);
  }, [edit]);

  return (
    <div className="list-item-container" key={id}>
      <input
        type="checkbox"
        className="list-item-checkbox"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      />
      <input
        className="list-item-text"
        type="text"
        value={edit ? text : message}
        readOnly={!edit}
        onChange={(e) => setText(e.target.value)}
        style={{
          cursor: !edit ? "default" : "",
        }}
      />
      <div className="list-item-actions">
        <button className="edit-button" onClick={handleUpdateButton}>
          {!edit ? <HiPencilSquare /> : <FaRegSave />}
        </button>
        <button className="delete-button" onClick={handleDeleteTodo}>
          <ImCross />
        </button>
      </div>
    </div>
  );
}
