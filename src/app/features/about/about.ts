import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../core/config/profile';
import { TIMELINE } from './data/timeline.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly timeline = TIMELINE;
}
