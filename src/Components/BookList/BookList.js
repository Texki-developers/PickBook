import React from 'react'
import './BookList.scss'
import BookCard from '../BookCard/BookCard'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const BookList = ()=>{

    const bookCover = [
        {
            image:'/book-cover/cover1.jpg'
        },
        {
            image:'/book-cover/cover2.jpg'
        },
        {
            image:'/book-cover/cover3.jpg'
        },
        {
            image:'/book-cover/cover4.jpg'
        },
        {
            image:'/book-cover/cover5.jpg'
        },
        {
            image:'/book-cover/cover6.jpg'
        },
        {
            image:'/book-cover/cover7.jpg'
        },
        {
            image:'/book-cover/cover8.jpg'
        },
    ]


    return (
        <div className='booklist_container'>
            <h1>Good Old Books</h1>
            <div className='booklist_list' >
                {bookCover.map((d,i)=>(
                    <BookCard coverImage={d.image} key={i}/>
                ))} 
            </div>

            <div className="pagination">
                <ArrowBackIosIcon/>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <ArrowForwardIosIcon/>
            </div>
        </div>
    )
}

export default BookList
