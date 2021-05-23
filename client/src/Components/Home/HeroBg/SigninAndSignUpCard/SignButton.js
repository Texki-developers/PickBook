import React from 'react'
import { useDispatch } from 'react-redux';
import Actions from '../../../../Assets/Essentials/EssentialAction';
import socialMediaAuth from '../../../../Assets/FirebaseConfig/auth'
import './SignButton.scss'

function SignButton(props) {
    const dispatch = useDispatch();
    const handleAuth = (provider) => {
        socialMediaAuth(provider).then((userData) => {
            
            dispatch(Actions.addUserData(userData));
        })
        console.log('login process');
    }
    return (
        <button onClick={() => handleAuth(props.provider)}  className={props.class}>
            <i className={props.icon}></i>{props.label}
        </button>
    )
}

export default SignButton
