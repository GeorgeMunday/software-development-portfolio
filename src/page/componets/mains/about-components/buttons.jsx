import React from "react";

const WorkTitle = [
  { name: "1", hrefDemo: "#", hrefCode: "#" },
  { name: "2", hrefDemo: "#", hrefCode: "#" },
  { name: "3", hrefDemo: "#", hrefCode: "#" },
];

const Buttons = () => {
  return (
    <>
      {WorkTitle.map((project, index) => (
        <div key={index} className="about-main__work-item">
          <h3>{project.name}</h3>
          <a href={project.hrefDemo} className="about-main__work-link">Demo</a>
          <a href={project.hrefCode} className="about-main__work-link">Code</a>
        </div>
      ))}
    </>
  );
};

export default Buttons;
