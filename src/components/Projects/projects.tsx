import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Project from '../Utils/Project/project';
import Helmet from '../Utils/SEO/helmet';
import './projects.scss';

type Project = {
  id: string;
  title: string;
  description: string;
  github?: string;
  github2?: string;
  live?: string;
  stack: string;
  isPrivate: boolean;
  isLive: boolean;
};

type Prop = {
  menu?: string[];
  activeMenu: (arg: number) => void;
};

const projects: Project[] = [
  {
    id: uuid(),
    title: 'Phorever',
    description: 'My Portfolio Website',
    github: 'https://github.com/Phoreverr/phorever.dev',
    live: 'https://phorever-dev.vercel.app/',
    stack: 'React + TypeScript + SASS',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'NPM-Package: OpenCDP-Editor',
    description: 'A React rich text editor component designed for OpenCDP',
    github: 'https://github.com/code-matic/openCDP-editor',
    live: 'https://www.npmjs.com/package/@codematic.io/open-cdp-editor?activeTab=readme',
    stack: 'React + Webpack + TypeScript + TailwindCSS',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Havara',
    description: 'A premium beach houses and coastal residences rental platform',
    github: '',
    live: 'https://www.havara.com/',
    stack: 'Nextjs + ReactQuery + TypeScript + TailwindCSS + RestAPI',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Propel Africa',
    description: 'A platform designed to support African  professionals by connecting them with resources',
    github: '',
    live: 'https://propel.africa/',
    stack: 'HTML + TailwindCSS + JavaScript',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Codematic Workspace',
    description: 'A specialized Google Workspace consulting service that empowers businesses',
    github: '',
    live: 'https://codematic-workspace.web.app/',
    stack: 'HTML + TailwindCSS + JavaScript',
    isPrivate: true,
    isLive: true,
  },

];

export default function Projects(props: Prop) {
  useEffect(() => {
    props.activeMenu(1);
  }, []);

  return (
    <div className="project">
      <Helmet title="My Projects" name="Selected Projects" content="Selected Forever Oluwayomi's Projects" />
      <div className="group portfolio_showcase">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>

      <div className="go_button_container">
        <Link to="/">
          <button>
            <b>➜ </b> Home
          </button>
        </Link>
        <Link to="/resume">
          <button>Résumé ➜ </button>
        </Link>
      </div>
    </div>
  );
}
