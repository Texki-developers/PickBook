import React from 'react'
import BookCard from '../../BookCard/BookCard';
import './HomeCards.scss'
const Homecards = (props) => {

    return (
        <div className="home-cards">
            <h2>{props.heading}</h2>
            <div className="cards-slide">
                {
                    props.bookCover.map((item,index) => (
                        <BookCard key={index} bookId={item._id} coverImage={item.imageURL}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Homecards;
