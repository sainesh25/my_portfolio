import React from 'react';
import './MyName.css';
export default function MyName() {
    return (
        <>
            <div className="my-info">
                <p className='intro-sentence'>Hi, my name is</p>
                <h1 className='my-name-heading'>Sainesh Patil.</h1>
                <h1 className='my-name-heading tagline'>Transforming Ambitions into Responsive Web Solutions.</h1>
                <p className='my-intro-txt'>Hey, I'm a <span className='important-txt'> full-stack web developer</span> specializing in the <span className='important-txt'>MERN</span> stack. I've got the skills to handle both ends of the spectrum, from <span className='important-txt'>front-end</span> to <span className='important-txt'>back-end</span>. Currently on the lookout for opportunities where I can put my expertise to good use and be a part of something meaningful.</p>
            </div>
        </>
    )
}
