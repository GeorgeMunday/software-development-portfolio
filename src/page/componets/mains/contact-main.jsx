import React from "react";
import './styles/layout.css';
import './styles/header-buttons.css';
import './styles/info-section.css';
import './styles/buttons.css';
import './styles/typography.css';

const ContactMain = ({ onSidebarToggle, onInfoClick }) => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Contact</h1>
        <div className="header-buttons">
          <button 
            className="sidebar-toggle-btn" 
            onClick={() => onSidebarToggle('contact')}
          >
            ☰ Details
          </button>
          <button 
            className="infobar-toggle-btn" 
            onClick={() => onInfoClick('contact')}
          >
            ℹ Info
          </button>
        </div>
      </div>
      <div className="about-content">
        <div className="info-sections">
          <div className="info-section">
            <h2>Get in Touch</h2>
            <p style={{opacity:0.7}}>This is a placeholder for your contact form or contact details. Add your preferred contact methods here.</p>
          </div>
          <div className="info-section" style={{opacity:0.4}}>
            <p>Mockup Section</p>
          </div>
          <div className="info-section" style={{opacity:0.4}}>
            <p>Mockup Section</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;

