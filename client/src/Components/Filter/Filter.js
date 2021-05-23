import React, {useState} from 'react'
import { GrClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import Actions from '../../Assets/Essentials/EssentialAction'
import FilterAction from '../../Assets/Filter/FilterAction'
import './Filter.scss'
import LanguageFilter from './LanguageFilter/LanguageFilter'
// import instance from '../../Assets/server/instance'




const Filter = () => {
    
    const dispatch = useDispatch();
    const essentials = useSelector(state => state.essentials)
    const history = useHistory();

    const [data,setData] = useState({})

    const pushDetails = details=>{
        setData({...data,...details})
        // console.log(data);
    }

    const ApplyFilter = async()=>{
        await dispatch(FilterAction.addFilter(data))
        history.push('/booklist')
        dispatch(Actions.toggleFilter())
    }

    return (
        <div className="filter-container">
            <header>
                <h1>PICK<span>BOOKS</span></h1>
                <GrClose className="close-icon" onClick={() => dispatch(Actions.toggleFilter())}/>
            </header>
            <div className="filter-content">
                <LanguageFilter title="Genres" item={essentials.genres} data={data} setdata={(data)=>{pushDetails(data)}}/>
                <LanguageFilter title="Language" item={essentials.languages} data={data} setdata={(data)=>{pushDetails(data)}}/>
                <LanguageFilter title="Year of publication" year={true} data={data} setdata={(data)=>{pushDetails(data)}}/>
            </div>
            <div className="apply-and-reset">
                <button>Reset</button>
                <button onClick={()=>ApplyFilter()}>Apply</button>
            </div>
        </div>
    )
}

export default Filter;
