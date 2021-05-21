import React,{useState,useEffect} from 'react'
import './BookList.scss'
import BookCard from '../BookCard/BookCard'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import instance from '../../Assets/server/instance'
import Loading from '../PreLoader/PreLoader'

const BookList = ()=>{
    const [bookList,setBookList] = useState([])
    const [loding,setLoading] = useState(true)
    useEffect(()=>{

        const getBooks = async ()=>{
            var list = await instance.get('/getallbooks')
            console.log(list.data);
            setBookList(list.data)
            setLoading(false)
        }
        getBooks()
    },[])

    return (
        loding?<Loading/>:

        <div className='booklist_container'>
            <h1>Good Old Books</h1>
            <div className='booklist_list' >
                {bookList.map((d,i)=>(
                    <BookCard coverImage={d.imageURL} key={i} bookid={d._id}/>
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
