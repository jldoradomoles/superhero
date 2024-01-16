import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUtilsComponent } from './data-utils.component';

describe('DataUtilsComponent', () => {
  let component: DataUtilsComponent;
  let fixture: ComponentFixture<DataUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataUtilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
