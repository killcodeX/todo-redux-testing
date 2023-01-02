import React, { useState } from "react"
import "./styles.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allTask);
  const [inputTask, setInputTask] = useState()
  
  const submit = () => {
    console.log('submiting -->', inputTask)
  }
  return (
    <div className="App">
      <div className="header">
        <h1>Todo App - Redux</h1>
      </div>
      <div className="input-area">
        <input className="input" placeholder="Add New Task" 
        value={inputTask} onChange={() => setInputTask(e.target.value)}/>
        <button className="input-btn" onClick={submit}>Submit</button>
      </div>
      <div className="task-display">
        <h2>
          <strong>Tasks</strong>
        </h2>
        <div className="task-container">
          {data.map((item) => {
            return (
              <div className="tasks">
                <div className="task-left">
                  <input type="checkbox" />
                  <p>{item.task}</p>
                </div>
                <IoCloseCircleSharp />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
