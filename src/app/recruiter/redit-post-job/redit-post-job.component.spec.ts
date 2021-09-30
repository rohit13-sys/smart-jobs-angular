import { ComponentFixture, TestBed } from '@angular/core/testing';

import { REditPostJobComponent } from './redit-post-job.component';

describe('EditPostJobComponent', () => {
  let component: REditPostJobComponent;
  let fixture: ComponentFixture<REditPostJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ REditPostJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(REditPostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
