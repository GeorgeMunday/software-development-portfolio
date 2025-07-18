import React from "react";
import './styles/layout.css';
import './styles/header-buttons.css';
import './styles/info-section.css';
import './styles/buttons.css';
import './styles/typography.css';
import './styles/resume.css';
import './styles/responsive.css';

const ResumeMain = ({ onSidebarToggle, onInfoClick }) => {
  return (
    <div className="about-container">
      <div className="about-content">
          {/* Experience Section */}
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Experience</h2>
            <ul className="resume-list">
              <li>
                <strong>Dedals Internship</strong> (2025)
                <ul>
                  <li>Six-month internship learning real-world web development.</li>
                  <li>Skills gained: Teamwork, Problem Solving, Modern Web Tech, Communication</li>
                </ul>
              </li>
            <button
              className="resume-sidebar-btn"
              onClick={() => onSidebarToggle && onSidebarToggle('about')}
            >
              a bit more on what I did
            </button>
              <li>
                <strong>McDonald's Crew Member</strong> (2024–2025)
                <ul>
                  <li>Worked in a fast-paced environment, strengthening time management and organization.</li>
                  <li>Skills gained: Time Management, Organization, Customer Service, Teamwork</li>
                </ul>
              </li>
              <button
                className="resume-sidebar-btn"
                onClick={() => onSidebarToggle && onSidebarToggle('portfolio')}
              >
                a bit more on what I did
              </button>
            </ul>
          </div>
          {/* Education Section */}
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Education</h2>
            <ul className="resume-list">
              <li>
                <strong>T Level in Digital Production, Design & Development</strong>, York College (2024–2026)
                <ul>
                  <li>Specialized in software development, digital project management, and UI/UX design.</li>
                  <li>Completed industry placement, developed real-world web applications, and collaborated with teams.</li>
                  <li>Key skills: JavaScript, React, Agile, Figma, teamwork, and communication.</li>
                </ul>
              </li>
              <button className="resume-sidebar-btn" onClick={() => onInfoClick && onInfoClick('ecommerce')}>
                a bit more on what I did
              </button>
              <li>
                <strong>9 GCSEs</strong> (2022–2024)
                <ul>
                  <li>Triple Science (Biology, Chemistry, Physics)</li>
                  <li>Mathematics</li>
                  <li>English Language & English Literature</li>
                  <li>Geography</li>
                  <li>Drama</li>
                  <li>Astronomy</li>
                </ul>
              </li>
              <button className="resume-sidebar-btn" onClick={() => onInfoClick && onInfoClick('about')}>
                a bit more on what I did
              </button>
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
  );
};

export default ResumeMain;