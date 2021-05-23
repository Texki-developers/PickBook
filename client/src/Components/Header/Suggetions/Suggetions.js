import React from 'react'
import './Suggetions.scss'
import {useHistory} from 'react-router-dom'

function Suggetions({dataList,reset}) {
    
    const history = useHistory();

    const searchClick = async(id)=>{
        reset()
        history.push(`/book/${id}`)
    }

    return (
        <div className='sug_container'>
            
            {dataList.map((d,i)=>(
                <div key={i} onClick={()=>searchClick(d._id)}>
                    <p onClick={()=>searchClick(d._id)}>{d.title}</p>
                </div>
            ))}

        </div>
    )
}

export default Suggetions
