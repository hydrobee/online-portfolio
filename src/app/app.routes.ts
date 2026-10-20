import { Routes } from '@angular/router';
import { LandingPage } from './main-page/landing-page/landing-page';
import { About } from './about/about';
import { Project } from './project/project';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', component: LandingPage},
    { path: 'About', component: About},
    { path: 'Project', component: Project},
    { path: 'Contact', component: Contact},
];
