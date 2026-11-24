import { Injectable } from '@angular/core';
import { PROJECT_FILTERS, PROJECTS } from '../data/projects.data';
import { Project, ProjectFilter, ProjectFilterOption } from '../models/project.model';

/**
 * Data-access layer for projects. Components depend on this service rather than
 * on the raw data, so the source can later move to an API without touching the UI.
 */
@Injectable({ providedIn: 'root' })
export class ProjectService {
  readonly projects: readonly Project[] = PROJECTS;
  readonly filters: readonly ProjectFilterOption[] = PROJECT_FILTERS;

  filterBy(filter: ProjectFilter): readonly Project[] {
    return filter === 'all' ? this.projects : this.projects.filter((p) => p.category === filter);
  }
}
