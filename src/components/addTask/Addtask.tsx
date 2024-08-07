import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import "./AddTask.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmitTask : (e:React.FormEvent) => void;
}
const AddTask: React.FC<Props> = ({ todo, setTodo, handleSubmitTask }) => {
  return (
    <form className="add-task-container" onSubmit={handleSubmitTask}>
      <input
        placeholder="Type a task"
        className="add-task-input"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
      />
      <button type="submit" className="add-task-button">
        <PlusOutlined />
      </button>
    </form>
  );
};

export default AddTask;
