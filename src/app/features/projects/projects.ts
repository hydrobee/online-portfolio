import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ProjectFilter } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly projectService = inject(ProjectService);

  protected readonly filters = this.projectService.filters;

  private readonly activeFilter = signal<ProjectFilter>('all');
  protected readonly active = this.activeFilter.asReadonly();

  protected readonly visible = computed(() => this.projectService.filterBy(this.activeFilter()));

  protected selectFilter(filter: ProjectFilter): void {
    this.activeFilter.set(filter);
  }
}
