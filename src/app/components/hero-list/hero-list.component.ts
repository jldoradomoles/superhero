import { Component, Input, OnInit } from '@angular/core';
import { HeroCardComponent } from '../hero-card/hero-card.component';
import { Hero } from '../../data/models/hero.model';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css',
  imports: [HeroCardComponent],
})
export class HeroListComponent implements OnInit {
  @Input() heros!: Hero[];

  ngOnInit(): void {
    console.log('Heros----->', this.heros);
  }
}
