import React from 'react'
import socialMediaAuth from '../../../../Service/auth'
import './SignButton.scss'
function SignButton(props) {
    const handleAuth = (provider) => {
        const res = socialMediaAuth(provider);
        console.log(res);
    }
    return (
        <button onClick={() => handleAuth(props.provider)}  className={props.class}>
            <i className={props.icon}></i>{props.label}
        </button>
    )
}

export default SignButton
