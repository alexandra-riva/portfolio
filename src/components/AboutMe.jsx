import React from 'react';
import './AboutMe.css';
import profileImg from '../assets/IMG_1914.jpeg';

export default function AboutMe() {
  const skills = [
  'HTML',
  'CSS',
  'Tailwind CSS',
  'JavaScript',
  'React',
  'React Native',
  'MongoDB',
  'REST API',
  'Tailwind CSS',
  'Figma',
  'UI/UX',
  'Git & GitHub',
  'A-Frame',
  'Blender',
  ];

  return (
    <section className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-divider" />

      <div className="about-content">
        <div className="about-text">
          <p>
            After several years of working in different roles, I chose to transition into frontend development and user experience, as I found myself more interested in building and improving digital products.
          </p>
          <p>
            I’m especially interested in UI/UX and enjoy exploring how design and technology shape user experiences. I’ve also explored immersive technologies like AR and VR, including a 3D interactive project built with A-Frame and Blender.</p>
           <p>I like keeping things simple and focusing on details that make a product feel clear and easy to use.
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
