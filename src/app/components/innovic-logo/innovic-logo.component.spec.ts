import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovicLogoComponent } from './innovic-logo.component';

describe('InnovicLogoComponent', () => {
  let component: InnovicLogoComponent;
  let fixture: ComponentFixture<InnovicLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovicLogoComponent]
    });
    fixture = TestBed.createComponent(InnovicLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
