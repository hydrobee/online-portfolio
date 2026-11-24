import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectService } from '../../core/services/project.service';
import { Projects } from './projects';

describe('Projects', () => {
  let fixture: ComponentFixture<Projects>;
  let el: HTMLElement;

  const cardCount = () => el.querySelectorAll('article.project').length;
  const chip = (label: string) =>
    Array.from(el.querySelectorAll<HTMLButtonElement>('.chip')).find(
      (b) => b.textContent?.trim() === label,
    )!;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Projects);
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should show every project by default', () => {
    expect(cardCount()).toBe(TestBed.inject(ProjectService).projects.length);
    expect(chip('All').getAttribute('aria-pressed')).toBe('true');
  });

  it('should filter projects when a category chip is clicked', async () => {
    chip('Hackathon').click();
    await fixture.whenStable();

    expect(cardCount()).toBe(TestBed.inject(ProjectService).filterBy('hackathon').length);
    expect(chip('Hackathon').classList).toContain('on');
    expect(chip('All').classList).not.toContain('on');
  });
});
