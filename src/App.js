// App.js
import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [
    ];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleCreateTask = ({ title, description, date }) => {
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      description,
      date,
      column: 'todo',
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
    setIsFormOpen(false); // Close form after creating task
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const onMoveTask = (taskId, targetColumn) => {
    // Implement the logic to move the task to the target column
    // Update the 'column' property of the task with taskId to targetColumn
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, column: targetColumn } : task
    );
    setTasks(updatedTasks);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mikkels Todo List</h1>
        <button className="new-todo-btn" onClick={() => setIsFormOpen(true)}>New Todo</button>
      </header>
      {isFormOpen && (
        <div className="overlay">
          <div className="form-container">
            <h2>New Todo</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const title = e.target.elements.title.value.trim();
              const description = e.target.elements.description.value.trim();
              const date = e.target.elements.date.value.trim();
              if (title) {
                handleCreateTask({ title, description, date });
                e.target.reset();
                setIsFormOpen(false); // Close form after creating task
              }
            }}>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" required />
              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description"></textarea>
              <label htmlFor="date">Due Date:</label>
              <input type="date" id="date" name="date" />
              <button type="submit">Add Task</button>
              <button type="button" onClick={() => setIsFormOpen(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
      <main>
        <KanbanBoard
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onMoveTask={onMoveTask}
        // Pass onDeleteTask function as prop
        />
      </main>
    </div>
  );
}

export default App;
