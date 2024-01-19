import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    MainLayoutComponent,
    HeaderComponent,
    MatProgressSpinnerModule,
    NgxPaginationModule,
    LoaderComponent,
    LoaderComponent,
  ],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(LoaderComponent) loader?: LoaderComponent;
  title = 'superhero';

  constructor() {}
  ngAfterViewInit(): void {
    // this.loader?.show(true);
  }

  ngOnInit(): void {}
}
