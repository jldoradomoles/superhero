import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroformComponent } from './heroform.component';

describe('HeroformComponent', () => {
  let component: HeroformComponent;
  let fixture: ComponentFixture<HeroformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
