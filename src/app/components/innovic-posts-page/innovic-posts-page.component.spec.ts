import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovicPostsPageComponent } from './innovic-posts-page.component';

describe('InnovicPostsPageComponent', () => {
  let component: InnovicPostsPageComponent;
  let fixture: ComponentFixture<InnovicPostsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovicPostsPageComponent]
    });
    fixture = TestBed.createComponent(InnovicPostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
