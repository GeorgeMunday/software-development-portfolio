import React from 'react';
import './styles/skills-icons.css';

const skills = [
  { title: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { title: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { title: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { title: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { title: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { title: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { title: 'C#', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { title: 'Pandas', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { title: 'SQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { title: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
];

const SkillsIcons = () => (
  <div className="skills-icons-list">
    {skills.map(skill => (
      <span title={skill.title} className="skill-icon" key={skill.title}>
        <img src={skill.src} alt={skill.title} height="36" />
      </span>
    ))}
  </div>
);

export default SkillsIcons;
