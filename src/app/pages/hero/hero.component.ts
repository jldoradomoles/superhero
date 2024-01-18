import { Component, inject } from '@angular/core';
import { HeroDetailsComponent } from '../../components/hero-details/hero-details.component';
import { Subject } from 'rxjs';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  imports: [HeroDetailsComponent, CommonModule],
})
export class HeroComponent {
  constructor() {}
}
