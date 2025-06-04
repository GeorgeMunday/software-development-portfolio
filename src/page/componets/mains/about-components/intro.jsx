import React from "react";
import { motion } from "framer-motion"; 

const Intro = () => {
  return (
    <div>
      <div className="about-main__description__content">
        <p>
        Hi, I’m George Munday, a passionate developer skilled in Python, pandas, and React.js, with experience in data cleaning, analysis, and building interactive apps. I’ve worked on real datasets, creating visualizations and solving complex data problems, while also developing UI components and state management with React. I’m proficient in agile development, version control with Git, debugging, and collaborating in team environments.
        </p>
        <p>skills</p>
      </div>
    <ul className= 'unsorted'>
      <li>Python (pandas)</li>
      <li>Data Analysis & Visualization</li>
      <li>React.js & JavaScript</li>
      <li>Git & Version Control</li>
      <li>Debugging & Testing</li>
      <li>Problem Solving & Teamwork</li>
      <li>Agile Development</li>
    </ul>
    <p>Let’s connect if you're looking for a developer who thrives on problem solving and building impactful solutions.</p>
    </div>
  );
};

export default Intro;
