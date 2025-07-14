import React from "react";
import './styles/layout.css';
import './styles/header-buttons.css';
import './styles/info-section.css';
import './styles/buttons.css';
import './styles/typography.css';
import './styles/css/contact-form.css';

const ContactMain = ({ onSidebarToggle, onInfoClick }) => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="info-sections">
          <div className="info-section resume-section-bg">
            <h2 className="resume-section-title">Contact</h2>
            <form className="contact-form">
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
        </div>
      </div>
    </div>
  );
};

export default ContactMain;

