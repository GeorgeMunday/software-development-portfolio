import React from "react";



const WorkMain = () => {
    return (
        <div className="resume-main">
        <div className="resume-main__description">
          <div className="resume-main__description__title">
            <img src="bag.png" alt="Github" className="resume__list--icon" />
            <h1 className="resume__main__title">Work Experience</h1>
          </div>
          <div className="resume-main__description__content">
            <ul className="resume__list">
              <li>Dedalus</li>
              <li>healthcare software development</li>
              <li>2025 - current</li>
              <li>Description</li>
            </ul>
          </div>
          <div className="resume-main__description__content">
            <ul className="resume__list">
              <li>Macdonals</li>
              <li>Resturant</li>
              <li>2024 - current</li>
              <li>Description</li>
            </ul>
          </div>
            <div className="resume-main__description__content">
                <ul className="resume__list">
                <li>Volunteering at drone club</li>
                <li>Computer Science</li>
                <li>2024 - 2026</li>
                <li>Description</li>
                </ul>
            </div>
            <div className="resume-main__description__content">
                <ul className="resume__list">
                <li>Cafe De Luca</li>
                <li>Computer Science</li>
                <li>2024 - 2026</li>
                <li>Description</li>
                </ul>
            </div>
        </div>
      </div>
    );
}
export default WorkMain;