import { Project, ProjectFilterOption } from '../models/project.model';

export const PROJECT_FILTERS: readonly ProjectFilterOption[] = [
  { id: 'all', label: 'All' },
  { id: 'personal', label: 'Personal' },
  { id: 'internship', label: 'Internship' },
  { id: 'hackathon', label: 'Hackathon' },
];

const INTERNSHIP_WORDMARK = 'internship project.png';

export const PROJECTS: readonly Project[] = [
  {
    id: 'jobmatch',
    title: 'JobMatch',
    tagline: 'Personal job-search assistant',
    summary: 'Laravel job-search assistant',
    description:
      'A Laravel app that collects job listings from RSS feeds every morning, scores each one against my skills, and emails me a daily digest of the best matches.',
    details:
      'It also tracks applications on a Saved → Offer board and uses Gemini to extract skills from postings and tailor my resume for each job, with an ATS checklist.',
    category: 'personal',
    year: '2026',
    tech: [
      'Laravel',
      'PHP',
      'PostgreSQL',
      'Tailwind CSS',
      'Alpine.js',
      'Gemini API',
      'Task Scheduling',
      'PHPUnit',
      'GitHub Actions',
    ],
    logo: { src: 'jobmatch-logo.svg', alt: 'JobMatch logo' },
    wordmark: { src: 'jobmatch-word.svg', alt: 'JobMatch' },
    shot: { src: 'jobmatch-shot.png', alt: 'JobMatch app preview' },
    links: { code: 'https://github.com/hydrobee/JobMatch' },
    highlight: {
      url: 'https://github.com/hydrobee/JobMatch',
      ariaLabel: 'Open JobMatch code on GitHub',
    },
  },
  {
    id: 'codemark',
    title: 'CodeMark',
    tagline: 'AI code review for lecturers',
    description:
      'An AI-assisted tool that helps lecturers review and grade student code faster, with feedback they can edit before sharing.',
    category: 'personal',
    year: '2026',
    tech: ['Angular', 'FastAPI', 'PostgreSQL', 'Gemini 3.1 Flash Lite'],
    logo: { src: 'CodeMark Logo 1.png', alt: 'CodeMark logo' },
    wordmark: { src: 'CodeMark Word.png', alt: 'CodeMark' },
    links: {
      live: 'https://code-mark-frontend-vcwp.vercel.app/login',
      code: 'https://github.com/hydrobee',
    },
    highlight: {
      url: 'https://code-mark-frontend-vcwp.vercel.app/',
      ariaLabel: 'Open CodeMark project',
    },
  },
  {
    id: 'staff-directory',
    title: 'Staff Directory',
    tagline: 'Internship · Sarawak Skills',
    description:
      'An internal directory where staff can look up colleagues and their contact details.',
    category: 'internship',
    year: '2025',
    tech: ['Angular', 'API Integration'],
    logo: { src: 'staff directory.png', alt: 'Sarawak Skills logo' },
    wordmark: { src: INTERNSHIP_WORDMARK, alt: 'Staff Directory' },
    links: { live: 'https://directory.sarawakskills.edu.my/' },
    highlight: {
      url: 'https://directory.sarawakskills.edu.my/',
      ariaLabel: 'Open Staff Directory project',
    },
  },
  {
    id: 'claim-form',
    title: 'Claim Form System',
    tagline: 'Internship · Sarawak Skills',
    description: 'An internal system for submitting and tracking staff claim forms online.',
    category: 'internship',
    year: '2025',
    tech: ['AppWizard'],
    logo: { src: 'claim form.png', alt: 'Claim Form System logo' },
    wordmark: { src: INTERNSHIP_WORDMARK, alt: 'Claim Form System' },
    links: {},
  },
  {
    id: 'asset-inventory',
    title: 'Asset Inventory',
    tagline: 'Internship · Sarawak Skills',
    description: 'An internal system for keeping track of company assets and who they belong to.',
    category: 'internship',
    year: '2025',
    tech: ['AppWizard'],
    logo: { src: 'inventory.png', alt: 'Asset Inventory logo' },
    wordmark: { src: INTERNSHIP_WORDMARK, alt: 'Asset Inventory System' },
    links: {},
  },
  {
    id: 'space-cadets',
    title: 'Space Cadets: Chronicles of Exoplanet Exploration',
    tagline: 'Hackathon · NASA Space Apps Challenge 2024',
    description:
      'A space exploration game where players solve science puzzles, meet alien species, upgrade starships, and publish planetary discovery logs.',
    details: 'This project won 2nd runner up for State Level and got Global Nominee status.',
    category: 'hackathon',
    year: '2024',
    tech: ['Figma', 'Wireframing', 'Game Design', 'Frontend Development'],
    logo: { src: 'space-cover.png', alt: 'Space Cadets cover art' },
    wordmark: { src: INTERNSHIP_WORDMARK, alt: 'Space Cadets' },
    cover: true,
    links: { trailer: 'https://youtu.be/n57WA4FmmFE' },
    highlight: {
      url: 'https://youtu.be/n57WA4FmmFE',
      ariaLabel: 'Open Space Cadets Trailer',
    },
  },
];
