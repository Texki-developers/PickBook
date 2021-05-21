import React from 'react'
import './Header.scss'
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../../Assets/Essentials/EssentialAction';
import {useHistory} from 'react-router-dom'
import instance from '../../Assets/server/instance'

function Header() {
    const dispath = useDispatch();
    const essentials = useSelector(state=>state.essentials)
    const history = useHistory();

    const handleFilter = ()=>{
        dispath(Actions.getEssentials());
        dispath(Actions.toggleFilter())
    }

    const logout = ()=>{

         var bla = window.confirm('Do you want to LogOut?')
         if(bla){
            instance.get('/logout').then(res=>{
                
                if(res.status === 200){
                    dispath(Actions.logout);
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
                placeholder='Search books, generes, authors......' />
                <SearchIcon/>
            </div>
            {essentials.isLogin? <img src={essentials.userData.photo} 
            
            onClick={logout} alt="" />:<PersonIcon/>}
        </div>
    )
}

export default Header
