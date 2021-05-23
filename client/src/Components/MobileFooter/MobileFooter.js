import React from 'react'
import {GrAdd} from 'react-icons/gr';
import {FaFilter} from 'react-icons/fa'
import {RiAccountCircleFill} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'
import './MobileFooter.scss'
import MobileOptions from './MobileOptions';
import {useDispatch,useSelector} from 'react-redux' 
import instance from '../../Assets/server/instance'
import Actions from '../../Assets/Essentials/EssentialAction';

const MobileFooter = () => {

    const essentials = useSelector(state=>state.essentials)
    const dispatch = useDispatch();

    const logout =async ()=>{

         

        if(window.confirm('Do you want to LogOut?')){
           await instance.get('/logout').then(async res=>{
               
               if(res.status === 200){
                   await dispatch(Actions.logout());
                   alert('You logout sucessfully')
               }else{
                   alert('Somerthink went Worng!\nTry again later')
                   
               }
               
           })
       }
   }

    return (
        <div className="mobile-footer">
            <MobileOptions option="Search"  icon={<BsSearch/>}/>
            <MobileOptions option="Add books" click="/add-book" icon={<GrAdd/>}/>
            <MobileOptions option="Filter" click="filter" icon={<FaFilter/>}/>
            <MobileOptions option="Account" click={essentials.isLogin?'logout':null} 
            icon={essentials.isLogin? 
            <img src={essentials.userData.photo} 
            
            onClick={logout} alt="" /> :
            <RiAccountCircleFill/>}/>
        </div>
    )
}

export default MobileFooter;
