import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SignButton from './SignButton';
import './SignInAndSignupCard.scss';

const SignInAndSignupCard = (props) => {
    const [login,setLogin] = useState(true)
    const handleLogin = () => {
        setLogin(!login)
    }
    return (
        <div className="signin-card">
            <h3>Connect&Read</h3>
            {login
            ?
            <>
                <SignButton class="sign-btn fb" icon="fab fa-facebook-f" label="SignIn with Facebook"/>
                <SignButton class="sign-btn google" icon="fab fa-google" label="SignIn with Google"/>
                <SignButton class="sign-btn phone" icon="fas fa-mobile-alt" label="SignIn with phone"/>
                <Link to="" className="have-or-not" onClick={handleLogin}>Haven't Account? Create it!!</Link>
            </>
            :
            <>
                <SignButton class="sign-btn fb" icon="fab fa-facebook-f" label="SignUp with Facebook"/>
                <SignButton class="sign-btn google" icon="fab fa-google" label="SignUp with Google"/>
                <SignButton class="sign-btn phone" icon="fas fa-mobile-alt" label="SignUp with phone"/>
                <Link to="" className="have-or-not" onClick={handleLogin}>Already have an Accout? SignIn</Link>
            </>}
            
        </div>
    )
}

export default SignInAndSignupCard;
