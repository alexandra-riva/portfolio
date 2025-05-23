import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-grid">
      <div className="hero-time">11:55 AM</div>
      <div className="hero-intro">
        Hi there! I’m a front-end developer student at Hyper Island, with interest in UX-UI design, who is looking for 6-months internship, starting from September, in a creative environment.
      </div>
      <div className="hero-dev-title">Development</div>
      <div className="hero-dev-skills">HTML / CSS<br />Javascript<br />Tailwind<br />React</div>
      <div className="hero-design-title">Design</div>
      <div className="hero-design-skills">Figma</div>
      <div className="hero-contact">Get in touch</div>
    </section>
  );
}
