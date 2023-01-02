import {
  GET_ALL_TASK,
  CREATE_NEW_TASK,
  DELETE_TASK,
  TASK_COMPLETED,
  TASK_PENDING
} from "./constants";

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

// Reducers
const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TASK:
      return {
        ...state,
        allPost: [...action.post]
      };
    default:
      return state;
  }
};

export default TaskReducer;
