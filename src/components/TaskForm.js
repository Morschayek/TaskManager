import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addTask, updateTask } from '../redux/actions';
import { TaskFormContainer, TaskInput, AddButton } from './TaskFormStyle'; 

const TaskForm = ({ addTask, updateTask, taskToEdit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      updateTask({ ...taskToEdit, title, description });
      onCancel();
    } else {
      addTask({ title, description });
    }
    setTitle('');
    setDescription('');
  };

  return (
    <TaskFormContainer>
      <form onSubmit={handleSubmit}>
        <TaskInput
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TaskInput
          type="text"
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <AddButton type="submit">&#10003;</AddButton>
      </form>
    </TaskFormContainer>
  );
};

const mapDispatchToProps = {
  addTask,
  updateTask,
};

export default connect(null, mapDispatchToProps)(TaskForm);
