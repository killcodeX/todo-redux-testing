import {
  GET_ALL_TASK,
  CREATE_NEW_TASK,
  DELETE_TASK,
  TASK_COMPLETED,
  TASK_PENDING
} from "./constants";

// Internal Data State of the Store
const initialState = {
  allTask: [
    {
      id: 1,
      task: "Study",
      status: "completed"
    },
    {
      id: 2,
      task: "Work",
      status: "pending"
    },
    {
      id: 3,
      task: "Gym",
      status: "pending"
    }
  ]
};

// Reducers to update the Internal function
const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TASK:
      let tsk = {
        id: Math.floor(Math.random() * 100),
        task: action.task,
        status: "pending"
      };
      return {
        ...state,
        allTask: [...state.allTask, tsk]
      };
    case DELETE_TASK:
      let allTask = state.allTask.filter((item) => item.id != action.id);
      console.log(allTask);
      return {
        ...state,
        allTask: allTask
      };
    default:
      return state;
  }
};

export default TaskReducer;
