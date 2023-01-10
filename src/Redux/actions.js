import {
    GET_ALL_TASK,
    CREATE_NEW_TASK,
    DELETE_TASK,
    TASK_COMPLETED,
    TASK_PENDING
  } from "./constants";
  
  // Action function to add new task to the task list
  export const addTask = (data) => {
    return {
      type: GET_ALL_TASK,
      task: data
    };
  };
  
  // Action function to delete task to the task list
  export const deleteTask = (id) => {
    console.log("delete task called");
    return {
      type: DELETE_TASK,
      id: id
    };
  };
  