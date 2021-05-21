import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import instance from '../../Assets/server/instance'
import PreLoader from '../PreLoader/PreLoader'
import HeroBg from './HeroBg/HeroBg'
import Homecards from './HomeCards/Homecards'
const bookCover = [
    {
        image: '/book-cover/cover1.jpg'
    },
    {
        image: '/book-cover/cover2.jpg'
    },
    {
        image: '/book-cover/cover3.jpg'
    },
    {
        image: '/book-cover/cover4.jpg'
    },
    {
        image: '/book-cover/cover5.jpg'
    },
    {
        image: '/book-cover/cover6.jpg'
    },
    {
        image: '/book-cover/cover7.jpg'
    },
    {
        image: '/book-cover/cover8.jpg'
    },
]
const Home = () => {
    const [homeBooks, setHomeBooks] = useState(null)
    const [loading, setLoading] = useState(true)
    var newBooks = null;
    useEffect(() => {
        const getHomeBooks = async () => {
            instance.get('/get-home-books').then(async (response) => {
                await setHomeBooks(
                    {
                        newBooks:response.data.newBooks,
                        mostViewedBooks: response.data.mostViewedBooks
                    });
                setLoading(false)
            })
        }
        getHomeBooks();
    }, [])
    console.log("home", newBooks);
    return (
        <div>
            {loading ? <PreLoader /> :
                <>
                    <HeroBg />
                    <Homecards bookCover={homeBooks.newBooks} heading='Newly Uploaded Books' />
                    <Homecards bookCover={homeBooks.mostViewedBooks} heading='Most Viewed Books' />
                </>}
        </div>
    )
}

export default Home;
