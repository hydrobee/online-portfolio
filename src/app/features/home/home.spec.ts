import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { Home } from './home';

describe('Home', () => {
  it('should render a card for every project', async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).querySelectorAll('.project-card').length).toBe(
      TestBed.inject(ProjectService).projects.length,
    );
  });
});
