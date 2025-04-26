import React from "react";

const EducationMain = () => {
    return (
        <div className="resume-main">
        <div className="resume-main__description">
          <div className="resume-main__description__title">
            <img src="mortarboard.png" alt="Github" className="resume__list--icon" />
            <h1 className="resume__main__title">Education</h1>
          </div>
          <div className="resume-main__description__content">
            <ul className="resume__list">
              <li>York College</li>
              <li>Computer Science</li>
              <li>2024 - 2026</li>
              <li>Description</li>
            </ul>
          </div>
          <div className="resume-main__description__content">
            <ul className="resume__list">
              <li>King James</li>
              <li>GSCE: Triple Science,Geography,Astronamy,Drama,English,Maths</li>
              <li>2019 - 2024</li>
              <li>Description</li>
            </ul>
          </div>
        </div>
      </div>
    );
}
export default EducationMain;
        