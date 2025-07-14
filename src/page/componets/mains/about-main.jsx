import React from 'react';
import './styles/layout.css';
import './styles/header-buttons.css';
import './styles/info-section.css';
import './styles/buttons.css';
import './styles/typography.css';

const AboutMain = ({ onSidebarToggle, onInfoClick }) => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>
          Hi im George Munday{' '}
          <span
            className="wave-emoji"
            role="img"
            aria-label="waving hand"
            onMouseEnter={e => e.currentTarget.classList.add('wave')}
            onMouseLeave={e => e.currentTarget.classList.remove('wave')}
          >
            👋
          </span>
        </h1>
      </div>
      <div className="about-content">
        <div className="about-intro">
          <p>Welcome to my portfolio! I'm a passionate developer with expertise in modern web technologies.</p>
        </div>
        
        <div className="info-sections">
          {/* Experience Section - block style */}
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Experience</h2>
            <p>5+ years of professional development experience</p>
            <button 
              className="info-btn" 
              onClick={() => onSidebarToggle('experience')}
            >
              View Details
            </button>
          </div>

          {/* Skills Section - block style */}
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Skills</h2>
            <p>React, Node.js, JavaScript, CSS, and more</p>
            <button
              className="info-btn"
              onClick={() => onSidebarToggle && onSidebarToggle('skills')}
            >
              View Skills
            </button>
          </div>

          {/* Education Section - block style */}
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Education</h2>
            <p>Computer Science Degree from XYZ University</p>
            <button 
              className="info-btn" 
              onClick={() => onInfoClick('education')}
            >
              View Education
            </button>
          </div>

          {/* Contact Preview - block style */}
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Contact</h2>
            <p>Get in touch for opportunities</p>
            <button
              className="info-btn"
              onClick={() => onSidebarToggle && onSidebarToggle('Contact')}
            >
              Quick Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;