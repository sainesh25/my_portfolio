import React from 'react'

import './Skills.css'
export default function Skills() {
    const frontendSkills = ["JavaScript", "React.js", "Bootstrap", "Next.js", "Tailwind CSS",  "HTML5", "CSS3", "jQuery"];

    const backendSkills = ["Node.js", "Express.js"];

    const tools = ["Git", "Fork", "GitLab", "GitHub"];

    return (
        <>
            <div className="skills-section" id='skillId'>
                <h1 className='skills-head'>What I am Good at ?</h1>
                <div className="skills-main-wrapper">
                    <h2 className='frontend-head'>Frontend Technologies</h2>
                    <div className="frontend-skills">
                        {
                            frontendSkills.map((item, index) => <div key={index} className="skills-card">{item}</div>)
                        }
                    </div>
                    <h2 className='backend-head'>Backend Technologies</h2>
                    <div className="backend-skills">
                        {
                            backendSkills.map((item, index) => <div key={index} className="skills-card backend-skills-card">{item}</div>)
                        }

                    </div>
                    <h2 className="database-head frontend-head">Database Technologies</h2>
                    <div className="database-skills">
                        <div className="skills-card backend-skills-card">MongoDB</div>
                    </div>

                    <h2 className="database-head frontend-head">Tools</h2>
                    <div className="database-skills">
                        {
                            tools.map((item, index) => <div key={index} className="skills-card backend-skills-card">{item}</div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
