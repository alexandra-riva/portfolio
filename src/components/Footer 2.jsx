import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-subline">Curious to connect? So am I.</p>

      <a
        className="footer-link"
        href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </footer>
  );
}
