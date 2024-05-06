// DeleteButton.js
import React from 'react';
import trashcan from '../assets/delete-svgrepo-com.svg';

function DeleteButton({ onClick }) {
    return (
        <button className="delete-button" onClick={onClick}>
            <img src={trashcan} alt="Delete" />
        </button>
    );
}

export default DeleteButton;
