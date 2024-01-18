import { Component, Input, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Hero } from '../../data/models/hero.model';
import { HeroService } from '../../data/services/heros/hero.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css',
})
export class HeroDetailsComponent {
  private _document: any;
  heroService = inject(HeroService);
  pageSlug!: string;
  hero!: Hero;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor() {
    this.getDataUrl();
  }

  getDataUrl() {
    let url = window.location.href;
    let arr = url.split('/');
    this.pageSlug = arr[arr.length - 1];
    this.getHero();
  }

  getHero() {
    this.heroService
      .getHeroById(this.pageSlug)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (data) => {
          this.hero = data;
        },
        (error) => {
          console.log('Error Hero---->', error.error.message);
        }
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
