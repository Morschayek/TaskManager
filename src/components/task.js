import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, updateTask } from '../redux/actions';

const Task = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    onUpdate({ id: task.id, title, description });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  deleteTask,
  updateTask,
};

export default connect(null, mapDispatchToProps)(Task);
