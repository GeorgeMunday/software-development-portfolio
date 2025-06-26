import React from 'react';

const AboutMain = ({ onSidebarToggle, onInfoClick }) => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <button 
          className="sidebar-toggle-btn" 
          onClick={() => onSidebarToggle('about')}
        >
          ☰ Details
        </button>
      </div>
      
      <div className="about-content">
        <div className="about-intro">
          <p>Welcome to my portfolio! I'm a passionate developer with expertise in modern web technologies.</p>
        </div>
        
        <div className="info-sections">
          {/* Experience Section - links to sidebar */}
          <div className="info-section">
            <h2>Experience</h2>
            <p>5+ years of professional development experience</p>
            <button 
              className="info-btn" 
              onClick={() => onSidebarToggle('experience')}
            >
              View Details
            </button>
          </div>
          
          {/* Skills Section - links to sidebar */}
          <div className="info-section">
            <h2>Skills</h2>
            <p>React, Node.js, JavaScript, CSS, and more</p>
            <button 
              className="info-btn" 
              onClick={() => onSidebarToggle('skills')}
            >
              View Skills
            </button>
          </div>
          
          {/* Education Section - links to sidebar */}
          <div className="info-section">
            <h2>Education</h2>
            <p>Computer Science Degree from XYZ University</p>
            <button 
              className="info-btn" 
              onClick={() => onSidebarToggle('education')}
            >
              View Education
            </button>
          </div>
          
          {/* Contact Preview - could link to infobar */}
          <div className="info-section">
            <h2>Contact</h2>
            <p>Get in touch for opportunities</p>
            <button 
              className="info-btn" 
              onClick={() => onInfoClick('contact')}
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