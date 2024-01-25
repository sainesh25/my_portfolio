import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { useEffect, useState} from "react";

export default function Navbar() {

    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const scrollingUp = prevScrollPos > currentScrollPos;

            setVisible(scrollingUp || currentScrollPos < 10); // Show navbar if at the top

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);


    return (
        <>
            <nav className={visible ? '' : 'content'}>
                <div className='nav-bar'>
                    <Link activeClass="active"
                        to="homeId"
                        smooth={true}
                        offset={0}
                        duration={500}
                        delay={0}
                        className='nav-links'>Home</Link>
                    <Link activeClass="active"
                        to="skillId"
                        smooth={true}
                        offset={-25}
                        duration={500}
                        delay={0}
                        className='nav-links'>Skills</Link>
                    <Link activeClass="active"
                        to="projectId"
                        smooth={true}
                        offset={0}
                        duration={500}
                        delay={0}
                        className='nav-links'>Projects</Link>
                     <a href={require('./Sainesh Patil Resume.pdf')} target="_blank" rel="noopener noreferrer" className='nav-links'>Resume</a> 
                    <Link to='contactId' className='nav-links'
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={0}>Contact</Link>
                </div>
                <div className="social-icons">

                </div>
            </nav>
            {/* <div className="content"></div> */}

        </>

    )
}
