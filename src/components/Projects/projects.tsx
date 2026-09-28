import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Project from '../Utils/Project/project';
import Helmet from '../Utils/SEO/helmet';
import './projects.scss';

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  github?: string;
  github2?: string;
  live?: string;
  stack: string;
  isPrivate: boolean;
  isLive: boolean;
};

const projects: Project[] = [
  {
    id: uuid(),
    title: 'Cdp-editor',
    shortDescription:
      'A fully-featured rich text editor for crafting beautiful HTML emails. Inject dynamic attributes at the cursor from any external picker.',
    github: 'https://www.npmjs.com/package/@codematic.io/cdp-editor',
    live: 'https://cdp-editor-064.web.app/',
    stack: 'React + Webpack + TypeScript + TailwindCSS',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Havara',
    shortDescription: 'A premium beach houses and coastal residences rental platform',
    github: '',
    live: 'https://www.havara.com/',
    stack: 'Nextjs + ReactQuery + TypeScript + TailwindCSS + API Integration',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Conviso',
    shortDescription:
      'Behavioural messaging for growing teams—automated journeys across email, WhatsApp, and push in one platform.',
    github: '',
    live: 'https://conviso.ai/',
    stack: 'Nextjs + ReactQuery + TypeScript + TailwindCSS + API Integration',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Propel Africa',
    shortDescription: 'A platform designed to support African professionals by connecting them with resources',
    github: '',
    live: 'https://propel.africa/',
    stack: 'Nextjs + ReduxToolkit + TypeScript + TailwindCSS',
    isPrivate: true,
    isLive: true,
  },
];

export default function Projects() {
  return (
    <div className="project">
      <Helmet
        title="My Projects"
        name="Selected Projects"
        content="Forever Oluwayomi's portfolio — software I helped design, build and ship"
      />

      <section className="project_section" aria-labelledby="projects-portfolio-heading">
        <h2 id="projects-portfolio-heading" className="project_section_title">
          Portfolio
        </h2>
        <p className="project_section_subtitle">
          Software I helped design, build and ship
        </p>
        <div className="group portfolio_showcase">
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </section>

      <div className="go_button_container">
        <Link to="/">
          <button>
            <b>➜ </b> Home
          </button>
        </Link>
      </div>
    </div>
  );
}
