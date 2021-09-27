import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPostedjobsComponent } from './rpostedjobs.component';

describe('RPostedjobsComponent', () => {
  let component: RPostedjobsComponent;
  let fixture: ComponentFixture<RPostedjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RPostedjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RPostedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
