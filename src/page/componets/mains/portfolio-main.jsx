import React from "react";
import "./styles/main.css"

const PortfolioMain = ({ onSidebarToggle, onInfoClick }) => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Portfolio</h1>
        <div className="header-buttons">
          <button 
            className="sidebar-toggle-btn" 
            onClick={() => onSidebarToggle('portfolio')}
          >
            ☰ Details
          </button>
          <button 
            className="infobar-toggle-btn" 
            onClick={() => onInfoClick('portfolio')}
          >
            ℹ Info
          </button>
        </div>
      </div>
      <div className="about-content">
        <div className="info-sections">
          <div className="info-section">
            <h2>Projects</h2>
            <div className="projects-list">
              <button 
                className="info-btn" 
                onClick={() => onInfoClick('ecommerce')}
              >
                E-Commerce Project
              </button>
              <button 
                className="info-btn" 
                onClick={() => onInfoClick('taskapp')}
              >
                Task Management App
              </button>
              {/* Add more project buttons here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMain;