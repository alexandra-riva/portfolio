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
  'Tailwind CSS',
  'HeroUI',
  'Figma',
  'UI/UX',
  'Git & GitHub',
  'Vite',
  'A-Frame',
  'Blender',
  'WebXR',
  ];

  return (
    <section className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-divider" />

      <div className="about-content">
        <div className="about-text">
          <p>
            After years of working in various roles, I chose to start over and study frontend development.
            I’ve always been drawn to clean, beautiful interfaces — and now I get to build them.
          </p>
          <p>
            I’m especially curious about UI/UX, and I’ve started exploring immersive tech like AR and VR. My latest project involved creating a 3D interactive dream space using A-Frame and Blender. </p>
           <p>I value minimalism in how I live and what I create. I’m looking for an internship from September
            to March, ideally in a creative and collaborative team.
          </p>
        </div>
        <div className="about-image">
          <img src={profileImg} alt="Alexandra Riva" />
        </div>
      </div>

      <div className="skills-marquee-wrapper">
        <div className="skills-marquee">
          {skills.map((skill, index) => (
            <span key={index} className="skill-item">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
