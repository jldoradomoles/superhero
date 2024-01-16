import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HeroCardComponent } from '../../components/hero-card/hero-card.component';
import { HeroListComponent } from '../../components/hero-list/hero-list.component';
import { Subject, takeUntil } from 'rxjs';
import { HeroService } from '../../data/services/heros/hero.service';
import { Hero } from '../../data/models/hero.model';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HeroCardComponent, HeroListComponent],
})
export class HomeComponent implements OnInit, OnDestroy {
  heroService = inject(HeroService);
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor() {}

  heros: Hero[] = [];

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros() {
    // this.spinner.show();
    console.log(
      '<----------LLAMANDO TODOS LOS POSTS  SPINER---------------------->'
    );

    this.heroService
      .getHeros()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (data) => {
          this.heros = data;
          console.log('Heros-------->', this.heros);
          // this.spinner.hide();
        },
        (error) => {
          // if any error, Code throws the error
          console.log('Error Blog---->', error.error.message);
          // this.spinner.hide();
        }
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
