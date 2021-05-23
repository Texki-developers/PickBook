import React from 'react'
import { Link } from 'react-router-dom';
import './NotLoggedIn.scss'
const NotLoggedIn = () =>{
    return (
        <div className="not-logged-in">
            <img className="oops" src="/oops/oops.svg" alt="Oops"/>
            <p className="oops-text">This service is only available for logged in users</p>
            <Link className="oops-link" to="/">Click here to get login page</Link>
        </div>
    )
}

export default NotLoggedIn;
