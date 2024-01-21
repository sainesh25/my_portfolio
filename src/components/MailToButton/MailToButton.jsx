import React from 'react';
import './MailToButton.css'
const MailtoButton = () => {
    const emailAddress = 'patilsainesh25@gmail.com';


    const mailtoLink = `mailto:${emailAddress}`;

    return (
        <a className='mail-btn' href={mailtoLink} target="_blank" rel="norefferer noopener">Say Hello!</a>
    );
};

export default MailtoButton;