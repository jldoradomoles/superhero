import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class PresistHeroService {
  constructor() {}

  setHerosPersist(heros: Hero[]) {
    localStorage.setItem('heros', JSON.stringify(heros));
  }
}
