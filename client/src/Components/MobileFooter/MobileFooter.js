import React from 'react'
import {GrAdd} from 'react-icons/gr';
import {FaFilter} from 'react-icons/fa'
import {RiAccountCircleFill} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'
import './MobileFooter.scss'
import MobileOptions from './MobileOptions';
const MobileFooter = () => {
    return (
        <div className="mobile-footer">
            <MobileOptions option="Search"  icon={<BsSearch/>}/>
            <MobileOptions option="Add books" click="/add-book" icon={<GrAdd/>}/>
            <MobileOptions option="Filter" click="filter" icon={<FaFilter/>}/>
            <MobileOptions option="Account"  icon={<RiAccountCircleFill/>}/>
        </div>
    )
}

export default MobileFooter;
