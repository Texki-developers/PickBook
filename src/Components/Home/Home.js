import React from 'react'
import HeroBg from './HeroBg/HeroBg'
import Homecards from './HomeCards/Homecards'
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
const Home = () => {
    return (
        <div>
            <HeroBg/>
            <Homecards bookCover={bookCover} heading='Newly Uploaded Books'/>
            <Homecards bookCover={bookCover} heading='Most Viewed Books'/>
        </div>
    )
}

export default Home;
