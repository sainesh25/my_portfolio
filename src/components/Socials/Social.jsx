import React from 'react'
import './Social.css'
import githubIcon from './github-svgrepo-com.svg';
import instagramIcon from './instagram-svgrepo-com.svg';
import linkedinIcon from './linkedin-svgrepo-com.svg';
import twitterIcon from './twitter-svgrepo-com.svg';


export default function Social() {
    return (
        <>

            <div className="social-wrapper">
                <div className='social-icons'>

                    <a href='https://www.linkedin.com/in/sainesh-patil/' target='_blank' className='social-btn'><img src={linkedinIcon} alt="linkedin"/></a>
                    <a href='https://github.com/sainesh25' target='_blank' className='social-btn' ><img src={githubIcon} alt="github"/></a>
                    <a href='https://www.instagram.com/saineshpatil2505/' target='_blank' className='social-btn'><img src={instagramIcon} alt="instagram"/></a>
                    <a href='https://twitter.com/SaineshPatil25' target='_blank' className='social-btn'><img src={twitterIcon} alt="twitter"/></a>

                    <div className="line"></div>
                </div>
            </div>

                <div className="email-wrapper">
                    <div className="email-txt">
                        <a href="mailto:patilsainesh25@gmail.com" rel="noreferrer" target="_blank" className='email-link'>patilsainesh25@gmail.com</a>
                        <div className="line"></div>
                    </div>
                </div>

        </>
    )
}
