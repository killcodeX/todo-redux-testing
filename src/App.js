import React, { useState } from "react";
import "./styles.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./Redux/actions";

export default function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allTask);
  const [inputTask, setInputTask] = useState();

  const submit = () => {
    //console.log("submit -->", inputTask);
    dispatch(addTask(inputTask));
  };

  const remove = (id) => {
    //console.log("submit -->", inputTask);
    dispatch(deleteTask(id));
  };
  return (
    <div className="App">
      <div className="header">
        <h1>Todo App - Redux</h1>
      </div>
      <div className="input-area">
        <input
          className="input"
          type="text"
          placeholder="Add New Task"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button className="input-btn" onClick={submit}>
          Submit
        </button>
      </div>
      <div className="task-display">
        <h2>
          <strong>Tasks</strong>
        </h2>
        <div className="task-container">
          {data.map((item) => {
            return (
              <div className="tasks" key={item.id}>
                <div className="task-left">
                  <input type="checkbox" checked={item.status === 'completed'}
                  />
                  <p>{item.task}</p>
                </div>
                <div className="remove-btn" onClick={() => remove(item.id)}>
                  <IoCloseCircleSharp />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
