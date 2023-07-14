import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovicTableComponent } from './innovic-table.component';

describe('InnovicTableComponent', () => {
  let component: InnovicTableComponent;
  let fixture: ComponentFixture<InnovicTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovicTableComponent]
    });
    fixture = TestBed.createComponent(InnovicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
