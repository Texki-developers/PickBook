import React from 'react'
import { GrClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import isFilter from '../../Assets/Actions/FilterAction'
import './Filter.scss'
import LanguageFilter from './LanguageFilter/LanguageFilter'
const Filter = () => {
    const dispatch = useDispatch();
    const essentials = useSelector(state => state.essentials)
    return (
        <div className="filter-container">
            <header>
                <h1>PICK<span>BOOKS</span></h1>
                <GrClose className="close-icon" onClick={() => dispatch(isFilter())}/>
            </header>
            <div className="filter-content">
                <LanguageFilter title="Genres" item={essentials.genres}/>
                <LanguageFilter title="Languages" item={essentials.languages}/>
                <LanguageFilter title="Year of publication" year={true}/>
            </div>
            <div className="apply-and-reset">
                <button>Reset</button>
                <button>Apply</button>
            </div>
        </div>
    )
}

export default Filter;
