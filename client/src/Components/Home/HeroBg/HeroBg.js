import React from 'react';
import './HeroBg.scss';
import SignInAndSignupCard from './SigninAndSignUpCard/SignInAndSignupCard';
import {useSelector} from 'react-redux'

const HeroBg = () => {
    const essentials = useSelector(state => state.essentials)
    return (
        <div className="herobg-container" style={{backgroundImage: `url("/herobg/Herobg.jpg")`}}>
            <div className="herobg-overlay">
                <h1>Read&Build <br/>Knowledge</h1>
            
                {essentials.isLogin?false:<SignInAndSignupCard/>}
            </div>
            
        </div>
    )
}

export default HeroBg;
