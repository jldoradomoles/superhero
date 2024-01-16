import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  http = inject(HttpClient);

  url = 'http://localhost:3000/heros';

  constructor() {}

  getHeros(): Observable<any> {
    return this.http.get(this.url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      console.log('Hero service---->');
      observer.error(error);
    });
  }
}
