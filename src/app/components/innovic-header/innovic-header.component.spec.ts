import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovicHeaderComponent } from './innovic-header.component';

describe('InnovicHeaderComponent', () => {
  let component: InnovicHeaderComponent;
  let fixture: ComponentFixture<InnovicHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovicHeaderComponent]
    });
    fixture = TestBed.createComponent(InnovicHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
