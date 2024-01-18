import { TestBed } from '@angular/core/testing';

import { PresistHeroService } from './presist-hero.service';

describe('PresistHeroService', () => {
  let service: PresistHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresistHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
