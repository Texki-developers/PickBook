import React, { useState } from 'react'
import './FilterButton.scss'
import {TiTickOutline} from 'react-icons/ti'
const FilterButton = (props) => {
    const [tick,setTick] = useState(false);

    const handleFilterButton = (event) => {
        setTick(!tick);
    }
    return (
        <button className="filter-button" name={props.title} id={props.children} onClick={handleFilterButton}>
            {props.children}{tick?<TiTickOutline/>:''}
        </button>
    )
}

export default FilterButton;
