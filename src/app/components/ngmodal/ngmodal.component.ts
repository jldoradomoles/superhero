import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngmodal',
  standalone: true,
  templateUrl: './ngmodal.component.html',
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal],
})
export class NgbdModalConfig {
  @Output() deleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  deleteHero() {
    this.deleted.emit(true);
  }

  open(content: any) {
    this.modalService.open(content);
  }
}
