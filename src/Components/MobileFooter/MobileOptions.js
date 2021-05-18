import React from 'react'
import { useDispatch } from 'react-redux';
import './MobileOptions.scss'
import isFilter from '../../Assets/Actions/FilterAction';
import getEssentials from '../../Assets/Actions/EssentialAction';
import { useHistory } from 'react-router-dom';
const MobileOptions = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const optionHandle = (event) => {
        const click = event.target.id;
        switch(click){
            case 'filter':
                dispatch(isFilter());
                dispatch(getEssentials())
                break;
            case '/add-book':
                history.push('/add-book')
                break;
            default:
                break;
        }
    }
    return (
        <div className="mobile-options">
            {props.icon}
            <p>{props.option}</p>
            <div onClick={optionHandle} id={props.click} className="for-click"></div>
        </div>
    )
}

export default MobileOptions;
