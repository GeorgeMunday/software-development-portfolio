import React from "react";
import "./styles/main.css";

const ResumeMain = () => {
  return (
    <div className="main-content">
      <div className="row row-1">
        <div className="box">
          <h1>Resume</h1>
          <p style={{ opacity: 0.7 }}>
            This is a placeholder for your resume content. Add your professional
            experience, education, and skills here.
          </p>
        </div>
      </div>
      <div className="row row-2">
        <div className="box" style={{ opacity: 0.4 }}>
          <p>Mockup Section</p>
        </div>
        <div className="box" style={{ opacity: 0.4 }}>
          <p>Mockup Section</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeMain;