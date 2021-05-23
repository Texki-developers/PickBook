import React from 'react'
import { useDispatch } from 'react-redux';
import './MobileOptions.scss'
import Actions from '../../Assets/Essentials/EssentialAction';
import { useHistory } from 'react-router-dom';
import instance from '../../Assets/server/instance'

const MobileOptions = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();


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

    const optionHandle = (event) => {
        const click = event.target.id;
        console.log(click);
        switch(click){
            case 'filter':
                dispatch(Actions.getEssentials())
                dispatch(Actions.toggleFilter());
                console.log('filter');
                break;
            case '/add-book':
                history.push('/add-book')
                break;
            case 'logout':
                logout()
                break;
            default:
                break;
        }
    }
    return (
        <div className="mobile-options" onClick={optionHandle}>
            {props.icon}
            <p>{props.option}</p>
            <div onClick={optionHandle} id={props.click} className="for-click"></div>
        </div>
    )
}

export default MobileOptions;
