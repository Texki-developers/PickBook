import React from 'react'
import { Link } from 'react-router-dom';
import './AddIcon.scss'
const AddIconButton = () => {
    return (
        <Link to="/add-book" className="add-icon-large">
            <i class="fas fa-plus"></i>
            <Link to="/add-book" className="add-dailogue">
                Add Books
            </Link>
        </Link>
    )
}

export default AddIconButton;
