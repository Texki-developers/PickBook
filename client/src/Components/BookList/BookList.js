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
    const [currentPage,setCurrentPage] = useState(3);
    const [postPerPage,setPostPerPage] = useState(8);



    useEffect(()=>{

        const getBooks = async ()=>{
            await instance.get('/getallbooks').then(async res=>{
                if(res.status === 200){
                    await setBookList(res.data)
                    await setLoading(false)
                }else{
                    await getBooks()
                }
            })
        }
        getBooks()
    },[])

    const navigate = num=>{
        if(currentPage===1 && num===-1 || currentPage===totalPage && num===1){
            alert('No more pages!')
        }else{
            setCurrentPage(currentPage+num)
        }
    }

    const totalPage = Math.floor(bookList.length/postPerPage+1) 
    const indexOfLastPost = currentPage*postPerPage;
    const indexOfFirstPost = indexOfLastPost-postPerPage;
    const currentPosts = bookList.slice(indexOfFirstPost,indexOfLastPost);

    return (
        loding?<Loading/>:

        <div className='booklist_container'>
            <h1>Good Old Books</h1>
            <div className='booklist_list' >
                {currentPosts.map((d,i)=>(
                    <BookCard coverImage={d.imageURL} key={i} bookId={d._id}/>
                ))} 
            </div>

            <div className="pagination">
                <ArrowBackIosIcon onClick={()=>navigate(-1)}/>
                {Array.from(Array(totalPage),(e,i)=>{
                    if(i+1===currentPage){
                        return <p className='active'>{i+1}</p>
                    }else{
                       return <p onClick={()=>setCurrentPage(i+1)}>{i+1}</p>
                    }
                })}
                <ArrowForwardIosIcon onClick={()=>navigate(1)}/>
            </div>
        </div>
    )
}

export default BookList
