import React from 'react'
import './PreLoader.scss'
const PreLoader = () => {
    return (
        <div className="loading-container">
            <h1 class="title">Loading</h1>
            <div class="rainbow-marker-loader"></div>
        </div>
    )
}

export default PreLoader;
