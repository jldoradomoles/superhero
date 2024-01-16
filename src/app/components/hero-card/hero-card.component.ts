import { Component, Input, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Image, Hero } from '../../data/models/hero.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css',
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;

  router = inject(Router);

  url!: string;

  constructor() {}

  ngOnInit(): void {
    this.hero ? this.imageUrl() : null;
  }

  imageUrl() {
    this.url = this.hero.image.url;
  }

  heroDetails() {
    // this.router.navigate([`hero/${this.hero.id}`]);
    this.router.navigate([`hero/${this.hero.slug}`]);
  }
}
