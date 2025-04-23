import React from 'react';
import './header.css';

export default function Header({ currentPage, setPage }) {
    return (
        <header className="header">
            <div className="header__title">
                <h1 className="header__title--text">{currentPage}</h1>
                <div className="underline"></div>
            </div>
            <nav className="header__nav">
                <ul className="header__nav--list">
                    <li className="header__nav--item">
                        <button className="header__nav--button1" onClick={() => setPage('About')}>About</button>
                    </li>
                    <li className="header__nav--item">
                        <button className="header__nav--button2" onClick={() => setPage('Resume')}>Resume</button>
                    </li>
                    <li className="header__nav--item">
                        <button className="header__nav--button3" onClick={() => setPage('Portfolio')}>Portfolio</button>
                    </li>
                    <li className="header__nav--item">
                        <button className="header__nav--button4" onClick={() => setPage('Contact')}>Contact</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}