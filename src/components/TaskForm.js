import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="task-input"
        />
        <input
          type="text"
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="task-input"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(TaskForm);
