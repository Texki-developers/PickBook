import React from 'react'
import './Suggetions.scss'
import { useDispatch,} from 'react-redux';
import FilterAction from '../../../Assets/Filter/FilterAction'
import {useHistory} from 'react-router-dom'

function Suggetions({dataList}) {
    
    const history = useHistory();
    const dispatch = useDispatch();

    const searchClick = async(data)=>{
        await dispatch(FilterAction.searchData(data))
        history.push('booklist')
    }

    return (
        <div className='sug_container'>
            
            {dataList.map((d,i)=>(
                <div key={i} onClick={()=>searchClick(d.title)}>
                    <p onClick={()=>searchClick(d.title)}>{d.title}</p>
                </div>
            ))}

        </div>
    )
}

export default Suggetions
