import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'heros/:id',
    loadComponent: () =>
      import('./pages/hero/hero.component').then((c) => c.HeroComponent),
    data: { breadCrumb: 'post' },
  },
  {
    path: 'hero/form',
    loadComponent: () =>
      import('./pages/heroform/heroform.component').then(
        (c) => c.HeroformComponent
      ),
    data: { breadCrumb: 'post' },
  },
  {
    path: 'hero/form/:id',
    loadComponent: () =>
      import('./pages/heroform/heroform.component').then(
        (c) => c.HeroformComponent
      ),
    data: { breadCrumb: 'post' },
  },
];
