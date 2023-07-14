import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovicPaginationComponent } from './innovic-pagination.component';

describe('InnovicPaginationComponent', () => {
  let component: InnovicPaginationComponent;
  let fixture: ComponentFixture<InnovicPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovicPaginationComponent]
    });
    fixture = TestBed.createComponent(InnovicPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
