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
                            <span className="sidebar__list--header">LeetCode</span>
                            <a href="https://leetcode.com/u/munday090909/" className="sidebar__list--info">Link</a>
                        </div>
                    </li>
                    <li className="sidebar__list--item-container">
                        <img src="linkedin.png" alt="LinkedIn" className="sidebar__list--icon" />
                        <div className="sidebar__list--item--nested">
                        <span className="sidebar__list--header">LinkedIn</span>
                            <a href="https://www.linkedin.com/in/george-munday-15991a362/" className="sidebar__list--info">Link</a>
                        </div>
                    </li>
                    <li className="sidebar__list--item-container">
                        <img src="github-logo.png" alt="Github" className="sidebar__list--icon" />
                        <div className="sidebar__list--item--nested">
                            <span className="sidebar__list--header">Github</span>
                            <a href="https://github.com/GeorgeMunday" className="sidebar__list--info">Link</a>
                        </div>
                    </li>
                </ul>
            </main>
        </aside>
    );
}

export default Sidebar;