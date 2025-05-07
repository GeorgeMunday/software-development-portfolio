import React, { useState } from "react";

import TableComponent from "./portfolio-components/table.jsx";
import Cards from "./portfolio-components/back-end.jsx";
import WebCards from "./portfolio-components/web-dev.jsx";

import './portfolio.css'

const Projects = [
    {name: 1, Demo: "#", Code: "#","End Date": 13},
    {name: 2, Demo: "#", Code: "#","End Date": 13},
    {name: 3, Demo: "#", Code: "#","End Date": 13},
    {name: 1, Demo: "#", Code: "#","End Date": 13},
    {name: 2, Demo: "#", Code: "#","End Date": 13},
    {name: 3, Demo: "#", Code: "#","End Date": 13},
    {name: 1, Demo: "#", Code: "#","End Date": 13},
    {name: 2, Demo: "#", Code: "#","End Date": 13},
    {name: 3, Demo: "#", Code: "#","End Date": 13}
];

const Portfolio = () => {
    const [activeComponent, setActiveComponent] = useState('table');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'carousel':
                return <WebCards/>;
            case 'intro':
                return <Cards/>;
            case 'table':
                <TableComponent data = {Projects} />
            default:
                return <Cards/>;
        };
    };

    return (
        <>
            <nav className="portfolio__nav">
            <button className="portfolio__button" onClick={() => setActiveComponent('intro')}>
                    Back end design
                </button>
                <button className="portfolio__button" onClick={() => setActiveComponent('carousel')}>
                    Web development
                </button>
                <button className="portfolio__button" onClick={() => setActiveComponent('table')}>
                    Whole portfolio
                </button>
            </nav>
            <div className="portfolio__content">
                {renderComponent()}
            </div>
        </>
    );
};

export default Portfolio;
