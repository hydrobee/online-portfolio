export interface TimelineEntry {
  readonly period: string;
  readonly title: string;
  readonly description: string;
  /** Highlights the entry as the current one. */
  readonly current?: boolean;
}

export const TIMELINE: readonly TimelineEntry[] = [
  {
    period: '2020 – 2022',
    title: 'Labuan Matriculation College',
    description: 'Module 1 Student (Life Science)',
  },
  {
    period: '2022 – 2026',
    title: 'UNIMAS',
    description: "Bachelor of Software Engineering (Hons), 4 times Dean's List.",
  },
  {
    period: '2024',
    title: 'NASA Space Apps Challenge',
    description: '2nd Runner-Up (State), Global Nominee.',
  },
  {
    period: 'Mar – Aug 2025',
    title: 'Internship at Sarawak Skills',
    description: 'Built 3 internal systems used by 300+ staff.',
  },
  { period: '2026', title: 'CodeMark', description: 'AI assisted code review tool, now live.' },
  {
    period: '2026',
    title: 'JobMatch',
    description: 'Laravel job-search assistant with AI resume tailoring.',
  },
  {
    period: 'Now',
    title: 'Looking for my first dev role',
    description: 'Applying, and still building.',
    current: true,
  },
];
