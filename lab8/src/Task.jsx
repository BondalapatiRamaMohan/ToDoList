import React, { useState } from 'react';

const Task = ({ task, index, onEdit, onDelete, onToggleCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = (e) => {
    e.stopPropagation(); 
    onEdit(task.id, editText);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div className="task">
      {isEditing ? (
        <div className="task-edit">
          <input
            type="text"
            value={editText}
            onChange={handleChange}
          />
          <div className="edit-buttons">
            <button className="save-button" onClick={handleSave}>Save</button>
            <button className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="task-view">
          <span
            onClick={() => onToggleCompletion(task.id)}
            className={task.completed ? 'completed' : ''}
          >
            {index}. {task.text}
          </span>
          <div className="edit-buttons">
            <button className="edit-button" onClick={(e) => { e.stopPropagation(); setIsEditing(true); }}>Edit</button>
            <button className="delete-button" onClick={(e) => { e.stopPropagation(); onDelete(task.id); }}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
