import React, { useState, useEffect } from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getFormattedTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  return (
    <section className="hero-grid">
      <div className="hero-time">{currentTime}</div>
      <a href="mailto:alexandra.riva@yahoo.com" className="hero-contact">
        Get in touch
      </a>
    </section>
  );
}
