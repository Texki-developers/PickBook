import React from 'react'
import './PreLoader.scss'
const PreLoader = () => {
    return (
        <div className="loading-container">
            <h1 class="title">PICK<span>BOOKS</span></h1>
            <div class="rainbow-marker-loader"></div>
        </div>
    )
}

export default PreLoader;
