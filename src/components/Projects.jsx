import React from 'react';
import './Projects.css';

import studiowebsite from '../assets/studiowebsite.png';
import cocktailkungen from '../assets/cocktailkungen.png';
import phoenix from '../assets/phoenix.png';
import medicalapp from '../assets/medicalapp.png';
import weatherVideo from '../assets/weather-demo.mp4';
import carl from '../assets/carl.png';

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
    name: 'Weather App (React Native)',
    description:
      'A mobile-first weather application built with React Native and Expo Router. The app allows users to search for cities, view real-time weather data, and save favorite locations. Zustand is used for state management, while Redux Toolkit Query handles API fetching and caching. The app includes smooth navigation with a drawer layout, a search modal with debounced input, and persistent favorites.',
    video: weatherVideo,
    github: 'https://github.com/alexandra-riva/weather-native-zustand',
  },

    {
  id: '03',
  name: 'Creative Website',
  description:
    'A custom-designed and developed website created in collaboration with a creative professional. The design was tailored to reflect their visual vision, with a strong focus on typography, layout, and composition. Built using modular HTML, CSS, and JavaScript with reusable sections and dynamic content loading. Includes interactive elements such as flip cards, a category-based gallery, and language switching. Fully responsive and deployed on its own domain.',
  image: carl,
  imageAlt: 'Carl Larsson website preview',
  github: 'https://github.com/alexandra-riva/carl-website',
  netlify: 'https://carllarzzon.eu/',
},

  {
    id: '04',
    name: 'Studio Website',
    description:
      'A fictional agency landing page built with HTML, CSS, and JavaScript. Features animations, cohesive design, and reflects early team-based frontend work.',
    image: studiowebsite,
    imageAlt: 'Studio website preview',
    github: 'https://github.com/alexandra-riva/Studio-website',
    netlify: 'https://studio-website-alexandra-riva.netlify.app/',
  },

  {
    id: '05',
    name: 'VR Dream Space',
    description:
      'A VR scene built with A-Frame and Blender, inspired by a dream of living in the Dominican Republic. Includes animated and interactive elements with sound.',
    image: phoenix,
    imageAlt: 'VR Dream Space preview',
    github: 'https://github.com/alexandra-riva/vr-space',
    netlify: 'https://vrspacealex.netlify.app/',
  },
  {
    id: '06',
    name: 'Medical App UI',
    description:
      'My first Figma prototype focusing on clean UI, accessibility, and role-based dashboards.',
    image: medicalapp,
    imageAlt: 'Medical app UI prototype preview',
    figma: 'https://www.figma.com/proto/9J2tfqYttXzTaal06UuxUO/Medical-app',
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-divider" />

      {projects.map((project) => (
        <div className="project-item" key={project.id}>
          
          <div className="project-text">
            <p className="project-label">
              {project.id} / {project.name}
            </p>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  🔗 View on GitHub
                </a>
              )}
              {project.netlify && (
                <a href={project.netlify} target="_blank" rel="noopener noreferrer" className="project-link">
                  🌐 See deployed site
                </a>
              )}
              {project.figma && (
                <a href={project.figma} target="_blank" rel="noopener noreferrer" className="project-link">
                  🎨 View on Figma
                </a>
              )}
            </div>
          </div>

          <div className="project-image">
            {project.video ? (
              <video
                className="image-placeholder"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={project.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={project.image}
                alt={project.imageAlt}
                className="image-placeholder"
              />
            )}
          </div>

        </div>
      ))}
    </section>
  );
}