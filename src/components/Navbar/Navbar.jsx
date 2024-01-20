import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <>
        <nav>
            <div className="nav-bar">
            <Link activeClass="active" 
                    to="homeId"
                    smooth={true}
                    offset={0}
                    duration={500}
                    delay={0}
                    className='nav-links'>Home</Link>
            <Link activeClass="active" 
                    to="projectId"
                    smooth={true}
                    offset={0}
                    duration={500}
                    delay={0}
                    className='nav-links'>Projects</Link>
                <Link to='/resume' className='nav-links resume-link'>Resume</Link>
                <Link activeClass="active" 
                    to="skillId"
                    smooth={true}
                    offset={-25}
                    duration={500}
                    delay={0}
                    className='nav-links'>Skills</Link>
                <Link to='contactId' className='nav-links' 
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={0}>Contact</Link>
            </div>
            <div className="social-icons">

            </div>
        </nav>
        <div className="content"></div>

        </>

    )
}
