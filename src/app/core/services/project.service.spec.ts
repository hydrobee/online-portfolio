import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    service = TestBed.inject(ProjectService);
  });

  it('should return every project for the "all" filter', () => {
    expect(service.filterBy('all')).toEqual(service.projects);
  });

  it('should only return projects in the selected category', () => {
    const internships = service.filterBy('internship');
    expect(internships.length).toBeGreaterThan(0);
    expect(internships.every((p) => p.category === 'internship')).toBe(true);
  });

  it('should give every project a unique id', () => {
    const ids = service.projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
