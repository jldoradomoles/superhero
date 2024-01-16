import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Hero } from '../../data/models/hero.model';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css',
})
export class HeroDetailsComponent {
  @Input() hero!: Hero;
}
