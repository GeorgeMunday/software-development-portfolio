import React from "react";
import './styles/layout.css';
import './styles/header-buttons.css';
import './styles/info-section.css';
import './styles/buttons.css';
import './styles/typography.css';

const ResumeMain = ({ onSidebarToggle, onInfoClick }) => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Resume</h1>
        <div className="header-buttons">
          <button
            className="sidebar-toggle-btn"
            onClick={() => onSidebarToggle("resume")}
          >
            ☰ Details
          </button>
          <button
            className="infobar-toggle-btn"
            onClick={() => onInfoClick("resume")}
          >
            ℹ Info
          </button>
        </div>
      </div>
      <div className="about-content">
        <div className="info-sections">
          <div className="info-section">
            <h2>Past Jobs</h2>
            <ul>
              <li>
                <strong>Senior Developer</strong> at ABC Corp (2021–2025)
                <br />- Led a team building scalable web apps with React and
                Node.js.
              </li>
              <li>
                <strong>Frontend Engineer</strong> at XYZ Inc (2018–2021)
                <br />- Developed modern UIs and improved accessibility for
                enterprise clients.
              </li>
            </ul>
          </div>
          <div className="info-section">
            <h2>Education</h2>
            <ul>
              <li>
                <strong>BSc Computer Science</strong>, XYZ University (2014–2018)
              </li>
              <li>
                Relevant coursework: Web Development, Algorithms, Databases
              </li>
            </ul>
          </div>
          <div className="info-section">
            <h2>Skills</h2>
            <ul>
              <li>React, JavaScript, TypeScript</li>
              <li>Node.js, Express</li>
              <li>HTML5, CSS3, SASS</li>
              <li>MongoDB, SQL</li>
              <li>Git, CI/CD, Agile</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeMain;