import React from "react";
import './styles/layout.css';
import './styles/header-buttons.css';
import './styles/info-section.css';
import './styles/portfolio.css';
import './styles/buttons.css';
import './styles/typography.css';

const projects = [
  {
    title: "E-Commerce Project",
    description: "A modern online store with shopping cart, payments, and admin dashboard.",
    image: "/public/bag.png",
    source: "https://github.com/yourusername/ecommerce",
    website: "https://ecommerce.example.com",
    infoType: "ecommerce"
  },
  {
    title: "Task Management App",
    description: "Organize tasks, collaborate with teams, and track progress in real time.",
    image: "/public/test.png",
    source: "https://github.com/yourusername/taskapp",
    website: "https://taskapp.example.com",
    infoType: "taskapp"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase projects, skills, and contact info.",
    image: "/public/Minimalist-Kitty.jpg",
    source: "https://github.com/yourusername/portfolio",
    website: "https://portfolio.example.com",
    infoType: "portfolio"
  },
  {
    title: "Blog Platform",
    description: "A simple blogging platform with markdown support and user accounts.",
    image: "/public/background.avif",
    source: "https://github.com/yourusername/blog",
    website: "https://blog.example.com",
    infoType: "blog"
  }
];

const PortfolioMain = ({ onSidebarToggle, onInfoClick }) => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>projects</h1>
      </div>
      <div className="about-content">
        <div className="info-sections portfolio-grid">
          {projects.map((project, idx) => (
            <div className="info-section portfolio-section" key={idx}>
              <img src={project.image} alt={project.title + ' preview'} className="portfolio-thumb" />
              <h2>{project.title}</h2>
              <p className="portfolio-desc">{project.description}</p>
              <div className="portfolio-links">
                <a href={project.source} target="_blank" rel="noopener noreferrer" className="portfolio-link-btn">Source Code</a>
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="portfolio-link-btn">Website</a>
              </div>
              <button 
                className="info-btn" 
                onClick={() => onInfoClick(project.infoType)}
                style={{marginTop: '1.2rem'}}
              >
                More Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioMain;