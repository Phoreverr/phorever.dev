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
  isUiDemo?: boolean;
};

type Prop = {
  menu?: string[];
  activeMenu: (arg: number) => void;
};

const projects: Project[] = [
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
    title: 'Conviso',
    shortDescription:
      'Behavioural messaging for growing teams—automated journeys across email, WhatsApp, and push in one platform.',
    longDescription: `Conviso delivers it across Email, WhatsApp and Push automatically, and at a fraction of what Braze or Customer.io costs you.

Conviso is a behavioural messaging platform for growing teams: it turns user signals into automated engagement across email, WhatsApp, and push. The product brings segmentation, journeys, and multi-channel delivery into one place so teams can re-engage signups and reduce churn without stitching together separate tools.

The frontend is built with the same stack as Havara—Next.js, React Query, TypeScript, Tailwind CSS, and API integration—for a fast, consistent marketing and product experience.`,
    github: '',
    live: 'https://conviso.ai/',
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
];

// Standalone UI showcases (live URL, optional public github + isPrivate: false).
const demoUiProjects: Project[] = [];

export default function Projects(props: Prop) {
  useEffect(() => {
    props.activeMenu(0);
  }, []);

  return (
    <div className="project">
      <Helmet
        title="My Projects"
        name="Selected Projects"
        content="Selected Forever Oluwayomi's shipped work and UI skill demos"
      />

      <section className="project_section" aria-labelledby="projects-shipped-heading">
        <h2 id="projects-shipped-heading" className="project_section_title">
          Client &amp; product work
        </h2>
        <div className="group portfolio_showcase">
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className="project_section project_section--demos" aria-labelledby="projects-demos-heading">
        <h2 id="projects-demos-heading" className="project_section_title">
          UI skill demos
        </h2>
        <p className="project_section_lede">
          Standalone interfaces that highlight layout, interaction, and visual design—separate from shipped products.
        </p>
        {demoUiProjects.length > 0 ? (
          <div className="group portfolio_showcase">
            {demoUiProjects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <p className="project_section_empty">More standalone interface studies will appear here.</p>
        )}
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
