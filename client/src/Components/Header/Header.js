import React from 'react'
import './Header.scss'
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../../Assets/Essentials/EssentialAction';


function Header() {
    const dispath = useDispatch();
    const essentials = useSelector(state=>state.essentials)

    const handleFilter = ()=>{
        dispath(Actions.getEssentials());
        dispath(Actions.toggleFilter())
    }

    return (
        <div className='header_container'>
            <h1><strong>PICK</strong>BOOKS</h1>

            <div className="search_container">
                <button onClick = {handleFilter}>Filter<FilterListIcon/></button>
                <input type="text" 
                placeholder='Search books, generes, authors......' />
                <SearchIcon/>
            </div>
            {essentials.isLogin? <img src={essentials.userData.photo} alt="" />:<PersonIcon/>}
        </div>
    )
}

export default Header
