import React from 'react';

import "./sidebar.css";

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className="sidebar__title">
                <img src="self.webp" alt="Profile" className="sidebar__title--img" />
                <h1 className="sidebar__title--text">George Munday</h1>
                <p className="sidebar__title--subtitle">Web Developer</p>
            </div>
            <main className='sidebar__main'>
                <ul className="sidebar__list">
                    <li className="sidebar__list--item-container">
                        <img src="email.png" alt="email" className="sidebar__list--icon" />
                        <div className="sidebar__list--item--nested">
                            <span className="sidebar__list--header">email</span>
                            <span className="sidebar__list--info">george.munday@dedalus.com</span>
                        </div>
                    </li>
                    <li className="sidebar__list--item-container">
                        <img src="linkedin.png" alt="LinkedIn" className="sidebar__list--icon" />
                        <div className="sidebar__list--item--nested">
                            <span className="sidebar__list--header">LinkedIn</span>
                            <a href="#" className="sidebar__list--info">linkedin.com/in/georgemunday</a>
                        </div>
                    </li>
                    <li className="sidebar__list--item-container">
                        <img src="github-logo.png" alt="Github" className="sidebar__list--icon" />
                        <div className="sidebar__list--item--nested">
                            <span className="sidebar__list--header">Github</span>
                            <a href="#" className="sidebar__list--info">github.com/georgemunday</a>
                        </div>
                    </li>
                    <li className="sidebar__list--item-container">
                        <img src="phone-call.png" alt="Phone" className="sidebar__list--icon" />
                        <div className="sidebar__list--item--nested">
                            <span className="sidebar__list--header">Phone</span>
                            <span className="sidebar__list--info">07908654321</span>
                        </div>
                    </li>
                </ul>
            </main>
        </aside>
    );
}

export default Sidebar;