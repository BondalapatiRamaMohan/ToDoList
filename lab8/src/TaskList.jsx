import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onEdit, onDelete, onToggleCompletion }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          task={task}
          index={index + 1} 
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </div>
  );
};

export default TaskList;
