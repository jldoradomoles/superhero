import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { HeroCardComponent } from '../../components/hero-card/hero-card.component';
import { HeroListComponent } from '../../components/hero-list/hero-list.component';
import { Subject, take, takeUntil } from 'rxjs';
import { HeroService } from '../../data/services/heros/hero.service';
import { Hero } from '../../data/models/hero.model';
import { LoaderComponent } from '../../components/loader/loader.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HeroCardComponent, HeroListComponent, LoaderComponent],
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges {
  heroService = inject(HeroService);
  router = inject(Router);
  private unsubscribe: Subject<void> = new Subject<void>();
  heroName: any;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}

  heros: Hero[] = [];
  herosDisplayed: Hero[] = [];

  ngOnInit(): void {
    this.heroService.state$.subscribe((data) =>
      data ? this.getHeros() : null
    );
    this.getHeros();
  }

  newHero() {
    this.router.navigate(['hero/form']);
  }

  heroNameEvent(event: any) {
    this.heroName = event.target.value;
  }

  findHero() {
    this.filterHeros();
  }

  limpiar() {
    this.heroName = '';
    this.herosDisplayed = this.heros;
  }

  getHeros() {
    this.heroService
      .getHeros()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (data) => {
          this.heros = data;
          this.herosDisplayed = data;
        },
        (error) => {
          console.log('Error hero---->', error.error.message);
        }
      );
  }

  filterHeros() {
    this.herosDisplayed = this.heros.filter((hero) =>
      hero.name.includes(this.heroName)
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
