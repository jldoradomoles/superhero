import { Component, Input, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Image, Hero } from '../../data/models/hero.model';
import { Router } from '@angular/router';
import { HeroService } from '../../data/services/heros/hero.service';
import { Subject, takeUntil } from 'rxjs';
import { ModalService } from '../../data/services/modal/modal.service';
import { NgbdModalConfig } from '../ngmodal/ngmodal.component';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css',
  imports: [MatCardModule, MatButtonModule, NgbdModalConfig],
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;
  router = inject(Router);
  heroService = inject(HeroService);
  modalService = inject(ModalService);
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit(): void {}

  deleted(event: boolean) {
    if (event) {
      this.deldeteHero();
    }
  }

  deldeteHero() {
    this.heroService
      .deleteHeroById(this.hero.id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (data) => {
          // Actulizar lista
          this.refresHeros();
        },
        (error) => {
          console.log('Error delete hero---->', error.error.message);
        }
      );
  }

  refresHeros() {
    this.heroService.refresHeros(true);
  }

  heroDetails() {
    this.router.navigate([`heros/${this.hero.id}`]);
  }

  editarHero() {
    this.router.navigate([`hero/form/${this.hero.id}`]);
  }
}
