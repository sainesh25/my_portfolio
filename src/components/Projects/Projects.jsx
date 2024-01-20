import React from 'react';
import "./Projects.css";
import githubIcon from './github-svgrepo-com.svg';
import goToPage from './external-link-svgrepo-com.svg';


export default function Projects() {


    return (
        <>
            <div className='project-section ' id='projectId'>
                <h1 className='skills-head'>Some things I have built...</h1>
                <div className="projects">
                    <div className="sms">
                        <p className='featured-project-txt'>Featured Project</p>
                        <h2 className='sms-head'>School Management System</h2>
                        <div className="project-info">
                            <p>This is a MERN stack project. Mostly it is a web application for admin to manage the data of teachers by doing all the CRUD operations. Also admin needs to be logged in to do all the operations.</p>
                            <div className="languages">
                                <p>ReactJs</p>
                                <p>NodeJs</p>
                                <p>ExpressJs</p>
                                <p>MongoDB</p>
                                <p>Bootstrap</p>
                            </div>
                            <div className="github-icon">
                                <img src={githubIcon} alt="github" />
                            </div>
                        </div>
                    </div>

                    <div className="sms">
                        <p className='featured-project-txt'>Featured Project</p>
                        <h2 className='sms-head'>Savings Calculator</h2>
                        <div className="project-info">
                            <p>The React-based web app enables users to track income and expenses, offering a simple interface for inputting financial transactions. It dynamically calculates and displays total income, expenses, and savings, providing users with a quick and efficient way to manage their finances.</p>
                            <div className="languages">
                                <p>ReactJs</p>

                            </div>
                            <div className="github-icon">
                                <img src={githubIcon} alt="github" />
                            </div>
                        </div>
                    </div>

                    <div className="sms">
                        <p className='featured-project-txt'>Featured Project</p>
                        <h2 className='sms-head'>Weather Application</h2>
                        <div className="project-info">
                            <p>The Weather App is a responsive and user-friendly application developed with React.js. It provides real-time weather information for any city, offering a seamless user experience.</p>
                            <div className="languages">
                                <p>ReactJs</p>
                                <p>OpenWeather_API</p>
                            </div>
                            <div className="github-icon">
                                <a href=" https://github.com/sainesh25/weather_app" target="_blank"><img src={githubIcon} alt="github" /></a>
                            </div>
                        </div>
                    </div>

                </div>

                <h2 className='sms-head other-project-head'>Other Noteworthy projects</h2>
                <div className="other-projects">
                    <div className="project-card">
                        <div className="github-icon">

                            <a href="https://github.com/sainesh25/olla-agency-homepage-static.git" target="_blank" className='icons'><img src={githubIcon} alt="github" /></a>

                            <a href="https://olla-agency-static.netlify.app/" target="_blank"><img src={goToPage} alt="Go to page" className='icons' /></a>

                        </div>
                        <h3 className='sub-project-head'>Olla-agency Home page</h3>
                        <p>This is a static responsive web page created using HTML5 tags and CSS3 properties.</p>
                        <div className="languages">
                            <p>HTML5</p>
                            <p>CSS3</p>
                        </div>

                    </div>
                    <div className="project-card">

                    </div>
                    <div className="project-card">

                    </div>
                </div>
            </div>
        </>
    )
}
