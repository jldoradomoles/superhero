import { Component, Input, OnInit } from '@angular/core';
import { HeroCardComponent } from '../hero-card/hero-card.component';
import { Hero } from '../../data/models/hero.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css',
  imports: [
    HeroCardComponent,
    MatProgressSpinnerModule,
    NgxPaginationModule,
    CommonModule,
  ],
})
export class HeroListComponent implements OnInit {
  @Input() heros!: Hero[];
  page!: number;

  ngOnInit(): void {}
}
