import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovicUnderConstructionComponent } from './innovic-under-construction.component';

describe('InnovicUnderConstructionComponent', () => {
  let component: InnovicUnderConstructionComponent;
  let fixture: ComponentFixture<InnovicUnderConstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovicUnderConstructionComponent]
    });
    fixture = TestBed.createComponent(InnovicUnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
