import React from 'react';
import './AboutMe.css';
import profileImg from '../assets/IMG_1914.jpeg';

export default function AboutMe() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'REST API',
    'Tailwind',
    'HeroUI',
    'Netlify',
    'Figma',
    'UX/UI',
  ];

  return (
    <section className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-divider" />

      <div className="about-content">
        <div className="about-text">
          <p>
            I’m a front-end developer and design enthusiast with a love for clean code, intuitive interfaces, and creative storytelling through web experiences.
          </p>
          <p>
            I’m currently studying at Hyper Island and open to internship opportunities starting September.
          </p>
        </div>
        <div className="about-image">
          <img src={profileImg} alt="Alexandra Riva" />
        </div>
      </div>

      <div className="skills-marquee-wrapper">
        <div className="skills-marquee">
          {skills.map((skill, index) => (
            <span key={skill}>
              {skill}
              {index < skills.length - 1 && <span>&nbsp;&bull;&nbsp;</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
