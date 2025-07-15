import React from 'react';
import './styles/layout.css';
import './styles/header-buttons.css';
import './styles/info-section.css';
import './styles/buttons.css';
import './styles/typography.css';
import './styles/skills-icons.css';

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
            <p>Dedalus - march 2025</p>
            <p>brief description</p>
            <p>Mcdonalds - september 2024</p>
            <p>brief description</p>
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
            <div className="skills-icons-list">
              <span title="React" className="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" height="36" />
              </span>
              <span title="Node.js" className="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" height="36" />
              </span>
              <span title="JavaScript" className="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" height="36" />
              </span>
              <span title="CSS3" className="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" height="36" />
              </span>
              <span title="HTML5" className="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" height="36" />
              </span>
              <span title="TypeScript" className="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" height="36" />
              </span>
              <span title="Git" className="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" height="36" />
              </span>
              <span title="Figma" className="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" height="36" />
              </span>
            </div>
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