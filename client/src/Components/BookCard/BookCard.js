import React from 'react'
import { Link } from 'react-router-dom';
import './BookCard.scss'
const BookCard = (props) => {
    return (
        <Link to="/book-page/:id" className="bookCard" style={{backgroundImage: `url(${props.coverImage})`}}>
            
        </Link>
    )
}

export default BookCard;
