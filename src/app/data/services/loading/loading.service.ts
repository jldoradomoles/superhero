import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private state = new BehaviorSubject<boolean>(false);
  state$ = this.state.asObservable();

  constructor() {}

  loading(isLoad: boolean) {
    this.state.next(isLoad);
  }
}
