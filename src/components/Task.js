// Task.js
import React, { useState } from 'react';
import TaskDetails from './TaskDetails';
import DeleteButton from './DeleteButton';

function Task({ task, onMoveTask, onDeleteTask }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', task.id);
    };

    // Tilføj konsoludskrift her
    console.log("onDeleteTask prop in Task:", onDeleteTask);

    const handleDelete = () => {
        onDeleteTask(task.id);
    };

    return (
        <div
            className={`task ${isExpanded ? 'expanded' : ''}`}
            draggable
            onClick={handleToggleExpand}
            onDragStart={handleDragStart}
        >
            <div className="title">{task.title}</div>
            {isExpanded && <TaskDetails task={task} />}
            <DeleteButton onClick={handleDelete} />
        </div>
    );
}

export default Task;
