import { Routes } from '@angular/router';

/**
 * Every page is lazy-loaded, so visitors only download the code for the page they open.
 * Paths keep their original casing so existing links keep working.
 */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'About',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
  },
  {
    path: 'Project',
    loadComponent: () => import('./features/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'Contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
