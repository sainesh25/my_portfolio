import React from 'react'

import './Skills.css'
export default function Skills() {
    return (
        <>
        <div className="skills-section" id='skillId'>
            <h1 className='skills-head'>What I am Good at ?</h1>
            <div className="skills-main-wrapper">
                <h2 className='frontend-head'>Frontend Technologies</h2>
                <div className="frontend-skills">
                    <div className="skills-card">HTML5</div>
                    <div className="skills-card">CSS3</div>
                    <div className="skills-card">JavaScript</div>
                    <div className="skills-card">ReactJs</div>
                    <div className="skills-card">Bootstrap</div>
                    <div className="skills-card">jQuery</div>
                </div>
                    <h2 className='backend-head'>Backend Technologies</h2>
                <div className="backend-skills">
                    <div className="skills-card backend-skills-card">NodeJs</div>
                    <div className="skills-card backend-skills-card">ExpressJs</div>
                </div>
                    <h2 className="database-head frontend-head">Database Technologies</h2>
                <div className="database-skills">
                    <div className="skills-card backend-skills-card">MongoDB</div>
                </div>
            </div>      
        </div>
        </>
    )
}
