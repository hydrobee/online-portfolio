import { TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  it('should show the current year', async () => {
    const fixture = TestBed.createComponent(Footer);
    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain(
      String(new Date().getFullYear()),
    );
  });
});
