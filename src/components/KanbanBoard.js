// KanbanBoard.js
import React from 'react';
import KanbanColumn from './KanbanColumn';

function KanbanBoard({ tasks, onCreateTask, onMoveTask, onDeleteTask }) {
    console.log("onDeleteTask function in KanbanBoard:", onDeleteTask);

    return (
        <div className="kanban-board">
            <KanbanColumn
                title="To Do"
                column="todo"
                tasks={tasks.filter(task => task.column === 'todo')}
                onCreateTask={onCreateTask}
                onMoveTask={onMoveTask}
                onDeleteTask={onDeleteTask}
            />
            <KanbanColumn
                title="In Progress"
                column="inprogress"
                tasks={tasks.filter(task => task.column === 'inprogress')}
                onMoveTask={onMoveTask}
                onDeleteTask={onDeleteTask}
            />
            <KanbanColumn
                title="Done"
                column="done"
                tasks={tasks.filter(task => task.column === 'done')}
                onMoveTask={onMoveTask}
                onDeleteTask={onDeleteTask}
            />
        </div>
    );
}

export default KanbanBoard;
