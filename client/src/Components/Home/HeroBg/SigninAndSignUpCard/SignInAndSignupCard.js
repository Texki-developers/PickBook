import React from 'react'
import { facebookProvider, googleProvider } from '../../../../FirebaseConfig/authMethod';
import SignButton from './SignButton';
import './SignInAndSignupCard.scss';

const SignInAndSignupCard = (props) => {
    return (
        <div className="signin-card">
            <h3>Connect&Read</h3>
                <SignButton 
                class="sign-btn fb" 
                icon="fab fa-facebook-f"  
                label="SignIn with Facebook"
                provider= {facebookProvider}
                />
                <SignButton 
                class="sign-btn google" 
                icon="fab fa-google" 
                label="SignIn with Google"
                provider={googleProvider}/>
                <p className="have-or-not">You can't post comment without signin.</p>   
        </div>
    )
}

export default SignInAndSignupCard;
