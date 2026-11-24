import { TestBed } from '@angular/core/testing';
import { About } from './about';
import { TIMELINE } from './data/timeline.data';

describe('About', () => {
  it('should render the full timeline', async () => {
    const fixture = TestBed.createComponent(About);
    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).querySelectorAll('.timeline li').length).toBe(
      TIMELINE.length,
    );
  });
});
