import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent {
  @Input() isLoading: boolean = false;

  hide() {
    this.isLoading = false;
  }

  show() {
    this.isLoading = true;
  }
}
