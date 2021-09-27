import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RNavbarComponent } from './r-navbar.component';

describe('RNavbarComponent', () => {
  let component: RNavbarComponent;
  let fixture: ComponentFixture<RNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
