import React, { useState } from "react";
import Page from "./pages";
import "./homepage.css";

const Homepage = () => {
    const [showPage, setShowPage] = useState(false);

    const handleButtonClick = () => {
        setShowPage(true);
    };

    return (
        <div className="homepage">
            {!showPage && <h1 className="homepage-header">Welcome to My Portfolio</h1>}
            {!showPage && <button onClick={handleButtonClick} className="homepage-button">discover more about me</button>}
            {showPage && <Page />}
        </div>
    );
};

export default Homepage;
