import React from 'react'
import './Contact.css';
import MailtoButton from '../MailToButton/MailToButton';
export default function Contact() {
    return (
        <>
            <div className="contact-section" id='contactId'>
                <h1 className='skills-head contact-head'>Get In Touch</h1>
                <p className='contact-info'>Hello there! I'm eager to embark on exciting opportunities and contribute my passion for web development. Whether you have a project, job offer, or just want to connect, feel free to reach out. Let's collaborate and create something amazing together!</p>
                <MailtoButton/>
            </div>
        </>
    )
}
