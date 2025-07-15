import React from "react";
import './styles/layout.css';
import './styles/header-buttons.css';
import './styles/info-section.css';
import './styles/buttons.css';
import './styles/typography.css';
import './styles/css/contact-form.css';
import './styles/responsive.css';

const ContactMain = ({ onSidebarToggle, onInfoClick }) => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="info-sections">
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Contact</h2>
            <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Feature not ready'); }}>
              <label>
                Name
                <input type="text" placeholder="Your Name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@email.com" />
              </label>
              <label>
                Message
                <textarea placeholder="Say hello!" rows={4} />
              </label>
              <button type="submit" className="info-btn mellow-btn">Send Message</button>
            </form>
          </div>
          <div className="info-section resume-section-bg contact-socials-section">
            <div className="contact-socials-row">
              <a href="https://github.com/GeorgeMunday" target="_blank" rel="noopener noreferrer" title="GitHub">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" className="contact-social-icon github" />
              </a>
              <a href="https://www.linkedin.com/in/george-munday/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="contact-social-icon linkedin" />
              </a>
              <a href="mailto:george.munday@email.com" title="Email">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="Email" className="contact-social-icon email" />
              </a>
              <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="contact-social-icon instagram" />
              </a>
              <a href="https://leetcode.com/yourusername/" target="_blank" rel="noopener noreferrer" title="LeetCode">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg" alt="LeetCode" className="contact-social-icon leetcode" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;

