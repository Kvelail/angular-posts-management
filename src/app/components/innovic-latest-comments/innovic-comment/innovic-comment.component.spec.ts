import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovicCommentComponent } from './innovic-comment.component';

describe('InnovicCommentComponent', () => {
  let component: InnovicCommentComponent;
  let fixture: ComponentFixture<InnovicCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovicCommentComponent]
    });
    fixture = TestBed.createComponent(InnovicCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
