import { Component } from '@angular/core';
import { Pill } from '../reusable/pill/pill';

@Component({
  selector: 'app-about',
  imports: [Pill],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
