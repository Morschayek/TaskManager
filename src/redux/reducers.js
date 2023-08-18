import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from './actions';

const initialState = {
  tasks: [],
  taskIdCounter: 1, 
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: state.taskIdCounter,
        title: action.payload.title,
        description: action.payload.description,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        taskIdCounter: state.taskIdCounter + 1,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        ),
      };
    default:
      return state;
  }
};

export default tasksReducer;
