import { Component } from '@angular/core';
import { Pill } from '../reusable/pill/pill';

@Component({
  selector: 'app-project',
  imports: [Pill],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {}
