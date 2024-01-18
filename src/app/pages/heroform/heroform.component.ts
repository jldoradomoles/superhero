import { Component } from '@angular/core';
import { HeroFormComponent } from '../../components/hero-form/hero-form.component';

@Component({
  selector: 'app-heroform',
  standalone: true,
  templateUrl: './heroform.component.html',
  styleUrl: './heroform.component.css',
  imports: [HeroFormComponent],
})
export class HeroformComponent {}
