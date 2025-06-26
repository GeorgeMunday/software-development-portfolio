import React from 'react';
import "./component-styles/sidebar.css";

const Sidebar = ({ isOpen, onClose, contentType }) => {
  // Content for different sidebar cases
  const sidebarContent = {
    about: (
      <div className="sidebar-content">
        <div className="sidebar__title">
          <div className="sidebar__title--img">👨‍💻</div>
          <h1 className="sidebar__title--text">George Munday</h1>
          <p className="sidebar__title--subtitle">Web Developer</p>
        </div>
        <div className="sidebar-details">
          <h3>About Details</h3>
          <ul>
            <li>Location: London, UK</li>
            <li>Experience: 5+ years</li>
            <li>Specialties: React, Node.js</li>
          </ul>
        </div>
      </div>
    ),
    resume: (
      <div className="sidebar-content">
        <div className="sidebar__title">
          <div className="sidebar__title--img">📄</div>
          <h1 className="sidebar__title--text">Resume</h1>
          <p className="sidebar__title--subtitle">Professional Experience</p>
        </div>
        <div className="sidebar-details">
          <h3>Work History</h3>
          <ul>
            <li>Senior Developer at ABC Corp</li>
            <li>Frontend Engineer at XYZ Inc</li>
          </ul>
        </div>
      </div>
    ),
    portfolio: (
      <div className="sidebar-content">
        <div className="sidebar__title">
          <div className="sidebar__title--img">📂</div>
          <h1 className="sidebar__title--text">Portfolio</h1>
          <p className="sidebar__title--subtitle">Recent Projects</p>
        </div>
        <div className="sidebar-details">
          <h3>Featured Work</h3>
          <ul>
            <li>E-commerce Platform</li>
            <li>Task Management App</li>
            <li>Social Media Dashboard</li>
          </ul>
        </div>
      </div>
    ),
    contact: (
      <div className="sidebar-content">
        <div className="sidebar__title">
          <div className="sidebar__title--img">✉️</div>
          <h1 className="sidebar__title--text">Contact</h1>
          <p className="sidebar__title--subtitle">Get in Touch</p>
        </div>
        <div className="sidebar-details">
          <h3>Contact Methods</h3>
          <ul>
            <li>Email: george@example.com</li>
            <li>Phone: +44 1234 567890</li>
            <li>LinkedIn: linkedin.com/in/george</li>
          </ul>
        </div>
      </div>
    )
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
          {sidebarContent[contentType] || (
            <div className="sidebar-content">
              <div className="sidebar__title">
                <div className="sidebar__title--img">👨‍💻</div>
                <h1 className="sidebar__title--text">George Munday</h1>
                <p className="sidebar__title--subtitle">Web Developer</p>
              </div>
            </div>
          )}
        </>
      )}
      {!isOpen && (
        <div className="icons-container">
          <div className="icon">🔍</div>
          <div className="icon">📁</div>
          <div className="icon">⚙️</div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;