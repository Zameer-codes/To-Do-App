import React, { useEffect, useRef, useState } from "react";
import { ToDoModel } from "../../models/model";
import "./TaskCard.css";
import "../../App.css";
import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ToDoModel[]>>;
  task: ToDoModel;
}
const TaskCard: React.FC<Props> = ({ setTasks, task }) => {
  const [editFlag, setEditFlag] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<string>(task.task);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleEditTask(): void {
    setEditFlag(true);
  }

  function handleSaveTask(): void {
    setTasks((tasks) => [
      ...tasks.map((eachTask) =>
        eachTask.id === task.id
          ? { id: task.id, task: editedTask, completed: task.completed }
          : eachTask
      ),
    ]);
    setEditFlag(false);
  }
  function handleDeleteTask(): void {
    setTasks((tasks) => tasks.filter((eachTask) => eachTask.id !== task.id));
  }

  function handleToggleTaskCompletion(): void {
    setTasks((tasks) => [
      ...tasks.map((eachTask) =>
        eachTask.id === task.id
          ? { id: task.id, task: task.task, completed: !task.completed }
          : eachTask
      ),
    ]);
  }

  useEffect(()=>{
    inputRef.current?.focus();
  },[editFlag]);
  return (
    <div className="task-card">
      {editFlag && !task.completed ? (
        <input
          ref={inputRef}
          className="task-card-input"
          value={editedTask}
          onChange={(e) => {
            setEditedTask(e.target.value);
          }}
          onBlur={() => handleSaveTask()}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSaveTask();
            }
          }}
        />
      ) : (
        <>
          {task.completed ? (
            <s className="task-content">{task.task}</s>
          ) : (
            <span className="task-content">{task.task}</span>
          )}
        </>
      )}
      <EditOutlined className="task-icons edit-icon" onClick={handleEditTask} />
      <DeleteOutlined
        className="task-icons delete-icon"
        onClick={handleDeleteTask}
      />
      <CheckOutlined
        className="task-icons check-icon"
        onClick={handleToggleTaskCompletion}
      />
    </div>
  );
};

export default TaskCard;
