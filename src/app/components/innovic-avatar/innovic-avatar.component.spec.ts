import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovicAvatarComponent } from './innovic-avatar.component';

describe('InnovicAvatarComponent', () => {
  let component: InnovicAvatarComponent;
  let fixture: ComponentFixture<InnovicAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovicAvatarComponent]
    });
    fixture = TestBed.createComponent(InnovicAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
