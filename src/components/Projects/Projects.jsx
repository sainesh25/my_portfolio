import React from 'react';
import "./Projects.css";
import githubIcon from './github-svgrepo-com.svg';
import goToPage from './external-link-svgrepo-com.svg';
import folderIcon from './folder-svgrepo-com.svg';

export default function Projects() {


    return (
        <>
            <div className='project-section ' id='projectId'>
                <h1 className='skills-head'>Some things I have built...</h1>
                <h2 className='other-project-head featured-project-head-main'>Featured Projects</h2>
                <div className="projects">
                    <div className="sms">
                        <p className='featured-project-txt'>Featured Project</p>
                        <h2 className='sms-head'>School Management System</h2>
                        <div className="project-info">
                            <p>This is a web application that allows the admin to manage the data of teachers by doing all the CRUD operations. The data is displayed in table format. And the data is taken through a form.</p>
                            <div className="languages">
                                <p>ReactJs</p>
                                <p>NodeJs</p>
                                <p>ExpressJs</p>
                                <p>MongoDB</p>
                                <p>Bootstrap</p>
                            </div>
                            <div className="github-icon">
                                <a href="https://github.com/sainesh25/School_Management_System.git" target="_blank" rel="noopener noreferrer" ><img src={githubIcon} alt="github" className='icons' /></a>
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
                                <a href="https://github.com/sainesh25/savings_calculator.git" target="_blank" rel="noopener noreferrer" ><img src={githubIcon} alt="github" className='icons' /></a>
                            </div>
                        </div>
                    </div>

                    <div className="sms">
                        <a href="https://github.com/sainesh25/my_portfolio" target="_blank" rel="noopener noreferrer">
                            <p className='featured-project-txt'>Featured Project</p>
                            <h2 className='sms-head'>Portfolio</h2>
                            <div className="project-info">
                                <p>Showcasing a diverse range of innovative projects, this React-based portfolio demonstrates my skills in web development, problem-solving, and creative design. Explore my journey and the impactful solutions I've developed.</p>
                                <div className="languages">
                                    <p>ReactJs</p>
                                </div>
                                <div className="github-icon">
                                    <a href="https://github.com/sainesh25/my_portfolio" target="_blank" rel="noreferrer noopener"><img src={githubIcon} alt="github" className='icons' /></a>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="sms">
                        <p className='featured-project-txt'>Featured Project</p>
                        <h2 className='sms-head'>Weather Application</h2>
                        <div className="project-info">
                            <p>The Weather App is a responsive and user-friendly application developed with React.js. It provides real-time weather information for any city, offering a seamless user experience.</p>
                            <div className="languages">
                                <p>ReactJs</p>
                                <p>OpenWeatherMap_API</p>
                            </div>
                            <div className="github-icon">
                                <a href=" https://github.com/sainesh25/weather_app" target="_blank" rel="noreferrer noopener"><img src={githubIcon} alt="github" className='icons' /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className='other-project-head'>Other Noteworthy projects</h2>
                <div className="other-projects">
                    <div className="project-card">
                        <a href="https://quote-generator-by-saineshp.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <div className='project-icons'>
                                <img src={folderIcon} alt="" />

                                <div className="github-icon">
                                    <a href="https://github.com/sainesh25/quote-generator.git" target="_blank" className='icons' rel="noreferrer noopener"><img src={githubIcon} alt="github" /></a>
                                    <a href="https://quote-generator-by-saineshp.netlify.app/" target="_blank" rel="noreferrer noopener"><img src={goToPage} alt="Go to page" className='icons' /></a>
                                </div>
                            </div>
                            <h3 className='sub-project-head sms-head'>Quote Generator</h3>
                            <p className='project-summary-txt'>Designed a brief quote generator with copy-to-clipboard functionality. Users can easily generate and share quotes on Twitter, enhancing accessibility and user experience.</p>
                            <div className="languages">
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>JavaScript</p>
                            </div>
                        </a>
                    </div>

                    <div className="project-card">
                        <a href="https://tip-calculator-by-saineshp.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <div className='project-icons'>
                                <img src={folderIcon} alt="" />

                                <div className="github-icon">
                                    <a href="https://github.com/sainesh25/tip_calculator.git" rel="noreferrer noopener" target="_blank" className='icons'><img src={githubIcon} alt="github" /></a>
                                    <a href="https://tip-calculator-by-saineshp.netlify.app/" rel="noreferrer noopener" target="_blank"><img src={goToPage} alt="Go to page" className='icons' /></a>
                                </div>
                            </div>
                            <h3 className='sub-project-head sms-head'>Tip Calculator</h3>
                            <p className='project-summary-txt'>Developed interactive features for a web-based tip calculator, including dynamic adjustments for tip and GST percentages, real-time calculations, and a split bill feature.</p>
                            <div className="languages">
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>JavaScript</p>
                            </div>
                        </a>
                    </div>

                    <div className="project-card">
                        <a href="https://to-do-list-by-saineshp.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <div className='project-icons'>
                                <img src={folderIcon} alt="" />

                                <div className="github-icon">
                                    <a href="https://github.com/sainesh25/to-do-list.git" target="_blank" rel="noreferrer noopener" className='icons'><img src={githubIcon} alt="github" /></a>
                                    <a href="https://to-do-list-by-saineshp.netlify.app/" target="_blank" rel="noreferrer noopener"><img src={goToPage} alt="Go to page" className='icons' /></a>
                                </div>

                            </div>
                            <h3 className='sub-project-head sms-head'>To Do List</h3>
                            <p className='project-summary-txt'>Created a streamlined to-do list feature with an intuitive interface. Users can add, delete, and mark tasks as done, enhancing task management and user experience.</p>
                            <div className="languages">
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>JavaScript</p>
                            </div>
                        </a>
                    </div>

                    <div className="project-card">
                        <a href="https://aadhar-form-registration-by-saineshp.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <div className='project-icons'>
                                <img src={folderIcon} alt="" />

                                <div className="github-icon">
                                    <a href="https://github.com/sainesh25/aadhar-card-form-registration.git" target="_blank" rel="noreferrer noopener" className='icons'><img src={githubIcon} alt="github" /></a>
                                    <a href="https://aadhar-form-registration-by-saineshp.netlify.app/" target="_blank" rel="noreferrer noopener"><img src={goToPage} alt="Go to page" className='icons' /></a>
                                </div>

                            </div>
                            <h3 className='sub-project-head sms-head'>Aadhar Card Registration Form</h3>
                            <p className='project-summary-txt'>The JavaScript code validates Aadhar form inputs, displaying custom error messages. It ensures data accuracy and requires agreement to terms for successful submission.</p>
                            <div className="languages">
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>JavaScript</p>
                            </div>
                        </a>
                    </div>

                    <div className="project-card">
                        <a href="https://olla-agency-static.netlify.app/" target="_blank" rel="noreferrer noopener">
                            <div className='project-icons'>
                                <img src={folderIcon} alt="" />

                                <div className="github-icon">
                                    <a href="https://github.com/sainesh25/olla-agency-homepage-static.git" target="_blank" className='icons' rel="noreferrer noopener"><img src={githubIcon} alt="github" /></a>
                                    <a href="https://olla-agency-static.netlify.app/" target="_blank" rel="noreferrer noopener"><img src={goToPage} alt="Go to page" className='icons' /></a>
                                </div>
                            </div>
                            <h3 className='sub-project-head sms-head'>Olla-agency Home page</h3>
                            <p className='project-summary-txt'>This is a static responsive web page created using HTML5 tags and CSS3 properties.</p>
                            <div className="languages">
                                <p>HTML5</p>
                                <p>CSS3</p>
                            </div>
                        </a>
                    </div>

                    <div className="project-card">
                        <a href="https://rolax-resort-static.netlify.app/" target="_blank" rel="noreferrer noopener">
                            <div className='project-icons'>
                                <img src={folderIcon} alt="" />

                                <div className="github-icon">
                                    <a href="https://github.com/sainesh25/rolaxResort-homepage.git" target="_blank" className='icons' rel="noreferrer noopener"><img src={githubIcon} alt="github" /></a>
                                    <a href="https://rolax-resort-static.netlify.app/" target="_blank" rel="noreferrer noopener"><img src={goToPage} alt="Go to page" className='icons' /></a>
                                </div>
                            </div>
                            <h3 className='sub-project-head sms-head'>Rolax Resort Home page</h3>
                            <p className='project-summary-txt'>This is a static responsive web page created using HTML5 tags and CSS3 properties.</p>
                            <div className="languages">
                                <p>HTML5</p>
                                <p>CSS3</p>
                            </div>
                        </a>
                    </div>

                    <div className="project-card">
                        <a href="https://landscaper-static.netlify.app/" target="_blank" rel="noreferrer noopener">
                            <div className='project-icons'>
                                <img src={folderIcon} alt="" />

                                <div className="github-icon">
                                    <a href="https://github.com/sainesh25/landscaper-static-page.git" target="_blank" className='icons' rel="noreferrer noopener"><img src={githubIcon} alt="github" /></a>
                                    <a href="https://landscaper-static.netlify.app/" target="_blank" rel="noreferrer noopener"><img src={goToPage} alt="Go to page" className='icons' /></a>
                                </div>
                            </div>
                            <h3 className='sub-project-head sms-head'>Landscaper Home page</h3>
                            <p className='project-summary-txt'>This is a static responsive web page created using HTML5 tags and CSS3 properties.</p>
                            <div className="languages">
                                <p>HTML5</p>
                                <p>CSS3</p>
                            </div>
                        </a>
                    </div>

                    {/* <div className="project-card">
                        <a href="http://water-boat-static.netlify.app/" target="_blank" rel="noreferrer noopener">
                            <div className='project-icons'>
                                <img src={folderIcon} alt="" />

                                <div className="github-icon">
                                    <a href="" target="_blank" className='icons' rel="noreferrer noopener"><img src={githubIcon} alt="github" /></a>
                                    <a href="" target="_blank" rel="noreferrer noopener"><img src={goToPage} alt="Go to page" className='icons' /></a>
                                </div>
                            </div>
                            <h3 className='sub-project-head sms-head'>Pricing Plans</h3>
                            <p className='project-summary-txt'>This is a static responsive web page created using HTML5 tags and CSS3 properties.</p>
                            <div className="languages">
                                <p>HTML5</p>
                                <p>CSS3</p>
                            </div>
                        </a>
                    </div> */}
                    <div className="project-card">
                        <a href="http://water-boat-static.netlify.app/" target="_blank" rel="noreferrer noopener">
                            <div className='project-icons'>
                                <img src={folderIcon} alt="" />

                                <div className="github-icon">
                                    <a href="https://github.com/sainesh25/water-boat-static.git" target="_blank" className='icons' rel="noreferrer noopener"><img src={githubIcon} alt="github" /></a>
                                    <a href="https://water-boat-static.netlify.app/" target="_blank" rel="noreferrer noopener"><img src={goToPage} alt="Go to page" className='icons' /></a>
                                </div>
                            </div>
                            <h3 className='sub-project-head sms-head'>Water Boat Home page</h3>
                            <p className='project-summary-txt'>This is a static responsive web page created using HTML5 tags and CSS3 properties.</p>
                            <div className="languages">
                                <p>HTML5</p>
                                <p>CSS3</p>
                            </div>
                        </a>
                    </div>


                </div>
            </div>
        </>
    )
}
