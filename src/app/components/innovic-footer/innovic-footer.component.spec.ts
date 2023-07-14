import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovicFooterComponent } from './innovic-footer.component';

describe('InnovicFooterComponent', () => {
  let component: InnovicFooterComponent;
  let fixture: ComponentFixture<InnovicFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovicFooterComponent]
    });
    fixture = TestBed.createComponent(InnovicFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
