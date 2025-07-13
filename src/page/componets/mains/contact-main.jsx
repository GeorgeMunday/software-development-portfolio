import React from "react";
import "./styles/main.css"

const ContactMain = () => {
    return (
    <div className="main-content">
      <div className="row row-1">
        <div className="box">
          <h1>Contact</h1>
          <p style={{opacity:0.7}}>This is a placeholder for your contact form or contact details. Add your preferred contact methods here.</p>
        </div>
      </div>
      <div className="row row-2">
        <div className="box" style={{opacity:0.4}}>
          <p>Mockup Section</p>
        </div>
        <div className="box" style={{opacity:0.4}}>
          <p>Mockup Section</p>
        </div>
      </div>
    </div>
    );
};

export default ContactMain;

