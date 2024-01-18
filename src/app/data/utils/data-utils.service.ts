import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer, catchError, map } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class DataUtilsService {
  http = inject(HttpClient);

  url = 'http://localhost:3000/heros';

  constructor() {}

  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      console.log('Hero service---->');
      observer.error(error);
    });
  }
}
