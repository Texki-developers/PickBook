import React,{useState,useEffect} from 'react'
import './BookList.scss'
import BookCard from '../BookCard/BookCard'
import {useSelector} from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import instance from '../../Assets/server/instance'
import Loading from '../PreLoader/PreLoader'

const BookList = ()=>{
    const [bookList,setBookList] = useState([])
    const [loding,setLoading] = useState(true)
    const [currentPage,setCurrentPage] = useState(1);
    const postPerPage = 8;
    const filter = useSelector(state=>state.filter)


    useEffect(()=>{

        const getBooks = async ()=>{
            
           if(filter.isSearch){

             await instance.post('search',{text:filter.searchText}).then(async res=>{
                if(res.status===200){
                    await setBookList(res.data)
                    await setLoading(false)
                    // console.log(bookList);
                }else{
                    await getBooks();
                }
             })   


           }else if(filter.isFilter){
                await instance.post('/filter',filter.filterData).then(async res=>{
                    if(res.status===200){
                        await setBookList(res.data)
                        await setLoading(false)
                        // console.log(bookList);
                    }else{
                        await getBooks();
                    }
                })

            }else{

                await instance.get('/getallbooks').then(async res=>{
                    if(res.status === 200){
                        await setBookList(res.data)
                        await setLoading(false)
                    }else{
                        await getBooks()
                    }
                })
                
            }
            
            
        }
        // console.log(filter);
        getBooks()
    },[filter])

    const navigate = num=>{
        // console.log(bookList);
        if(currentPage===1 && num===-1){
            alert('Its the first page!')
        }else if(currentPage===totalPage && num===1){
            alert('its the last page')
        }else{
            setCurrentPage(currentPage+num)
        }
    }

    var totalPage = bookList.length/postPerPage>Math.floor(bookList.length/postPerPage)?
                    Math.floor(bookList.length/postPerPage+1):Math.floor(bookList.length/postPerPage)
        
    const indexOfLastPost = currentPage*postPerPage;
    const indexOfFirstPost = indexOfLastPost-postPerPage;
    const currentPosts = bookList.slice(indexOfFirstPost,indexOfLastPost);

    return (
        loding?<Loading/>:

        <div className='booklist_container'>
            <h1>Books Listed As You Wish</h1>
            <span>we found {bookList.length} results</span>
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
