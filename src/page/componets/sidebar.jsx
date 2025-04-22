import React from 'react';


const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className="sidebar__title">
                <img src="https://via.placeholder.com/150" alt="Profile" className="sidebar__title--img" />
                <h1 className="sidebar__title--text">George Munday</h1>
                <p className="sidebar__title--subtitle">Web Developer</p>
            </div>
            <main>
                <ul className="sidebar__list">
                    <div>
                        <img src="https://via.placeholder.com/20" alt="phone" className="sidebar__list--icon" />
                        <li className="sidebar__list--item">email</li>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/20" alt="phone" className="sidebar__list--icon" />
                        <li className="sidebar__list--item"><a href="#">LinkedIn</a></li>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/20" alt="phone" className="sidebar__list--icon" />    
                        <li className="sidebar__list--item"><a href="#">Github</a></li>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/20" alt="phone" className="sidebar__list--icon" />
                        <li className="sidebar__list--item">phone number</li>
                    </div>
                </ul>
            </main>
        </aside>
    );
}

export default Sidebar;