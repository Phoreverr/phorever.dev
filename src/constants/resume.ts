export type WorkExperience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

export type Skill = {
  title: string;
  body: string[];
};

export type Education = {
  title: string;
  startDate?: string;
  endDate: string;
  relevant: string[];
};

export type Certification = {
  title: string;
  date: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Resume = {
  name: string;
  bio: string[];
  workExperiences: WorkExperience[];
  skills: Skill[];
  educations: Education[];
  certifications: Certification[];
  languages: Language[];
  hobbies: string[];
};

const name = 'Forever Oluwayomi';

const bio = [
  'As a Frontend Engineer with a no computer science background, I am passionate about creating user-focused digital experiences and solving real-world problems through technology. I bring a strong foundation in software engineering principles and proficiency in modern web technologies such as JavaScript, React, and Next.js, alongside experience with frontend frameworks like Tailwind CSS and Redux',
  'I have gained hands-on experience through internships at leading technology companies, where I worked on complex web applications and contributed to delivering high-quality user interfaces. I thrive in collaborative environments, enjoy sharing knowledge, and value building scalable, maintainable solutions.',
  'I am eager to continue growing as a frontend engineer, expanding my expertise in modern frameworks, performance optimization, and design systems while applying my skills to build innovative, impactful products that improve user experiences worldwide.',
];

const workExperiences: WorkExperience[] = [
  {
    company: 'Codematic Technology Services',
    role: 'Software Engineer I',
    startDate: 'SEPT 2023',
    endDate: 'PRESENT',
    achievements: [
      'Built and optimized user-facing applications that support mission-critical technologies, enabling seamless interactions for end users.',
      'Collaborated across teams to deliver features that improved analytics and metrics dashboards, enabling stakeholders to measure the impact of product initiatives on key success metrics.',
      'Provided code reviews and approved pull request that contributed to key architectural decisions to ensure maintainable and clean code.',
      'Developed frontend tools, components, NPM packages and interfaces that empowered engineers to run processes at scale, improving efficiency and accelerating product development by more than 4x.',
      'Led the redesign of a major beach-house platforms user interface, improving user engagement by 30% through enhanced accessibility and responsive design using React and Tailwind CSS.'
    ],
  },
  {
    company: 'Codematic Technology Services',
    role: 'Software Engineer Intern',
    startDate: 'JUL 2021',
    endDate: 'AUG 2023',
    achievements: [
      'Optimized existing codebase by refactoring legacy JavaScript code into modern ES6+ standards, resulting in a 20% reduction in code maintenance time.',
      'Implemented frontend features with a focus on reliable state management, preventing data loss and improving consistency across workflows',
      'Integrated third-party libraries and APIs to enhance application functionality, improving user experience and engagement.',
      'Participated in weekly code reviews and pair programming sessions, gaining proficiency in HTML, CSS, and JavaScript, and reducing code review time by 10%.',
    ],
  },
];

const skills: Skill[] = [
  {
    title: 'Languages',
    body: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    title: 'Frameworks/Libraries',
    body: ['Reactjs','Nextjs', 'Redux', 'ReactQuery', 'Material-UI', 'TailwindCSS', 'Three.js', 'Antd'],
  },
  {
    title: 'Tooling',
    body: ['Git', 'Docker', 'GCP'],
  },
];

const educations: Education[] = [
  {
    title: 'B.Sc Building at Obafemi Awolowo University',
    endDate: 'MAY 2025',
    relevant: [],
  },
  {
    title: 'Duola College, Akute, Ogun State',
    startDate: 'SEP 2012',
    endDate: 'JUL 2018',
    relevant: [],
  },
];

const certifications: Certification[] = [
  {
    title: 'Google Cloud - Professional Cloud Architect Certification',
    date: 'SEPT 2024',
  },
  {
    title: 'Google Cloud - Associate Cloud Engineer Certification',
    date: 'MAY, 2024',
  },
];

const languages: Language[] = [
  {
    name: 'English',
    level: 'PROFICIENT',
  },
  {
    name: 'Yoruba',
    level: 'PROFICIENT',
  },
];

const hobbies = ['Anime', 'Call of Duty Mobile', 'Lifting', 'Traveling',];

export const resume: Resume = {
  name,
  bio,
  workExperiences,
  skills,
  educations,
  certifications,
  languages,
  hobbies,
};
