import { Component } from '@angular/core';
import { Pill } from '../../reusable/pill/pill';
import { AutoScroll } from '../../reusable/pill/auto-scroll/auto-scroll';

@Component({
  selector: 'app-landing-page',
  imports: [Pill, AutoScroll],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}