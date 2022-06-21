import React from 'react';
import logoImage from "../../images/logo.png";


export default function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__logo' src={logoImage} alt="logo" />
            <p className='footer__text'>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
        </footer>
    )
}
