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
        </aside>
    );
}

export default Sidebar;