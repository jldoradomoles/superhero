import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Observer, catchError, map } from 'rxjs';
import { DataUtilsService } from '../../utils/data-utils.service';
import { environment } from '../../../../environments/env';
import { Hero } from '../../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  http = inject(HttpClient);
  dataUtilsService = inject(DataUtilsService);
  private state = new BehaviorSubject<boolean>(false);
  state$ = this.state.asObservable();

  constructor() {}

  getHeros(): Observable<Hero[]> {
    const url = `${environment.HERO_API_URL}`;
    return this.http.get<Hero[]>(url).pipe(catchError(this.errorHandler));
  }

  getHeroById(id: string): Observable<Hero> {
    const url = `${environment.HERO_API_URL}/${id}`;
    return this.http.get<Hero>(url).pipe(catchError(this.errorHandler));
  }

  deleteHeroById(id: string) {
    const url = `${environment.HERO_API_URL}/${id}`;
    return this.http.delete<Hero>(url).pipe(catchError(this.errorHandler));
  }

  addHero(hero: Hero): Observable<Hero> {
    const url = `${environment.HERO_API_URL}`;
    return this.http.post<Hero>(url, hero);
  }

  editHero(hero: Hero): Observable<Hero> {
    let id = hero.id;
    const url = `${environment.HERO_API_URL}/${id}`;
    return this.http.put<Hero>(url, hero);
  }

  refresHeros(refres: boolean) {
    this.state.next(refres);
  }

  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      console.log('Hero service error---->');
      observer.error(error);
    });
  }
}
