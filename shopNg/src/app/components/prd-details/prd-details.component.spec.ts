import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdDetailsComponent } from './prd-details.component';

describe('PrdDetailsComponent', () => {
  let component: PrdDetailsComponent;
  let fixture: ComponentFixture<PrdDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrdDetailsComponent]
    });
    fixture = TestBed.createComponent(PrdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
