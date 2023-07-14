import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovicPostComponent } from './innovic-post.component';

describe('InnovicPostComponent', () => {
  let component: InnovicPostComponent;
  let fixture: ComponentFixture<InnovicPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovicPostComponent]
    });
    fixture = TestBed.createComponent(InnovicPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
