import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedEmployeesComponent } from './applied-employees.component';

describe('AppliedEmployeesComponent', () => {
  let component: AppliedEmployeesComponent;
  let fixture: ComponentFixture<AppliedEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
