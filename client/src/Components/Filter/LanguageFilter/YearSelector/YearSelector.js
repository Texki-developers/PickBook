import React, { useState } from 'react'
import './YearSelector.scss'
const  YearSelector = () => {
    const [year,setYear] = useState('')
    const handleInput = (event) => {
     setYear(event.target.value+'-2021')
    }
    return (
        <div className="year-selector-container">
            <input onInput={handleInput} type="range" name="year-selector" id="year-selector" className="year-selector" min="1845" max="2021"/>
            <p>{year}</p>
        </div>
    )
}

export default YearSelector;
