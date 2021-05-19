import React from 'react'
import socialMediaAuth from '../../../../Assets/FirebaseConfig/auth'
import './SignButton.scss'

function SignButton(props) {
    const handleAuth = (provider) => {
        socialMediaAuth(provider);
        console.log('login process');
    }
    return (
        <button onClick={() => handleAuth(props.provider)}  className={props.class}>
            <i className={props.icon}></i>{props.label}
        </button>
    )
}

export default SignButton
