import React from "react";

import EducationMain from "./resume componets/resume.education";
import WorkMain from "./resume componets/reume-work";


import "./resume-main.css";

const ResumeMain = () => {
    return (
      <>
      <EducationMain />
      <WorkMain />
      <WorkMain />
      <WorkMain />
      </>
    );
}
export default ResumeMain;