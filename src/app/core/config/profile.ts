/**
 * Single source of truth for personal details and external links.
 * Templates and components read from here instead of hard-coding values.
 */
export const PROFILE = {
  name: 'Steve Calvin',
  email: 'stevecalvincarnell@gmail.com',
  location: 'Kuching, Sarawak',
  availability: 'Open to work · Kuching · Can relocate',
  cvUrl: 'assets/cv-placeholder.pdf',
  social: {
    github: { url: 'https://github.com/hydrobee', handle: 'hydrobee' },
    linkedin: {
      url: 'https://www.linkedin.com/in/steve-calvin-carnell',
      handle: 'steve-calvin-carnell',
    },
  },
} as const;

export type Profile = typeof PROFILE;
