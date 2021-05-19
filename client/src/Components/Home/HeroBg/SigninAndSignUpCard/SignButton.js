import React, { useState } from 'react'
import socialMediaAuth from '../../../../Service/auth'
import './SignButton.scss'
function SignButton(props) {
    const handleAuth = async (provider) => {
        const res = await socialMediaAuth(provider);
    }
    return (
        <button onClick={() => handleAuth(props.provider)}  className={props.class}>
            <i className={props.icon}></i>{props.label}
        </button>
    )
}

export default SignButton
