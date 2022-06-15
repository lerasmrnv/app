import React from 'react';
import logoApp from "../../images/logo.png";

export default function Header() {
    return (
        <header className='header'>
            <img className='header__logo' alt='logo' src={logoApp} />
            <nav className='header__nav'>
                <ul className='nav__list'>
                    <li className='nav__item'>ALL PRODUCTS</li>
                    <li className='nav__item'>SOLUTION</li>
                    <li className='nav__item'>ABOUT</li>
                    <li className='nav__item'>SUPPORT</li>
                </ul>
            </nav>
        </header>
    )
}
