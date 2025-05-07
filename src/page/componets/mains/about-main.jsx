import React from "react";
import Intro from "./about-components/intro";
import Buttons from "./about-components/buttons";
import {motion} from "motion/react"

import "./about-main.css";

const AboutMain = () => {
  return (
    <div className="about-main">
      <div className="about-main__description">
        <div className="about-main__description__work">
          <Intro />
        </div>
        <div className="s-container">
                <p className="title">Skills</p>
                <ul className="skills-list">
                    <li className="s-item">React JS</li>
                    <li className="s-item">HTML</li>
                    <li className="s-item">CSS</li>
                    <li className="s-item">Python</li>
                    <li className="s-item">Computational Thinking</li>
                    <li className="s-item">Problem Solving</li>
                    <li className="s-item">Team Work</li>
                </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
