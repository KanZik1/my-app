// TaskDetails.js
import React from 'react';


function TaskDetails({ task }) {
    return (
        <div className="task-details">
            <div><strong>Description:</strong> {task.description}</div>
            <div><strong>Due Date:</strong> {task.date}</div>
        </div>
    );
}

export default TaskDetails;
