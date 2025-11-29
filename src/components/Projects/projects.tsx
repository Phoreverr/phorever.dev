import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Project from '../Utils/Project/project';
import Helmet from '../Utils/SEO/helmet';
import './projects.scss';

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
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
    shortDescription: 'My Portfolio Website',
    longDescription: 'My Portfolio Website',
    github: 'https://github.com/Phoreverr/phorever.dev',
    live: 'https://phorever-dev.vercel.app/',
    stack: 'React + TypeScript + SASS',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'NPM-Package: OpenCDP-Editor',
    shortDescription: 'A React rich text editor component designed for OpenCDP',
    longDescription: `The OpenCDP Editor is a feature-rich, customizable React component designed to provide a seamless and powerful rich text editing experience within modern web applications.

Developed with a focus on modularity and a contemporary developer workflow, this project demonstrates proficiency in building and styling reusable front-end components for enterprise-level user interfaces.

Key Features & Technical Highlights:

• Technology Stack: Built primarily with React (or Next.js/similar framework) and TypeScript for scalable, type-safe development.

• Component Library: Utilizes Ant Design (or similar) to provide a professional, highly polished UI/UX for editor controls and layout.

• Styling: Employed Tailwind CSS for a utility-first approach to styling, enabling rapid, responsive, and highly customizable UI implementation.

• Functionality: Implements core rich text editing features, including formatting (bold, italics, lists), block management, and potentially media embedding.

• Architecture: Designed as a reusable NPM package, emphasizing clear component structure, prop-based configuration, and maintainability for easy integration into various projects.`,
    github: 'https://github.com/code-matic/openCDP-editor',
    live: 'https://www.npmjs.com/package/@codematic.io/open-cdp-editor?activeTab=readme',
    stack: 'React + Webpack + TypeScript + TailwindCSS',
    isPrivate: false,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Havara',
    shortDescription: 'A premium beach houses and coastal residences rental platform',
    longDescription: `Havara is a private, upscale property and residence located in Lagos, Nigeria. The website serves as the primary portal to showcase and market the residence as a luxury destination for lodging, relaxation, and events.

The focus of the residence is to provide an exclusive, high-end experience, likely featuring private amenities, customized services, and a premium location for discerning guests in the city of Lagos. The platform appeals to those seeking luxury accommodations, private retreats, or bespoke event spaces in a resort-style setting.`,
    github: '',
    live: 'https://www.havara.com/',
    stack: 'Nextjs + ReactQuery + TypeScript + TailwindCSS + API Integration',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Propel Africa',
    shortDescription: 'A platform designed to support African  professionals by connecting them with resources',
    longDescription: `I served as a key Frontend Software Engineer for the Propel Africa platform, a critical infrastructure connecting African tech talent with global remote job opportunities and essential financial resources. My responsibilities centered on engineering the core features of the talent ecosystem, ensuring high performance, state reliability, and a seamless user experience.

    Technical Implementation & Stack Depth:
    *Primary Framework: Engineered the entire user interface using Next.js , leveraging its component-based architecture to build complex, reusable UI modules across the application.
    *State Management: Implemented Redux Toolkit to manage the intricate global state for the talent dashboard, job tracking, and application data, ensuring data integrity and predictable state changes.
    *Styling & UI/UX: Utilized Tailwind CSS for a utility-first approach to styling, enabling rapid, responsive development and establishing a consistent, professional design system compliant with accessibility standards.
    *API Integration: Developed robust data fetching layers and integrated with various RESTful APIs (including those for job matching and external FinTech services) to display real-time, personalized user data.

    Key Frontend Contributions:
    * Responsive Design: Ensured the entire platform was fully responsive across all modern devices and screen sizes using advanced CSS techniques and media queries within Tailwind.`,
    github: '',
    live: 'https://propel.africa/',
    stack: 'Nextjs + ReduxToolkit + TypeScript + TailwindCSS',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Golden Complaince',
    shortDescription: 'A professional consulting website',
    longDescription: 'Golden Compliance, a professional consulting website built to help businesses navigate complex regulatory and compliance challenges. I developed this site using HTML, Tailwind CSS, and JavaScript, and implemented a multilanguage feature so users can view content in multiple languages. The site outlines services such as governance & senior-management compliance, ESG (environmental, social, governance), risk, regulatory reporting, financial-crime mitigation, and operational resilience.',
    github: '',
    live: 'https://goldencompliance.com',
    stack: 'HTML + TailwindCSS + JavaScript, + i18n',
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
