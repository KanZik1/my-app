// KanbanColumn.js
import React, { useState } from 'react';
import Task from './Task';

function KanbanColumn({ title, column, tasks, onCreateTask, onMoveTask }) {
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTaskTitle.trim() !== '' && column === 'todo') {
            onCreateTask(newTaskTitle);
            setNewTaskTitle('');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData('text/plain');
        onMoveTask(parseInt(taskId), column);
    };

    return (
        <div className="kanban-column" onDragOver={handleDragOver} onDrop={handleDrop}>
            <h2>{title}</h2>
            <div className="tasks">
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        onMoveTask={onMoveTask}
                        onDeleteTask={onDeleteTask} />
                ))}
            </div>
        </div>
    );
}

export default KanbanColumn;
