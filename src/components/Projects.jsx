import React from 'react';
import './Projects.css';

import weatherapp from '../assets/weatherapp.png';
import studiowebsite from '../assets/studiowebsite.png';
import quiz from '../assets/quiz.png';
import cocktailkungen from '../assets/cocktailkungen.png';
import rockpaperscissors from '../assets/rockpaperscissors.png';
import phoenix from '../assets/phoenix.png';
import medicalapp from '../assets/medicalapp.png';

const projects = [
  {
    id: '01',
    name: 'Cocktail Kungen',
    description:
      'Cocktail Kungen started as a collaborative project, but I later re-designed it with my own interface, backend, and database. I also added a custom loading animation for a smoother user experience. The app is built with React, Express, and MongoDB, allowing users to browse, add, delete, and favorite cocktails via a RESTful API I developed from scratch. It’s deployed on Netlify and Render, using MongoDB Atlas for persistent storage. Note: the backend may take up to 1 minute to start due to free Render hosting.',
    image: cocktailkungen,
    imageAlt: 'Cocktail Kungen app preview',
    github: 'https://github.com/alexandra-riva/api-project',
    netlify: 'https://cocktail-kungen-app.netlify.app/',
  },
  {
    id: '02',
    name: 'Quiz Game',
    description:
      'Responsive quiz game using JS and the Open Trivia API. Features live questions, score tracking, and interactive UI.',
    image: quiz,
    imageAlt: 'Quiz game preview',
    github: 'https://github.com/alexandra-riva/Quiz_Game_Project',
    netlify: 'https://gowildquiz.netlify.app/',
  },
  {
    id: '03',
    name: 'Studio Website',
    description:
      'Our first collaborative project at Hyper Island — a fictional agency landing page built with HTML, CSS, and JavaScript. It features engaging animations, a cohesive design, and reflects our early experience in team-based frontend development.',
    image: studiowebsite,
    imageAlt: 'Studio website preview',
    github: 'https://github.com/alexandra-riva/Studio-website',
    netlify: 'https://studio-website-alexandra-riva.netlify.app/',
  },
  {
    id: '04',
    name: 'Weather App',
    description:
      'One of my first projects — a minimal weather search tool built with HTML, CSS, and JavaScript. It fetches real-time weather data from the Visual Crossing API through a custom Node.js and Express backend. Deployed on Netlify and Render. Backend may take up to 1 minute to start (free Render hosting).',
    image: weatherapp,
    imageAlt: 'Weather app preview',
    github: 'https://github.com/alexandra-riva/weather-app-alexandra-riva-public',
    netlify: 'https://weather-app-alexandra-riva.netlify.app/',
  },
  {
    id: '05',
    name: 'VR Dream Space',
    description:
      'My first VR project, created as part of a future-themed assignment about where we see ourselves in the years to come. This scene is inspired by a real dream of mine — living in the Dominican Republic. Set on a beach-jungle platform with an eco-style cabin, the project was built using A-Frame and Blender. It features animated elements like a flying phoenix and an orbiting butterfly, as well as interactive models that trigger sounds when approached or clicked. I modeled and textured the environment in Blender, and added logic and audio in A-Frame. Deployed on Netlify for in-browser VR exploration.',
    image: phoenix,
    imageAlt: 'VR Dream Space preview',
    github: 'https://github.com/alexandra-riva/vr-space',
    netlify: 'https://vrspacealex.netlify.app/',
  },
  {
    id: '06',
    name: 'Rock, Paper, Scissors',
    description:
      'An early project that helped me grasp the fundamentals of JavaScript and DOM manipulation. This simple browser game includes animated buttons, live score tracking, and interactive gameplay using event-driven logic.',
    image: rockpaperscissors,
    imageAlt: 'Rock paper scissors game preview',
    github: 'https://github.com/alexandra-riva/rock-paper-scissors-alexandra-riva',
    netlify: 'https://alexandra-riva.github.io/rock-paper-scissors-alexandra-riva/',
  },
  {
    id: '07',
    name: 'Medical App UI',
    description:
      'My very first Figma design & prototype. It focuses on clean UI, role-based dashboards, and accessibility for both patients and professionals.',
    image: medicalapp,
    imageAlt: 'Medical app UI prototype preview',
    figma: 'https://www.figma.com/proto/9J2tfqYttXzTaal06UuxUO/Medical-app?node-id=0-1&t=ZSurq2oEGDYAvQeK-1',
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-divider" />

      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <div className="project-text">
            <p className="project-label">{project.id} / {project.name}</p>
            <p className="project-description">{project.description}</p>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>🔗 View on GitHub</span>
                </a>
              )}
              {project.netlify && (
                <a href={project.netlify} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>🌐 See deployed site</span>
                </a>
              )}
              {project.figma && (
                <a href={project.figma} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>🎨 View on Figma</span>
                </a>
              )}
            </div>
          </div>

          <div className="project-image">
            <img src={project.image} alt={project.imageAlt} className="image-placeholder" />
          </div>
        </div>
      ))}
    </section>
  );
}