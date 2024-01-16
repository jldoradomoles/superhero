import { Component, inject } from '@angular/core';
import { HeroDetailsComponent } from '../../components/hero-details/hero-details.component';
import { Subject } from 'rxjs';
import { CommonModule, DOCUMENT } from '@angular/common';
import { HeroService } from '../../data/services/heros/hero.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  imports: [HeroDetailsComponent, CommonModule],
})
export class HeroComponent {
  private unsubscribe: Subject<void> = new Subject<void>();
  private _document: any;
  heroService = inject(HeroService);
  pageSlug!: string;

  constructor() {
    this.getDataUrl();
  }

  getDataUrl() {
    this._document = inject(DOCUMENT);
    let url = this._document.location.href;
    let arr = url.split('/');
    this.pageSlug = arr[arr.length - 1];
    console.log(this.pageSlug);
    this.getHero();
  }

  getHero() {}

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
