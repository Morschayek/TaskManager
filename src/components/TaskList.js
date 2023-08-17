import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, addTask, updateTask } from '../redux/actions';
import Task from './task';
import TaskForm from './TaskForm';
import './TaskList.css';

const TaskList = ({ tasks, deleteTask, addTask, updateTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="task-list-container">
      {tasks.map((task) => (
        <div key={task.id} className="task-container">
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
                deleteTask(task.id);
                delete updatedTask.id;
                addTask(updatedTask);
              }}
              onEdit={() => handleEdit(task)}
            />
          )}
        </div>
      ))}
    </div>
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
