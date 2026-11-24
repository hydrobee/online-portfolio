import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Navbar } from './navbar';

describe('Navbar', () => {
  it('should render a link for every page', async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Navbar);
    await fixture.whenStable();
    const links = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>('.menu-pill a'),
    );

    expect(links.map((a) => a.textContent?.trim())).toEqual([
      'Home',
      'About',
      'Project',
      'Contact',
    ]);
    expect(links.map((a) => a.getAttribute('href'))).toEqual([
      '/',
      '/About',
      '/Project',
      '/Contact',
    ]);
  });
});
