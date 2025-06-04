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
      </div>
    </div>
  );
};

export default AboutMain;
