import React, { Component } from 'react'
import './LogOut.scss'

export class LogOut extends Component {
    render() {
        return (
            <div className="logout_container">
           <select className="logout" name="cars" id="cars">
               <option>Logout</option>
           </select>

            
            </div>
        )
    }
}

export default LogOut
