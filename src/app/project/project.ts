import { Component, computed, signal } from '@angular/core';
import { Pill } from '../reusable/pill/pill';

type Category = 'all' | 'personal' | 'internship';

interface ProjectItem {
  title: string;
  tagline: string;
  description: string;
  category: Exclude<Category, 'all'>;
  year: string;
  tech: string[];
  logo: string;
  logoAlt: string;
  word: string;
  wordAlt: string;
  live?: string;
  code?: string;
}

@Component({
  selector: 'app-project',
  imports: [Pill],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  readonly filters: { id: Category; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'personal', label: 'Personal' },
    { id: 'internship', label: 'Internship' },
  ];

  active = signal<Category>('all');

  // TODO: edit the descriptions, tech and links so they match your real projects
  readonly projects: ProjectItem[] = [
    {
      title: 'CodeMark',
      tagline: 'AI code review for lecturers',
      description:
        'An AI-assisted tool that helps lecturers review and grade student code faster, with feedback they can edit before sharing.',
      category: 'personal',
      year: '2026',
      tech: ['Angular', 'FastAPI', 'PostgreSQL', 'Gemini 3.1 Flash Lite'],
      logo: 'CodeMark Logo 1.png',
      logoAlt: 'CodeMark logo',
      word: 'CodeMark Word.png',
      wordAlt: 'CodeMark',
      live: 'https://code-mark-frontend-vcwp.vercel.app/login',
      code: 'https://github.com/hydrobee',
    },
    {
      title: 'Staff Directory',
      tagline: 'Internship · Sarawak Skills',
      description: 'An internal directory where staff can look up colleagues and their contact details.',
      category: 'internship',
      year: '2025',
      tech: ['Angular', 'API Integration'],
      logo: 'sarawak skills.png',
      logoAlt: 'Sarawak Skills logo',
      word: 'staff directory.png',
      wordAlt: 'Staff Directory',
      live: 'https://directory.sarawakskills.edu.my/',
    },
    {
      title: 'Claim Form System',
      tagline: 'Internship · Sarawak Skills',
      description: 'An internal system for submitting and tracking staff claim forms online.',
      category: 'internship',
      year: '2025',
      tech: ['AppWizard'],
      logo: 'claim form.png',
      logoAlt: 'Claim Form System logo',
      word: 'internship project.png',
      wordAlt: 'Claim Form System',
      // live: 'https://your-project-link.com',
    },
    {
      title: 'Asset Inventory',
      tagline: 'Internship · Sarawak Skills',
      description: 'An internal system for keeping track of company assets and who they belong to.',
      category: 'internship',
      year: '2025',
      tech: ['AppWizard'],
      logo: 'inventory.png',
      logoAlt: 'Asset Inventory logo',
      word: 'internship project.png',
      wordAlt: 'Asset Inventory System',
      // live: 'https://your-project-link.com',
    },
  ];

  visible = computed(() =>
    this.projects.filter((p) => this.active() === 'all' || p.category === this.active()),
  );
}