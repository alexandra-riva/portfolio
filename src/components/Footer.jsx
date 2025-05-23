import React from 'react';
import './Footer.css';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-subline">Curious to connect? So am I.</p>
      <p className="footer-text">Feel free to reach out via email or find me here:</p>

      <a className="footer-email" href="mailto:alexandra.riva@hyperisland.se">
        alexandra.riva@hyperisland.se
      </a>

      <div className="footer-icons">
        <a
          className="footer-icon-link"
          href="https://www.linkedin.com/in/alexandrariva/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          className="footer-icon-link"
          href="https://github.com/alexandra-riva"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
}
