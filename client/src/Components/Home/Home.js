import React, { useEffect, useState } from 'react'
import instance from '../../Assets/server/instance'
import PreLoader from '../PreLoader/PreLoader'
import HeroBg from './HeroBg/HeroBg'
import Homecards from './HomeCards/Homecards'


const Home = () => {
    const [loading, setLoading] = useState(true)
    const [homeBooks, setHomeBooks] = useState(null)
    
    useEffect(() => {
        const getHomeBooks = async () => {
            instance.get('/get-home-books').then(async (response) => {
                if(response.status === 200){
                    await setHomeBooks(
                        {
                            newBooks:response.data.newBooks,
                            mostViewedBooks: response.data.mostViewedBooks
                        });
                    setLoading(false)
                }else{
                    getHomeBooks();
                }
            })
        }
        getHomeBooks();
    }, [])

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
