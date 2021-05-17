import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import FilterButton from './FilterButton/FilterButton';
import './LanguageFilter.scss';
import YearSelector from './YearSelector/YearSelector';

const LanguageFilter = (props) => {
    const [drop, setDrop] = useState(false);
    const dropHandle = () => setDrop(!drop)
    return (
        <div className="language-filter">
            <header onClick={dropHandle}>
                <h3>{props.title}</h3>
                <MdArrowDropDown className={drop ? "filter-drop filter-drop-active" : "filter-drop"} onClick={dropHandle} />
            </header>
            {props.year ? (
                <div className={drop ? "filter-option" : "filter-option filter-option-close"}>
                    <YearSelector />
                </div>
            )
                : (
                    <div className={drop ? "filter-option" : "filter-option filter-option-close"}>
                        {props.item.map((item, index) => (
                            <FilterButton key={index} children={item} title={props.title}/>
                        ))}
                    </div>
                )}
        </div>
    )
}

export default LanguageFilter;