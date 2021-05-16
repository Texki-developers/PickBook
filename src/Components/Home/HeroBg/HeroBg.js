import React from 'react';
import './HeroBg.scss';
import SignInAndSignupCard from './SigninAndSignUpCard/SignInAndSignupCard';

const HeroBg = () => {
    return (
        <div className="herobg-container" style={{backgroundImage: `url("/herobg/Herobg.jpg")`}}>
            <div className="herobg-overlay">
                <h1>Read&Build <br/>Knowledge</h1>
                <SignInAndSignupCard/>
            </div>
        </div>
    )
}

export default HeroBg;
