import { CommonModule } from '@angular/common';
import { Component, Injectable, Input, OnInit, inject } from '@angular/core';
import { LoadingService } from '../../data/services/loading/loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent implements OnInit {
  loadingService = inject(LoadingService);

  // @Input() isLoading: boolean = false;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.show();
  }

  show() {
    this.loadingService.state$.subscribe((data) => {
      data ? (this.isLoading = true) : (this.isLoading = false);
    });
  }
}
