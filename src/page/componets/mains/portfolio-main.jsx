import React from "react";
import './styles/layout.css';
import './styles/header-buttons.css';
import './styles/info-section.css';
import './styles/portfolio.css';
import './styles/buttons.css';
import './styles/typography.css';

const projects = [
  {
    title: "Patient Search system System",
    description: "a simple patient search and statistics system for healthcare providers.",
    image: "search.png",
    source: "https://github.com/GeorgeMunday/Patient-search-and-statistics",
    website: "https://patient-search-and-statistics.vercel.app",
    hasWebsite: true,
    infoType: "ecommerce"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase projects, skills, and contact info.",
    image: "portfolio.png",
    source: "https://github.com/yourusername/taskapp",
    website: "https://taskapp.example.com",
    hasWebsite: true,
    infoType: "taskapp"
  },
  {
    title: "Pathfinder Visualizer",
    description: "simple pathfinding algorithm visualizer made in pyhton.",
    image: "OIP.webp",
    source: "https://github.com/GeorgeMunday/path-finder",
    website: "",
    hasWebsite: false,
    infoType: "portfolio"
  },
  {
    title: "C# calculator app",
    description: "A simple calculator app made in C#.",
    image: "stock1.webp",
    source: "ahttps://github.com/GeorgeMunday/Calculator",
    website: "",
    hasWebsite: false,
    infoType: "blog"
  }
];

const PortfolioMain = ({ onSidebarToggle, onInfoClick }) => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Projects</h1>
      </div>
      <div className="about-content">
        <div className="info-sections portfolio-grid">
          {projects.map((project, idx) => (
            <div className="info-section portfolio-section portfolio-card" key={idx}>
              <h2 style={{marginBottom: '1rem'}}>{project.title}</h2>
              <img src={project.image} alt={project.title + ' preview'} className="portfolio-thumb portfolio-thumb-large" />
              <p className="portfolio-desc">{project.description}</p>
              <div className="portfolio-links portfolio-actions-row">
                <a href={project.source} target="_blank" rel="noopener noreferrer" className="portfolio-link-btn portfolio-action-btn">Source Code</a>
                {project.hasWebsite && project.website ? (
                  <>
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="portfolio-link-btn portfolio-action-btn">Website</a>
                    {idx % 2 === 0 ? (
                      <button
                        className="info-btn portfolio-action-btn"
                        onClick={() => onInfoClick(project.infoType)}
                        style={{marginTop: 0}}
                      >
                        More Details
                      </button>
                    ) : (
                      <button
                        className="info-btn portfolio-action-btn"
                        onClick={() => onSidebarToggle && onSidebarToggle(project.infoType)}
                        style={{marginTop: 0}}
                      >
                        More Details
                      </button>
                    )}
                  </>
                ) : (
                  idx % 2 === 0 ? (
                    <button
                      className="info-btn portfolio-action-btn"
                      onClick={() => onInfoClick(project.infoType)}
                      style={{marginTop: 0}}
                    >
                      More Details
                    </button>
                  ) : (
                    <button
                      className="info-btn portfolio-action-btn"
                      onClick={() => onSidebarToggle && onSidebarToggle(project.infoType)}
                      style={{marginTop: 0}}
                    >
                      More Details
                    </button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioMain;