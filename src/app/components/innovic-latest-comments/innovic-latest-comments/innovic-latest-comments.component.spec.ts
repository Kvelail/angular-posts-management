import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovicLatestCommentsComponent } from './innovic-latest-comments.component';

describe('InnovicLatestCommentsComponent', () => {
  let component: InnovicLatestCommentsComponent;
  let fixture: ComponentFixture<InnovicLatestCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovicLatestCommentsComponent]
    });
    fixture = TestBed.createComponent(InnovicLatestCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
