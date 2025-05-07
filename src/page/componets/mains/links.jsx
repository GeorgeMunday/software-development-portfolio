import React from "react";



const links =  () => {
    return(
        <>
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
        </>
    );
};