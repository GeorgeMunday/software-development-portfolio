import React from "react";
import './styles/layout.css';
import './styles/header-buttons.css';
import './styles/info-section.css';
import './styles/buttons.css';
import './styles/typography.css';
import './styles/resume.css';

const ResumeMain = ({ onSidebarToggle, onInfoClick }) => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Resume</h1>
        <div className="header-buttons">
          <button
            className="sidebar-toggle-btn"
            onClick={() => onSidebarToggle && onSidebarToggle('resume')}
            style={{ marginRight: '1rem' }}
          >
            ☰ Details
          </button>
        </div>
      </div>
      <div className="about-content">
        <div className="info-sections resume-sections">
          {/* Past Jobs Section */}
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Past Jobs
              <button className="infobar-toggle-btn" onClick={() => onInfoClick && onInfoClick('pastjobs')}>ℹ</button>
            </h2>
            <ul className="resume-list">
              <li>
                <strong>Senior Developer</strong> at ABC Corp (2021–2025)
                <ul>
                  <li>Led a team building scalable web apps with React and Node.js.</li>
                  <li>Skills gained: Leadership, React, Node.js, Project Management, Agile, CI/CD, Mentoring</li>
                </ul>
              </li>
              <li>
                <strong>Frontend Engineer</strong> at XYZ Inc (2018–2021)
                <ul>
                  <li>Developed modern UIs and improved accessibility for enterprise clients.</li>
                  <li>Skills gained: Accessibility, UI/UX, JavaScript, CSS3, SASS, Client Communication</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Experience Section */}
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Experience
              <button className="infobar-toggle-btn" onClick={() => onInfoClick && onInfoClick('experience')}>ℹ</button>
            </h2>
            <ul className="resume-list">
              <li>
                <strong>Dedals Internship</strong> (2025)
                <ul>
                  <li>Six-month internship learning real-world web development.</li>
                  <li>Skills gained: Teamwork, Problem Solving, Modern Web Tech, Communication</li>
                </ul>
              </li>
              <li>
                <strong>McDonald's Crew Member</strong> (2024–2025)
                <ul>
                  <li>Worked in a fast-paced environment, strengthening time management and organization.</li>
                  <li>Skills gained: Time Management, Organization, Customer Service, Teamwork</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Education Section */}
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Education
              <button className="infobar-toggle-btn" onClick={() => onInfoClick && onInfoClick('education')}>ℹ</button>
            </h2>
            <ul className="resume-list">
              <li>
                <strong>BSc Computer Science</strong>, XYZ University (2014–2018)
                <ul>
                  <li>Relevant coursework: Web Development, Algorithms, Databases</li>
                  <li>Skills gained: Computer Science Fundamentals, SQL, Algorithms, Web Development</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="info-section" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a
              className="info-btn mellow-btn download-cv-btn"
              href="/public/GeorgeMundayCV.pdf"
              download
            >
              ⬇ Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeMain;