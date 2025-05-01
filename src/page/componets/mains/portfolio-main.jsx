import React from "react";

import Carousel from "./portfolio-components/carousel.jsx";
import Intro from "./about-components/intro.jsx";
import TableComponent from "./portfolio-components/table.jsx";


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
]

const Portfolio = () => {
    return (
        <>
            <div className="portfolio-main">
                <TableComponent data={Projects}></TableComponent>
            </div>
        </>
    );
};

export default Portfolio;