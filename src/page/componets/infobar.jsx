import React from 'react';
import "./component-styles/infobar.css";

const InfoBar = ({ isOpen, onClose, infoType }) => {
  // Content for different info cases
  const infoContent = {
    about: (
      <div className="info-content">
        <h3>About Me</h3>
        <p>Detailed information about my background, skills, and experience.</p>
        <ul>
          <li>5+ years of web development</li>
          <li>Specialized in React and Node.js</li>
          <li>Open to freelance opportunities</li>
        </ul>
      </div>
    ),
    portfolio1: (
      <div className="info-content">
        <h3>E-Commerce Project</h3>
        <p>A full-stack e-commerce platform built with:</p>
        <ul>
          <li>React for the frontend</li>
          <li>Node.js/Express for the backend</li>
          <li>MongoDB for database</li>
        </ul>
      </div>
    ),
    portfolio2: (
      <div className="info-content">
        <h3>Task Management App</h3>
        <p>A productivity application featuring:</p>
        <ul>
          <li>Drag-and-drop interface</li>
          <li>Real-time updates</li>
          <li>Team collaboration</li>
        </ul>
      </div>
    ),
    contact: (
      <div className="info-content">
        <h3>Contact Information</h3>
        <p>Feel free to reach out through:</p>
        <ul>
          <li>Email: example@example.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>LinkedIn: linkedin.com/in/yourprofile</li>
        </ul>
      </div>
    )
  };

  return (
    <aside className={`infobar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>
      <div className="infobar-content">
        {infoContent[infoType] || (
          <div className="info-content">
            <h3>Information</h3>
            <p>Select an item to view details.</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default InfoBar;