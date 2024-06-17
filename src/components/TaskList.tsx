import React from 'react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, updateTask, deleteTask, toggleComplete }) => {
  const handleEdit = (task: Task) => {
    const newTitle = prompt('Edit Task Title', task.title);
    const newDueDate = prompt('Edit Due Date', task.dueDate);
    if (newTitle && newDueDate) {
      updateTask({ ...task, title: newTitle, dueDate: newDueDate });
    }
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <span>{task.title} - {task.dueDate}</span>
          <button onClick={() => toggleComplete(task.id)}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => handleEdit(task)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
