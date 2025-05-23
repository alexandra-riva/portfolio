import React from 'react';
import './Projects.css';

const projects = [
  {
    id: '01',
    name: 'Project Name',
    description:
      'Join my YouTube channel where I show my design thinking, my process, and my personality. The channel has helped over 200K designers become more proficient in the tools I use everyday, Figma, Webflow & more. Join the journey!',
    imageAlt: 'Project image placeholder',
  },
  // Duplicate for demo – in real case, map through real data
  {
    id: '02',
    name: 'Another Project',
    description:
      'Description placeholder for another creative project. Talk about your role, tech, or what you learned.',
    imageAlt: 'Project image placeholder',
  },
  {
    id: '03',
    name: 'Third Project',
    description:
      'More placeholder copy — tell a short story of the project, your contribution, or tech stack.',
    imageAlt: 'Project image placeholder',
  },
  {
    id: '04',
    name: 'Fourth One',
    description:
      'This one could show something fun or experimental. Keep tone aligned with your personality.',
    imageAlt: 'Project image placeholder',
  },
  {
    id: '05',
    name: 'Fifth Work',
    description:
      'Use this section to showcase passion projects or school assignments. Make each one distinct.',
    imageAlt: 'Project image placeholder',
  },
  {
    id: '06',
    name: 'Final Example',
    description:
      'Include projects you’re proud of. It doesn’t need to be fancy — just honest and clean.',
    imageAlt: 'Project image placeholder',
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
          </div>
          <div className="project-image">
            <div className="image-placeholder">{project.imageAlt}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
