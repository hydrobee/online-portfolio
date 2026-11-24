export interface CarouselImage {
  readonly src: string;
  readonly alt: string;
  /** Tooltip shown on hover. */
  readonly title: string;
}

export const TOOLS: readonly CarouselImage[] = [
  { src: 'angular.png', alt: 'Angular logo', title: 'Angular' },
  { src: 'fastapi.png', alt: 'FastAPI logo', title: 'FastAPI' },
  { src: 'laravel.svg', alt: 'Laravel logo', title: 'Laravel' },
  { src: 'postgres.png', alt: 'PostgreSQL logo', title: 'PostgreSQL' },
  { src: 'typescript.svg', alt: 'TypeScript logo', title: 'TypeScript' },
  { src: 'python.png', alt: 'Python logo', title: 'Python' },
  { src: 'bootstrap.svg', alt: 'Bootstrap logo', title: 'Bootstrap' },
  { src: 'html.png', alt: 'HTML5 logo', title: 'HTML5' },
  { src: 'css.png', alt: 'CSS3 logo', title: 'CSS3' },
  { src: 'vercel.png', alt: 'Vercel logo', title: 'Vercel' },
  { src: 'render.png', alt: 'Render logo', title: 'Render' },
  { src: 'supabase.png', alt: 'Supabase logo', title: 'Supabase' },
  { src: 'github.png', alt: 'GitHub logo', title: 'GitHub' },
  { src: 'gitlab.png', alt: 'GitLab logo', title: 'GitLab' },
  { src: 'gemini.svg', alt: 'Gemini logo', title: 'Gemini' },
];

export const GALLERY: readonly CarouselImage[] = [
  {
    src: 'politeknik.jpg',
    alt: 'Roadshow at Politeknik Kuching',
    title: 'Sarawak Space Challenge Roadshow at Politeknik Kuching',
  },
  { src: 'iot.jpg', alt: 'Introduction to IoT session', title: 'Introduction to IoT' },
  {
    src: 'samarahan.jpg',
    alt: 'Roadshow at SMK Kota Samarahan',
    title: 'Sarawak Space Challenge Roadshow at SMK Kota Samarahan',
  },
  { src: 'makeramai.jpg', alt: 'Hackathon with the team', title: 'Hackathon with the gang 🚀' },
  {
    src: 'runnerup.jpg',
    alt: 'NASA Space Apps 2nd Runner-Up',
    title: 'Won 2nd runner up for NASA Space Apps Challenge 2024',
  },
  {
    src: 'fcsit.jpg',
    alt: 'Volunteering at the FYP Symposium',
    title: 'Volunteering for FYP Symposium',
  },
  { src: 'java.jpg', alt: 'With my favourite lecturer', title: 'With my favourite lecturer <3' },
];
