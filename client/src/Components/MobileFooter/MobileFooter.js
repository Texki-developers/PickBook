import React, { useState } from 'react'
import {GrAdd} from 'react-icons/gr';
import {FaFilter} from 'react-icons/fa'
import {RiAccountCircleFill} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'
import './MobileFooter.scss'
import MobileOptions from './MobileOptions';
import {useDispatch,useSelector} from 'react-redux' 
import instance from '../../Assets/server/instance'
import Actions from '../../Assets/Essentials/EssentialAction';
import {FiLogOut} from 'react-icons/fi'

const MobileFooter = () => {
    const [logoutBtn, setLogoutBtn] = useState(false)
    const essentials = useSelector(state=>state.essentials)
    const dispatch = useDispatch();

    return (
        <div className="mobile-footer">
            {essentials.userData&&<MobileOptions option="Logout"  click="logout" icon={<FiLogOut/>}/>}
            <MobileOptions option="Add books" click="/add-book" icon={<GrAdd/>}/>
            <MobileOptions option="Filter" click="filter" icon={<FaFilter/>}/>
            <MobileOptions option="Account" click={essentials.isLogin?'logout':null} 
            
            icon={essentials.isLogin? 
            <img src={essentials.userData.photo} 
             alt="" /> :
            <RiAccountCircleFill/>}/>
        </div>
    )
}

export default MobileFooter;
