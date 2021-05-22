import React,{useState} from 'react'
import './Header.scss'
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../../Assets/Essentials/EssentialAction';
import {useHistory} from 'react-router-dom'
import instance from '../../Assets/server/instance';
import FilterAction from '../../Assets/Filter/FilterAction'



function Header() {
    const dispath = useDispatch();
    const essentials = useSelector(state=>state.essentials)
    const history = useHistory();
    const [search,setSearch] = useState('')
    const [suggesions,setSuggestions] = useState([])
    const handleFilter = ()=>{
        dispath(Actions.getEssentials());
        dispath(Actions.toggleFilter())
    }


    const searchClick = async()=>{
        await dispath(FilterAction.searchData(search))
        history.push('booklist')
    }

    const searchHandle = async(val)=>{
        setSearch(val);

        await instance.post('/search',{text:search}).then(async res=>{
            await setSuggestions(res.data)
            await console.log(res);
        })

    }

    const logout =async ()=>{

         

         if(window.confirm('Do you want to LogOut?')){
            await instance.get('/logout').then(async res=>{
                
                if(res.status === 200){
                    await dispath(Actions.logout());
                    alert('You logout sucessfully')
                }else{
                    alert('Somerthink went Worng!\nTry again later')
                    
                }
                
            })
        }
    }

    return (
        <div className='header_container'>
            <h1 onClick={()=>history.push('/')} ><strong>PICK</strong>BOOKS</h1>

            <div className="search_container">
                <button onClick = {handleFilter}>Filter<FilterListIcon/></button>
                <input type="text" 
                placeholder='Search books, generes, authors......'
                value={search}
                onChange={e=>searchHandle(e.target.value)}
                list='search_suggestions'
                />
                <datalist id='search_suggestions'>
                    {suggesions.map((d,i)=>(
                        <option value={d.title}></option>
                    ))}
                </datalist>
                <SearchIcon onClick={()=>searchClick()}/>
            </div>
            {essentials.isLogin? <img src={essentials.userData.photo} 
            
            onClick={logout} alt="" />:<PersonIcon/>}
        </div>
    )
}

export default Header
