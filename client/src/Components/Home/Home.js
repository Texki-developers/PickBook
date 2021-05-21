import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
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
    const [homeBooks,setHomeBooks] = useState(null)
    const dispatch = useDispatch();
    var newBooks = null;
    useEffect(() => {
        const getHomeBooks = async() => {
            return new Promise((resolve,reject) => {
                instance.get('/get-home-books').then(async(response) => {
                    newBooks = response.data.newBooks
                })
            })
        }
        getHomeBooks().then(()=>{
            console.log("homeBook");
        })
    }, [dispatch])

    console.log("home",newBooks);
    return (
        <div>
            <HeroBg/>
            <Homecards bookCover={homeBooks}  heading='Newly Uploaded Books'/>
            <Homecards bookCover={bookCover} heading='Most Viewed Books'/>
        </div>
    )
}

export default Home;
