import react from 'react'
import { useState } from 'react'

import "./header.css" 

export default function Header() {
    return (
        <header className='header'>
                <div className="header__title">
                    <h1 className='header__title--text'>About</h1>
                    <div className= 'underline'></div>
                </div>
                <nav className='header__nav'>
                    <ul className='header__nav--list'>
                        <li className='header__nav--item'>
                            <button className='header__nav--button1' >About</button>
                        </li>
                        <li className='header__nav--item'>
                            <button className='header__nav--button2'>Resume</button>
                        </li>
                        <li className='header__nav--item'>
                            <button className='header__nav--button3'>Portfolio</button>
                        </li>
                        <li className='header__nav--item'>
                            <button className='header__nav--button4' id= '2'>Contact</button>
                        </li>
                    </ul>
                </nav>
        </header>
    )
    }