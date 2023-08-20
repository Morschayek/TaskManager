// Action types
//In Redux, actions are plain JavaScript objects that describe a change in the application's state. 
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

// Action creators
//Action creators are functions that create and return action objects. 
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});
