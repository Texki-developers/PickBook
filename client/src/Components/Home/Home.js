import React, { useEffect, useState } from 'react'
import instance from '../../Assets/server/instance'
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
    const [homeBooks,setHomeBook] = useState({})
    useEffect(() => {
        const getHomeBooks = async() => {
            const books = await instance.get('/');
            setHomeBook(books.data)
            console.log("books",books);
        }
        getHomeBooks();
    }, [])
    return (
        <div>
            <HeroBg/>
            <Homecards bookCover={bookCover} heading='Newly Uploaded Books'/>
            <Homecards bookCover={bookCover} heading='Most Viewed Books'/>
        </div>
    )
}

export default Home;
