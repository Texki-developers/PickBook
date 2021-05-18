import React from 'react'
import { Link } from 'react-router-dom'
import './SignButton.scss'
function SignButton(props) {
    return (
        <Link to={props.api} className={props.class}>
            <i className={props.icon}></i>{props.label}
        </Link>
    )
}

export default SignButton
