import React from 'react'
import './BookCard.scss'
const BookCard = (props) => {
    console.log(props.coverImage);
    return (
        <div className="bookCard" style={{backgroundImage: `url(${props.coverImage})`}}>
            
        </div>
    )
}

export default BookCard;
