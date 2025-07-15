import React from 'react';
import SkillsIcons from '../skills-icons';
import './styles/layout.css';
import './styles/header-buttons.css';
import './styles/info-section.css';
import './styles/buttons.css';
import './styles/typography.css';
import './styles/skills-icons.css';
import './styles/responsive.css';

const HomeMain = ({ onSidebarToggle,setPage }) => {
  return (
    <div className="about-content">
      <div className="about-header-intro resume-section-bg" style={{ marginBottom: '2.5rem', padding: '2.2rem 1.5rem' }}>
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
        <div className="about-intro">
          <p>Welcome to my portfolio! I'm a 17-year-old student and aspiring software developer based in Yorkshire, England. I'm passionate about technology and constantly learning new things every day.</p>
        </div>
      </div>
      <div className="about-content">
        <div className="info-sections">
          {/* Experience Section - block style */}
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Work Experience</h2>
            <ul className="about-exp-list">
              <li>
                <strong>Dedalus</strong> <span className="about-exp-date">(March 2025)</span>
                <ul>
                  <li>Six-month internship learning real-world web development.</li>
                </ul>
              </li>
              <li>
                <strong>McDonald's</strong> <span className="about-exp-date">(September 2024)</span>
                <ul>
                  <li>Worked in a fast-paced environment, strengthening time management and organization.</li>
                </ul>
              </li>
            </ul>
            <button 
              className="info-btn" 
              onClick={() => setPage && setPage('Expirence')}
            >
              Learn More
            </button>
          </div>

          {/* Skills Section - block style */}
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Skills</h2>
            <SkillsIcons />
            <button
              className="info-btn"
              onClick={() => setPage && setPage('Projects')}
            >
              View Projects
            </button>
          </div>

          {/* Education Section - block style */}
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Education</h2>
            <p>T level digital production design and development</p>
            <p>9 GCSEs</p>
            <button 
              className="info-btn" 
              onClick={() => setPage && setPage('Expirence')}
            >
              More Info
            </button>
          </div>
          
          {/* Contact Preview - block style */}
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Contact</h2>
            <p>Get in touch for opportunities</p>
            <button
              className="info-btn"
              onClick={() => setPage && setPage('Contact')}
            >
              Go to Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;