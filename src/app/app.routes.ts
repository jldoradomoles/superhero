import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'hero/:id',
    loadComponent: () =>
      import('./pages/hero/hero.component').then((c) => c.HeroComponent),
    data: { breadCrumb: 'post' },
  },
  {
    path: 'hero/:slug',
    loadComponent: () =>
      import('./pages/hero/hero.component').then((c) => c.HeroComponent),
    data: { breadCrumb: 'post' },
  },
  {
    path: 'newhero',
    loadComponent: () =>
      import('./pages/newhero/newhero.component').then(
        (c) => c.NewheroComponent
      ),
    data: { breadCrumb: 'post' },
  },
];
