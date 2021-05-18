import React from 'react'
import './Footer.scss'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
      <div className="footer_container">
        <div className="footer_section_one">
            <h1><strong>PICK</strong>BOOKS</h1>
            <p>By Texkidevelopers</p>
            <div className="footer_social_media">
                <FacebookIcon/>
                <InstagramIcon/>
                <GitHubIcon/>
            </div>
        </div>
        <div className="footer_section_two">
            <p>
            Copyright to texkidevelopers © 2021 
            </p>
        </div>
        <div className="footer_section_three">
            <h2>Filter Books by</h2>
            <p>Author</p>
            <p>Generes</p>
            <p>Language</p>
            <p>Year Of Publication</p>
        </div>
      </div>
    );
}

export default Footer
