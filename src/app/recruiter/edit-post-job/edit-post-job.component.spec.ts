import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostJobComponent } from './edit-post-job.component';

describe('EditPostJobComponent', () => {
  let component: EditPostJobComponent;
  let fixture: ComponentFixture<EditPostJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPostJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
