import React, { useState } from 'react'
import './Header.scss'
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import Filter from '../Filter/Filter';

function Header() {
    const [filter,setFilter] = useState(false);
    console.log(filter);
    return (
        <div className='header_container'>
            <h1><strong>PICK</strong>BOOKS</h1>

            <div className="search_container">
                <button onClick={()=>setFilter(!filter)}>Filter<FilterListIcon/></button>
                <input type="text" 
                placeholder='Search books, generes, authors......' />
                <SearchIcon/>
            </div>
            {filter?<Filter/>:<PersonIcon/>}
        </div>
    )
}

export default Header
