import React from 'react'
import { GrClose } from 'react-icons/gr'
import './Filter.scss'
const Filter = () => {
    return (
        <div className="filter-container">
            <header>
                <h1>PICK<span>BOOKS</span></h1>
                <GrClose/>
            </header>
        </div>
    )
}

export default Filter;
