import React from 'react';
import './back-end.css'

const cards = [
  {
    title: 'Cookie clicker',
    image: '#',
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/example/project1',
  },
  {
    title: 'AI chat bot',
    image: '#',
    demoLink: 'https://example.com/demo2',
    codeLink: 'https://github.com/example/project2',
  },
  {
    title: 'Game Landing Page',
    image: '#',
    demoLink: 'https://example.com/demo3',
    codeLink: 'https://github.com/example/project3',
  },
  {
    title: 'Log in system',
    image: '#',
    demoLink: 'https://example.com/demo4',
    codeLink: 'https://github.com/example/project4',
  },
];

const WebCards = () => {
  return (
    <div className="cards-grid">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <h2 className="card-title">{card.title}</h2>
          <div className="card-links">
            <a href={card.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={card.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebCards;