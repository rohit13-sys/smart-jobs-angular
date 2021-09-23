import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedjobsComponent } from './appliedjobs.component';

describe('AppliedjobsComponent', () => {
  let component: AppliedjobsComponent;
  let fixture: ComponentFixture<AppliedjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
