import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pill',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './pill.html',
  styleUrl: './pill.css',
})
export class Pill {}
