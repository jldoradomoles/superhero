import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isView: boolean = false;

  constructor() {}

  show() {
    this.isView = true;
  }

  hide() {
    this.isView = false;
  }
}
