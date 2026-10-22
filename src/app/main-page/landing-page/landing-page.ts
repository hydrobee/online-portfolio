import { Component } from '@angular/core';
import { Pill } from '../../reusable/pill/pill';
import { AutoScroll } from '../../reusable/pill/auto-scroll/auto-scroll';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [Pill, AutoScroll, RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}