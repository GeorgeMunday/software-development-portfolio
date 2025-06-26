import React from "react";
import "./styles/main.css"

const Portfolio = ({ onInfoClick }) => {
    return (
        <div className="main-content">
            <div className="row row-1">
                <div className="box">
                    <button 
                        className="info-btn" 
                        onClick={() => onInfoClick('portfolio1')}
                    >
                        E-Commerce Project
                    </button>
                </div>
            </div>
            <div className="row row-2">
                <div className="box">
                    <button 
                        className="info-btn" 
                        onClick={() => onInfoClick('portfolio2')}
                    >
                        Task Management App
                    </button>
                </div>
                <div className="box">
                    {/* Additional project buttons can go here */}
                </div>
            </div>
            <div className="row row-3">
                <div className="box">4</div>
                <div className="box">5</div>
            </div>
            <div className="row row-4">
                <div className="box">6</div>
            </div>
            <div className="row row-5">
                <div className="box">7</div>
                <div className="box">8</div>
            </div>
        </div>
    );
};

export default Portfolio;