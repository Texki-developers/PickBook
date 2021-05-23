import React, { useState } from 'react'
import './YearSelector.scss'

const  YearSelector = (props) => {
    const [year,setYear] = useState('')
    const handleInput = (event) => {
     setYear(event.target.value+'')
    }
    return (
        <div className="year-selector-container">
            <input onInput={handleInput} type="range" onChange={()=>props.setdata({year:year})} name="year-selector" id="year-selector" className="year-selector" min="1845" max="2021"/>
            <p>{year}</p>
        </div>
    )
}

export default YearSelector;
