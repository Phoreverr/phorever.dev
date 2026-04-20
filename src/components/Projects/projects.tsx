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
    title: 'Cdp-editor',
    shortDescription:
      'A fully-featured rich text editor for crafting beautiful HTML emails. Inject dynamic attributes at the cursor from any external picker.',
    longDescription: `Cdp-editor (@codematic.io/cdp-editor) is a fully-featured rich text editor aimed at crafting beautiful HTML emails inside larger products. It focuses on a polished editing surface, familiar formatting controls, and a workflow where teams can inject dynamic attributes at the cursor from any external picker—so merge tags, personalization fields, or CDP-driven tokens land exactly where the author intends.

Published as a reusable npm package with React, TypeScript, Tailwind CSS, and Ant Design–style tooling for the chrome around the editor, with a webpack-based build suitable for library consumers who need a drop-in email authoring experience.`,
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
const demoUiProjects: Project[] = [
  {
    id: uuid(),
    title: 'Amiso',
    shortDescription: 'Website and application design agency',
    longDescription: `Amiso is presented as a website and application design agency demo: hero, services, pricing, testimonials, FAQ, and contact sections. Built to practice hierarchy, spacing, and responsive marketing layout rather than production content.`,
    github: '',
    live: 'https://demo-ui-nine-mocha.vercel.app/',
    stack: 'HTML + CSS + JavaScript',
    isPrivate: true,
    isLive: true,
    isUiDemo: true,
  },
  {
    id: uuid(),
    title: 'Moniz',
    shortDescription: 'Smart web agency',
    longDescription: `A business-focused agency demo built around the Moniz template direction: hero carousel, about and services blocks, progress-style capability callouts, FAQ, and customer feedback sections. Intended as a UI exercise in typography, section rhythm, and conversion-oriented layout.`,
    github: '',
    live: 'https://demo-ui-k4cx.vercel.app/',
    stack: 'HTML + CSS + JavaScript',
    isPrivate: true,
    isLive: true,
    isUiDemo: true,
  },
  {
    id: uuid(),
    title: 'Frisk',
    shortDescription: 'Next generation digital agency',
    longDescription: `Creative agency and portfolio-style demo in the Frisk template vein: bold hero, services grid, portfolio highlights, team, testimonials, and blog-style content blocks—focused on immersive layout and editorial typography.`,
    github: '',
    live: 'https://demo-ui-md3s.vercel.app/',
    stack: 'HTML + CSS + JavaScript',
    isPrivate: true,
    isLive: true,
    isUiDemo: true,
  },
  {
    id: uuid(),
    title: 'Beeko',
    shortDescription: 'Comprehensive Business Consulting',
    longDescription: `Business consulting landing demo in the Beeko template style: hero with credibility metrics, service pillars, company story, FAQ accordion, testimonials, and lead-capture sections—practice in corporate tone, data callouts, and conversion layout.`,
    github: '',
    live: 'https://demo-ui-ppq2.vercel.app/',
    stack: 'HTML + CSS + JavaScript',
    isPrivate: true,
    isLive: true,
    isUiDemo: true,
  },
  {
    id: uuid(),
    title: 'Digtek',
    shortDescription: 'Digital marketing agency',
    longDescription: `Digital marketing agency demo in the Digtek template direction: “think digital” hero, service pillars (SEO, social, analytics), skills and team sections, pricing plans, testimonials, FAQ, and contact—practice in campaign-style messaging and growth-focused layout.`,
    github: '',
    live: 'https://demo-ui-andd.vercel.app/',
    stack: 'HTML + CSS + JavaScript',
    isPrivate: true,
    isLive: true,
    isUiDemo: true,
  },
];

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
        <p className="project_section_lede">
          Production work and shipped products—web apps, customer-facing sites, and shared libraries I've helped
          build or own end to end with real users and constraints. Each card links to a live product or package where
          that's public; private engagements are marked accordingly.
        </p>
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
          Standalone interfaces built as UI demos to highlight layout, interaction, and visual design—separate from
          shipped products. Names, metrics, testimonials, pricing, and other on-screen data are illustrative only and
          not real.
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
