import React, { useState } from 'react'
import './Header.scss'
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../../Assets/Essentials/EssentialAction';
import { useHistory } from 'react-router-dom'
import instance from '../../Assets/server/instance';
import FilterAction from '../../Assets/Filter/FilterAction'
import Suggetions from './Suggetions/Suggetions'
import LogOut from '../Home/LogOut/LogOut'
import { FiLogOut } from 'react-icons/fi';

function Header() {
    const dispath = useDispatch();
    const essentials = useSelector(state => state.essentials)
    const history = useHistory();
    const [search, setSearch] = useState('')
    const [suggesions, setSuggestions] = useState([])
    const [logoutBtn, setLogoutBtn] = useState(false)

    const handleFilter = () => {
        dispath(Actions.getEssentials());
        dispath(Actions.toggleFilter())
    }

    const reset = () => {
        setSearch('')
        setSuggestions([])
    }

    const searchClick = async () => {
        await dispath(FilterAction.searchData(search))
        reset()
        history.push('booklist')
    }

    const searchHandle = async (val) => {
        setSearch(val);

        await instance.post('/search', { text: search }).then(async res => {
            await setSuggestions(res.data)
            await console.log(res);

        })

    }

    const logout = async () => {
        setLogoutBtn(!logoutBtn)
    }
    const logoutAction = async () =>{
        if (window.confirm('Do you want to LogOut?')) {
            setLogoutBtn(!logoutBtn)
            await instance.get('/logout').then(async res => {

                if (res.status === 200) {
                    await dispath(Actions.logout());
                    alert('You logout sucessfully')
                } else {
                    alert('Somerthink went Worng!\nTry again later')

                }

            })
        }
    }

    return (
        <div className='header_container'>
            <h1 onClick={() => history.push('/')} ><strong>PICK</strong>BOOKS</h1>
            <button className={logoutBtn ? "logout-btn" : "logout-btn logout-btn-hide"} onClick={logoutAction}><FiLogOut className="logout-icon" />Logout</button>

            <div className="search_container">
                <button onClick={handleFilter}>Filter<FilterListIcon /></button>
                <div className="search_input">
                    <input type="text"
                        placeholder='Search books, generes, authors......'
                        value={search}
                        onChange={e => searchHandle(e.target.value)}
                        list='search_suggestions'
                    />
                    <Suggetions dataList={suggesions} reset={() => reset()} />
                </div>

                <SearchIcon onClick={() => searchClick()} />
            </div>
            {essentials.isLogin ? <img src={essentials.userData.photo}

                onClick={logout} alt="" /> : <PersonIcon />}
        </div>
    )
}

export default Header
