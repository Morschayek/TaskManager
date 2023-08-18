import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, addTask, updateTask } from '../redux/actions';
import Task from './task';
import TaskForm from './TaskForm';
import {
  TaskListContainer,
  TaskContainer,
} from './TaskListStyle'; 

const TaskList = ({ tasks, deleteTask, addTask, updateTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <TaskListContainer>
      {tasks.map((task) => (
        <TaskContainer key={task.id}>
          {editingTask && editingTask.id === task.id ? (
            <TaskForm
              taskToEdit={editingTask}
              onCancel={() => setEditingTask(null)}
            />
          ) : (
            <Task
              task={task}
              onDelete={() => deleteTask(task.id)}
              onUpdate={(updatedTask) => {
                setEditingTask(null);
                updateTask(updatedTask); 
              }}
              onEdit={() => handleEdit(task)}
            />
          )}
        </TaskContainer>
      ))}
    </TaskListContainer>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  deleteTask,
  addTask,
  updateTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
