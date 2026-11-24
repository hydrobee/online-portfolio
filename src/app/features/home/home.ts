import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../core/config/profile';
import { ProjectService } from '../../core/services/project.service';
import { AutoScroll } from '../../shared/directives/auto-scroll/auto-scroll';
import { GALLERY, TOOLS } from './data/home.data';

@Component({
  selector: 'app-home',
  imports: [AutoScroll, RouterLink, NgTemplateOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly profile = PROFILE;
  protected readonly projects = inject(ProjectService).projects;
  protected readonly tools = TOOLS;
  protected readonly gallery = GALLERY;
}
