// // TodoForm.js
// import React, { useState } from 'react';
// import './TodoForm.css'; // Importer stilark for formen

// function TodoForm({ isOpen, onClose, onCreateTask }) {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [date, setDate] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (title.trim()) {
//             onCreateTask({ title, description, date });
//             setTitle('');
//             setDescription('');
//             setDate('');
//             onClose(); // Luk formularen efter oprettelse af opgaven
//         }
//     };

//     return (
//         <div className={`todo-form ${isOpen ? 'open' : ''}`}>
//             <div className="form-container">
//                 <h2>New Todo</h2>
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="title">Title:</label>
//                     <input
//                         type="text"
//                         id="title"
//                         name="title"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         required
//                     />
//                     <label htmlFor="description">Description:</label>
//                     <textarea
//                         id="description"
//                         name="description"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                     ></textarea>
//                     <label htmlFor="date">Due Date:</label>
//                     <input
//                         type="date"
//                         id="date"
//                         name="date"
//                         value={date}
//                         onChange={(e) => setDate(e.target.value)}
//                     />
//                     <button type="submit">Add Task</button>
//                     <button type="button" onClick={onClose}>Cancel</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default TodoForm;
