import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, updateTask } from '../redux/actions';
import { TaskContainer, TaskButtons, TaskInput, TaskInfo, EditButton, DeleteButton } from './TaskStyle';

const Task = ({ task, onDelete, onUpdate, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => { //The function to be called when the task is updated.
    onUpdate({ id: task.id, title, description });
    setIsEditing(false);
  };

  const handleDelete = () => { // The function to be called when the "Delete" button is clicked.
    onDelete(task.id);
  };

  return (
    <TaskContainer>
      <TaskInfo>
        {isEditing ? (
          <div>
            <TaskInput
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TaskInput
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <EditButton onClick={handleUpdate}>
              <span>&#10003;</span>
            </EditButton>
          </div>
        ) : (
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        )}
      </TaskInfo>
      <TaskButtons>
        <EditButton onClick={onEdit}>
          <span>&#9998;</span>
        </EditButton>
        <DeleteButton onClick={handleDelete}>
          <span>&#10006;</span>
        </DeleteButton>
      </TaskButtons>
    </TaskContainer>
  );
};

const mapDispatchToProps = {
  deleteTask,
  updateTask,
};

export default connect(null, mapDispatchToProps)(Task);
