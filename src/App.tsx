import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import AddTask from "./components/addTask/Addtask";
import { ToDoModel } from "./models/model";
import TaskCard from "./components/taskCard/TaskCard";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<ToDoModel[]>([]);

  function handleSubmitTask(e: React.FormEvent): void {
    e.preventDefault();
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        task: todo,
        completed: false,
      },
    ]);
    setTodo("");
  }

  return (
    <div className="App">
      <Header />
      <AddTask
        todo={todo}
        setTodo={setTodo}
        handleSubmitTask={handleSubmitTask}
      />
      <div>
        {tasks.length > 0
          ? tasks.map((eachTask) => (
              <TaskCard setTasks={setTasks} task={eachTask} key={eachTask.id} />
            ))
          : null}
      </div>
    </div>
  );
};

export default App;
