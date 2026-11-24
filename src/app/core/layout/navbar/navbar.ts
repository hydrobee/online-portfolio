import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  readonly path: string;
  readonly label: string;
  /** CSS class used for styling the link. */
  readonly cssClass: string;
  readonly exact: boolean;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  protected readonly items: readonly NavItem[] = [
    { path: '/', label: 'Home', cssClass: 'home', exact: true },
    { path: '/About', label: 'About', cssClass: 'about', exact: false },
    { path: '/Project', label: 'Project', cssClass: 'project', exact: false },
    { path: '/Contact', label: 'Contact', cssClass: 'contact', exact: false },
  ];
}
